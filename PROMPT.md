# Website Remake & Customization Project: تكريت تقرأ

> **Agency**: Cobalt Agency
> **Role**: You are Antigravity AI, an elite full-stack web developer and UI/UX designer.
> **Objective**: Evaluate all candidate website templates provided in `/home/zet8/Desktop/cobalt/templates/`, **autonomously select the TWO most suitable templates** for `تكريت تقرأ` based on the client's business profile and industry in `/home/zet8/Desktop/Cobalt Agency Data/projects/تكريت تقرأ/data/client_info.json`, and remake/customize both into two distinct, production-ready website options.
> **Project Workspace**: `/home/zet8/Desktop/Cobalt Agency Data/projects/تكريت تقرأ/`
> **Output Destination**: Build Option 1 into `/home/zet8/Desktop/Cobalt Agency Data/projects/تكريت تقرأ/site1/` (or `./site1/`) and Option 2 into `/home/zet8/Desktop/Cobalt Agency Data/projects/تكريت تقرأ/site2/` (or `./site2/`).
> **Design Tone**: High commercial conversion appeal, contrasting design aesthetics (Option 1: Minimalist & Clean Corporate; Option 2: Bold Dynamic Showcase)
> **Framework**: Clean responsive HTML5 / Modern CSS / Vanilla JS
>
> **Project Architecture**:
> - `/home/zet8/Desktop/cobalt/templates/`: Centralized Candidate Templates Catalog (13 template options available):
>   - `/home/zet8/Desktop/cobalt/templates/minimal-1.0.0/`: **Minimalist Agency & Modern Business** (Clean, contemporary design with smooth typography, feature grids, and project showcase sections. Perfect for modern enterprises, manufacturing groups, and creative agencies.)
>   - `/home/zet8/Desktop/cobalt/templates/novena/`: **Novena Corporate & Professional Services** (Structured, trustworthy corporate layout with multi-page support, department/service breakdowns, appointment forms, and team sections.)
>   - `/home/zet8/Desktop/cobalt/templates/JohnDoe-gh-pages/`: **John Doe Personal Brand & Portfolio** (High-impact single-page portfolio with prominent hero header, about breakdown, skills/services timeline, and interactive contact section.)
>   - `/home/zet8/Desktop/cobalt/templates/Clinic-1.0.0/`: **Clinic Healthcare & Medical Center** (Comprehensive healthcare and clinical services template with appointment booking, doctor profiles, department details, emergency response info, and patient testimonials.)
>   - `/home/zet8/Desktop/cobalt/templates/Hilux-1.0.0/`: **Hilux Luxury Real Estate & Property Showcase** (Premium real estate and property agency template featuring interactive property search, agent profiles, floor plans, video hero, and property detail pages.)
>   - `/home/zet8/Desktop/cobalt/templates/Mueller_1_0_0/`: **Mueller Creative Agency & Design Studio** (Bold, expressive design studio and creative agency layout with interactive portfolio grid, client logo marquee, case study highlights, and sleek typography.)
>   - `/home/zet8/Desktop/cobalt/templates/feane-1.0.0/`: **Feane Gourmet Restaurant & Fast Food** (Vibrant culinary template designed for restaurants, cafes, and food delivery services with dynamic menu filters, online table booking, customer reviews, and discount offers.)
>   - `/home/zet8/Desktop/cobalt/templates/folio-tailwind-1.0.0/`: **Folio Tailwind UI/UX Designer & Tech Portfolio** (Ultra-fast modern portfolio built with Tailwind CSS and Alpine.js. Features dark/light mode toggle, case studies, blog articles, interactive project cards, and clean typography.)
>   - `/home/zet8/Desktop/cobalt/templates/furnish-1.0.0/`: **Furnish Modern Home Decor & Furniture Store** (Elegant eCommerce storefront for furniture and interior design brands. Includes hero carousel sliders, product grid with filters, testimonials, quick view modal, and responsive offcanvas menu.)
>   - `/home/zet8/Desktop/cobalt/templates/html5up-ethereal/`: **Ethereal Horizontal Storytelling & Showcase** (Unique horizontal-scrolling showcase with immersive visual storytelling panels, gallery lightbox, modular panel layouts, and smooth navigation.)
>   - `/home/zet8/Desktop/cobalt/templates/monoline-1.0.0/`: **Monoline Corporate Agency & Business Solutions** (Sophisticated corporate and digital agency template with multi-page structure, video background sections, case studies, pricing tables, team showcase, and service breakdowns.)
>   - `/home/zet8/Desktop/cobalt/templates/purdue-1.0.0/`: **Purdue Academy, Courses & Education Hub** (Comprehensive academic and eLearning portal template with course catalogs, instructor profiles, event management, blog, eCommerce course shop, and student registration.)
>   - `/home/zet8/Desktop/cobalt/templates/icons/`: **Cobalt Vector Icons Studio & Asset Library** (Comprehensive library of 1,850+ clean, modern Lucide SVG vector icons with interactive instant search, 40+ category filters, stroke/size controls, and 1-click SVG/HTML code copy.)
> - `/home/zet8/Desktop/Cobalt Agency Data/projects/تكريت تقرأ/data/client_info.json`: Complete client profile, contacts, schedule, and offerings.
> - `/home/zet8/Desktop/Cobalt Agency Data/projects/تكريت تقرأ/data/assets/`: **Strictly optimized `.webp` images** (logo, team, services, gallery) and `manifest.json`.
> - **Autonomous Stock Asset Sourcing**: If client photos in `./data/assets/` are insufficient for key sections, Antigravity AI autonomously gathers, visually verifies via `view_file`, and converts royalty-free photography into `.webp`.
> - `/home/zet8/Desktop/Cobalt Agency Data/projects/تكريت تقرأ/data/context_images/`: **Context & Reference Images ONLY** (Grouped separately. DO NOT drop directly into website UI; analyze for design, mood, and info only).
> - `/home/zet8/Desktop/Cobalt Agency Data/projects/تكريت تقرأ/site1/` (or `./site1/`): Completed Website Option 1
> - `/home/zet8/Desktop/Cobalt Agency Data/projects/تكريت تقرأ/site2/` (or `./site2/`): Completed Website Option 2
> - `/home/zet8/Desktop/Cobalt Agency Data/projects/تكريت تقرأ/proposal/` (or `./proposal/`): Reserved for Proposal Builder (landing images, QR codes, delivery docs)

