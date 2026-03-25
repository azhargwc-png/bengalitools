# Skill: SEO Content Creator
# BanglaTools — bengalitools.com
# Use this skill to build perfectly optimized tool pages and blog posts

---

## Purpose

Take a keyword identified by the keyword research skill and produce a
complete, Google-ready page or blog post for bengalitools.com. Every
page produced by this skill must be ready to index, rank, and earn
AdSense revenue without any further editing.

---

## Site Context — Read Before Every Build

- Site: bengalitools.com
- Framework: Astro with Tailwind CSS
- Language: Bengali-first, English toggle on every page
- Audience: Bengali speakers worldwide
- Every page needs BOTH Bengali and English versions
- The language toggle switches all visible text instantly
- Tools must work with pure JavaScript — no backend, no database
- Currency tools use frankfurter.app API (free, no key needed)
- Monetization: Google AdSense (2 ad slots per page)

---

## Two Page Types — Build Them Differently

### Type 1: Tool Page
A page where the primary element is an interactive calculator or converter.
The tool is the main content. Text supports and explains the tool.

### Type 2: Blog Post
A page where the primary element is an article answering a specific question.
A relevant tool is embedded within the article. Text IS the content.

---

## Type 1: Tool Page — Complete Build Specification

### Page Structure (in this exact order)

```
1. Page Header
2. Tool (interactive, above the fold)
3. How to Use (short, 3-4 steps)
4. What This Tool Does (150-200 word description)
5. Worked Examples (3 real scenarios with real numbers)
6. FAQ Section (5 questions and answers)
7. Related Tools (3 links to other site tools)
8. AdSense ad slots (above tool + below tool)
```

### 1. Page Header

Every tool page header must include:

**Bengali H1 (shown when Bengali is active):**
- Must contain the primary Bengali keyword exactly
- Must be under 60 characters
- Example: "বিএমআই ক্যালকুলেটর — আপনার BMI বের করুন"

**English H1 (shown when English is active):**
- Must contain the primary English keyword
- Must be under 60 characters
- Example: "BMI Calculator — Calculate Your Body Mass Index"

**Subtitle (both languages):**
- One sentence explaining what the tool does
- Example Bengali: "আপনার উচ্চতা ও ওজন দিয়ে সহজেই BMI বের করুন"
- Example English: "Enter your height and weight to instantly calculate your BMI"

### 2. The Tool Itself

Requirements:
- Works instantly — results show as user types, no submit button needed
- Works on mobile — large touch-friendly inputs
- Shows result prominently — large font, clear label
- Handles edge cases — empty input, zero, negative numbers
- Shows units clearly — always label what the numbers mean
- For currency tools — shows "Live rate" badge and last updated time
- No external dependencies except frankfurter.app for currency

### 3. How to Use Section

3-4 numbered steps in both Bengali and English.
Keep it simple — one line per step maximum.

Example (BMI):
Bengali:
1. আপনার উচ্চতা সেন্টিমিটারে লিখুন
2. আপনার ওজন কেজিতে লিখুন
3. আপনার BMI তাৎক্ষণিকভাবে দেখুন

English:
1. Enter your height in centimetres
2. Enter your weight in kilograms
3. See your BMI result instantly

### 4. What This Tool Does — Description Section

**Length:** 150-200 words in Bengali + 150-200 words in English
**Tone:** Simple, clear, helpful — like explaining to a friend
**Must include:**
- What the tool calculates and why it matters
- Who uses this tool and when
- Any important context or background
- A natural mention of the primary keyword in the first sentence

**Bengali writing rules:**
- Use simple everyday Bengali — not academic or formal Bengali
- Write as if talking to someone from West Bengal or Bangladesh
- Avoid unnecessary English words when Bengali words exist
- Use numerals (১, ২, ৩) consistently throughout

**English writing rules:**
- Simple clear English — not technical
- Short sentences — maximum 20 words per sentence
- Active voice always

### 5. Worked Examples Section

