// Single source of truth for the Bengali calendar.
//
// Imported by src/pages/india/bengali-calendar.astro for BOTH the build-time
// render (month table, schema, FAQ text, today's date) and the browser script,
// so the month names/lengths can never drift out of sync between them.

export const BENGALI_MONTHS = ['বৈশাখ','জ্যৈষ্ঠ','আষাঢ়','শ্রাবণ','ভাদ্র','আশ্বিন','কার্তিক','অগ্রহায়ণ','পৌষ','মাঘ','ফাল্গুন','চৈত্র'];
export const BENGALI_MONTHS_EN = ['Boishakh','Joistho','Asharh','Srabon','Bhadro','Ashwin','Kartik','Ogrohayon','Poush','Magh','Falgun','Choitro'];

// Approximate Gregorian window each Bengali month falls in, for the reference table.
export const MONTH_PERIODS_BN = ['এপ্রিল–মে','মে–জুন','জুন–জুলাই','জুলাই–আগস্ট','আগস্ট–সেপ্টেম্বর','সেপ্টেম্বর–অক্টোবর','অক্টোবর–নভেম্বর','নভেম্বর–ডিসেম্বর','ডিসেম্বর–জানুয়ারি','জানুয়ারি–ফেব্রুয়ারি','ফেব্রুয়ারি–মার্চ','মার্চ–এপ্রিল'];
export const MONTH_PERIODS_EN = ['April–May','May–June','June–July','July–August','August–September','September–October','October–November','November–December','December–January','January–February','February–March','March–April'];

// Non-leap-year month lengths. Falgun (index 10) gains a day when the following
// February is a Gregorian leap year — see gregorianToBengali below.
export const MONTH_LENGTHS = [31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30, 30];

export const BENGALI_DAY_NAMES = ['রবিবার','সোমবার','মঙ্গলবার','বুধবার','বৃহস্পতিবার','শুক্রবার','শনিবার'];
export const ENGLISH_DAY_NAMES = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
export const ENGLISH_MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];
export const GREGORIAN_MONTHS_BN = ['জানুয়ারি','ফেব্রুয়ারি','মার্চ','এপ্রিল','মে','জুন','জুলাই','আগস্ট','সেপ্টেম্বর','অক্টোবর','নভেম্বর','ডিসেম্বর'];

const BENGALI_DIGITS = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];

/** Render a number with Bengali digits. */
export function toBengaliDigits(n) {
  return String(n).split('').map((d) => BENGALI_DIGITS[Number(d)] ?? d).join('');
}

export function isGregorianLeapYear(y) {
  return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
}

/**
 * Convert a Gregorian date to the Bengali calendar.
 *
 * Uses the traditional West Bengal epoch: Boishakh 1 = April 15.
 * (Bangladesh uses April 14 and a different, 2019-revised day-count rule —
 * do NOT use a Bangladesh-focused reference library for this without adjusting both.)
 *
 * Everything is computed from that single epoch date rather than 12 independently
 * hardcoded month-start dates, which is what used to make the result drift.
 *
 * @param {number} year  Gregorian year
 * @param {number} month Gregorian month, 1-based
 * @param {number} day   Gregorian day of month
 * @returns {{year: number, month: number, day: number}} month is a 0-based index into BENGALI_MONTHS
 */
export function gregorianToBengali(year, month, day) {
  const inputDate = new Date(year, month - 1, day);
  const boishakhThisYear = new Date(year, 3, 15); // April 15

  const cycleStartYear = inputDate >= boishakhThisYear ? year : year - 1;
  const epoch = new Date(cycleStartYear, 3, 15);
  const daysSinceEpoch = Math.round((inputDate - epoch) / 86400000);

  const bnYear = cycleStartYear - 593;

  // Falgun gets +1 day when the following February is a Gregorian leap year
  // (this keeps Choitro's start date fixed on March 16 every single year —
  // that's the actual point of putting the leap day in Falgun)
  const monthLengths = MONTH_LENGTHS.slice();
  monthLengths[10] = isGregorianLeapYear(cycleStartYear + 1) ? 31 : 30;

  let remaining = daysSinceEpoch;
  let bnMonth = 0;
  for (let i = 0; i < 12; i++) {
    if (remaining < monthLengths[i]) { bnMonth = i; break; }
    remaining -= monthLengths[i];
  }

  return { year: bnYear, month: bnMonth, day: remaining + 1 };
}

/** Format a Date as the display strings the page shows. */
export function formatBengaliDate(date) {
  const r = gregorianToBengali(date.getFullYear(), date.getMonth() + 1, date.getDate());
  return {
    ...r,
    monthBn: BENGALI_MONTHS[r.month],
    monthEn: BENGALI_MONTHS_EN[r.month],
    full: toBengaliDigits(r.day) + ' ' + BENGALI_MONTHS[r.month] + ', ' + toBengaliDigits(r.year),
    fullEn: r.day + ' ' + BENGALI_MONTHS_EN[r.month] + ', ' + r.year,
    dayNameBn: BENGALI_DAY_NAMES[date.getDay()],
    dayNameEn: ENGLISH_DAY_NAMES[date.getDay()],
    gregorianBn: toBengaliDigits(date.getDate()) + ' ' + ENGLISH_MONTH_NAMES[date.getMonth()] + ' ' + toBengaliDigits(date.getFullYear()),
    gregorianEn: ENGLISH_DAY_NAMES[date.getDay()] + ', ' + date.getDate() + ' ' + ENGLISH_MONTH_NAMES[date.getMonth()] + ' ' + date.getFullYear(),
  };
}

/**
 * Lay out a whole Bengali year as 12 months with their real Gregorian spans.
 *
 * Walks forward from the same April 15 epoch gregorianToBengali uses, so the
 * year view and the single-date converter can never disagree about where a
 * month starts.
 *
 * @param {number} bnYear Bengali year (e.g. 1433)
 * @returns {Array<{index:number,nameBn:string,nameEn:string,days:number,start:Date,end:Date}>}
 */
export function buildBengaliYear(bnYear) {
  const gregStartYear = bnYear + 593;
  const monthLengths = MONTH_LENGTHS.slice();
  monthLengths[10] = isGregorianLeapYear(gregStartYear + 1) ? 31 : 30;

  const cursor = new Date(gregStartYear, 3, 15); // Boishakh 1
  return BENGALI_MONTHS.map((nameBn, i) => {
    const start = new Date(cursor);
    const end = new Date(cursor);
    end.setDate(end.getDate() + monthLengths[i] - 1);
    cursor.setDate(cursor.getDate() + monthLengths[i]);
    return { index: i, nameBn, nameEn: BENGALI_MONTHS_EN[i], days: monthLengths[i], start, end };
  });
}

/** Local-time YYYY-MM-DD, for matching build-time cells against the visitor's today. */
export function toIsoDate(date) {
  return date.getFullYear() + '-' +
    String(date.getMonth() + 1).padStart(2, '0') + '-' +
    String(date.getDate()).padStart(2, '0');
}
