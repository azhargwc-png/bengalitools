# BanglaTools — Master Build Prompt
# Instructions: Open Claude Code in the bengalitools folder and say:
# "Read PROMPT.md and execute it exactly"

---

## What Claude Code Must Do Before Writing Any Code

1. Read README.md completely — understand the full project
2. Read ROADMAP.md completely — know every tool and page to build
3. Read skills/content-creator.md — follow these standards for every page
4. Read skills/keyword-research.md — understand the SEO approach
5. Read skills/seo-audit.md — understand what a healthy page looks like

Only after reading all 5 files, start building.

---

## The Build Instruction

Build the complete bengalitools.com website with these exact specifications:

### Tech Stack
- Framework: Astro (latest stable version)
- Styling: Tailwind CSS
- JavaScript: Vanilla JS only — no React, no Vue, no other frameworks
- Currency API: frankfurter.app (free, no API key needed)
- Deployment target: Vercel
- Initialize as a Git repository

### Language System
- Default language: Bengali (বাংলা) — shown to all visitors on first load
- Secondary language: English — accessible via toggle in header
- Language toggle: A button in the header that switches ALL text on
  the page instantly without any page reload
- Store language preference in localStorage so it persists
  when the user navigates to another page
- Every single piece of text on every page must have both
  a Bengali version and an English version
- Bengali text must be in proper Bengali script (বাংলা)
  NOT in transliteration (not "Bangla" written in Latin letters)

### Design Requirements
- Clean, minimal, professional design
- Mobile-first — designed for phone screens first, desktop second
- Fast loading — minimize JavaScript, no heavy libraries
- Color scheme: White background, one accent color (suggest deep teal
  or saffron — something that feels Bengali and warm)
- Bengali font: Use Google Fonts — Hind Siliguri or Noto Sans Bengali
  for proper Bengali script rendering
- English font: Use Google Fonts — Inter or similar clean sans-serif
- Large touch-friendly inputs on all tools (minimum 44px height)
- Results displayed prominently in large text
- AdSense placeholder slots on every page (2 per page)

---

## Pages to Build — Complete List

### Essential Pages (Build These First)

**Homepage (/)**
- Hero section with site name in Bengali and English
- Tool category grid showing all tools organized by category
- Each tool shown as a card with Bengali name, English name,
  and a one-line description
- Category sections: Unit Converters, Currency, Health Tools,
  Everyday Calculators, Food and Calories, India-Specific Tools
- Fast search box to find any tool by typing

**About Page (/about)**
- What BanglaTools is and who it is for
- Written warmly in Bengali and English
- Mention that all tools are free and work without login

**Privacy Policy (/privacy-policy)**
- Standard privacy policy covering AdSense data usage
- Written in Bengali and English
- Required for Google AdSense approval

**Contact Page (/contact)**
- Simple contact form (name, email, message)
- Email address displayed
- Written in Bengali and English
- Required for Google AdSense approval

---

### Unit Converter Pages

For EVERY converter page follow this exact structure from
skills/content-creator.md:
1. H1 with primary Bengali keyword
2. AdSense slot 1 (placeholder)
3. Interactive converter tool
4. How to use (3-4 steps in Bengali and English)
5. What this tool does (150-200 words Bengali + 150-200 words English)
6. 3 worked examples with real Bengali-context numbers
7. 5 FAQ questions and answers in Bengali and English
8. Related tools section (3 links)
9. AdSense slot 2 (placeholder)

**kg to lbs (/converters/kg-to-lbs)**
Primary Bengali keyword: কেজি থেকে পাউন্ড কনভার্টার
Primary English keyword: kg to lbs converter
Tool: Input kg → output lbs (formula: lbs = kg × 2.20462)
Also show reverse: lbs to kg on same page
Examples: 3.5kg (baby weight), 23kg (airline luggage), 70kg (adult)
FAQs: ১ কেজি সমান কত পাউন্ড? / ১ পাউন্ড সমান কত কেজি? /
বিমানের লাগেজ ২৩ কেজি মানে কত পাউন্ড? /
কেজি থেকে পাউন্ড বের করার সূত্র কী? /
আমার ওজন ৭০ কেজি, পাউন্ডে কত?

