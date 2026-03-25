# Skill: SEO Audit
# BanglaTools — bengalitools.com
# Use this skill monthly to check site health and fix issues before they hurt rankings

---

## Purpose

Run a complete SEO audit of bengalitools.com and produce a prioritized
fix list. Every issue found must have a specific, actionable fix —
not vague advice. Run this audit once a month and after every major
update to the site.

---

## Site Context — Read Before Every Audit

- Site: bengalitools.com
- Framework: Astro (static site)
- Language: Bengali-first with English toggle
- Hosting: Vercel
- CDN and DNS: Cloudflare
- Domain: GoDaddy
- Google Search Console: Connected
- Target: Bengali speakers worldwide
- New domain — indexing speed and content quality are the top priorities

---

## Audit Checklist — Run Every Section

---

### Section 1: Indexing Health

This is the most critical section for a new site.

**Check 1.1 — How many pages are indexed?**

Go to Google Search Console → Coverage → Valid
Count the total indexed pages.

Target milestones:
- Week 2 after launch: 5+ pages indexed
- Month 1: 15+ pages indexed
- Month 2: 25+ pages indexed
- Month 3: All tool pages indexed

If below target → identify which pages are not indexed and why.

**Check 1.2 — Are there crawl errors?**

Go to Google Search Console → Coverage → Error
List every URL showing an error.

Common errors and fixes:
- 404 Not Found: Page was deleted or URL changed → add redirect
- Redirect Error: Too many redirects → fix in Cloudflare or Vercel
- Soft 404: Page exists but has thin content → add more content
- Blocked by robots.txt: Check robots.txt is not blocking pages

**Check 1.3 — Discovered but not indexed pages**

Go to Google Search Console → Coverage → Valid with warnings
AND Excluded → Discovered, currently not indexed

For each page in this status, check:
1. Does the page have at least 150 words of content in Bengali?
2. Does the page have a proper meta title and description?
3. Is the page linked from other pages on the site?
4. Has the page been manually requested for indexing?

Fix: Add content, fix meta tags, add internal links, request indexing manually.

**Check 1.4 — Sitemap status**

Go to Google Search Console → Sitemaps
Confirm sitemap.xml is submitted and showing no errors.
Check the number of URLs submitted matches the number of pages on the site.

Fix if sitemap shows errors: Regenerate sitemap and resubmit.

**Check 1.5 — Manual indexing requests**

For every important page not yet indexed, use the URL Inspection tool
in Google Search Console to request indexing manually.

Priority pages to check every month:
- Homepage (/)
- /food/bengali-food-chart (high SEO value static page)
- /currency/aed-to-inr (high traffic potential)
- /currency/usd-to-inr (high traffic potential)
- /health/bmi-calculator (highest search volume tool)

---

### Section 2: Content Quality Audit

**Check 2.1 — Thin content pages**

Check every tool page for minimum content requirements:
- Does it have 150+ words in Bengali? (count actual words)
- Does it have 150+ words in English?
- Does it have 3 worked examples with real numbers?
- Does it have 5 FAQ questions and answers?
- Does it have a "Related Tools" section with 3 links?

Any page failing these checks → add missing content immediately.
These pages will not get indexed without this content.

**Check 2.2 — Meta titles and descriptions**

Check every page has:
- A unique meta title (not the same as any other page)
- Meta title under 60 characters
- Meta title contains the primary keyword
- A meta description under 160 characters
- Meta description includes the primary keyword
- Meta description is written to encourage clicks

Red flags:
- Empty meta title or description → fix immediately
- Duplicate meta titles across pages → make each unique
- Meta title over 60 characters → Google will truncate it
- Meta description that doesn't mention the keyword → rewrite it

**Check 2.3 — H1 tags**

Every page must have exactly one H1 tag.
The H1 must contain the primary keyword for that page.
Check: Are there pages with no H1? Are there pages with multiple H1s?

**Check 2.4 — Bengali content quality**

Spot-check 5 random pages:
- Is the Bengali text actually Bengali or transliteration?
  (should be Bengali script: বাংলা — not: Bangla or bengali)
- Does the Bengali text match the English toggle correctly?
- Are Bengali numerals used consistently? (১, ২, ৩ not 1, 2, 3)
- Is the language toggle working on all tested pages?

**Check 2.5 — FAQ sections**

Check that FAQ questions match real search queries.
Cross-reference with Google's "People Also Ask" for each tool's keyword.
If PAA shows new questions that are not in the FAQ → add them.

---

### Section 3: Technical SEO Audit

**Check 3.1 — Page speed**

Test these pages at pagespeed.web.dev:
- Homepage
- BMI calculator page
- Most visited page (check Google Analytics)

Targets:
- Mobile score: 85+ (90+ is excellent)
- Desktop score: 90+ (95+ is excellent)

Common Astro speed issues and fixes:
- Large images: compress all images, use WebP format
- Unused JavaScript: remove any unused scripts
- Render-blocking resources: defer non-critical scripts

**Check 3.2 — Mobile usability**

Go to Google Search Console → Mobile Usability
Check for any mobile usability errors.

Also manually test on a real phone:
- Does the language toggle work on mobile?
- Are input fields large enough to tap accurately?
- Do calculator results display correctly on small screens?
- Is text readable without zooming?
- Are buttons large enough (minimum 44px touch target)?

**Check 3.3 — HTTPS and SSL**

Confirm site loads on https:// not http://
Confirm Cloudflare SSL certificate is active and not expired.
Check: Does http://bengalitools.com redirect to https://bengalitools.com?

**Check 3.4 — Broken links**

Check for broken internal links on the site:
- Links in the navigation menu
- Related tools links on each page
- Blog post internal links
- Footer links

Fix any 404 links immediately — broken internal links hurt rankings.

