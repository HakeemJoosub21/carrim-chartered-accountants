export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/beyond-the-numbers", label: "Beyond the Numbers" },
  { href: "/contact", label: "Contact" },
] as const;

export const contactInfo = {
  email: "kulsumcarrim@cca.com",
  phone: "+27 82 893 5876",
  whatsapp: "27828935876",
  linkedin: "https://linkedin.com",
  instagram: "https://instagram.com",
};

export const heroContent = {
  label: "Chartered Accounting",
  headline: "For Growing Businesses",
  subheading:
    "Strategic accounting, taxation and advisory services designed to help you grow with confidence.",
};

export const founder = {
  name: "Kulsum Carrim",
  greeting: "Hi, I'm Kulsum Carrim",
  title: "Chartered Accountant (SA)",
  bio: "I founded Carrim Chartered Accountants to provide practical financial guidance, exceptional client service, and strategic business support. My goal is to help clients make confident financial decisions while staying compliant and focused on growth.",
  highlights: [
    {
      label: "Qualification",
      value: "Chartered Accountant (SA)",
    },
    {
      label: "Experience",
      value:
        "With over 12.5 years of professional experience at a Big Four firm, I have worked across audit, tax, accounting, and finance, partnering with businesses of all sizes in a diverse range of industries. This broad exposure has given me a deep understanding of financial reporting, compliance, business operations, and strategic financial management, enabling me to provide practical, commercially focused solutions tailored to each client's needs.",
    },
  ],
  extendedBio: [
    "Kulsum is a qualified Chartered Accountant (SA), SAICA Assessor, and qualified Training Instructor with over 12 years of experience at a leading Big Four professional services firm.",
    "Throughout her career, she has worked with a diverse portfolio of clients across a wide range of industries, including entertainment, hospitality, pharmaceuticals, telecommunications, logistics, agriculture, education, non-profit organisations, owner-managed businesses, and many others. This breadth of experience has provided her with valuable insight into the unique opportunities and challenges faced by businesses of all sizes.",
    "As part of her professional development, Kulsum was selected for an international secondment to Belgium, where she spent 3.5 months working within a Big Four firm. This experience provided valuable exposure to international business environments, cross-cultural collaboration, and global best practices, further broadening her professional perspective.",
    "Beyond technical accounting and audit expertise, Kulsum has built a strong reputation as a leader, mentor, and trusted business advisor. She has led and developed high-performing teams, managed complex client portfolios, overseen resource planning and staffing, coordinated multiple deadlines and engagements, and played an active role within leadership structures. Her experience extends beyond financial reporting and compliance to include people development, operational management, strategic planning, and business growth.",
    "As a qualified SAICA Assessor and Training Instructor, Kulsum is passionate about developing future professionals and empowering individuals and businesses through knowledge, guidance, and practical solutions.",
    "Through Carrim Chartered Accountants, she combines technical excellence with a personalised approach, helping clients navigate their financial obligations with confidence while supporting their long-term business success.",
  ],
};

export const valueProps = [
  {
    title: "Chartered Accountant (SA)",
    description: "Qualified and registered with SAICA",
    icon: "Award" as const,
  },
  {
    title: "Accurate & Reliable",
    description: "Precision in every financial detail",
    icon: "CheckCircle" as const,
  },
  {
    title: "Tax & Compliance Expertise",
    description: "Navigate regulations with confidence",
    icon: "FileCheck" as const,
  },
  {
    title: "Strategic Advice That Grows You",
    description: "Insights that drive business success",
    icon: "TrendingUp" as const,
  },
];

export const serviceCategories = [
  {
    title: "Business Services",
    description:
      "Accurate records, financial reporting, and management accounts to keep your business on track.",
    icon: "Briefcase" as const,
    items: [
      "Accounting & Bookkeeping",
      "Financial Statements",
      "Management Accounts",
    ],
  },
  {
    title: "Tax Services",
    description:
      "Comprehensive tax support from returns and provisional tax to SARS queries and disputes.",
    icon: "FileText" as const,
    items: [
      "Income Tax Returns",
      "Provisional Tax",
      "SARS Queries & Disputes",
    ],
  },
  {
    title: "Advisory Services",
    description:
      "Strategic guidance to help you plan, grow, and make confident financial decisions.",
    icon: "TrendingUp" as const,
    items: [
      "Business Consulting",
      "Cash Flow Planning",
      "Startup Support",
    ],
  },
  {
    title: "Compliance",
    description:
      "Company secretarial and regulatory support to keep your business fully compliant.",
    icon: "Shield" as const,
    items: [
      "CIPC Services",
      "Annual Returns",
      "Company Registrations",
    ],
  },
];

