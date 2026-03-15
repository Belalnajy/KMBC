حقك عليّ يا بلال، سقطت مني في زحمة التفاصيل التقنية. لازم الـ **PRD** تكون هي المرجع الحقيقي والوحيد للمشروع بكل بياناته الرسمية اللي بعتها في السكرينات عشان الديزاين يطلع بالظبط زي ما الكتاب بيقول.

إليك الـ **PRD المعدلة بالكامل**، فيها اسم الشركة بالكامل، العنوان، الأرقام، وكل التفاصيل اللي كانت في السكرينات:

---

# 📄 Product Requirements Document (PRD) - Ver. 2.0

**Project:** Official Corporate Portfolio for **KMBC Co.**
**Full Name:** Kuwait Modern Buildings Construction Co.
**Tech Stack:** Next.js 15, Tailwind CSS, Framer Motion, TypeScript.

---

## 1. Corporate Identity (From Sources)

- **Company Name:** Kuwait Modern Buildings Construction Co. (KMBC Co.)
- **Slogan:** Integrated Technical Excellence.
- **Headquarters:** Ahmed Aljaber street, Block 8, Khalifa Khalaf Abd Allah Alenzi building, 1st Floor Office # 31, Sharq, Kuwait City.
- **Contact Info:**
- **Phone:** (+965) 51227338 - 51227339
- **Email:** administration@kmbc-kw.com

- **Facility Hours:** Sunday - Thursday (08:00 - 16:00 Kuwait Standard Time).

---

## 2. Structural Content Analysis (The 5 Sections)

### **Section 1: Hero & Identity**

- **Headline:** INTEGRATED TECHNICAL EXCELLENCE.
- **Sub-headline:** Utilizing high-end BIM modeling and modular systems to ensure every structural element meets rigid technical specs.
- **CTA:** Ask For Site Visit (Button).

### **Section 2: The Four Pillars (Value Props)**

1. **Technical Precision:** High-end BIM modeling for rigid technical specs.
2. **Elite Safety:** Zero-compromise safety protocols strictly adhered to on all sites.
3. **Industrial Sustainability:** Eco-engineered materials and energy-efficient systems.
4. **On-time Delivery:** Rigid project lifecycle management for multi-phase milestones.

### **Section 3: Core Services (Detailed List)**

- **Industrial Infrastructure:** Precision engineering for large-scale industrial facilities.
- **Residential Development:** High-end residential spaces blending aesthetics with robust foundations.
- **Technical Consulting:** Expert analysis and strategic planning for complex projects.
- **Civil Infrastructure:** Developing critical infrastructure from bridges to transport hubs.
- **Project Management:** End-to-end management ensuring efficiency and safety compliance.

### **Section 4: Portfolio Categories (Featured Projects)**

- **Infrastructure:** "We build lifetime buildings."
- **Commercial:** "We build for the Future."
- **Civil Works:** "Infrastructure is our Profession."

---

## 3. Motion Requirements (Framer Motion Logic)

- **Global Transitions:** Use `type: "spring", stiffness: 50, damping: 20` to give a "heavy/mechanical" feel.
- **The "Drawing" Effect:** الخطوط الفاصلة بين السكاشن (الـ Dividers) تترسم بالعرض بـ `initial: { width: 0 }` و `whileInView: { width: '100%' }`.
- **Service Reveal:** عند الضغط على خدمة، الصورة تظهر بـ `initial: { opacity: 0, x: 20 }` و `animate: { opacity: 1, x: 0 }`.
- **Text Scramble/Fade:** العنوان الرئيسي يظهر بتأثير "Fade-in-up" مع تحريك الحروف بشكل Staggered.

---

## 4. Visual Palette (The Industrial Luxury)

- **Main Background:** `#0A1128` (Midnight Navy).
- **Accent/Links:** `#D48166` (Copper/Orange).
- **Typography:** Montserrat for bold titles, Inter for clean technical data.

---
