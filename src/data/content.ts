import { Dictionary, Lang } from "@/lib/types";

const en: Dictionary = {
  meta: {
    title: "Maleka — Front-End Developer",
    description:
      "Portfolio of Maleka, a front-end developer focused on building modern, responsive and interactive web applications with React, TypeScript and Next.js.",
  },
  nav: {
    langLabel: "EN",
    items: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
  },
  hero: {
    eyebrow: "Front-End Developer",
    headline: "Building modern digital experiences that feel as good as they work.",
    subhead:
      "I'm Maleka, a front-end developer who turns ideas into functional, responsive web applications with React, TypeScript and Next.js — from the interface down to the data behind it.",
    ctaPrimary: "View My Work",
    ctaSecondary: "Let's Connect",
    console: [
      "> whoami",
      "Maleka — Front-End Developer",
      "",
      "> stack --list",
      "React · TypeScript · Next.js · Tailwind",
      "",
      "> status",
      "Currently building.",
    ],
  },
  about: {
    label: "About",
    heading: "I like turning ideas into things that actually run.",
    paragraphs: [
      "I'm a front-end developer who enjoys the part where an idea stops being a sketch and starts being a real interface — one that responds to data, handles edge cases, and holds up on a small screen just as well as a large one.",
      "My work sits across React, TypeScript, Next.js and Tailwind CSS on the front end, with Node.js, MongoDB and REST APIs on the side that talks to real data. I like understanding both halves of an application, not just the part you can see.",
      "I'm still early in my career, and I treat that as an advantage: I pick up new tools quickly, I'm comfortable being the least experienced person in the room, and I'd rather ship something real and imperfect than something theoretical and polished.",
    ],
    internshipNote:
      "I completed a three-month front-end development internship with the Fekr Modern team, where I worked inside a real product team for the first time.",
  },
  experience: {
    label: "Experience",
    heading: "Where I've worked",
    role: "Front-End Developer Intern",
    company: "Fekr Modern",
    duration: "3-Month Internship",
    body: "Three months inside an active development environment, building front-end interfaces alongside a real team instead of working in isolation.",
    points: [
      "Built and maintained front-end interfaces using modern web technologies",
      "Worked from real requirements instead of self-directed practice projects",
      "Collaborated with other developers on a shared codebase",
      "Learned how front-end decisions hold up once real users and real data are involved",
    ],
  },
  skills: {
    label: "Skills",
    heading: "What I build with",
    groups: [
      {
        label: "Frontend",
        items: ["React", "JavaScript", "TypeScript", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
      },
      {
        label: "Backend & Data",
        items: ["Node.js", "MongoDB", "REST APIs", "Python"],
      },
      {
        label: "Tools",
        items: ["Git", "GitHub", "Vite", "VS Code"],
      },
    ],
  },
  mindset: {
    label: "Approach",
    heading: "What I do",
    cards: [
      {
        title: "Build",
        body: "Modern, responsive web applications with React and Next.js — built to work, not just to look right in a screenshot.",
      },
      {
        title: "Integrate",
        body: "Connect interfaces to real APIs and external data, and handle the loading states and edge cases that come with them.",
      },
      {
        title: "Structure",
        body: "Break interfaces into reusable, maintainable React components instead of one long page of markup.",
      },
      {
        title: "Explore",
        body: "Work with TypeScript, databases and Python to understand what's happening past the front end.",
      },
      {
        title: "Learn",
        body: "Pick up new tools through real projects, not just tutorials — including the private product I'm currently building.",
      },
    ],
  },
  projects: {
    label: "Projects",
    heading: "Selected work",
    intro:
      "A mix of API-driven apps, interface implementations and product-style builds — each one shipped as a working application, not a mockup.",
    githubLabel: "GitHub",
    demoLabel: "Live Demo",
    noLinkLabel: "Not public yet",
    featuresLabel: "Key features",
    techLabel: "Built with",
    items: [
      {
        id: "weather",
        title: "Weather Forecast",
        tagline: "Real-time weather, built on a live API",
        description:
          "A weather application that pulls live conditions and a multi-day forecast from a public weather API. It's built to actually behave like a data-driven app — loading states, geolocation and a search flow — rather than a static weather-themed layout.",
        tech: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "OpenWeatherMap API"],
        features: [
          "City search with a live weather lookup",
          "One-tap \u201cUse My Location\u201d geolocation",
          "Current conditions: temperature, feels-like, humidity, wind, sunrise/sunset",
          "5-day forecast with daily highs",
          "Light/dark mode toggle",
        ],
        video: "/videos/weather.mp4",
        poster: "/images/weather-poster.jpg",
        links: {},
        size: "lg",
      },
      {
        id: "dashboard",
        title: "Employment Dashboard",
        tagline: "Structured data, mapped and summarized",
        description:
          "A dashboard interface built to summarize employment data at a glance — key totals up top, an interactive map for geographic context, and a running feed of recent postings underneath.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Leaflet"],
        features: [
          "Summary cards for active jobs, companies and applicants",
          "Interactive map with location context, built on Leaflet",
          "Recent job postings feed",
          "Structured, dashboard-style layout",
        ],
        poster: "/images/dashboard-poster.jpg",
        isImageOnly: true,
        links: {},
        size: "lg",
      },
      {
        id: "apple-store",
        title: "Apple Store",
        tagline: "A product-style e-commerce frontend",
        description:
          "A front-end implementation of a product storefront in the style of Apple's own product pages — category navigation, product cards with pricing and specs, and a consistent layout across product lines.",
        tech: ["React", "TypeScript", "Tailwind CSS"],
        features: [
          "Category navigation across product lines (iPhone, MacBook, Watch, iMac)",
          "Product cards with pricing and spec highlights",
          "Consistent, reusable layout across categories",
          "Responsive product grid",
        ],
        video: "/videos/apple-store.mp4",
        poster: "/images/apple-store-poster.jpg",
        links: {},
        size: "md",
      },
      {
        id: "pink-venom",
        title: "Pink Venom — AI Hub",
        tagline: "Turning a designer's concept into a working interface",
        description:
          "Pink Venom was designed by a friend; my role was implementing that design as a functional, responsive React interface — an AI-tools hub with a bilingual, RTL-first layout. The concept and visual design aren't mine; the front-end build is.",
        tech: ["React", "TypeScript", "Tailwind CSS"],
        features: [
          "Full RTL layout implementation in React",
          "Componentized hero and category sections",
          "Responsive build across breakpoints",
          "Translated a static design into an interactive interface",
        ],
        video: "/videos/pink-venom.mp4",
        poster: "/images/pink-venom-poster.jpg",
        links: {},
        size: "md",
      },
      {
        id: "task-manager",
        title: "Task Manager",
        tagline: "State, filtering and everyday interaction",
        description:
          "A task manager built with React, Vite and Tailwind CSS — the kind of project that looks simple until you have to handle state correctly. Adding, editing, completing and filtering tasks all update the same source of truth in real time.",
        tech: ["React", "Vite", "Tailwind CSS"],
        features: [
          "Add, edit and delete tasks",
          "Real-time task search",
          "Filter by All / Active / Completed",
          "Live task counters",
        ],
        video: "/videos/task-manager.mp4",
        poster: "/images/task-manager-poster.jpg",
        links: {},
        size: "md",
      },
    ],
  },
  privateProject: {
    label: "Private Project",
    heading: "A healthcare product I'm not ready to open up",
    status: "Private · In Development",
    description:
      "An ongoing personal project focused on structuring and processing medical knowledge, and building intelligent software around it. It's the most technically ambitious thing I'm working on right now — closer to a real product than a portfolio piece.",
    areasLabel: "What it involves",
    areas: [
      "Medical knowledge structuring",
      "Data processing & database design",
      "Information retrieval",
      "AI-related development",
      "Scalable application architecture",
      "Modern web application development",
    ],
    confidentialNote:
      "Due to the confidential and proprietary nature of this project, product details, source code and visual materials are intentionally not publicly available.",
  },
  workflow: {
    label: "Process",
    heading: "How I work",
    steps: [
      { index: "01", title: "Understand", body: "Get clear on the actual problem and requirements before opening an editor." },
      { index: "02", title: "Plan", body: "Structure the application and choose the right technologies for what it actually needs." },
      { index: "03", title: "Build", body: "Develop reusable components and functional features, not just static screens." },
      { index: "04", title: "Test", body: "Check responsiveness, error states and how it behaves for a real person using it." },
      { index: "05", title: "Improve", body: "Refine the product and fold in whatever I learned while building it." },
    ],
  },
  focus: {
    label: "Focus",
    heading: "Where my focus is right now",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "API Integration",
      "Responsive Development",
      "Real-World Internship Experience",
      "Personal Product Development",
    ],
  },
  contact: {
    label: "Contact",
    heading: "Have a project in mind? Let's build something meaningful.",
    body: "I'm open to front-end roles, collaborations and interesting problems. The fastest way to reach me is email.",
    emailLabel: "Email",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
  },
  footer: {
    tagline: "Front-End Developer — React · TypeScript · Next.js",
    rights: "All rights reserved.",
  },
};