---

## 1. Brand Identity & Overview

- **Business Name**: `تكريت تقرأ`
- **Client / Contact Person**: `الاستاذ مصطفى الرستم`
- **Tagline / Slogan**: *"مجتمع يقرأ.. أمة ترتقي"*
- **Established (Since)**: 2017

### Business Story & Background
تأسست "مكتبة تكريت تقرأ" كمنصة ثقافية وخدمية تهدف إلى تشجيع القراءة ونشر الثقافة . بدأنا كفكرة لجمع شمل القراء وتوفير أحدث الكتب والروايات العالمية والمحلية بأسعار مناسبة مع خدمة توصيل سريعة، واليوم نسعى لنكون الوجهة الأولى لكل عاشقا للكتب ومحباً للمعرفة في المحافظة.

---

## 2. Brand Logo & Visual Assets

**Brand Logo Asset**: `./data/assets\logo\logo_لقطة_الشاشة_2026-10-06_202637.webp`
- Display prominently in navbar header, browser favicon, and footer across all templates.

---

## 3. Contact Details & Schedule

- **Working Days**: Mon, Tue, Wed, Thu, Fri, Sat, Sun
- **Operating Hours**: `10:00 AM - 10:00 PM`

**Phone Numbers**:
- **WhatsApp**: `0770 758 0936` (Link: `tel:07707580936`)