**cm to inches (/converters/cm-to-inches)**
Primary Bengali keyword: সেন্টিমিটার থেকে ইঞ্চি কনভার্টার
Primary English keyword: cm to inches converter
Tool: Input cm → output inches (formula: inches = cm ÷ 2.54)
Also show reverse: inches to cm
Examples: 158cm (average Bengali woman height),
170cm (average Bengali man height), 30cm (ruler length)

**Celsius to Fahrenheit (/converters/celsius-to-fahrenheit)**
Primary Bengali keyword: সেলসিয়াস থেকে ফারেনহাইট কনভার্টার
Primary English keyword: celsius to fahrenheit converter
Tool: Input °C → output °F (formula: °F = (°C × 9/5) + 32)
Also show reverse: °F to °C
Examples: 37°C (body temperature), 100°C (boiling water),
0°C (freezing point)

**km to miles (/converters/km-to-miles)**
Primary Bengali keyword: কিলোমিটার থেকে মাইল কনভার্টার
Primary English keyword: km to miles converter
Tool: Input km → output miles (formula: miles = km × 0.621371)
Also show reverse
Examples: 5km (morning walk), 42km (marathon), 300km (Kolkata to Dhaka)

**feet to meters (/converters/feet-to-meters)**
Primary Bengali keyword: ফুট থেকে মিটার কনভার্টার
Primary English keyword: feet to meters converter
Tool: Input feet → output meters (formula: meters = feet × 0.3048)
Also show reverse
Examples: 5'6" (person height), 10 feet (room size), 100 feet (building)

**litre to gallon (/converters/litre-to-gallon)**
Primary Bengali keyword: লিটার থেকে গ্যালন কনভার্টার
Primary English keyword: litre to gallon converter
Tool: Input litres → output gallons (formula: gallons = litres ÷ 3.78541)
Also show reverse
Examples: 1 litre (water bottle), 40 litres (fuel tank), 5 litres (cooking oil)

---

### Currency Converter Pages

All currency pages use frankfurter.app API for live rates.
Show "Live rate" badge and "Last updated: [time]" on every currency page.
If API fails, show last known rate with a warning message.

**USD to INR (/currency/usd-to-inr)**
Primary Bengali keyword: আজকের ডলার রেট — ডলার থেকে টাকা
Primary English keyword: USD to INR today — dollar to rupee
Tool: Input USD amount → output INR at live rate
Also show reverse: INR to USD
Show: Current rate, today's change (up or down)
Examples: $100 (small remittance), $500 (medium), $1000 (large)

**AED to INR (/currency/aed-to-inr)**
Primary Bengali keyword: দুবাই দিরহাম রেট আজকে — দিরহাম থেকে টাকা
Primary English keyword: AED to INR today — dirham to rupee
Tool: Input AED → output INR at live rate
Also show reverse
Note in content: Mention Gulf Bengali workers sending money home
Examples: 500 AED, 1000 AED, 5000 AED

**EUR to INR (/currency/eur-to-inr)**
Primary Bengali keyword: ইউরো রেট আজকে — ইউরো থেকে টাকা
Primary English keyword: EUR to INR today — euro to rupee
Tool: Input EUR → output INR at live rate

**GBP to INR (/currency/gbp-to-inr)**
Primary Bengali keyword: পাউন্ড রেট আজকে — পাউন্ড থেকে টাকা
Primary English keyword: GBP to INR today — pound to rupee
Tool: Input GBP → output INR at live rate

**BDT to INR (/currency/bdt-to-inr)**
Primary Bengali keyword: বাংলাদেশি টাকা থেকে ভারতীয় রুপি রেট
Primary English keyword: BDT to INR — Bangladesh taka to Indian rupee
Tool: Input BDT → output INR at live rate
Also show reverse: INR to BDT
Note in content: Useful for cross-border Bengali families

---

### Health Tool Pages