export const homeServices = serviceCategories;

export const services = serviceCategories.flatMap((category) =>
  category.items.map((item) => ({
    title: item,
    category: category.title,
    description: `Professional ${item.toLowerCase()} services tailored to your needs.`,
    icon: category.icon,
  }))
);

export const whyChooseUs = [
  {
    title: "Expertise",
    description:
      "Qualified Chartered Accountant with practical business experience.",
    icon: "Award" as const,
  },
  {
    title: "Personal Service",
    description: "Direct access to your accountant.",
    icon: "User" as const,
  },
  {
    title: "Proactive Advice",
    description: "Not just compliance—strategic guidance.",
    icon: "Lightbulb" as const,
  },
  {
    title: "Modern Solutions",
    description: "Cloud-based systems and efficient processes.",
    icon: "Cloud" as const,
  },
];

export const whoWeWorkWith = [
  {
    title: "Small Businesses",
    description:
      "Helping business owners stay compliant and grow profitably.",
    icon: "Building2" as const,
  },
  {
    title: "Professionals",
    description: "Doctors, lawyers, consultants, and other professionals.",
    icon: "Briefcase" as const,
  },
  {
    title: "Entrepreneurs",
    description: "Support from startup to scale-up.",
    icon: "Rocket" as const,
  },
  {
    title: "Individuals",
    description: "Personal tax and wealth-related accounting support.",
    icon: "UserCircle" as const,
  },
];

export const beyondTheNumbersIntro = {
  title: "Why I Became a Chartered Accountant",
  paragraphs: [
    "My journey into Chartered Accountancy began with a genuine interest in finance and the impact it has on businesses and people's lives. I was fascinated by how financial information could be used to guide decisions, solve challenges, and create opportunities for growth.",
    "Chartered Accountancy provided the ideal path to combine my passion for finance with my desire to work closely with businesses and individuals. Today, that same passion continues to drive me as I help clients gain clarity, confidence, and control over their financial future.",
    "For me, accounting is about more than numbers—it's about empowering people to make informed decisions and achieve their goals.",
  ],
};

export const beyondTheNumbersTopics = [
  {
    id: "entrepreneurship",
    title: "Entrepreneurship",
    subtitle: "Building Businesses with Confidence",
    body: "As a business owner myself, I understand the challenges entrepreneurs face—from managing cash flow and compliance to making strategic growth decisions. My goal is to help business owners focus on building their vision while knowing their financial affairs are in order.",
    topics: [
      "Business ownership insights",
      "Startup guidance",
      "Growth planning",
      "Financial strategy",
    ],
    image: "/images/image4.jpeg",
    imageClassName: "object-cover object-center",
  },
  {
    id: "leadership",
    title: "Leadership",
    subtitle: "Leading with Integrity",
    body: "Strong businesses are built on strong leadership. I believe in accountability, continuous learning, and leading by example—both within my practice and in the way I serve clients.",
    topics: [
      "Professional excellence",
      "Ethical leadership",
      "Mentorship",
      "Lifelong learning",
    ],
    image: "/images/image7.png",
    imageClassName: "object-cover object-top",
  },
  {
    id: "women-in-business",
    title: "Women in Business",
    subtitle: "Empowering Ambitious Women",
    body: "I am passionate about supporting women who are building careers, businesses, and legacies. Through financial clarity and strategic guidance, I aim to help women make informed decisions that support their goals.",
    topics: [
      "Career and business growth",
      "Financial confidence",
      "Strategic decision-making",
      "Building lasting legacies",
    ],
    image: "/images/image0.jpeg",
    imageClassName: "object-cover object-top",
  },
  {
    id: "community-and-family",
    title: "Community & Family",
    subtitle: "Success with Purpose",
    body: "Behind every business are people, families, and communities. I value relationships, trust, and creating meaningful impact through the work I do.",
    topics: [
      "Meaningful client relationships",
      "Community impact",
      "Work-life balance",
      "Purpose-driven success",
    ],
    image: "/images/image8.png",
    imageClassName: "object-cover object-center",
  },
];
