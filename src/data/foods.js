// Bengali food nutrition database — 200+ foods
// per 100g: calories (kcal), protein (g), carbs (g), fat (g)
// serving: typical serving size in grams, servingCal: calories per serving
export const foods = [

  // ─── Bengali staples ─────────────────────────────────────────────────────
  { id: 1,   bn: 'ভাত (রান্না)',         en: 'Rice (cooked)',              calories: 130, protein: 2.7,  carbs: 28,  fat: 0.3,  serving: 200, servingCal: 260,  category: 'staple' },
  { id: 2,   bn: 'চাল (কাঁচা)',          en: 'Rice (raw)',                 calories: 365, protein: 7.5,  carbs: 80,  fat: 0.7,  serving: 100, servingCal: 365,  category: 'staple' },
  { id: 3,   bn: 'ডাল',                  en: 'Dal (Lentils, cooked)',      calories: 116, protein: 9,    carbs: 20,  fat: 0.4,  serving: 150, servingCal: 174,  category: 'staple' },
  { id: 4,   bn: 'মসুর ডাল (কাঁচা)',    en: 'Red Lentils (raw)',          calories: 352, protein: 26,   carbs: 60,  fat: 1.1,  serving: 50,  servingCal: 176,  category: 'staple' },
  { id: 5,   bn: 'রুটি / চাপাতি',       en: 'Chapati/Roti',               calories: 297, protein: 8,    carbs: 55,  fat: 6,    serving: 40,  servingCal: 119,  category: 'staple' },
  { id: 6,   bn: 'পরোটা',               en: 'Paratha',                    calories: 326, protein: 7,    carbs: 45,  fat: 14,   serving: 60,  servingCal: 196,  category: 'staple' },
  { id: 7,   bn: 'লুচি',                 en: 'Luchi',                      calories: 350, protein: 7,    carbs: 45,  fat: 17,   serving: 40,  servingCal: 140,  category: 'staple' },
  { id: 8,   bn: 'পুরি',                 en: 'Puri',                       calories: 340, protein: 7,    carbs: 44,  fat: 16,   serving: 40,  servingCal: 136,  category: 'staple' },
  { id: 9,   bn: 'খিচুড়ি',              en: 'Khichuri',                   calories: 120, protein: 4,    carbs: 22,  fat: 2,    serving: 200, servingCal: 240,  category: 'staple' },
  { id: 10,  bn: 'পান্তা ভাত',           en: 'Panta Bhat (Fermented Rice)',calories: 73,  protein: 1.5,  carbs: 16,  fat: 0.1,  serving: 200, servingCal: 146,  category: 'staple' },
  { id: 11,  bn: 'চিঁড়া',               en: 'Chira (Flattened Rice)',     calories: 369, protein: 8,    carbs: 80,  fat: 1.2,  serving: 50,  servingCal: 185,  category: 'staple' },
  { id: 12,  bn: 'মুড়ি',                en: 'Muri (Puffed Rice)',         calories: 380, protein: 8,    carbs: 85,  fat: 0.5,  serving: 30,  servingCal: 114,  category: 'staple' },
  { id: 13,  bn: 'সুজি / রবা',          en: 'Semolina (Suji)',            calories: 360, protein: 11,   carbs: 72,  fat: 1,    serving: 50,  servingCal: 180,  category: 'staple' },
  { id: 14,  bn: 'সেমাই',               en: 'Vermicelli (Semai)',         calories: 350, protein: 10,   carbs: 72,  fat: 2,    serving: 50,  servingCal: 175,  category: 'staple' },
  { id: 15,  bn: 'ময়দা',                en: 'All-purpose Flour (Maida)',  calories: 364, protein: 10,   carbs: 76,  fat: 1,    serving: 50,  servingCal: 182,  category: 'staple' },
  { id: 16,  bn: 'আটা',                  en: 'Whole Wheat Flour (Atta)',   calories: 340, protein: 12,   carbs: 72,  fat: 2,    serving: 50,  servingCal: 170,  category: 'staple' },
  { id: 17,  bn: 'বেসন',                 en: 'Chickpea Flour (Besan)',     calories: 387, protein: 22,   carbs: 58,  fat: 6,    serving: 50,  servingCal: 194,  category: 'staple' },
  { id: 18,  bn: 'চালের আটা',            en: 'Rice Flour',                 calories: 366, protein: 6,    carbs: 80,  fat: 0.5,  serving: 50,  servingCal: 183,  category: 'staple' },
  { id: 19,  bn: 'নুডলস (রান্না)',       en: 'Noodles (cooked)',           calories: 138, protein: 5,    carbs: 25,  fat: 2,    serving: 200, servingCal: 276,  category: 'staple' },
  { id: 20,  bn: 'মোমো / ডাম্পলিং',     en: 'Momo / Dumpling',            calories: 180, protein: 8,    carbs: 22,  fat: 6,    serving: 100, servingCal: 180,  category: 'staple' },

  // ─── Cooking ingredients ──────────────────────────────────────────────────
  { id: 21,  bn: 'সরিষার তেল',          en: 'Mustard Oil',                calories: 884, protein: 0,    carbs: 0,   fat: 100,  serving: 10,  servingCal: 88,   category: 'ingredient' },
  { id: 22,  bn: 'সয়াবিন তেল',         en: 'Soybean Oil',                calories: 884, protein: 0,    carbs: 0,   fat: 100,  serving: 10,  servingCal: 88,   category: 'ingredient' },
  { id: 23,  bn: 'ঘি',                   en: 'Ghee',                       calories: 900, protein: 0,    carbs: 0,   fat: 99,   serving: 10,  servingCal: 90,   category: 'ingredient' },
  { id: 24,  bn: 'মাখন / বাটার',        en: 'Butter',                     calories: 717, protein: 0.9,  carbs: 0.1, fat: 81,   serving: 10,  servingCal: 72,   category: 'ingredient' },
  { id: 25,  bn: 'নারকেল তেল',          en: 'Coconut Oil',                calories: 892, protein: 0,    carbs: 0,   fat: 100,  serving: 10,  servingCal: 89,   category: 'ingredient' },
  { id: 26,  bn: 'চিনি',                 en: 'Sugar',                      calories: 387, protein: 0,    carbs: 100, fat: 0,    serving: 10,  servingCal: 39,   category: 'ingredient' },
  { id: 27,  bn: 'গুড়',                 en: 'Jaggery (Gur)',              calories: 383, protein: 0.4,  carbs: 98,  fat: 0.1,  serving: 10,  servingCal: 38,   category: 'ingredient' },
  { id: 28,  bn: 'মধু',                  en: 'Honey',                      calories: 304, protein: 0.3,  carbs: 82,  fat: 0,    serving: 15,  servingCal: 46,   category: 'ingredient' },
  { id: 29,  bn: 'লবণ',                  en: 'Salt',                       calories: 0,   protein: 0,    carbs: 0,   fat: 0,    serving: 5,   servingCal: 0,    category: 'ingredient' },
  { id: 30,  bn: 'হলুদ',                 en: 'Turmeric',                   calories: 354, protein: 8,    carbs: 65,  fat: 10,   serving: 5,   servingCal: 18,   category: 'ingredient' },
  { id: 31,  bn: 'মরিচের গুঁড়া',        en: 'Chilli Powder',              calories: 314, protein: 12,   carbs: 56,  fat: 17,   serving: 5,   servingCal: 16,   category: 'ingredient' },
  { id: 32,  bn: 'জিরার গুঁড়া',         en: 'Cumin Powder',               calories: 375, protein: 18,   carbs: 44,  fat: 22,   serving: 5,   servingCal: 19,   category: 'ingredient' },
  { id: 33,  bn: 'ধনিয়ার গুঁড়া',       en: 'Coriander Powder',           calories: 298, protein: 12,   carbs: 55,  fat: 18,   serving: 5,   servingCal: 15,   category: 'ingredient' },

  // ─── Fish dishes ──────────────────────────────────────────────────────────
  { id: 40,  bn: 'মাছের ঝোল',           en: 'Fish Curry',                 calories: 105, protein: 15,   carbs: 3,   fat: 4,    serving: 150, servingCal: 158,  category: 'fish' },
  { id: 41,  bn: 'শোরষে ইলিশ',          en: 'Hilsa in Mustard Sauce',     calories: 175, protein: 19,   carbs: 2,   fat: 10,   serving: 150, servingCal: 263,  category: 'fish' },
  { id: 42,  bn: 'ভাপা ইলিশ',           en: 'Steamed Hilsa',              calories: 160, protein: 19,   carbs: 0,   fat: 9,    serving: 150, servingCal: 240,  category: 'fish' },
  { id: 43,  bn: 'ইলিশ ভাজা',           en: 'Fried Hilsa',                calories: 220, protein: 18,   carbs: 2,   fat: 15,   serving: 100, servingCal: 220,  category: 'fish' },
  { id: 44,  bn: 'মাছ ভাজা',            en: 'Fried Fish',                 calories: 200, protein: 18,   carbs: 3,   fat: 13,   serving: 100, servingCal: 200,  category: 'fish' },
  { id: 45,  bn: 'চিংড়ি মালাইকারি',    en: 'Prawn Malaikari',            calories: 140, protein: 14,   carbs: 5,   fat: 7,    serving: 150, servingCal: 210,  category: 'fish' },
  { id: 46,  bn: 'চিংড়ি ভাজা',         en: 'Fried Prawn',                calories: 180, protein: 20,   carbs: 3,   fat: 10,   serving: 100, servingCal: 180,  category: 'fish' },
  { id: 47,  bn: 'রুই মাছের ঝোল',       en: 'Rohu Fish Curry',            calories: 97,  protein: 14,   carbs: 2,   fat: 4,    serving: 150, servingCal: 146,  category: 'fish' },
  { id: 48,  bn: 'কাতলা মাছ',           en: 'Katla Fish Curry',           calories: 111, protein: 16,   carbs: 2,   fat: 5,    serving: 150, servingCal: 167,  category: 'fish' },
  { id: 49,  bn: 'পাঙাশ মাছ',           en: 'Pangash Fish',               calories: 128, protein: 14,   carbs: 2,   fat: 7,    serving: 150, servingCal: 192,  category: 'fish' },
  { id: 50,  bn: 'টুনা মাছ (টিন)',      en: 'Tuna (canned)',              calories: 116, protein: 26,   carbs: 0,   fat: 1,    serving: 100, servingCal: 116,  category: 'fish' },
  { id: 51,  bn: 'চিংড়ি (কাঁচা)',      en: 'Prawn (raw)',                calories: 99,  protein: 20,   carbs: 0.9, fat: 1.7,  serving: 100, servingCal: 99,   category: 'fish' },
  { id: 52,  bn: 'শুঁটকি ভাজা',         en: 'Dried Fish (Shutki)',        calories: 280, protein: 50,   carbs: 0,   fat: 7,    serving: 50,  servingCal: 140,  category: 'fish' },

  // ─── Egg dishes ───────────────────────────────────────────────────────────
  { id: 60,  bn: 'ডিম ভাজা',            en: 'Fried Egg',                  calories: 196, protein: 14,   carbs: 0,   fat: 15,   serving: 50,  servingCal: 98,   category: 'egg' },
  { id: 61,  bn: 'ডিমের ঝোল',           en: 'Egg Curry',                  calories: 120, protein: 8,    carbs: 5,   fat: 8,    serving: 150, servingCal: 180,  category: 'egg' },
  { id: 62,  bn: 'সিদ্ধ ডিম',           en: 'Boiled Egg',                 calories: 155, protein: 13,   carbs: 1,   fat: 11,   serving: 50,  servingCal: 78,   category: 'egg' },
  { id: 63,  bn: 'অমলেট',               en: 'Omelette',                   calories: 154, protein: 10,   carbs: 1,   fat: 12,   serving: 60,  servingCal: 92,   category: 'egg' },
  { id: 64,  bn: 'ডিম পোচ',             en: 'Poached Egg',                calories: 143, protein: 13,   carbs: 1,   fat: 10,   serving: 50,  servingCal: 72,   category: 'egg' },
  { id: 65,  bn: 'ডিম (কাঁচা)',         en: 'Egg (raw, 1 medium)',        calories: 143, protein: 13,   carbs: 1,   fat: 10,   serving: 50,  servingCal: 72,   category: 'egg' },

  // ─── Meat dishes ──────────────────────────────────────────────────────────
  { id: 70,  bn: 'মুরগির ঝোল',          en: 'Chicken Curry',              calories: 150, protein: 16,   carbs: 4,   fat: 8,    serving: 200, servingCal: 300,  category: 'meat' },
  { id: 71,  bn: 'মুরগি ভুনা',          en: 'Chicken Bhuna',              calories: 180, protein: 18,   carbs: 3,   fat: 11,   serving: 150, servingCal: 270,  category: 'meat' },
  { id: 72,  bn: 'চিকেন রোস্ট',         en: 'Chicken Roast',              calories: 210, protein: 20,   carbs: 5,   fat: 13,   serving: 150, servingCal: 315,  category: 'meat' },
  { id: 73,  bn: 'তন্দুরি চিকেন',       en: 'Tandoori Chicken',           calories: 190, protein: 22,   carbs: 4,   fat: 10,   serving: 150, servingCal: 285,  category: 'meat' },
  { id: 74,  bn: 'গ্রিলড চিকেন',        en: 'Grilled Chicken',            calories: 165, protein: 25,   carbs: 0,   fat: 7,    serving: 150, servingCal: 248,  category: 'meat' },
  { id: 75,  bn: 'চিকেন ফ্রাই',         en: 'Fried Chicken',              calories: 260, protein: 20,   carbs: 10,  fat: 16,   serving: 150, servingCal: 390,  category: 'meat' },
  { id: 76,  bn: 'মটন কারি',            en: 'Mutton Curry',               calories: 225, protein: 18,   carbs: 4,   fat: 15,   serving: 200, servingCal: 450,  category: 'meat' },
  { id: 79,  bn: 'কাবাব',               en: 'Seekh Kabab',                calories: 230, protein: 20,   carbs: 5,   fat: 15,   serving: 80,  servingCal: 184,  category: 'meat' },
  { id: 80,  bn: 'শামি কাবাব',          en: 'Shami Kabab',                calories: 250, protein: 17,   carbs: 12,  fat: 16,   serving: 60,  servingCal: 150,  category: 'meat' },
  { id: 81,  bn: 'কোরমা',               en: 'Korma (Chicken)',            calories: 200, protein: 15,   carbs: 6,   fat: 14,   serving: 200, servingCal: 400,  category: 'meat' },
  { id: 82,  bn: 'মুরগির কলিজা',        en: 'Chicken Liver',              calories: 172, protein: 26,   carbs: 1,   fat: 7,    serving: 100, servingCal: 172,  category: 'meat' },
  { id: 83,  bn: 'কাঁচা মুরগি',         en: 'Chicken Breast (raw)',       calories: 120, protein: 23,   carbs: 0,   fat: 2.6,  serving: 100, servingCal: 120,  category: 'meat' },
  { id: 85,  bn: 'কাঁচা খাসির মাংস',   en: 'Mutton (raw)',               calories: 294, protein: 17,   carbs: 0,   fat: 25,   serving: 100, servingCal: 294,  category: 'meat' },

  // ─── Vegetable dishes ─────────────────────────────────────────────────────
  { id: 90,  bn: 'আলু ভাজা',            en: 'Fried Potato',               calories: 175, protein: 2,    carbs: 28,  fat: 7,    serving: 100, servingCal: 175,  category: 'veg' },
  { id: 91,  bn: 'আলুর দম',             en: 'Aloo Dum',                   calories: 130, protein: 2,    carbs: 22,  fat: 5,    serving: 150, servingCal: 195,  category: 'veg' },
  { id: 92,  bn: 'বেগুন ভাজা',          en: 'Fried Brinjal',              calories: 120, protein: 2,    carbs: 10,  fat: 8,    serving: 100, servingCal: 120,  category: 'veg' },
  { id: 93,  bn: 'বেগুন ভর্তা',         en: 'Brinjal Mash (Bhorta)',      calories: 90,  protein: 2,    carbs: 10,  fat: 5,    serving: 100, servingCal: 90,   category: 'veg' },
  { id: 94,  bn: 'শাক ভাজা',            en: 'Stir-fried Greens',          calories: 80,  protein: 4,    carbs: 6,   fat: 5,    serving: 100, servingCal: 80,   category: 'veg' },
  { id: 95,  bn: 'সবজি তরকারি',         en: 'Mixed Vegetables',           calories: 70,  protein: 3,    carbs: 12,  fat: 2,    serving: 150, servingCal: 105,  category: 'veg' },
  { id: 96,  bn: 'লাউ রান্না',           en: 'Bottle Gourd Curry',         calories: 55,  protein: 2,    carbs: 10,  fat: 1,    serving: 150, servingCal: 83,   category: 'veg' },
  { id: 97,  bn: 'কুমড়া রান্না',        en: 'Pumpkin Curry',              calories: 65,  protein: 2,    carbs: 12,  fat: 2,    serving: 150, servingCal: 98,   category: 'veg' },
  { id: 98,  bn: 'করলা ভাজা',           en: 'Bitter Gourd Fry',           calories: 85,  protein: 3,    carbs: 8,   fat: 5,    serving: 100, servingCal: 85,   category: 'veg' },
  { id: 99,  bn: 'ঢেঁড়স ভাজা',          en: 'Okra Fry',                   calories: 90,  protein: 3,    carbs: 10,  fat: 5,    serving: 100, servingCal: 90,   category: 'veg' },
  { id: 100, bn: 'ফুলকপি রান্না',        en: 'Cauliflower Curry',          calories: 75,  protein: 3,    carbs: 12,  fat: 2,    serving: 150, servingCal: 113,  category: 'veg' },
  { id: 101, bn: 'বাঁধাকপি ভাজা',       en: 'Cabbage Stir-fry',           calories: 65,  protein: 3,    carbs: 10,  fat: 2,    serving: 150, servingCal: 98,   category: 'veg' },
  { id: 102, bn: 'শিম রান্না',           en: 'Bean Curry',                 calories: 70,  protein: 4,    carbs: 12,  fat: 1,    serving: 150, servingCal: 105,  category: 'veg' },
  { id: 103, bn: 'আলু ভর্তা',           en: 'Mashed Potato (Bhorta)',     calories: 100, protein: 2,    carbs: 20,  fat: 2,    serving: 100, servingCal: 100,  category: 'veg' },
  { id: 104, bn: 'ডাল ভর্তা',           en: 'Dal Bhorta',                 calories: 110, protein: 7,    carbs: 18,  fat: 2,    serving: 100, servingCal: 110,  category: 'veg' },

  // ─── Dairy ────────────────────────────────────────────────────────────────
  { id: 110, bn: 'দই',                   en: 'Yoghurt (plain)',            calories: 61,  protein: 3.5,  carbs: 4.7, fat: 3.3,  serving: 100, servingCal: 61,   category: 'dairy' },
  { id: 111, bn: 'মিষ্টি দই',           en: 'Sweetened Yoghurt',          calories: 100, protein: 3,    carbs: 17,  fat: 3,    serving: 100, servingCal: 100,  category: 'dairy' },
  { id: 112, bn: 'দুধ (গরুর)',           en: 'Cow Milk (full fat)',        calories: 61,  protein: 3.2,  carbs: 4.8, fat: 3.5,  serving: 250, servingCal: 153,  category: 'dairy' },
  { id: 113, bn: 'স্কিমড মিল্ক',        en: 'Skimmed Milk',               calories: 34,  protein: 3.4,  carbs: 5,   fat: 0.1,  serving: 250, servingCal: 85,   category: 'dairy' },
  { id: 114, bn: 'ছানা / পনির',          en: 'Cottage Cheese (Chhena)',    calories: 98,  protein: 11,   carbs: 3.4, fat: 4.3,  serving: 100, servingCal: 98,   category: 'dairy' },
  { id: 115, bn: 'ক্রিম',                en: 'Cream',                      calories: 340, protein: 2,    carbs: 3,   fat: 36,   serving: 30,  servingCal: 102,  category: 'dairy' },
  { id: 116, bn: 'কনডেন্সড মিল্ক',      en: 'Condensed Milk',             calories: 321, protein: 8,    carbs: 54,  fat: 8.7,  serving: 30,  servingCal: 96,   category: 'dairy' },
  { id: 117, bn: 'আইসক্রিম',            en: 'Ice Cream',                  calories: 207, protein: 3.5,  carbs: 24,  fat: 11,   serving: 100, servingCal: 207,  category: 'dairy' },

  // ─── Bengali sweets ───────────────────────────────────────────────────────
  { id: 120, bn: 'রসগোল্লা',            en: 'Rasgolla',                   calories: 186, protein: 5,    carbs: 38,  fat: 2,    serving: 50,  servingCal: 93,   category: 'sweet' },
  { id: 121, bn: 'সন্দেশ',              en: 'Sandesh',                    calories: 280, protein: 8,    carbs: 42,  fat: 9,    serving: 40,  servingCal: 112,  category: 'sweet' },
  { id: 122, bn: 'মিষ্টি (সাধারণ)',     en: 'Bengali Sweets (general)',   calories: 300, protein: 7,    carbs: 50,  fat: 8,    serving: 50,  servingCal: 150,  category: 'sweet' },
  { id: 123, bn: 'গুলাব জামুন',          en: 'Gulab Jamun',                calories: 310, protein: 5,    carbs: 50,  fat: 10,   serving: 50,  servingCal: 155,  category: 'sweet' },
  { id: 124, bn: 'পায়েস',               en: 'Payesh (Rice Pudding)',      calories: 140, protein: 4,    carbs: 25,  fat: 4,    serving: 150, servingCal: 210,  category: 'sweet' },
  { id: 125, bn: 'হালুয়া (সুজি)',       en: 'Suji Halwa',                 calories: 350, protein: 5,    carbs: 55,  fat: 13,   serving: 100, servingCal: 350,  category: 'sweet' },
  { id: 126, bn: 'পিঠা (ভাপা)',         en: 'Bhapa Pitha',                calories: 200, protein: 4,    carbs: 42,  fat: 2,    serving: 80,  servingCal: 160,  category: 'sweet' },
  { id: 127, bn: 'নারকেল নাড়ু',         en: 'Coconut Ladoo',              calories: 390, protein: 4,    carbs: 50,  fat: 20,   serving: 30,  servingCal: 117,  category: 'sweet' },
  { id: 128, bn: 'চমচম',                en: 'Chomchom',                   calories: 250, protein: 6,    carbs: 42,  fat: 7,    serving: 60,  servingCal: 150,  category: 'sweet' },
  { id: 129, bn: 'রসমালাই',             en: 'Rasmalai',                   calories: 190, protein: 6,    carbs: 28,  fat: 7,    serving: 80,  servingCal: 152,  category: 'sweet' },
  { id: 130, bn: 'জিলাপি',              en: 'Jilapi (Jalebi)',            calories: 360, protein: 3,    carbs: 72,  fat: 8,    serving: 60,  servingCal: 216,  category: 'sweet' },
  { id: 131, bn: 'তিলের নাড়ু',          en: 'Sesame Ladoo',               calories: 420, protein: 12,   carbs: 48,  fat: 22,   serving: 30,  servingCal: 126,  category: 'sweet' },
  { id: 132, bn: 'লাড্ডু',              en: 'Laddoo (Besan)',             calories: 450, protein: 8,    carbs: 62,  fat: 20,   serving: 40,  servingCal: 180,  category: 'sweet' },

  // ─── Snacks ───────────────────────────────────────────────────────────────
  { id: 140, bn: 'সিঙারা',              en: 'Singara (Samosa)',           calories: 250, protein: 5,    carbs: 30,  fat: 13,   serving: 60,  servingCal: 150,  category: 'snack' },
  { id: 141, bn: 'কচুরি',               en: 'Kachori',                    calories: 350, protein: 8,    carbs: 48,  fat: 15,   serving: 50,  servingCal: 175,  category: 'snack' },
  { id: 142, bn: 'আলুর চপ',             en: 'Potato Chop',                calories: 200, protein: 3,    carbs: 28,  fat: 9,    serving: 80,  servingCal: 160,  category: 'snack' },
  { id: 143, bn: 'বেগুনি',              en: 'Brinjal Fritter (Beguni)',   calories: 180, protein: 3,    carbs: 20,  fat: 10,   serving: 80,  servingCal: 144,  category: 'snack' },
  { id: 144, bn: 'ফুচকা',               en: 'Fuchka (Pani Puri)',         calories: 70,  protein: 2,    carbs: 13,  fat: 1,    serving: 30,  servingCal: 21,   category: 'snack' },
  { id: 145, bn: 'ঝালমুড়ি',            en: 'Jhal Muri',                  calories: 160, protein: 4,    carbs: 30,  fat: 3,    serving: 50,  servingCal: 80,   category: 'snack' },
  { id: 146, bn: 'চপ',                  en: 'Chop',                       calories: 220, protein: 5,    carbs: 28,  fat: 10,   serving: 80,  servingCal: 176,  category: 'snack' },
  { id: 147, bn: 'রোল (ডিম)',           en: 'Egg Roll',                   calories: 290, protein: 10,   carbs: 35,  fat: 13,   serving: 120, servingCal: 348,  category: 'snack' },
  { id: 148, bn: 'নিমকি',               en: 'Nimki',                      calories: 490, protein: 8,    carbs: 60,  fat: 25,   serving: 30,  servingCal: 147,  category: 'snack' },
  { id: 149, bn: 'চানাচুর',             en: 'Chanachur (Chivda)',         calories: 470, protein: 10,   carbs: 60,  fat: 22,   serving: 30,  servingCal: 141,  category: 'snack' },
  { id: 150, bn: 'বিস্কুট (সাধারণ)',    en: 'Plain Biscuit',              calories: 450, protein: 7,    carbs: 70,  fat: 15,   serving: 20,  servingCal: 90,   category: 'snack' },
  { id: 151, bn: 'কেক',                 en: 'Cake (plain)',               calories: 350, protein: 5,    carbs: 55,  fat: 13,   serving: 60,  servingCal: 210,  category: 'snack' },
  { id: 152, bn: 'পাকোড়া',             en: 'Pakora (Veg)',               calories: 250, protein: 6,    carbs: 30,  fat: 12,   serving: 80,  servingCal: 200,  category: 'snack' },
  { id: 153, bn: 'পাপড়',               en: 'Papad',                      calories: 380, protein: 15,   carbs: 60,  fat: 8,    serving: 10,  servingCal: 38,   category: 'snack' },

  // ─── Main courses ─────────────────────────────────────────────────────────
  { id: 160, bn: 'বিরিয়ানি (চিকেন)',   en: 'Chicken Biryani',            calories: 200, protein: 12,   carbs: 28,  fat: 6,    serving: 300, servingCal: 600,  category: 'main' },
  { id: 161, bn: 'বিরিয়ানি (মটন)',     en: 'Mutton Biryani',             calories: 230, protein: 14,   carbs: 28,  fat: 8,    serving: 300, servingCal: 690,  category: 'main' },
  { id: 162, bn: 'মোগলাই পরোটা',       en: 'Mughlai Paratha',            calories: 310, protein: 12,   carbs: 35,  fat: 15,   serving: 120, servingCal: 372,  category: 'main' },
  { id: 163, bn: 'খিচুড়ি (ভুনা)',      en: 'Bhuna Khichuri',             calories: 160, protein: 6,    carbs: 26,  fat: 5,    serving: 250, servingCal: 400,  category: 'main' },
  { id: 164, bn: 'পোলাও',               en: 'Polao (Ghee Rice)',          calories: 180, protein: 4,    carbs: 32,  fat: 5,    serving: 200, servingCal: 360,  category: 'main' },
  { id: 165, bn: 'ফ্রাইড রাইস',        en: 'Fried Rice',                 calories: 170, protein: 5,    carbs: 28,  fat: 5,    serving: 250, servingCal: 425,  category: 'main' },

  // ─── Beverages ────────────────────────────────────────────────────────────
  { id: 170, bn: 'দোকানের চা',          en: 'Bengali Chai',               calories: 50,  protein: 2,    carbs: 7,   fat: 2,    serving: 150, servingCal: 75,   category: 'beverage' },
  { id: 171, bn: 'কফি (দুধ-চিনি)',      en: 'Coffee (milk & sugar)',       calories: 35,  protein: 1,    carbs: 5,   fat: 1,    serving: 200, servingCal: 70,   category: 'beverage' },
  { id: 172, bn: 'লাচ্ছি (মিষ্টি)',     en: 'Sweet Lassi',                calories: 75,  protein: 3,    carbs: 12,  fat: 2,    serving: 250, servingCal: 188,  category: 'beverage' },
  { id: 173, bn: 'আমের রস',             en: 'Mango Juice',                calories: 60,  protein: 0.5,  carbs: 15,  fat: 0.2,  serving: 250, servingCal: 150,  category: 'beverage' },
  { id: 174, bn: 'নারকেলের পানি',       en: 'Coconut Water',              calories: 19,  protein: 0.7,  carbs: 4,   fat: 0.2,  serving: 250, servingCal: 48,   category: 'beverage' },
  { id: 175, bn: 'কোল্ড ড্রিংক',       en: 'Soft Drink (Cola)',          calories: 42,  protein: 0,    carbs: 11,  fat: 0,    serving: 330, servingCal: 139,  category: 'beverage' },
  { id: 176, bn: 'বোরহানি',             en: 'Borhani',                    calories: 45,  protein: 2,    carbs: 6,   fat: 1.5,  serving: 200, servingCal: 90,   category: 'beverage' },

  // ─── Fruits ───────────────────────────────────────────────────────────────
  { id: 180, bn: 'কলা',                 en: 'Banana',                     calories: 89,  protein: 1.1,  carbs: 23,  fat: 0.3,  serving: 100, servingCal: 89,   category: 'fruit' },
  { id: 181, bn: 'আম',                  en: 'Mango',                      calories: 60,  protein: 0.8,  carbs: 15,  fat: 0.4,  serving: 150, servingCal: 90,   category: 'fruit' },
  { id: 182, bn: 'আপেল',               en: 'Apple',                      calories: 52,  protein: 0.3,  carbs: 14,  fat: 0.2,  serving: 150, servingCal: 78,   category: 'fruit' },
  { id: 183, bn: 'কমলালেবু',           en: 'Orange',                     calories: 47,  protein: 0.9,  carbs: 12,  fat: 0.1,  serving: 130, servingCal: 61,   category: 'fruit' },
  { id: 184, bn: 'পেঁপে',              en: 'Papaya',                     calories: 43,  protein: 0.5,  carbs: 11,  fat: 0.3,  serving: 150, servingCal: 65,   category: 'fruit' },
  { id: 185, bn: 'নারকেল',             en: 'Coconut (fresh)',            calories: 354, protein: 3.3,  carbs: 15,  fat: 33,   serving: 30,  servingCal: 106,  category: 'fruit' },
  { id: 186, bn: 'তরমুজ',              en: 'Watermelon',                 calories: 30,  protein: 0.6,  carbs: 8,   fat: 0.2,  serving: 200, servingCal: 60,   category: 'fruit' },
  { id: 187, bn: 'আনারস',              en: 'Pineapple',                  calories: 50,  protein: 0.5,  carbs: 13,  fat: 0.1,  serving: 150, servingCal: 75,   category: 'fruit' },
  { id: 188, bn: 'পেয়ারা',             en: 'Guava',                      calories: 68,  protein: 2.6,  carbs: 14,  fat: 1,    serving: 100, servingCal: 68,   category: 'fruit' },
  { id: 189, bn: 'লিচু',               en: 'Lychee',                     calories: 66,  protein: 0.8,  carbs: 17,  fat: 0.4,  serving: 100, servingCal: 66,   category: 'fruit' },
  { id: 190, bn: 'কাঁঠাল',             en: 'Jackfruit',                  calories: 95,  protein: 1.7,  carbs: 23,  fat: 0.6,  serving: 150, servingCal: 143,  category: 'fruit' },
  { id: 191, bn: 'খেজুর',              en: 'Dates',                      calories: 277, protein: 1.8,  carbs: 75,  fat: 0.2,  serving: 30,  servingCal: 83,   category: 'fruit' },
  { id: 192, bn: 'আঙুর',               en: 'Grapes',                     calories: 69,  protein: 0.7,  carbs: 18,  fat: 0.2,  serving: 100, servingCal: 69,   category: 'fruit' },

  // ─── Raw vegetables ───────────────────────────────────────────────────────
  { id: 200, bn: 'আলু',                 en: 'Potato (raw)',               calories: 77,  protein: 2,    carbs: 17,  fat: 0.1,  serving: 100, servingCal: 77,   category: 'vegetable' },
  { id: 201, bn: 'পেঁয়াজ',            en: 'Onion',                      calories: 40,  protein: 1.1,  carbs: 9,   fat: 0.1,  serving: 50,  servingCal: 20,   category: 'vegetable' },
  { id: 202, bn: 'রসুন',               en: 'Garlic',                     calories: 149, protein: 6.4,  carbs: 33,  fat: 0.5,  serving: 10,  servingCal: 15,   category: 'vegetable' },
  { id: 203, bn: 'আদা',                en: 'Ginger',                     calories: 80,  protein: 1.8,  carbs: 18,  fat: 0.8,  serving: 10,  servingCal: 8,    category: 'vegetable' },
  { id: 204, bn: 'টমেটো',              en: 'Tomato',                     calories: 18,  protein: 0.9,  carbs: 4,   fat: 0.2,  serving: 100, servingCal: 18,   category: 'vegetable' },
  { id: 205, bn: 'শসা',                en: 'Cucumber',                   calories: 16,  protein: 0.7,  carbs: 4,   fat: 0.1,  serving: 100, servingCal: 16,   category: 'vegetable' },
  { id: 206, bn: 'গাজর',               en: 'Carrot',                     calories: 41,  protein: 0.9,  carbs: 10,  fat: 0.2,  serving: 100, servingCal: 41,   category: 'vegetable' },
  { id: 207, bn: 'পালং শাক',           en: 'Spinach',                    calories: 23,  protein: 2.9,  carbs: 4,   fat: 0.4,  serving: 100, servingCal: 23,   category: 'vegetable' },
  { id: 208, bn: 'বেগুন',              en: 'Brinjal / Eggplant',        calories: 25,  protein: 1,    carbs: 6,   fat: 0.2,  serving: 100, servingCal: 25,   category: 'vegetable' },
  { id: 209, bn: 'লাউ',                en: 'Bottle Gourd',               calories: 14,  protein: 0.6,  carbs: 3,   fat: 0.1,  serving: 100, servingCal: 14,   category: 'vegetable' },
  { id: 210, bn: 'মিষ্টি কুমড়া',     en: 'Pumpkin',                    calories: 26,  protein: 1,    carbs: 7,   fat: 0.1,  serving: 100, servingCal: 26,   category: 'vegetable' },
  { id: 211, bn: 'করলা',               en: 'Bitter Gourd',               calories: 17,  protein: 1,    carbs: 3.7, fat: 0.2,  serving: 100, servingCal: 17,   category: 'vegetable' },
  { id: 212, bn: 'ঢেঁড়স',             en: 'Okra / Ladies Finger',      calories: 33,  protein: 2,    carbs: 7,   fat: 0.2,  serving: 100, servingCal: 33,   category: 'vegetable' },
  { id: 213, bn: 'ফুলকপি',             en: 'Cauliflower',                calories: 25,  protein: 2,    carbs: 5,   fat: 0.3,  serving: 100, servingCal: 25,   category: 'vegetable' },
  { id: 214, bn: 'বাঁধাকপি',           en: 'Cabbage',                    calories: 25,  protein: 1.3,  carbs: 6,   fat: 0.1,  serving: 100, servingCal: 25,   category: 'vegetable' },
  { id: 215, bn: 'শিম',                en: 'Beans (Shim)',               calories: 31,  protein: 1.8,  carbs: 7,   fat: 0.1,  serving: 100, servingCal: 31,   category: 'vegetable' },
  { id: 216, bn: 'মটরশুটি',            en: 'Green Peas',                 calories: 81,  protein: 5.4,  carbs: 14,  fat: 0.4,  serving: 50,  servingCal: 41,   category: 'vegetable' },
  { id: 217, bn: 'মুলা',               en: 'Radish',                     calories: 16,  protein: 0.7,  carbs: 3.4, fat: 0.1,  serving: 100, servingCal: 16,   category: 'vegetable' },

  // ─── Indian foods ──────────────────────────────────────────────────────────
  { id: 220, bn: 'ইডলি',               en: 'Idli',                       calories: 58,  protein: 2,    carbs: 12,  fat: 0.5,  serving: 60,  servingCal: 35,   category: 'indian' },
  { id: 221, bn: 'দোসা',               en: 'Dosa',                       calories: 168, protein: 4,    carbs: 32,  fat: 4,    serving: 100, servingCal: 168,  category: 'indian' },
  { id: 222, bn: 'সাম্বার',            en: 'Sambar',                     calories: 60,  protein: 3,    carbs: 10,  fat: 1.5,  serving: 150, servingCal: 90,   category: 'indian' },
  { id: 223, bn: 'পনির',               en: 'Paneer',                     calories: 265, protein: 18,   carbs: 3,   fat: 20,   serving: 100, servingCal: 265,  category: 'indian' },
  { id: 224, bn: 'পনির মাখানি',        en: 'Paneer Makhani',             calories: 180, protein: 8,    carbs: 10,  fat: 13,   serving: 200, servingCal: 360,  category: 'indian' },
  { id: 225, bn: 'ডাল মাখানি',         en: 'Dal Makhani',                calories: 130, protein: 6,    carbs: 18,  fat: 5,    serving: 200, servingCal: 260,  category: 'indian' },
  { id: 226, bn: 'নান',                en: 'Naan',                       calories: 295, protein: 9,    carbs: 50,  fat: 7,    serving: 80,  servingCal: 236,  category: 'indian' },
  { id: 227, bn: 'বাটার চিকেন',        en: 'Butter Chicken',             calories: 170, protein: 14,   carbs: 8,   fat: 10,   serving: 200, servingCal: 340,  category: 'indian' },
  { id: 228, bn: 'চিকেন তিক্কা',       en: 'Chicken Tikka',              calories: 200, protein: 22,   carbs: 5,   fat: 11,   serving: 150, servingCal: 300,  category: 'indian' },
  { id: 229, bn: 'ছোলে',               en: 'Chole (Chickpea Curry)',     calories: 160, protein: 8,    carbs: 27,  fat: 3,    serving: 200, servingCal: 320,  category: 'indian' },
  { id: 230, bn: 'রাজমা',              en: 'Rajma (Kidney Bean Curry)',  calories: 140, protein: 8,    carbs: 24,  fat: 2,    serving: 200, servingCal: 280,  category: 'indian' },

  // ─── International foods ───────────────────────────────────────────────────
  { id: 240, bn: 'পাস্তা (রান্না)',     en: 'Pasta (cooked)',             calories: 131, protein: 5,    carbs: 25,  fat: 1.1,  serving: 200, servingCal: 262,  category: 'international' },
  { id: 241, bn: 'পিৎজা',              en: 'Pizza (1 slice)',            calories: 266, protein: 11,   carbs: 33,  fat: 10,   serving: 100, servingCal: 266,  category: 'international' },
  { id: 242, bn: 'পাউরুটি (সাদা)',     en: 'White Bread',                calories: 265, protein: 9,    carbs: 51,  fat: 3,    serving: 30,  servingCal: 80,   category: 'international' },
  { id: 243, bn: 'পাউরুটি (বাদামি)',   en: 'Brown Bread',                calories: 247, protein: 13,   carbs: 41,  fat: 4,    serving: 30,  servingCal: 74,   category: 'international' },
  { id: 244, bn: 'চিকেন ব্রেস্ট',      en: 'Chicken Breast (cooked)',    calories: 165, protein: 31,   carbs: 0,   fat: 3.6,  serving: 100, servingCal: 165,  category: 'international' },
  { id: 245, bn: 'স্যালমন মাছ',        en: 'Salmon',                     calories: 208, protein: 20,   carbs: 0,   fat: 13,   serving: 100, servingCal: 208,  category: 'international' },
  { id: 246, bn: 'ওটস (রান্না)',        en: 'Oats (cooked)',              calories: 71,  protein: 2.5,  carbs: 12,  fat: 1.5,  serving: 200, servingCal: 142,  category: 'international' },
  { id: 247, bn: 'বার্গার',             en: 'Burger (chicken)',           calories: 295, protein: 17,   carbs: 24,  fat: 14,   serving: 150, servingCal: 443,  category: 'international' },
  { id: 248, bn: 'স্যান্ডউইচ',         en: 'Sandwich (chicken)',         calories: 210, protein: 12,   carbs: 28,  fat: 7,    serving: 150, servingCal: 315,  category: 'international' },
  { id: 249, bn: 'ফ্রেঞ্চ ফ্রাই',      en: 'French Fries',               calories: 312, protein: 3.4,  carbs: 41,  fat: 15,   serving: 100, servingCal: 312,  category: 'international' },
  { id: 250, bn: 'চকলেট',              en: 'Chocolate (milk)',           calories: 535, protein: 8,    carbs: 60,  fat: 30,   serving: 30,  servingCal: 161,  category: 'international' },
  { id: 251, bn: 'চিপস',               en: 'Potato Chips',               calories: 536, protein: 7,    carbs: 53,  fat: 35,   serving: 30,  servingCal: 161,  category: 'international' },
];

export function searchFoods(query) {
  if (!query || query.trim() === '') return foods;
  const q = query.toLowerCase().trim();
  return foods.filter(f =>
    f.bn.includes(query) ||
    f.en.toLowerCase().includes(q) ||
    f.category.toLowerCase().includes(q)
  );
}