**BMI Calculator (/health/bmi-calculator)**
Primary Bengali keyword: বিএমআই ক্যালকুলেটর বাংলা
Primary English keyword: BMI calculator in Bengali
Tool: Input height (cm) and weight (kg) → output BMI score
Show BMI category with colour coding:
- Under 18.5: কম ওজন (Underweight) — blue
- 18.5-24.9: স্বাস্থ্যকর (Healthy) — green
- 25-29.9: অতিরিক্ত ওজন (Overweight) — orange
- 30+: স্থূলতা (Obese) — red
Show both metric (cm/kg) and imperial (ft/lbs) input options
Examples: Woman 158cm 55kg, Man 170cm 80kg, Teen 165cm 45kg

**Age Calculator (/health/age-calculator)**
Primary Bengali keyword: বয়স ক্যালকুলেটর — জন্মতারিখ থেকে বয়স
Primary English keyword: age calculator — calculate exact age
Tool: Input date of birth → output exact age in years, months, days
Also show: Days until next birthday
Also show: Day of week they were born
Examples: Use realistic Bengali dates

**Calorie Calculator (/health/calorie-calculator)**
Primary Bengali keyword: দৈনিক ক্যালরি ক্যালকুলেটর
Primary English keyword: daily calorie calculator
Tool: Input age, weight, height, gender, activity level
Output: Daily calorie needs for maintenance, weight loss, weight gain
Use Mifflin-St Jeor equation for accuracy
Activity levels in Bengali: বসে থাকা কাজ, হালকা ব্যায়াম,
মাঝারি ব্যায়াম, কঠিন ব্যায়াম, অত্যন্ত কঠিন ব্যায়াম

**Ideal Weight (/health/ideal-weight)**
Primary Bengali keyword: আদর্শ ওজন ক্যালকুলেটর
Primary English keyword: ideal weight calculator
Tool: Input height and gender → output ideal weight range
Use both Hamwi and BMI-based methods
Show result as a range not a single number

**Water Intake (/health/water-intake)**
Primary Bengali keyword: দৈনিক জল পান ক্যালকুলেটর
Primary English keyword: daily water intake calculator
Tool: Input weight and activity level → output recommended daily water
Show result in: litres, glasses (250ml each), ml
Add note about weather — hot climate needs more water

---

### Everyday Calculator Pages

**Percentage Calculator (/calculators/percentage)**
Primary Bengali keyword: শতাংশ ক্যালকুলেটর — শতাংশ বের করার নিয়ম
Primary English keyword: percentage calculator
Tool: Three calculation types on one page:
1. X is what % of Y?
2. What is X% of Y?
3. % increase or decrease from X to Y
Show all three calculators on the same page with clear labels

**Discount Calculator (/calculators/discount)**
Primary Bengali keyword: ছাড় ক্যালকুলেটর — ডিসকাউন্ট ক্যালকুলেটর
Primary English keyword: discount calculator
Tool: Input original price and discount % → output:
- Discount amount in ₹
- Final price after discount
- How much you save
Also: Input original price and sale price → output discount %
Use ₹ (Indian Rupee) as default currency with option for ৳ (Taka)

**Tip Calculator (/calculators/tip)**
Primary Bengali keyword: টিপ ক্যালকুলেটর
Primary English keyword: tip calculator
Tool: Input bill amount, tip %, number of people
Output: Tip amount, total bill, per person amount
Preset tip buttons: 10%, 15%, 20%, 25%

**Date Difference (/calculators/date-difference)**
Primary Bengali keyword: দুই তারিখের মধ্যে কত দিন
Primary English keyword: date difference calculator
Tool: Input two dates → output difference in:
years, months, weeks, days
Also show: What day of week each date falls on

**Speed Calculator (/calculators/speed)**
Primary Bengali keyword: গতি ক্যালকুলেটর — দূরত্ব সময় গতি
Primary English keyword: speed distance time calculator
Tool: Three modes:
1. Speed = Distance ÷ Time
2. Distance = Speed × Time
3. Time = Distance ÷ Speed
Units: km/h, m/s, mph