3 real-world examples showing the tool in action with actual numbers.
Make the examples realistic and relatable to Bengali users.

Format for each example:
```
Example 1: [Scenario description]
Input: [exact values]
Result: [exact output with explanation]
```

BMI Calculator examples:
- Example 1: A 25-year-old woman, 158cm tall, weighing 55kg
- Example 2: A 35-year-old man, 170cm tall, weighing 80kg
- Example 3: A 16-year-old student, 165cm tall, weighing 45kg

kg to lbs examples:
- Example 1: Newborn baby weight (3.5 kg)
- Example 2: Airline luggage limit (23 kg)
- Example 3: Person's body weight (70 kg)

Currency examples:
- Example 1: Small remittance (100 USD)
- Example 2: Medium remittance (500 USD)
- Example 3: Large amount (1000 USD)

### 6. FAQ Section

5 questions and answers in both Bengali and English.

**How to find the right questions:**
- Use the PAA (People Also Ask) questions found during keyword research
- Think about what someone would ask after using the tool
- Include one question about accuracy or how the calculation works
- Include one question comparing to alternatives

**FAQ format:**
```
Q: [Question in Bengali]
A: [2-3 sentence answer in Bengali]

Q: [Same question in English]
A: [Same answer in English]
```

**BMI FAQ examples:**
- বিএমআই কত হলে স্বাস্থ্যকর? / What is a healthy BMI?
- মহিলা ও পুরুষের BMI কি আলাদা? / Is BMI different for men and women?
- BMI কি সবসময় সঠিক? / Is BMI always accurate?
- শিশুদের BMI কীভাবে মাপা হয়? / How is BMI measured for children?
- BMI কমাতে কী করব? / What should I do to lower my BMI?

### 7. Related Tools Section

3 links to other tools on the site that are logically related.

Format:
- Tool name in Bengali
- Tool name in English
- One sentence explaining the connection

BMI calculator related tools:
- আদর্শ ওজন ক্যালকুলেটর (Ideal Weight Calculator) — আপনার উচ্চতা অনুযায়ী আদর্শ ওজন জানুন
- ক্যালরি ক্যালকুলেটর (Calorie Calculator) — দৈনিক ক্যালরির চাহিদা জানুন
- কেজি থেকে পাউন্ড কনভার্টার (kg to lbs Converter) — ওজন পাউন্ডে দেখুন

### 8. AdSense Ad Slots

Place two ad slot divs in every tool page:
- Slot 1: Between the page header and the tool
- Slot 2: Between the FAQ section and the related tools

```html
<!-- AdSense Slot 1 — Above Tool -->
<div class="adsense-slot" data-slot="above-tool">
  <!-- AdSense code goes here after approval -->
</div>

<!-- AdSense Slot 2 — Below FAQ -->
<div class="adsense-slot" data-slot="below-faq">
  <!-- AdSense code goes here after approval -->
</div>
```

---

## SEO Meta Tags — Required for Every Tool Page

```
Title tag (Bengali active): [Primary Bengali Keyword] | BanglaTools
Title tag (English active): [Primary English Keyword] | BanglaTools
Max length: 60 characters including "| BanglaTools"

Meta description (Bengali): [150-160 char description including keyword]
Meta description (English): [150-160 char description including keyword]

Canonical URL: https://bengalitools.com/[category]/[page-slug]

hreflang tags:
- bn: Bengali version
- en: English version
- x-default: Bengali (primary language)

Open Graph:
- og:title: Same as title tag
- og:description: Same as meta description
- og:url: Canonical URL
- og:type: website
```

---

## Type 2: Blog Post — Complete Build Specification

### Page Structure (in this exact order)

```
1. Article Header (H1 + date + reading time)
2. Introduction (2-3 paragraphs answering the question directly)
3. Main Content (H2 sections covering the topic in depth)
4. Embedded Tool (the relevant tool from the site)
5. Practical Tips or Examples
6. FAQ Section (5 questions)
7. Conclusion with CTA to use the tool
8. Related Posts (3 links to other blog posts)
9. Related Tools (2 links to tool pages)
```