- **Location Address**: صلاح الدين-تكريت-شارع الزهور
- **Google Maps Location**: [Open Directions](https://maps.app.goo.gl/xqAdiArez9WNcaD96)

**Social Channels**:
- [Instagram](https://www.instagram.com/tikrit.reads)
- [TikTok](https://www.tiktok.com/@tikrit.reads)
- [Facebook](https://www.facebook.com/tikrit.reads)
- [Telegram](https://t.me/Tikrit_reads)

---

## 4. Team & Leadership

### الاستاذ مصطفى الرستم — *المؤسس والمدير العام*
- **WebP Photo**: `./data/assets\team\الاستاذ_مصطفى_الرستم_photo_5346333972935417346_y.webp`

---

## 5. WebP Media Assets Manifest (For UI Embed)
Production media files to be integrated directly into the templates are stored strictly as `.webp` inside `./data/assets/`:

| Category | Relative WebP Path | Title / Placement | Description |
|---|---|---|---|
| **Logo** | `./data/assets\logo\logo_لقطة_الشاشة_2026-10-06_202637.webp` | Brand Logo | Brand visual mark |
| **Team** | `./data/assets\team\الاستاذ_مصطفى_الرستم_photo_5346333972935417346_y.webp` | Photo: الاستاذ مصطفى الرستم | Role: المؤسس والمدير العام |

---

## 6. Context & Reference Images (STRICTLY FOR CONTEXT ONLY — DO NOT EMBED IN UI)

> ⚠️ **CRITICAL INSTRUCTION FOR ANTIGRAVITY AI**:
> The images in `./data/context_images/` are provided **STRICTLY FOR INFORMATIVE CONTEXT AND REFERENCE**.
> **DO NOT drop, link, or embed the images in this folder directly into the website UI or HTML templates.**
> **INSTEAD**: Analyze these images to understand the client's design preferences, color vibes, real-world style, typography, and atmosphere, and use those insights to shape your layout and styling decisions.

| Relative Path | Reference Topic | Context & Usage Notes |
|---|---|---|
| `./data/context_images\context_1_لقطة_الشاشة_2026-10-06_205539.webp` | Context Reference | - |

---

## 7. Antigravity AI Action Instructions

1. **Analyze Client Profile & Available Template Candidates**:
   - Carefully inspect `./data/client_info.json` to understand `تكريت تقرأ`'s industry, core offerings, target audience, brand story, and aesthetic tone.
   - Explore the candidate templates in `/home/zet8/Desktop/cobalt/templates/` (reviewing HTML structures, design vibes, component layouts, and responsiveness).

2. **Autonomously Select the TWO Best Matching Templates**:
   - Intelligently choose the **TWO most suitable templates** from `/home/zet8/Desktop/cobalt/templates/` that provide `تكريت تقرأ` with the strongest commercial appeal, high conversion potential, and contrasting design aesthetics (e.g. one clean modern corporate style, and one dynamic service/portfolio showcase style).
   - Clearly declare your two chosen template selections in your execution plan.

3. **Remake Selected Template #1 (Build into `/home/zet8/Desktop/Cobalt Agency Data/projects/تكريت تقرأ/site1/` or `./site1/`)**:
   - Copy template source files directly from `/home/zet8/Desktop/cobalt/templates/` into `/home/zet8/Desktop/Cobalt Agency Data/projects/تكريت تقرأ/site1/`.
   - Completely customize the first chosen template with `تكريت تقرأ`'s information from `/home/zet8/Desktop/Cobalt Agency Data/projects/تكريت تقرأ/data/client_info.json`.
   - Embed the brand logo from `./data/assets\logo\logo_لقطة_الشاشة_2026-10-06_202637.webp` and production photos from `./data/assets/`.
   - Ensure all team member profiles, contact links (tel:, mailto:), maps directions work seamlessly.
   - **Export Final Site**: Build directly into `/home/zet8/Desktop/Cobalt Agency Data/projects/تكريت تقرأ/site1/`.

4. **Remake Selected Template #2 (Build into `/home/zet8/Desktop/Cobalt Agency Data/projects/تكريت تقرأ/site2/` or `./site2/`)**:
   - Copy template source files directly from `/home/zet8/Desktop/cobalt/templates/` into `/home/zet8/Desktop/Cobalt Agency Data/projects/تكريت تقرأ/site2/`.
   - Completely customize the second chosen template to give `تكريت تقرأ` a contrasting, polished alternative choice.
   - Embed the brand logo from `./data/assets\logo\logo_لقطة_الشاشة_2026-10-06_202637.webp` and production photos from `./data/assets/`.
   - Ensure all team member profiles, contact links (tel:, mailto:), maps directions work seamlessly.
   - **Export Final Site**: Build directly into `/home/zet8/Desktop/Cobalt Agency Data/projects/تكريت تقرأ/site2/`.

5. **Autonomous Royalty-Free Image Sourcing, Visual Verification & WebP Optimization**:
   - **Detect Asset Gaps**: Review `تكريت تقرأ`'s provided media in `./data/assets/`. If photos for key sections (Hero banner, services, about/team, or gallery) are missing or insufficient, you are authorized and instructed to autonomously source suitable photography.
   - **Search Restriction-Free Destinations**: Search copyright-free, royalty-free sources (such as Unsplash, Pexels, Wikimedia Commons, or Pixabay) matching `تكريت تقرأ`'s exact industry niche and tone.
   - **Download Candidates to Scratch**: Download candidate images to a temporary workspace folder (e.g., `./temp_assets/`).
   - **Mandatory Visual Inspection**: Call `view_file` on each downloaded image candidate to visually examine it before embedding. Verify:
     1. **Composition & Clarity**: Sharp, modern, high-resolution aesthetic.
     2. **Industry Match**: Genuine relevance to `تكريت تقرأ`'s specific niche (e.g. real clinic facilities for veterinarians, realistic modern espresso bar for cafes, professional corporate boardroom for lawyers).
     3. **Zero Watermarks**: Strictly confirm there are NO visible watermarks, stock photo logos, or low-quality digital artifacts.
     *(If a candidate fails visual inspection, discard it and download an alternative candidate).*
   - **Convert to WebP & Optimize**: Convert all approved images into lightweight `.webp` using Python PIL (resize to ~1600px width for wide Hero sections, ~800px width for cards/grids, quality=82):
     ```bash
     python3 -c "from PIL import Image; im = Image.open('temp_assets/candidate.jpg').convert('RGB'); im.thumbnail((1600, 1600)); im.save('./site1/assets/images/hero.webp', 'WEBP', quality=82)"
     ```
   - **Self-Contained Deployment**: Place the converted `.webp` assets directly into each website's assets directory (e.g. `./site1/assets/images/` and `./site2/assets/images/`) and link them with responsive `<img>` tags or CSS background images. Never leave placeholder boxes or broken images.
   - **Clean Up**: Remove the temporary `./temp_assets/` directory before finalizing.

6. **STRICT MANDATE — Context Images Handling**:
   - **DO NOT** drop, embed, or link any image from `/home/zet8/Desktop/Cobalt Agency Data/projects/تكريت تقرأ/data/context_images/` into `<img>` tags, CSS `background-image`, or any UI element.
   - **DO** inspect and examine these images to draw visual inspiration: adopt similar spacing moods, design elegance, and typography hierarchy.

7. **Output Deployment & Production Quality Standards**:
   - **CRITICAL**: The final production website files for `تكريت تقرأ` must be placed inside `/home/zet8/Desktop/Cobalt Agency Data/projects/تكريت تقرأ/site1/` and `/home/zet8/Desktop/Cobalt Agency Data/projects/تكريت تقرأ/site2/`:
     - `/home/zet8/Desktop/Cobalt Agency Data/projects/تكريت تقرأ/site1/` (or `./site1/` inside project) (Completed Website Option 1)
     - `/home/zet8/Desktop/Cobalt Agency Data/projects/تكريت تقرأ/site2/` (or `./site2/` inside project) (Completed Website Option 2)
   - **STRICT WORKSPACE MANDATE**: The destinations above are ABSOLUTE. Do NOT create `./site1/` or `./site2/` inside the parent agency folder or current terminal directory (e.g. `/home/zet8/Desktop/cobalt/`). Target `/home/zet8/Desktop/Cobalt Agency Data/projects/تكريت تقرأ/` directly.
   - 100% responsive on Mobile, Tablet, and Desktop across both website options.
   - Ensure all assets (CSS, JS, images) are self-contained or copied properly so opening `index.html` in each site directory works out of the box.
   - No placeholder "Lorem Ipsum" remaining.

8. **Mandatory Client Website Cleanup & Git Setup (.gitignore)**:
   - **Clean Up the Client Website Build Folders**: After successfully building and verifying `تكريت تقرأ`'s website options, perform a thorough cleanup of the final deliverable website directories (`./site1/`, `./site2/`, and customer deployment targets):
     - **Clean Up Entered Data**: Remove any raw data files (e.g. `client_info.json`, `client_data.json`, `manifest.json`, temporary data dumps, or raw source JSONs) from inside the final website delivery folders.
     - **Clean Up Entered Prompt**: Ensure `PROMPT.md` or any copies/drafts of the prompt are NOT left inside the final website build directories.
     - **Clean Up Markdown & Documentation Files**: Remove all `.md` files (such as `README.md`, `NOTES.md`, `TODO.md`, `CHANGELOG.md`, template documentation `.md` files) from inside the final website delivery folders. The client website delivery must contain strictly clean, production-ready website assets (HTML, CSS, JS, fonts, media) with zero agency prompt or data files.
   - **Add `.gitignore`**: Add a clean, production-ready `.gitignore` file to the project and website repositories covering standard ignores (e.g. `.DS_Store`, `Thumbs.db`, `.idea/`, `.vscode/`, `node_modules/`, `*.log`, `.env`, temporary files, and OS caches).