**Fuel Cost Calculator (/calculators/fuel-cost)**
Primary Bengali keyword: জ্বালানি খরচ ক্যালকুলেটর — পেট্রোল খরচ
Primary English keyword: fuel cost calculator
Tool: Input distance (km), fuel efficiency (km/litre),
fuel price per litre → output total fuel cost in ₹
Default fuel price: current petrol price in Kolkata
Examples: Kolkata to Digha (180km), Kolkata to Siliguri (570km)

---

### Food and Calorie Pages

**Food Calorie Lookup (/food/calorie-lookup)**
Primary Bengali keyword: খাবারের ক্যালরি — বাংলা খাবার ক্যালরি
Primary English keyword: food calorie lookup Bengali
Tool: Search box — type food name in Bengali or English
Show: Calories per 100g and per typical serving
Database must include 120+ foods with Bengali and English names

Include ALL of these Bengali foods in the database:
ভাত (Rice), ডাল (Dal/Lentils), রুটি (Chapati/Roti),
পরোটা (Paratha), লুচি (Luchi), পুরি (Puri),
খিচুড়ি (Khichuri), পান্তা ভাত (Panta Bhat),
চিঁড়া (Chira/Flattened Rice), মুড়ি (Muri/Puffed Rice),
মাছের ঝোল (Fish Curry), শোরষে ইলিশ (Hilsa in Mustard Sauce),
ভাপা ইলিশ (Steamed Hilsa), মাছ ভাজা (Fried Fish),
চিংড়ি মালাইকারি (Prawn Malaikari), ডিম ভাজা (Fried Egg),
ডিমের ঝোল (Egg Curry), মুরগির ঝোল (Chicken Curry),
মটন কারি (Mutton Curry), আলু ভাজা (Fried Potato),
আলুর দম (Aloo Dum), বেগুন ভাজা (Fried Brinjal),
শাক ভাজা (Stir-fried Greens), সবজি তরকারি (Mixed Vegetables),
দই (Yoghurt), মিষ্টি দই (Sweetened Yoghurt),
রসগোল্লা (Rasgolla), সন্দেশ (Sandesh),
মিষ্টি (Bengali Sweets), গুলাব জামুন (Gulab Jamun),
পায়েস (Payesh/Rice Pudding), হালুয়া (Halwa),
পিঠা (Pitha/Rice Cake), নারকেল নাড়ু (Coconut Ladoo),
সিঙারা (Singara/Samosa), কচুরি (Kachori),
আলুর চপ (Potato Chop), বেগুনি (Brinjal Fritter),
ফুচকা (Fuchka/Pani Puri), ঝালমুড়ি (Jhal Muri),
চপ (Chop), রোল (Egg Roll), বিরিয়ানি (Biryani),
মোগলাই পরোটা (Mughlai Paratha), দোকানের চা (Chai),
দুধ (Milk), কলা (Banana), আম (Mango),
আপেল (Apple), কমলালেবু (Orange),
পেঁপে (Papaya), নারকেল (Coconut),
তরমুজ (Watermelon), আনারস (Pineapple),
আলু (Potato), পেঁয়াজ (Onion), রসুন (Garlic),
আদা (Ginger), টমেটো (Tomato), শসা (Cucumber),
গাজর (Carrot), পালং শাক (Spinach)

Also include standard Indian foods:
Idli, Dosa, Sambar, Paneer, Dal Makhani, Naan,
Chapati, Biryani, Samosa, Butter Chicken

And common international foods:
Rice (cooked), Egg (boiled), Bread (white/brown),
Milk, Banana, Apple, Orange, Chicken breast,
Salmon, Oats, Pasta, Pizza

**Recipe Calorie Calculator (/food/recipe-calculator)**
Primary Bengali keyword: রেসিপি ক্যালরি ক্যালকুলেটর
Primary English keyword: recipe calorie calculator Bengali
Tool: Add up to 15 ingredients
For each ingredient: search name + enter quantity in grams
Output: Total calories for whole recipe + per serving
Serving size: adjustable (2, 4, 6, 8 servings)
Use the same food database as the calorie lookup page

