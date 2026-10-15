export interface Project {
  id: string;
  title: string;
  brandName: string;
  clientType: "International D2C" | "Global SaaS" | "Luxury & Fashion" | "Clean Beauty & Wellness";
  role: string;
  category: "D2C Scaling" | "B2B SaaS Growth" | "Viral Social & UGC" | "Luxury Rebrand";
  summary: string;
  heroImage: string;
  tags: string[];
  metrics: {
    label: string;
    value: string;
    change?: string;
  }[];
  challenge: string;
  strategy: string[];
  results: string[];
  creativeHighlights: string[];
  clientQuote?: {
    text: string;
    author: string;
    title: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: "luxeskin-botanicals",
    title: "Omnichannel D2C Brand Scale to $9.8M ARR",
    brandName: "LuxeSkin Botanicals",
    clientType: "International D2C",
    role: "Lead Growth Marketing Strategist",
    category: "D2C Scaling",
    summary:
      "Engineered an international acquisition and retention ecosystem for a premium botanical skincare house, transforming customer acquisition economics and scaling from $1.2M to $9.8M run-rate in 14 months.",
    heroImage:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop",
    tags: ["Paid Social (Meta & TikTok)", "Klaviyo Retention Engine", "Wholesale & D2C Funnel", "Offer Architecture"],
    metrics: [
      { label: "ARR Growth", value: "$9.8M", change: "+716%" },
      { label: "Blended ROAS", value: "4.82x", change: "From 1.9x" },
      { label: "Repeat Customer Rate", value: "38.4%", change: "+14.2%" },
      { label: "Blended CAC", value: "-46%", change: "Efficiency lift" },
    ],
    challenge:
      "The client possessed exceptional organic formulation quality but suffered from soaring ad fatigue on traditional channels, low returning customer rates (under 14%), and fragmented international buyer touchpoints.",
    strategy: [
      "Rebuilt full-funnel paid media architecture with 4 distinct audience angles: clean ingredient purity, dermatologist validation, aesthetic luxury unboxing, and routine bundles.",
      "Architected 9 bespoke Klaviyo automated lifecycle flows including VIP replenishment triggers, predictive skin-type quiz follow-ups, and churn rescue.",
      "Instituted high-converting bundle architectures (Starter Trio & Night Ritual) that raised Average Order Value (AOV) from $58 to $94.",
      "Deployed a performance creative testing matrix churning 30+ iterative creative hooks weekly across international ad accounts.",
    ],
    results: [
      "Generated over $8.6M in incremental revenue over 14 months with consistent month-over-month profitability.",
      "Achieved a 4.82x blended ROAS during peak seasonal holiday blitz without discounting core brand equity.",
      "Secured 38.4% 90-day repeat purchase rate through targeted personalized skincare replenishment workflows.",
    ],
    creativeHighlights: [
      "Aesthetic 'Glass Skin' visual direction featuring pastel editorial styling.",
      "Interactive 60-second Skincare Diagnostic Quiz converting traffic at 12.8%.",
      "Dynamic unboxing reels with 4.5M+ organic and paid impressions.",
    ],
    clientQuote: {
      text: "Gul Naz Bibi Gul Naz Bibi completely revitalized our customer acquisition economics. Her creative intuition paired with rigorous data modeling made our brand a recognized name globally.",
      author: "Elena Vance",
      title: "Co-Founder & Chief Brand Officer",
    },
  },
  {
    id: "aurasync-saas",
    title: "Product-Led Inbound Engine for Creator SaaS",
    brandName: "AuraSync Creator OS",
    clientType: "Global SaaS",
    role: "VP of Growth (Consulting)",
    category: "B2B SaaS Growth",
    summary:
      "Devised a viral multi-channel acquisition flywheel for an international creator management platform, scaling monthly active users by 320% and reducing customer acquisition cost by 54%.",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    tags: ["Product-Led Growth", "Influencer Affiliate Engine", "Interactive Webinars", "Search & Paid Search"],
    metrics: [
      { label: "Active Subscriptions", value: "154,000+", change: "+320%" },
      { label: "Organic Inbound Pipeline", value: "+240%", change: "Zero ad cost" },
      { label: "CAC Reduction", value: "-54%", change: "Efficiency" },
      { label: "Trial-to-Paid Rate", value: "24.6%", change: "+9.1%" },
    ],
    challenge:
      "The SaaS product was technically sophisticated but struggled with high friction during free-trial onboarding, rely-heavy outbound sales, and a 62-day average sales cycle that stalled exponential growth.",
    strategy: [
      "Pioneered a reverse-trial freemium onboarding funnel that delivered instant 'aha!' moments within 3 minutes of account creation.",
      "Recruited and mobilized an exclusive tier of 120 premier digital creator ambassadors who demonstrated real workflows to their audiences.",
      "Engineered an interactive growth benchmark calculator that captured 42,000+ top-of-funnel marketing leads.",
      "Introduced automated in-app behavioral emails triggering value nudges based on feature usage thresholds.",
    ],
    results: [
      "Scaled the platform from 36,000 to over 154,000 paying creator & agency accounts within 11 months.",
      "Cut blended CAC by 54% through strong viral referral loops and organic creator advocacy.",
      "Increased free-trial to paid annual subscription conversion from 15.5% to 24.6%.",
    ],
    creativeHighlights: [
      "Modern neon-pastel UI interactive demo tour showcasing frictionless productivity.",
      "High-production YouTube masterclass series viewed over 1.8M times organically.",
      "Exclusive 'Creator Growth Benchmark' report distributed to international press.",
    ],
    clientQuote: {
      text: "Working with Gul Naz Bibi Gul Naz Bibi gave us our breakthrough. Her understanding of modern creator psychology combined with SaaS metrics is unmatched.",
      author: "Marcus Sterling",
      title: "CEO & Founder",
    },
  },
  {
    id: "velour-haute-pret",
    title: "International Haute Couture Rebrand & Drops",
    brandName: "Velour & Co. Atelier",
    clientType: "Luxury & Fashion",
    role: "Global Creative Director & Brand Strategist",
    category: "Luxury Rebrand",
    summary:
      "Re-engineered the digital identity, VIP waitlist mechanics, and seasonal drop strategy for an international luxury ready-to-wear label, selling out consecutive capsule drops in under 48 hours.",
    heroImage:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
    tags: ["Luxury Positioning", "VIP Drops & Scarcity Funnels", "Editorial Content", "High-End Influencer Seeding"],
    metrics: [
      { label: "Drop Sell-Out Speed", value: "< 48 Hours", change: "3 Drops Sold Out" },
      { label: "Global Impressions", value: "14.2M+", change: "Organic Reach" },
      { label: "VIP Waitlist Size", value: "88,000+", change: "Pre-launch" },
      { label: "Email Click-to-Open", value: "32.4%", change: "Industry top 1%" },
    ],
    challenge:
      "An established luxury fashion house wanted to modernize for digital-first international clientele without degrading the maison's haute couture prestige or resorting to cheap discount tactics.",
    strategy: [
      "Curated an ultra-exclusive 'Private Salon' SMS & Email tier where patrons gained 1-hour early access via secret password tokens.",
      "Crafted cinematic behind-the-scenes atelier reels highlighting European silk sourcing, artisan craftsmanship, and styling guides.",
      "Seeded capsule pieces to 45 top-tier global fashion tastemakers and stylists attending international runway weeks.",
      "Optimized the digital storefront with editorial aesthetic typography, minimal friction Apple Pay checkouts, and concierge live-chat.",
    ],
    results: [
      "Sold out all 3 seasonal capsule collections within 48 hours of VIP launch with zero markdown promotions.",
      "Cultivated a loyal international waitlist of 88,000+ verified luxury fashion buyers with an average purchase value of $420.",
      "Generated 14.2M unpaid viral impressions on TikTok and Instagram through aspirational 'OOTD' styling content.",
    ],
    creativeHighlights: [
      "Parisian-inspired blush and champagne editorial visual identity.",
      "Lenticular micro-animations on product cards highlighting garment drape and movement.",
      "Bespoke velvet tactile packaging unboxing moments generating organic social shares.",
    ],
    clientQuote: {
      text: "Gul Naz Bibi Gul Naz Bibi treats fashion marketing as an art form. She understood our heritage while executing a digital drop strategy that shattered our revenue records.",
      author: "Camille Laurent",
      title: "Managing Director",
    },
  },
  {
    id: "nourishpure-superfoods",
    title: "Clean Functional Nutrition Global Launch",
    brandName: "NourishPure Organics",
    clientType: "Clean Beauty & Wellness",
    role: "Head of Omnichannel Growth",
    category: "D2C Scaling",
    summary:
      "Built a global brand launch campaign for a functional wellness beverage line, scaling international retail partnerships and Shopify direct sales to $3.4M in Q4.",
    heroImage:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1200&auto=format&fit=crop",
    tags: ["Omnichannel Launch", "TikTok Shop & Meta", "Micro-Creator Seeding", "Amazon Brand Store"],
    metrics: [
      { label: "Q4 Net Revenue", value: "$3.4M", change: "Launch Quarter" },
      { label: "Creators Activated", value: "520+", change: "Zero ad waste" },
      { label: "Blended ROAS", value: "4.21x", change: "Sustained" },
      { label: "Subscription Share", value: "41%", change: "Recurring revenue" },
    ],
    challenge:
      "Entering a hyper-crowded functional beverage sector with zero initial brand awareness, needing fast international scale and high recurring monthly subscriptions.",
    strategy: [
      "Constructed a 500+ creator seeding campaign targeting wellness coaches, pilates instructors, and busy female founders.",
      "Devised a 'Morning Glow Ritual' 21-day challenge that converted casual one-time buyers into dedicated monthly subscribers.",
      "Executed dual-track advertising combining high-energy UGC problem-solution hooks with polished brand proof commercials.",
      "Unified direct-to-consumer Shopify tracking with Amazon international storefront fulfillment for frictionless buying.",
    ],
    results: [
      "Generated $3.4M in first-quarter sales across international online storefronts.",
      "Locked in 41% of total revenue as recurring monthly subscriptions within 90 days of launch.",
      "Garnered over 6,500 5-star customer reviews across all product lines.",
    ],
    creativeHighlights: [
      "Vibrant pastel smoothie bowl recipe series paired with pastel branded glassware.",
      "UGC 'Morning Glow' testimonials showing genuine 30-day digestion and skin transformations.",
      "Wholesome, mood-boosting pastel packaging design feedback and unboxing stories.",
    ],
    clientQuote: {
      text: "Gul Naz Bibi Gul Naz Bibi executed what usually takes an agency of 20 people. Her campaign was clean, ethical, fast-paced, and wildly profitable.",
      author: "Sofia Lindqvist",
      title: "Co-Founder",
    },
  },
  {
    id: "glowsphere-beauty",
    title: "Viral Creator Seeding & 22M Organic Views",
    brandName: "GlowSphere Cosmetics",
    clientType: "Clean Beauty & Wellness",
    role: "Lead Viral Marketing Strategist",
    category: "Viral Social & UGC",
    summary:
      "Orchestrated a global PR gifting and UGC creator blitz that drove 22M+ organic views, ranked the brand as #1 trending beauty product on digital platforms, and spiked retail demand by 310%.",
    heroImage:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    tags: ["Viral UGC", "Creator Gifting (1,200+ PR boxes)", "TikTok Trends", "Spark Ads"],
    metrics: [
      { label: "Organic Views", value: "22.4M+", change: "Zero spend" },
      { label: "Trending Rank", value: "#1 Beauty", change: "Across social channels" },
      { label: "Retail Inbound Demand", value: "+310%", change: "Stockist inquiries" },
      { label: "Direct Traffic Lift", value: "+450%", change: "During campaign" },
    ],
    challenge:
      "Client had an innovative luminous lip oil and cheek tint, but standard paid ads were getting lost in TikTok feeds. They needed an explosive cultural moment to become a must-have viral phenomenon.",
    strategy: [
      "Designed an irresistibly photogenic PR package with holographic pink satin, personalized mirror messages, and custom candy-scented unboxing.",
      "Seeded 1,200 micro-creators (5k–50k followers) without mandatory posting clauses, letting organic delight drive genuine reviews.",
      "Amplified top-performing organic videos via TikTok Spark Ads and Meta Partnership Ads to capture buying frenzy in real-time.",
      "Partnered with top beauty makeup artists for behind-the-scenes red carpet prep tutorials.",
    ],
    results: [
      "Over 740 organic creator videos were produced without paying upfront talent fees.",
      "The lip tint sold out 6 months of international inventory in 11 days.",
      "Wholesale stockist inquiries surged by 310% from premier international department stores and boutiques.",
    ],
    creativeHighlights: [
      "The 'Dewy Strawberry Glaze' trend sound which inspired 18,000+ user-generated recreation videos.",
      "High-gloss macro camera footage capturing product texture and light refraction.",
      "Sleek pink metallic compact aesthetics that doubled as fashion accessories.",
    ],
    clientQuote: {
      text: "Gul Naz Bibi Gul Naz Bibi made our brand the talk of the beauty industry overnight. She knows exactly what makes modern consumers stop, smile, and immediately add to cart.",
      author: "Mia Chen",
      title: "Head of Marketing",
    },
  },
  {
    id: "finfemme-global",
    title: "Global Fintech & Wealth App Acquisition",
    brandName: "FinFemme Wealth OS",
    clientType: "Global SaaS",
    role: "Global Growth & Brand Strategist",
    category: "B2B SaaS Growth",
    summary:
      "Created an empowered financial wellness community and organic acquisition engine driving 450,000+ app installs within 6 months with an industry-leading 68% 30-day retention rate.",
    heroImage:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop",
    tags: ["App Store Optimization", "Financial Literacy Engine", "Brand Ambassadors", "Community Funnels"],
    metrics: [
      { label: "App Installs", value: "450,000+", change: "6 Months" },
      { label: "D30 Retention", value: "68.2%", change: "Benchmark is 24%" },
      { label: "Community Members", value: "820,000+", change: "Engaged base" },
      { label: "Blended CPI", value: "$0.84", change: "70% below average" },
    ],
    challenge:
      "Personal finance apps traditionally feel dry, intimidating, and masculine. FinFemme needed to empower modern women with smart wealth tools wrapped in an approachable, inspiring, and elegant ecosystem.",
    strategy: [
      "Shifted financial education into bite-sized, empowering visual carousels, salary negotiation templates, and investment milestones.",
      "Established the 'FinFemme Fellowship' ambassador program across international universities and young professional clubs.",
      "Optimized App Store and Google Play listings with feminine pastel palettes, gamified savings screenshots, and relatable value props.",
      "Created viral TikTok finance challenges: 'The $1K Cushion Challenge' and 'Wealth Wardrobe Audit'.",
    ],
    results: [
      "Achieved 450,000+ organic and low-cost paid app installs at an astonishingly low $0.84 blended CPI.",
      "Maintained a stellar 68.2% Day-30 user retention rate through weekly celebratory savings milestones.",
      "Featured in leading international business and lifestyle media as the modern standard for financial empowerment.",
    ],
    creativeHighlights: [
      "Soft blush pink and champagne gold charts making portfolio growth feel rewarding.",
      "Relatable storytelling on breaking glass ceilings, negotiating contracts, and mindful luxury spending.",
      "Confetti burst animations when members hit their emergency savings goals.",
    ],
    clientQuote: {
      text: "Gul Naz Bibi Gul Naz Bibi turned financial literacy into an aspirational lifestyle brand. Her strategic clarity and visual storytelling were the engine of our hyper-growth.",
      author: "Amara Okonjo",
      title: "Co-Founder & CEO",
    },
  },
];

