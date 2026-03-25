// Bengali food calorie database — 130+ foods
// calories: per 100g, serving: typical serving size in grams, servingCal: calories per serving
export const foods = [
  // Bengali staples
  { id: 1, bn: 'ভাত', en: 'Rice (cooked)', calories: 130, serving: 200, servingCal: 260, category: 'staple' },
  { id: 2, bn: 'ডাল', en: 'Dal (Lentils)', calories: 116, serving: 150, servingCal: 174, category: 'staple' },
  { id: 3, bn: 'রুটি', en: 'Chapati/Roti', calories: 297, serving: 40, servingCal: 119, category: 'staple' },
  { id: 4, bn: 'পরোটা', en: 'Paratha', calories: 326, serving: 60, servingCal: 196, category: 'staple' },
  { id: 5, bn: 'লুচি', en: 'Luchi', calories: 350, serving: 40, servingCal: 140, category: 'staple' },
  { id: 6, bn: 'পুরি', en: 'Puri', calories: 340, serving: 40, servingCal: 136, category: 'staple' },
  { id: 7, bn: 'খিচুড়ি', en: 'Khichuri', calories: 120, serving: 200, servingCal: 240, category: 'staple' },
  { id: 8, bn: 'পান্তা ভাত', en: 'Panta Bhat (Fermented Rice)', calories: 73, serving: 200, servingCal: 146, category: 'staple' },
  { id: 9, bn: 'চিঁড়া', en: 'Chira (Flattened Rice)', calories: 369, serving: 50, servingCal: 185, category: 'staple' },
  { id: 10, bn: 'মুড়ি', en: 'Muri (Puffed Rice)', calories: 380, serving: 30, servingCal: 114, category: 'staple' },

  // Fish dishes
  { id: 11, bn: 'মাছের ঝোল', en: 'Fish Curry', calories: 105, serving: 150, servingCal: 158, category: 'fish' },
  { id: 12, bn: 'শোরষে ইলিশ', en: 'Hilsa in Mustard Sauce', calories: 175, serving: 150, servingCal: 263, category: 'fish' },
  { id: 13, bn: 'ভাপা ইলিশ', en: 'Steamed Hilsa', calories: 160, serving: 150, servingCal: 240, category: 'fish' },
  { id: 14, bn: 'মাছ ভাজা', en: 'Fried Fish', calories: 200, serving: 100, servingCal: 200, category: 'fish' },
  { id: 15, bn: 'চিংড়ি মালাইকারি', en: 'Prawn Malaikari', calories: 140, serving: 150, servingCal: 210, category: 'fish' },

  // Egg dishes
  { id: 16, bn: 'ডিম ভাজা', en: 'Fried Egg', calories: 196, serving: 50, servingCal: 98, category: 'egg' },
  { id: 17, bn: 'ডিমের ঝোল', en: 'Egg Curry', calories: 120, serving: 150, servingCal: 180, category: 'egg' },
  { id: 18, bn: 'সিদ্ধ ডিম', en: 'Boiled Egg', calories: 155, serving: 50, servingCal: 78, category: 'egg' },

  // Meat dishes
  { id: 19, bn: 'মুরগির ঝোল', en: 'Chicken Curry', calories: 150, serving: 200, servingCal: 300, category: 'meat' },
  { id: 20, bn: 'মটন কারি', en: 'Mutton Curry', calories: 225, serving: 200, servingCal: 450, category: 'meat' },

  // Vegetable dishes
  { id: 21, bn: 'আলু ভাজা', en: 'Fried Potato', calories: 175, serving: 100, servingCal: 175, category: 'veg' },
  { id: 22, bn: 'আলুর দম', en: 'Aloo Dum', calories: 130, serving: 150, servingCal: 195, category: 'veg' },
  { id: 23, bn: 'বেগুন ভাজা', en: 'Fried Brinjal', calories: 120, serving: 100, servingCal: 120, category: 'veg' },
  { id: 24, bn: 'শাক ভাজা', en: 'Stir-fried Greens', calories: 80, serving: 100, servingCal: 80, category: 'veg' },
  { id: 25, bn: 'সবজি তরকারি', en: 'Mixed Vegetables', calories: 70, serving: 150, servingCal: 105, category: 'veg' },

  // Dairy
  { id: 26, bn: 'দই', en: 'Yoghurt', calories: 61, serving: 100, servingCal: 61, category: 'dairy' },
  { id: 27, bn: 'মিষ্টি দই', en: 'Sweetened Yoghurt', calories: 100, serving: 100, servingCal: 100, category: 'dairy' },
  { id: 28, bn: 'দুধ', en: 'Milk', calories: 61, serving: 250, servingCal: 153, category: 'dairy' },

  // Bengali sweets
  { id: 29, bn: 'রসগোল্লা', en: 'Rasgolla', calories: 186, serving: 50, servingCal: 93, category: 'sweet' },
  { id: 30, bn: 'সন্দেশ', en: 'Sandesh', calories: 280, serving: 40, servingCal: 112, category: 'sweet' },
  { id: 31, bn: 'মিষ্টি', en: 'Bengali Sweets (general)', calories: 300, serving: 50, servingCal: 150, category: 'sweet' },
  { id: 32, bn: 'গুলাব জামুন', en: 'Gulab Jamun', calories: 310, serving: 50, servingCal: 155, category: 'sweet' },
  { id: 33, bn: 'পায়েস', en: 'Payesh (Rice Pudding)', calories: 140, serving: 150, servingCal: 210, category: 'sweet' },
  { id: 34, bn: 'হালুয়া', en: 'Halwa', calories: 350, serving: 100, servingCal: 350, category: 'sweet' },
  { id: 35, bn: 'পিঠা', en: 'Pitha (Rice Cake)', calories: 250, serving: 80, servingCal: 200, category: 'sweet' },
  { id: 36, bn: 'নারকেল নাড়ু', en: 'Coconut Ladoo', calories: 390, serving: 30, servingCal: 117, category: 'sweet' },

  // Snacks
  { id: 37, bn: 'সিঙারা', en: 'Singara (Samosa)', calories: 250, serving: 60, servingCal: 150, category: 'snack' },
  { id: 38, bn: 'কচুরি', en: 'Kachori', calories: 350, serving: 50, servingCal: 175, category: 'snack' },
  { id: 39, bn: 'আলুর চপ', en: 'Potato Chop', calories: 200, serving: 80, servingCal: 160, category: 'snack' },
  { id: 40, bn: 'বেগুনি', en: 'Brinjal Fritter (Begun Bhaja)', calories: 180, serving: 80, servingCal: 144, category: 'snack' },
  { id: 41, bn: 'ফুচকা', en: 'Fuchka (Pani Puri)', calories: 70, serving: 30, servingCal: 21, category: 'snack' },
  { id: 42, bn: 'ঝালমুড়ি', en: 'Jhal Muri', calories: 160, serving: 50, servingCal: 80, category: 'snack' },
  { id: 43, bn: 'চপ', en: 'Chop', calories: 220, serving: 80, servingCal: 176, category: 'snack' },
  { id: 44, bn: 'রোল', en: 'Egg Roll', calories: 290, serving: 120, servingCal: 348, category: 'snack' },

  // Main courses
  { id: 45, bn: 'বিরিয়ানি', en: 'Biryani', calories: 200, serving: 300, servingCal: 600, category: 'main' },
  { id: 46, bn: 'মোগলাই পরোটা', en: 'Mughlai Paratha', calories: 310, serving: 120, servingCal: 372, category: 'main' },

  // Beverages
  { id: 47, bn: 'দোকানের চা', en: 'Bengali Chai (with milk & sugar)', calories: 50, serving: 150, servingCal: 75, category: 'beverage' },

  // Fruits
  { id: 48, bn: 'কলা', en: 'Banana', calories: 89, serving: 100, servingCal: 89, category: 'fruit' },
  { id: 49, bn: 'আম', en: 'Mango', calories: 60, serving: 150, servingCal: 90, category: 'fruit' },
  { id: 50, bn: 'আপেল', en: 'Apple', calories: 52, serving: 150, servingCal: 78, category: 'fruit' },
  { id: 51, bn: 'কমলালেবু', en: 'Orange', calories: 47, serving: 130, servingCal: 61, category: 'fruit' },
  { id: 52, bn: 'পেঁপে', en: 'Papaya', calories: 43, serving: 150, servingCal: 65, category: 'fruit' },
  { id: 53, bn: 'নারকেল', en: 'Coconut (fresh)', calories: 354, serving: 30, servingCal: 106, category: 'fruit' },
  { id: 54, bn: 'তরমুজ', en: 'Watermelon', calories: 30, serving: 200, servingCal: 60, category: 'fruit' },
  { id: 55, bn: 'আনারস', en: 'Pineapple', calories: 50, serving: 150, servingCal: 75, category: 'fruit' },

  // Vegetables
  { id: 56, bn: 'আলু', en: 'Potato (raw)', calories: 77, serving: 100, servingCal: 77, category: 'vegetable' },
  { id: 57, bn: 'পেঁয়াজ', en: 'Onion', calories: 40, serving: 50, servingCal: 20, category: 'vegetable' },
  { id: 58, bn: 'রসুন', en: 'Garlic', calories: 149, serving: 10, servingCal: 15, category: 'vegetable' },
  { id: 59, bn: 'আদা', en: 'Ginger', calories: 80, serving: 10, servingCal: 8, category: 'vegetable' },
  { id: 60, bn: 'টমেটো', en: 'Tomato', calories: 18, serving: 100, servingCal: 18, category: 'vegetable' },
  { id: 61, bn: 'শসা', en: 'Cucumber', calories: 16, serving: 100, servingCal: 16, category: 'vegetable' },
  { id: 62, bn: 'গাজর', en: 'Carrot', calories: 41, serving: 100, servingCal: 41, category: 'vegetable' },
  { id: 63, bn: 'পালং শাক', en: 'Spinach', calories: 23, serving: 100, servingCal: 23, category: 'vegetable' },

  // Standard Indian foods
  { id: 64, bn: 'ইডলি', en: 'Idli', calories: 58, serving: 60, servingCal: 35, category: 'indian' },
  { id: 65, bn: 'দোসা', en: 'Dosa', calories: 168, serving: 100, servingCal: 168, category: 'indian' },
  { id: 66, bn: 'সাম্বার', en: 'Sambar', calories: 60, serving: 150, servingCal: 90, category: 'indian' },
  { id: 67, bn: 'পনির', en: 'Paneer', calories: 265, serving: 100, servingCal: 265, category: 'indian' },
  { id: 68, bn: 'ডাল মাখানি', en: 'Dal Makhani', calories: 130, serving: 200, servingCal: 260, category: 'indian' },
  { id: 69, bn: 'নান', en: 'Naan', calories: 295, serving: 80, servingCal: 236, category: 'indian' },
  { id: 70, bn: 'বাটার চিকেন', en: 'Butter Chicken', calories: 170, serving: 200, servingCal: 340, category: 'indian' },

  // International foods
  { id: 71, bn: 'পাস্তা', en: 'Pasta (cooked)', calories: 131, serving: 200, servingCal: 262, category: 'international' },
  { id: 72, bn: 'পিৎজা', en: 'Pizza (1 slice)', calories: 266, serving: 100, servingCal: 266, category: 'international' },
  { id: 73, bn: 'পাউরুটি (সাদা)', en: 'White Bread', calories: 265, serving: 30, servingCal: 80, category: 'international' },
  { id: 74, bn: 'পাউরুটি (বাদামি)', en: 'Brown Bread', calories: 247, serving: 30, servingCal: 74, category: 'international' },
  { id: 75, bn: 'চিকেন ব্রেস্ট', en: 'Chicken Breast (cooked)', calories: 165, serving: 100, servingCal: 165, category: 'international' },
  { id: 76, bn: 'স্যালমন মাছ', en: 'Salmon', calories: 208, serving: 100, servingCal: 208, category: 'international' },
  { id: 77, bn: 'ওটস', en: 'Oats (cooked)', calories: 71, serving: 200, servingCal: 142, category: 'international' },
];

// Search function
export function searchFoods(query) {
  if (!query || query.trim() === '') return foods;
  const q = query.toLowerCase().trim();
  return foods.filter(f =>
    f.bn.includes(query) ||
    f.en.toLowerCase().includes(q) ||
    f.category.toLowerCase().includes(q)
  );
}