**Bengali Food Calorie Chart (/food/bengali-food-chart)**
Primary Bengali keyword: বাংলা খাবারের ক্যালরি চার্ট
Primary English keyword: Bengali food calorie chart
This is a STATIC page — no tool, just a well-formatted table
Table columns: খাবারের নাম (Food Name) | ইংরেজি নাম (English) |
প্রতি ১০০ গ্রামে ক্যালরি | সাধারণ পরিমাণে ক্যালরি
Include all Bengali foods from the database above
This page is pure SEO — it will rank for Bengali food calorie searches
Make it printable and easy to share

---

### India-Specific Tool Pages

**GST Calculator (/india/gst-calculator)**
Primary Bengali keyword: জিএসটি ক্যালকুলেটর — জিএসটি হিসাব করুন
Primary English keyword: GST calculator India Bengali
Tool: Two modes:
1. Add GST: Input price before GST + GST rate → output GST amount + total
2. Remove GST: Input price including GST + GST rate → output original price
GST rate presets: 5%, 12%, 18%, 28% (standard Indian GST slabs)
No complex interest — just simple GST addition and removal

**Bengali Calendar Converter (/india/bengali-calendar)**
Primary Bengali keyword: বাংলা তারিখ কনভার্টার — ইংরেজি থেকে বাংলা তারিখ
Primary English keyword: Bengali calendar date converter
Tool: Input English date → output Bengali calendar date
Also: Input Bengali date → output English date
Show Bengali month name: বৈশাখ, জ্যৈষ্ঠ, আষাঢ়, শ্রাবণ, ভাদ্র,
আশ্বিন, কার্তিক, অগ্রহায়ণ, পৌষ, মাঘ, ফাল্গুন, চৈত্র
This tool has zero competition in Bengali — build it well

**Number to Bengali Words (/india/number-to-bengali)**
Primary Bengali keyword: সংখ্যা বাংলায় — ইংরেজি সংখ্যা বাংলা কথায়
Primary English keyword: number to Bengali words converter
Tool: Input any number up to 99,99,99,999
Output: The number written in Bengali words
Example: 1234 → এক হাজার দুইশত চৌত্রিশ
Example: 50000 → পঞ্চাশ হাজার
This is unique — no good Bengali version exists anywhere
Use cases: Writing cheques, formal documents, school assignments

**Salary to Hourly (/india/salary-to-hourly)**
Primary Bengali keyword: মাসিক বেতন থেকে ঘণ্টায় বেতন ক্যালকুলেটর
Primary English keyword: salary to hourly calculator India
Tool: Input monthly salary → output:
- Hourly rate (based on 8 hours, 22 working days)
- Daily rate
- Weekly rate
- Annual salary
Also reverse: Input hourly rate → output monthly salary
Use ₹ currency throughout

---

### Blog Section (/blog/)

Create a blog index page listing all published posts.

Build these 10 starter blog posts following skills/content-creator.md:

1. /blog/ek-keje-soman-kot-pound
   H1 Bengali: ১ কেজি সমান কত পাউন্ড — সম্পূর্ণ গাইড
   Target keyword: ১ কেজি সমান কত পাউন্ড
   Embed: kg to lbs converter
   Length: 500-600 words Bengali + English

2. /blog/bmi-koto-hole-swasthyokor
   H1 Bengali: বিএমআই কত হলে স্বাস্থ্যকর — WHO এর গাইডলাইন
   Target keyword: বিএমআই কত হলে স্বাস্থ্যকর
   Embed: BMI calculator
   Length: 600-700 words Bengali + English

3. /blog/ajker-dollar-rate
   H1 Bengali: আজকের ডলারের রেট — লাইভ USD থেকে INR রেট
   Target keyword: আজকের ডলার রেট
   Embed: USD to INR converter
   Length: 400-500 words Bengali + English
   Note: This post should show the live rate prominently

4. /blog/dubai-dirham-rate-ajke
   H1 Bengali: দুবাই দিরহাম আজকের রেট — AED থেকে INR লাইভ রেট
   Target keyword: দুবাই দিরহাম আজকের রেট
   Embed: AED to INR converter
   Length: 400-500 words Bengali + English