**Check 3.5 — Canonical tags**

Every page must have a canonical tag pointing to its own URL.
Check that no two pages share the same canonical URL.
Check that the canonical URL is the correct final URL (with https://).

**Check 3.6 — robots.txt**

Confirm robots.txt is accessible at bengalitools.com/robots.txt
Confirm it allows Googlebot to crawl the site.
Confirm it references the sitemap URL.

Correct robots.txt for this site:
```
User-agent: *
Allow: /
Sitemap: https://bengalitools.com/sitemap.xml
```

**Check 3.7 — Structured data / Schema markup**

Check that tool pages have appropriate schema markup.
Recommended schemas for this site:

For tool pages: WebApplication schema
```json
{
  "@type": "WebApplication",
  "name": "বিএমআই ক্যালকুলেটর",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR"
  }
}
```

For blog posts: Article schema with datePublished and dateModified

For FAQ sections: FAQPage schema — this gets FAQ results shown directly
in Google search results which significantly increases click-through rate.

---

### Section 4: Internal Linking Audit

**Check 4.1 — Homepage links to all tools**

Confirm the homepage links to every single tool page.
If any tool pages are missing from the homepage grid → add them.

**Check 4.2 — Related tools sections**

Check 5 random tool pages have a related tools section with 3 links.
Related tools should be genuinely related — not random.

**Check 4.3 — Blog posts link to tools**

Check every published blog post links to at least one tool page.
The link should be natural — in the body text, not just in a sidebar.

**Check 4.4 — Orphan pages**

Identify any pages that no other page links to.
Every page must be linked from at least one other page.
Orphan pages rarely get indexed.

---

### Section 5: Search Console Performance Review

Run this every month to understand what's working.

**Check 5.1 — Which pages are getting impressions?**

Go to Search Console → Performance → Pages
Sort by impressions (highest first)
These pages are appearing in search results — optimize them further.

**Check 5.2 — Which keywords are we showing up for?**

Go to Search Console → Performance → Queries
Look for Bengali keywords in the list.
Are the expected Bengali keywords appearing?
Are there any unexpected keywords to capitalize on?

**Check 5.3 — Click-through rate (CTR)**

Any page with impressions but low CTR (under 3%) needs a better
meta title or meta description. Rewrite them to be more compelling.

**Check 5.4 — Average position**

Pages ranking in positions 4-10 are close to page 1.
These are the highest priority pages to improve.
Add more content, improve FAQ, add more internal links to these pages.

---

### Section 6: Currency API Health Check

**Check 6.1 — frankfurter.app API working?**

Test each currency converter manually:
- USD to INR
- AED to INR
- EUR to INR
- GBP to INR
- BDT to INR

Confirm live rates are loading and displaying correctly.
Confirm the "Last updated" timestamp is showing today's date.

If API is down or rates not updating:
- Check frankfurter.app status
- Implement a fallback that shows the last known rate with a warning

---

## Audit Report Format

Always deliver the audit as a complete report:

```
# SEO Audit Report — bengalitools.com
# Date: [date]
# Audited by: Claude Code using skills/seo-audit.md

## Overall Health Score: [X/10]

## Critical Issues — Fix Today
[Any issue that is actively hurting rankings or preventing indexing]
1. [Issue] → [Specific fix with exact steps]

## Important Issues — Fix This Week  
[Issues that will hurt rankings if left unfixed]
1. [Issue] → [Specific fix]

## Minor Issues — Fix This Month
[Small improvements that help incrementally]
1. [Issue] → [Specific fix]

## Indexing Status
- Total pages on site: [number]
- Total pages indexed: [number]
- Pages with indexing errors: [number]
- Pages discovered but not indexed: [list them]
- Recommended manual indexing requests: [list URLs]

## Content Quality Summary
- Pages passing content requirements: [number]
- Pages with thin content: [list them with word counts]
- Pages missing FAQs: [list them]
- Pages missing worked examples: [list them]

## Technical Summary
- Mobile speed score: [number]
- Desktop speed score: [number]
- Broken links found: [number and list]
- Pages missing meta descriptions: [list]
- Pages with duplicate meta titles: [list]

## Search Console Highlights
- Total impressions this month: [number]
- Top 5 pages by impressions: [list]
- Top 5 keywords: [list]
- Pages with low CTR to improve: [list]

## Currency API Status
- All converters working: Yes/No
- Any rate errors: [describe]

## Wins This Month
[What improved since last audit — always include something positive]

## Top 3 Priorities for Next Month
1. [Most important action]
2. [Second priority]
3. [Third priority]

## ROADMAP.md Updates Needed
[List any changes to make to ROADMAP.md based on this audit]
```

---

## Audit Schedule

| Audit Type | Frequency | When |
|-----------|-----------|------|
| Full audit (all 6 sections) | Monthly | First Monday of every month |
| Indexing check only | Weekly | Every Monday |
| Speed check | After any major update | Same day as update |
| Currency API check | Weekly | Every Monday |
| Search Console review | Weekly | Every Monday |

---

## Quality Rules — Never Break

1. **Always check real data.** Never estimate or guess.
   Use Google Search Console, PageSpeed Insights, and manual
   testing on a real phone. Real data only.

2. **Every issue needs a specific fix.** Not "improve content" —
   instead "add 80 more words to the BMI calculator description
   and add FAQ questions 4 and 5 which are currently missing."

3. **Fix critical issues first.** Never spend time on minor
   improvements while critical indexing or technical errors exist.

4. **Update ROADMAP.md after every audit.**
   Add all found issues to the SEO Tasks section of ROADMAP.md
   so nothing gets forgotten between audits.

5. **Track trends over time.**
   Add audit results to the Monthly SEO Audit Log in ROADMAP.md
   every month. Trends tell you more than single data points.