export const SERVICES = [
  {
    id: "omnichannel-growth",
    icon: "Target",
    title: "Omnichannel Paid Media & ROAS Scaling",
    subtitle: "Meta, TikTok, Pinterest & Google Ads",
    description:
      "High-velocity international media buying architectures built on predictive data modeling, creative diversification, and meticulous unit economics.",
    deliverables: [
      "Full-funnel creative testing frameworks (30+ weekly hooks)",
      "Cross-border pixel tracking, CAPI & attribution modeling",
      "Dynamic product catalog (DPA) and retargeting cascades",
      "AOV expansion & bundle economics engineering",
    ],
    highlight: "Average 4.6x Blended ROAS",
  },
  {
    id: "viral-ugc-creators",
    icon: "Sparkles",
    title: "Viral Creator Seeding & UGC Strategy",
    subtitle: "Organic PR Gifting & Performance TikTok/Reels",
    description:
      "Architecting cultural moments. We turn authentic creators into passionate brand evangelists through magnetic gifting and high-converting performance UGC.",
    deliverables: [
      "Curated 500+ micro-creator PR gifting operations",
      "Direct-response UGC scriptwriting & viral hook library",
      "TikTok Spark Ads & Meta Partnership Ads whitelisting",
      "Usage rights management and international content licensing",
    ],
    highlight: "Over 50M+ Organic & Paid Views",
  },
  {
    id: "retention-lifecycle",
    icon: "HeartHandshake",
    title: "Klaviyo Retention & VIP Lifecycle Engine",
    subtitle: "High-LTV Email, SMS & Personalized Flows",
    description:
      "Transforming first-time buyers into lifelong brand devotees. Generating 30–45% of total brand revenue on automated autopilot.",
    deliverables: [
      "Custom predictive replenishment & skin/quiz flows",
      "VIP loyalty tiers & early-access drop mechanization",
      "High-converting browse, cart & checkout abandonment recovery",
      "Continuous A/B testing on subject lines, design, and send cadence",
    ],
    highlight: "Up to 38% Repeat Purchase Rate",
  },
  {
    id: "luxury-positioning",
    icon: "Crown",
    title: "Global Brand Positioning & Drops",
    subtitle: "Scarcity Funnels & International Go-To-Market",
    description:
      "Elevating your brand into an iconic category leader. Designing the visual aura, luxury narrative, and waitlist hype that makes collections sell out in hours.",
    deliverables: [
      "Editorial brand guidelines & modern luxury tone of voice",
      "VIP password-protected drop and pre-order funnels",
      "International press & influencer digital launch playbook",
      "High-converting luxury Shopify conversion rate optimization",
    ],
    highlight: "< 48 Hour Sell-Out Execution",
  },
];