### Article Length

- Phase 1 posts (easy keywords): 500-700 words
- Phase 2 posts (medium keywords): 700-1000 words
- Phase 3 posts (authority building): 1000-1500 words

Never write more than needed. Short well-structured articles
outrank long rambling ones for Bengali searches.

### Introduction Rules

- Answer the question directly in the first paragraph
- Do not make the reader scroll to find the answer
- Use the primary keyword naturally in the first sentence
- Keep introduction under 100 words

Example for "বিএমআই কত হলে স্বাস্থ্যকর":

Bengali: "বিশ্ব স্বাস্থ্য সংস্থার মতে, ১৮.৫ থেকে ২৪.৯ এর মধ্যে বিএমআই
স্বাস্থ্যকর বলে বিবেচিত হয়। ১৮.৫ এর নিচে হলে কম ওজন এবং ২৫ এর
উপরে হলে অতিরিক্ত ওজন বলা হয়।"

### H2 Section Structure

Use clear H2 headings that mirror what people search.
Each H2 should be a question or clear statement.

Example for BMI post:
- H2: বিএমআই কত হলে কম ওজন?
- H2: বিএমআই কত হলে স্বাস্থ্যকর?
- H2: বিএমআই কত হলে অতিরিক্ত ওজন?
- H2: বিএমআই কত হলে স্থূলতা?
- H2: নিজের বিএমআই কীভাবে বের করবেন?

### Embedded Tool

Every blog post embeds the relevant tool from the site.
Place it after the main explanation — when the reader understands
the concept and is ready to calculate for themselves.

Add a clear CTA before the tool:
Bengali: "নিচে আমাদের বিনামূল্যে বিএমআই ক্যালকুলেটর ব্যবহার করুন:"
English: "Use our free BMI calculator below:"

### Internal Linking Rules

Every blog post must link to:
- The primary tool page (at least 2 times naturally in the text)
- 2-3 other related blog posts
- 1-2 other tool pages

Use natural anchor text — not "click here" or "read more"
Use the keyword as anchor text where it fits naturally.

---

## SEO Meta Tags — Required for Every Blog Post

```
Title tag: [Primary Keyword] — বাংলায় সম্পূর্ণ গাইড | BanglaTools
Max 60 characters

Meta description: [Answer the question + mention the tool] 
Max 160 characters

URL slug: /blog/[keyword-in-english-transliteration]
Example: /blog/bmi-healthy-range-bangla

Schema markup: Article schema with datePublished and dateModified
```

---

## Content Quality Rules — Never Break

1. **Answer first, explain second.** Never bury the answer.
   Bengali users are on mobile — they need the answer fast.

2. **Write Bengali naturally.** Never translate directly from English.
   Write the Bengali version first, then write the English version
   separately. Do not translate one from the other.

3. **Every page needs real content.** Minimum 150 words Bengali +
   150 words English on tool pages. Minimum 500 words on blog posts.
   Pages with less content will not get indexed.

4. **FAQs must match real searches.** Use the PAA questions found
   during keyword research. These are literally what people type
   into Google — having them on the page helps ranking significantly.

5. **Examples must use realistic Bengali context.**
   Use Bengali names (Rahim, Priya, Karim), Bengali cities
   (Kolkata, Dhaka, Chittagong), Bengali foods, and amounts
   in Indian Rupees or Bangladeshi Taka where relevant.

6. **No keyword stuffing.** Use the primary keyword naturally.
   Once in H1, once in the description, once in the first FAQ.
   Do not force it into every sentence.

7. **Mobile first.** Write short paragraphs — maximum 3 sentences.
   Use bullet points and numbered lists wherever it helps clarity.
   Long paragraphs look terrible on a phone screen.

8. **Test every tool before publishing.** Enter edge cases:
   zero values, very large numbers, decimal numbers, negative numbers.
   The tool must handle all of these without breaking or showing
   incorrect results.