const fa: Dictionary = {
  meta: {
    title: "ملکا — توسعه‌دهنده فرانت‌اند",
    description:
      "نمونه‌کار ملکا، توسعه‌دهنده فرانت‌اند متمرکز بر ساخت اپلیکیشن‌های وب مدرن، ریسپانسیو و تعاملی با React، TypeScript و Next.js.",
  },
  nav: {
    langLabel: "فا",
    items: [
      { label: "خانه", href: "#home" },
      { label: "درباره من", href: "#about" },
      { label: "مهارت‌ها", href: "#skills" },
      { label: "پروژه‌ها", href: "#projects" },
      { label: "سوابق کاری", href: "#experience" },
      { label: "تماس", href: "#contact" },
    ],
  },
  hero: {
    eyebrow: "توسعه‌دهنده فرانت‌اند",
    headline: "ساخت تجربه‌های دیجیتال مدرن؛ به همان اندازه که خوب کار می‌کنند، حس خوبی هم دارند.",
    subhead:
      "من ملکا هستم، توسعه‌دهنده فرانت‌اندی که ایده‌ها را به اپلیکیشن‌های وب واقعی، ریسپانسیو و کاربردی تبدیل می‌کند؛ با React، TypeScript و Next.js، از رابط کاربری تا داده‌ای که پشت آن است.",
    ctaPrimary: "مشاهده نمونه‌کارها",
    ctaSecondary: "در ارتباط باشیم",
    console: [
      "> whoami",
      "ملکا — توسعه‌دهنده فرانت‌اند",
      "",
      "> stack --list",
      "React · TypeScript · Next.js · Tailwind",
      "",
      "> status",
      "در حال ساختن یک چیز جدید.",
    ],
  },
  about: {
    label: "درباره من",
    heading: "دوست دارم ایده‌ها را به چیزی واقعی تبدیل کنم.",
    paragraphs: [
      "من توسعه‌دهنده فرانت‌اندی هستم که از لحظه‌ای لذت می‌برم که یک ایده از حالت طرح اولیه خارج می‌شود و به یک رابط کاربری واقعی تبدیل می‌شود؛ رابطی که به داده واکنش نشان می‌دهد، حالت‌های خطا را مدیریت می‌کند و روی صفحه کوچک هم به‌خوبی صفحه بزرگ کار می‌کند.",
      "کار من در فرانت‌اند حول React، TypeScript، Next.js و Tailwind CSS می‌چرخد و در کنار آن با Node.js، MongoDB و REST API با بخشی از اپلیکیشن سروکار دارم که با داده واقعی صحبت می‌کند. دوست دارم هر دو طرف یک اپلیکیشن را بفهمم، نه فقط بخشی که دیده می‌شود.",
      "حدود یک سال هست که در این مسیر هستم و سعی کرده ام با پروژه های مختلف خودم رو به چالش بکشم و این را یک مزیت می‌دانم؛ ابزارهای جدید را سریع یاد می‌گیرم، حتی اگر چیزی را بلد نباشم برای یادگیری آن تلاش میکنم تا یک محصول کامل ارائه دهم..",
    ],
    internshipNote:
      "یک دوره کارآموزی سه‌ماهه در حوزه توسعه فرانت‌اند را با تیم فکر مدرن گذرانده‌ام؛ جایی‌که برای اولین‌بار در یک تیم واقعی محصول کار کردم.",
  },
  experience: {
    label: "سوابق کاری",
    heading: "جایی که کار کرده‌ام",
    role: "کارآموز توسعه‌دهنده فرانت‌اند",
    company: "فکر مدرن",
    duration: "کارآموزی سه‌ماهه",
    body: "سه ماه کار در یک محیط توسعه واقعی؛ ساخت رابط‌های فرانت‌اند در کنار یک تیم واقعی، نه به‌صورت پروژه‌های فردی و مجزا.",
    points: [
      "ساخت و نگهداری رابط‌های فرانت‌اند با فناوری‌های مدرن وب",
      "کار روی نیازمندی‌های واقعی به‌جای پروژه‌های تمرینی شخصی",
      "همکاری با سایر توسعه‌دهندگان روی یک کدبیس مشترک",
      "یادگیری اینکه تصمیم‌های فرانت‌اند وقتی کاربر و داده واقعی وارد می‌شوند چطور عمل می‌کنند",
    ],
  },
  skills: {
    label: "مهارت‌ها",
    heading: "با چه چیزی می‌سازم",
    groups: [
      {
        label: "فرانت‌اند",
        items: ["React", "JavaScript", "TypeScript", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
      },
      {
        label: "بک‌اند و داده",
        items: ["Node.js", "MongoDB", "REST APIs", "Python"],
      },
      {
        label: "ابزارها",
        items: ["Git", "GitHub", "Vite", "VS Code"],
      },
    ],
  },
  mindset: {
    label: "رویکرد",
    heading: "چه کاری انجام می‌دهم",
    cards: [
      {
        title: "ساخت",
        body: "اپلیکیشن‌های وب مدرن و ریسپانسیو با React و Next.js؛ ساخته‌شده برای کار کردن، نه فقط خوب دیده‌شدن در یک اسکرین‌شات.",
      },
      {
        title: "اتصال",
        body: "اتصال رابط کاربری به API و داده‌های واقعی، و مدیریت حالت‌های بارگذاری و خطاهایی که همراه آن‌هاست.",
      },
      {
        title: "ساختاردهی",
        body: "شکستن رابط کاربری به کامپوننت‌های React قابل استفاده مجدد، به‌جای یک صفحه طولانی از مارک‌آپ.",
      },
      {
        title: "کاوش",
        body: "کار با TypeScript، پایگاه‌داده و Python برای فهمیدن چیزی که پشت فرانت‌اند اتفاق می‌افتد.",
      },
      {
        title: "یادگیری",
        body: "یادگیری ابزارهای جدید از دل پروژه‌های واقعی، نه فقط آموزش‌های آنلاین؛ از جمله محصول خصوصی‌ای که این روزها می‌سازم.",
      },
    ],
  },
  projects: {
    label: "پروژه‌ها",
    heading: "منتخبی از کارها",
    intro:
      "ترکیبی از اپلیکیشن‌های متصل به API، پیاده‌سازی رابط‌های کاربری و ساخت‌هایی در سبک محصول؛ هرکدام به‌صورت یک اپلیکیشن کاربردی، نه یک ماکاپ.",
    githubLabel: "گیت‌هاب",
    demoLabel: "نسخه آنلاین",
    noLinkLabel: "هنوز عمومی نشده",
    featuresLabel: "ویژگی‌های کلیدی",
    techLabel: "ساخته‌شده با",
    items: [
      {
        id: "weather",
        title: "پیش‌بینی آب‌وهوا",
        tagline: "آب‌وهوای لحظه‌ای، متصل به یک API واقعی",
        description:
          "اپلیکیشنی که وضعیت لحظه‌ای و پیش‌بینی چندروزه آب‌وهوا را از یک API عمومی دریافت می‌کند؛ طوری ساخته شده که واقعاً مثل یک اپلیکیشن داده‌محور رفتار کند، با حالت‌های بارگذاری، موقعیت‌مکانی و جست‌وجوی شهر، نه یک قالب ثابت با تم آب‌وهوا.",
        tech: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "OpenWeatherMap API"],
        features: [
          "جست‌وجوی شهر با دریافت آب‌وهوای لحظه‌ای",
          "دکمه «موقعیت من» برای دریافت آب‌وهوا با یک لمس",
          "وضعیت فعلی: دما، دمای احساسی، رطوبت، باد، طلوع و غروب آفتاب",
          "پیش‌بینی ۵ روزه با دمای حداکثر روزانه",
          "قابلیت تغییر حالت روشن و تاریک",
        ],
        video: "/videos/weather.mp4",
        poster: "/images/weather-poster.jpg",
        links: {},
        size: "lg",
      },
      {
        id: "dashboard",
        title: "داشبورد فرصت‌های شغلی",
        tagline: "داده ساختاریافته، روی نقشه و در یک نگاه",
        description:
          "رابط داشبوردی برای نمایش خلاصه داده‌های استخدامی در یک نگاه؛ آمار کلیدی در بالا، نقشه‌ای تعاملی برای زمینه جغرافیایی، و فهرستی از آخرین آگهی‌ها در پایین.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Leaflet"],
        features: [
          "کارت‌های خلاصه برای فرصت‌های فعال، شرکت‌ها و متقاضیان",
          "نقشه تعاملی برای نمایش موقعیت مکانی با Leaflet",
          "فهرست آخرین آگهی‌های شغلی",
          "چیدمانی ساختاریافته در سبک داشبورد",
        ],
        poster: "/images/dashboard-poster.jpg",
        isImageOnly: true,
        links: {},
        size: "lg",
      },
      {
        id: "apple-store",
        title: "اپل استور",
        tagline: "یک فرانت‌اند فروشگاهی در سبک محصول",
        description:
          "پیاده‌سازی فرانت‌اند یک فروشگاه محصول در سبک صفحات محصول اپل؛ با ناوبری دسته‌بندی، کارت‌های محصول همراه با قیمت و مشخصات، و چیدمانی یکدست در تمام دسته‌های محصول.",
        tech: ["React", "TypeScript", "Tailwind CSS"],
        features: [
          "ناوبری بین دسته‌های محصول (آیفون، مک‌بوک، واچ، آی‌مک)",
          "کارت‌های محصول با قیمت و مشخصات کلیدی",
          "چیدمان یکدست و قابل استفاده مجدد در تمام دسته‌ها",
          "گرید محصول ریسپانسیو",
        ],
        video: "/videos/apple-store.mp4",
        poster: "/images/apple-store-poster.jpg",
        links: {},
        size: "md",
      },
      {
        id: "pink-venom",
        title: "پینک ونوم — هاب هوش مصنوعی",
        tagline: "تبدیل طراحی یک دوست به رابطی واقعی و کاربردی",
        description:
          "طراحی «پینک ونوم» توسط یکی از دوستانم انجام شده؛ نقش من پیاده‌سازی آن طراحی به‌صورت یک رابط React کاربردی و ریسپانسیو بوده، یک هاب ابزارهای هوش مصنوعی با چیدمانی کاملاً راست‌به‌چپ. ایده و طراحی بصری از من نیست، پیاده‌سازی فرانت‌اند از من است.",
        tech: ["React", "TypeScript", "Tailwind CSS"],
        features: [
          "پیاده‌سازی کامل چیدمان راست‌به‌چپ (RTL) در React",
          "بخش‌بندی کامپوننت‌محور برای هیرو و دسته‌بندی‌ها",
          "ساخت ریسپانسیو در تمام اندازه‌های صفحه",
          "تبدیل یک طراحی ثابت به یک رابط تعاملی",
        ],
        video: "/videos/pink-venom.mp4",
        poster: "/images/pink-venom-poster.jpg",
        links: {},
        size: "md",
      },
      {
        id: "task-manager",
        title: "مدیریت وظایف",
        tagline: "مدیریت state، فیلتر و تعامل روزمره",
        description:
          "اپلیکیشن مدیریت وظایفی ساخته‌شده با React، Vite و Tailwind CSS؛ از آن پروژه‌هایی که تا وقتی مجبور نشوی state را درست مدیریت کنی، ساده به‌نظر می‌رسد. افزودن، ویرایش، تکمیل و فیلتر وظایف، همگی یک منبع داده مشترک را به‌صورت لحظه‌ای به‌روزرسانی می‌کنند.",
        tech: ["React", "Vite", "Tailwind CSS"],
        features: [
          "افزودن، ویرایش و حذف وظایف",
          "جست‌وجوی لحظه‌ای وظایف",
          "فیلتر بر اساس همه / فعال / تکمیل‌شده",
          "شمارنده‌های لحظه‌ای وظایف",
        ],
        video: "/videos/task-manager.mp4",
        poster: "/images/task-manager-poster.jpg",
        links: {},
        size: "md",
      },
    ],
  },
  privateProject: {
    label: "پروژه خصوصی",
    heading: "محصولی در حوزه سلامت که هنوز آماده رونمایی از آن نیستم",
    status: "خصوصی · در حال توسعه",
    description:
      "پروژه‌ای شخصی و در حال توسعه، با تمرکز بر ساختاردهی و پردازش دانش پزشکی و ساخت نرم‌افزار هوشمند حول آن. این جاه‌طلبانه‌ترین چیزی است که این روزها روی آن کار می‌کنم؛ چیزی نزدیک‌تر به یک محصول واقعی تا یک نمونه‌کار.",
    areasLabel: "این پروژه شامل چه چیزهایی می‌شود",
    areas: [
      "ساختاردهی دانش پزشکی",
      "پردازش داده و طراحی پایگاه‌داده",
      "بازیابی اطلاعات",
      "توسعه مرتبط با هوش مصنوعی",
      "معماری نرم‌افزار مقیاس‌پذیر",
      "توسعه اپلیکیشن وب مدرن",
    ],
    confidentialNote:
      "به‌دلیل ماهیت محرمانه و اختصاصی این پروژه، جزئیات محصول، کد منبع و مواد بصری آن به‌صورت عمومی در دسترس قرار نگرفته‌اند.",
  },
  workflow: {
    label: "فرایند کار",
    heading: "چطور کار می‌کنم",
    steps: [
      { index: "۰۱", title: "درک کردن", body: "قبل از باز کردن ادیتور، مسئله و نیازمندی‌های واقعی را می‌فهمم." },
      { index: "۰۲", title: "برنامه‌ریزی", body: "اپلیکیشن را ساختاربندی می‌کنم و فناوری متناسب با نیاز واقعی آن را انتخاب می‌کنم." },
      { index: "۰۳", title: "ساخت", body: "کامپوننت‌ها و قابلیت‌های کاربردی می‌سازم، نه فقط صفحات ثابت." },
      { index: "۰۴", title: "آزمایش", body: "ریسپانسیو بودن، حالت‌های خطا و رفتار اپلیکیشن را برای یک کاربر واقعی بررسی می‌کنم." },
      { index: "۰۵", title: "بهبود", body: "محصول را اصلاح می‌کنم و هرچه در مسیر ساخت آن یاد گرفته‌ام را در آن به‌کار می‌برم." },
    ],
  },
  focus: {
    label: "تمرکز",
    heading: "این روزها تمرکزم روی چه چیزی است",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "اتصال به API",
      "توسعه ریسپانسیو",
      "تجربه واقعی کارآموزی",
      "توسعه محصول شخصی",
    ],
  },
  contact: {
    label: "تماس",
    heading: "پروژه‌ای در ذهن دارید؟ بیایید چیزی معنادار بسازیم.",
    body: "برای همکاری در نقش‌های فرانت‌اند و مسئله‌های جذاب آماده‌ام. سریع‌ترین راه برای تماس، ایمیل است.",
    emailLabel: "ایمیل",
    githubLabel: "گیت‌هاب",
    linkedinLabel: "لینکدین",
  },
  footer: {
    tagline: "توسعه‌دهنده فرانت‌اند — React · TypeScript · Next.js",
    rights: "تمامی حقوق محفوظ است.",
  },
};

export const dictionaries: Record<Lang, Dictionary> = { en, fa };

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang];
}