export const TESTIMONIALS = [
  {
    name: "Elena Vance",
    role: "Co-Founder & Chief Brand Officer",
    company: "LuxeSkin Botanicals",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    quote:
      "Gul Naz Bibi Gul Naz Bibi is in a league of her own. She completely revolutionized our customer acquisition economics, scaling us to nearly $10M ARR while keeping our aesthetic flawless. She’s our secret weapon for global growth.",
    rating: 5,
    tag: "$1.2M to $9.8M ARR",
  },
  {
    name: "Camille Laurent",
    role: "Managing Director",
    company: "Velour & Co. Atelier",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
    quote:
      "Finding a marketing strategist who truly respects luxury aesthetics while obsessing over hard revenue data is almost impossible. Gul Naz Bibi Gul Naz Bibi orchestrated three consecutive sold-out drops under 48 hours.",
    rating: 5,
    tag: "3 Drops Sold Out",
  },
  {
    name: "Marcus Sterling",
    role: "CEO & Founder",
    company: "AuraSync Creator OS",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    quote:
      "Her ability to build organic inbound acquisition loops and slash our customer acquisition cost by 54% in a crowded international SaaS space was astonishing. I cannot recommend Gul Naz Bibi Gul Naz Bibi enough.",
    rating: 5,
    tag: "-54% Inbound CAC",
  },
  {
    name: "Sofia Lindqvist",
    role: "Co-Founder",
    company: "NourishPure Organics",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
    quote:
      "From zero to $3.4M in our launch quarter! Gul Naz Bibi Gul Naz Bibi managed over 500 creator activations seamlessly across international time zones without missing a single beat. A true visionary.",
    rating: 5,
    tag: "$3.4M Launch Q4",
  },
];