5. /blog/rasgolla-calorie
   H1 Bengali: রসগোল্লায় কত ক্যালরি — মিষ্টি খেলে কতটা ক্ষতি?
   Target keyword: রসগোল্লায় কত ক্যালরি
   Embed: Food calorie lookup
   Length: 500-600 words Bengali + English

6. /blog/bdt-inr-rate
   H1 Bengali: বাংলাদেশি টাকা থেকে ভারতীয় রুপি — আজকের রেট
   Target keyword: বাংলাদেশি টাকা ভারতীয় রুপি রেট
   Embed: BDT to INR converter
   Length: 400-500 words Bengali + English

7. /blog/ek-foot-soman-kot-cm
   H1 Bengali: ১ ফুট সমান কত সেন্টিমিটার — ফুট থেকে সেমি গাইড
   Target keyword: ১ ফুট সমান কত সেন্টিমিটার
   Embed: feet to meters converter
   Length: 500 words Bengali + English

8. /blog/adorsho-wozono-koto-howa-uchit
   H1 Bengali: আদর্শ ওজন কত হওয়া উচিত — উচ্চতা অনুযায়ী ওজন
   Target keyword: আদর্শ ওজন কত হওয়া উচিত
   Embed: Ideal weight calculator
   Length: 600 words Bengali + English

9. /blog/shotongsho-ber-korar-niyom
   H1 Bengali: শতাংশ বের করার নিয়ম — সহজ পদ্ধতি
   Target keyword: শতাংশ বের করার নিয়ম
   Embed: Percentage calculator
   Length: 500 words Bengali + English

10. /blog/bmi-calculator-bangla
    H1 Bengali: বিএমআই ক্যালকুলেটর বাংলা — অনলাইনে বিনামূল্যে
    Target keyword: বিএমআই ক্যালকুলেটর বাংলা
    Embed: BMI calculator
    Length: 500 words Bengali + English

---

## Technical Files to Generate

**sitemap.xml**
Auto-generated by Astro — configure in astro.config.mjs
Must include every page URL with lastmod date
Submit to Google Search Console after launch

**robots.txt (in /public/)**
```
User-agent: *
Allow: /
Sitemap: https://bengalitools.com/sitemap.xml
```

**astro.config.mjs**
Configure:
- Site URL: https://bengalitools.com
- Sitemap integration (@astrojs/sitemap)
- Tailwind integration (@astrojs/tailwind)
- Output: static

**.gitignore**
Must include (in addition to the Node .gitignore from GitHub):
- .env
- .env.local
- dist/
- .DS_Store

---

## AdSense Placeholder System

On every page place two AdSense placeholder divs:
- Slot 1: Between page header and main content
- Slot 2: Between FAQ section and related tools

```html
<div class="ad-slot ad-slot-top" aria-label="Advertisement">
  <!-- Google AdSense ad will appear here after approval -->
</div>
```

Style the placeholders so they take up the correct space but are
invisible to users — this way the layout is already correct when
AdSense code is added later.

---

## After Building — Verify This Checklist

Before telling the user the build is complete, verify:

- [ ] Site runs with no errors on npm run dev
- [ ] npm run build completes with no errors
- [ ] Language toggle works on every page
- [ ] All calculators produce correct results
  - kg to lbs: 70 kg = 154.32 lbs
  - cm to inches: 170 cm = 66.93 inches
  - celsius to fahrenheit: 37°C = 98.6°F
  - BMI: 170cm 70kg = BMI 24.2 (Healthy)
- [ ] Currency converter fetches live rates from frankfurter.app
- [ ] All pages have unique meta titles and descriptions
- [ ] sitemap.xml is generated and contains all pages
- [ ] robots.txt is present in /public/
- [ ] Bengali font renders correctly in browser
- [ ] All internal links work (no 404s)
- [ ] Git repository is initialized with first commit
- [ ] .gitignore includes node_modules and .env

When complete, tell the user:
1. The exact command to push to GitHub
2. How many pages were built
3. Any issues or limitations found during the build
