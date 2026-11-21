export type ProjectMetric = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  period: string;
  role: string;
  summary: string;
  metrics: ProjectMetric[];
  context: string;
  contribution: string;
  approach: string[];
  outcome: string;
  learning: string;
  links: { label: string; url: string }[];
  color: string;
};

export const projects: Project[] = [
  {
    slug: 'nirmala-home-kitchen',
    title: 'Nirmala Home Kitchen',
    subtitle: 'A family kitchen. A wider table.',
    category: 'Content strategy · Brand partnerships',
    period: 'March 2024 — present',
    role: 'Content & Brand Partnerships Manager',
    summary:
      'Helping a family-led Indian food brand connect home-style cooking with audiences, platforms and brand partners.',
    metrics: [
      { value: '300K+', label: 'YouTube subscribers' },
      { value: '100M+', label: 'Cumulative video views' },
      { value: '30+', label: 'Brand collaborations' },
    ],
    context:
      'Nirmala Home Kitchen shares Indian home-style cooking, traditional recipes and regional food culture across YouTube, Instagram and Facebook. Building a consistent presence means balancing what people want to watch, how each platform works and what a brand partnership needs to achieve.',
    contribution:
      'My work covers content planning, SEO, publishing, audience analytics, short-form editing and brand communication. I help coordinate campaign expectations, creative deliverables and publishing requirements, while supporting the day-to-day operations behind the content.',
    approach: [
      'Plan content around audience interests, seasonal recipes, regional food and platform-specific formats.',
      'Improve discoverability through video titles, descriptions, keywords, hashtags and search-oriented planning. The work has included SEO and publishing optimization across 1,000+ videos.',
      'Review views, engagement and audience responses to inform the next round of content decisions.',
      'Coordinate recipe-integrated promotions, product demonstrations and branded reels with food, kitchen and lifestyle businesses.',
    ],
    outcome:
      'The brand reported more than 300,000 YouTube subscribers, 100,000 Instagram followers, approximately 80,000 Facebook followers and 100 million cumulative video views during 2026. Its campaign work has involved more than 30 brands, including SOLARA, Nutriorg, Spice Story and Paramount Tea. These are brand-level snapshots and collaborative outcomes, not growth attributable to me alone.',
    learning:
      'Making content attractive is only one part of the job. Understanding the audience, publishing consistently, measuring performance and managing relationships are what connect creative work to a real business.',
    links: [
      { label: 'Watch on YouTube', url: 'https://youtube.com/@nirmala_home_kitchen' },
      { label: 'Explore Instagram', url: 'https://www.instagram.com/nirmala_home_kitchen' },
      { label: 'Visit Facebook', url: 'https://www.facebook.com/share/1M9qAj9SQq/' },
    ],
    color: '#F04438',
  },
  {
    slug: 'muso',
    title: 'GAPPU Music — MUSO',
    subtitle: 'Ask. Listen. Learn.',
    category: 'Consumer research · Startup marketing',
    period: 'September 2026 — ongoing',
    role: 'Student team contributor — marketing & research',
    summary:
      'Taking pilot-stage music products into real conversations to understand awareness, pricing and how people experience play.',
    metrics: [
      { value: '200+', label: 'Consumer interactions' },
      { value: '18', label: 'Promotional videos' },
      { value: '18K+', label: 'Cumulative video views' },
    ],
    context:
      'Through IMI Kolkata’s Local Business Accelerator, our student team is working with GAPPU Music on MUSO: a pilot-stage range of interactive music card games, learning products and a notation book. The question is how to help people understand the products and learn which audiences find them useful.',
    contribution:
      'I contribute to promotional ideation, scripting, video editing and product-related content, alongside field interactions, customer feedback, competitor research and business development exploration. Our research takes us into shopping centres, educational institutions, metro areas and other public and commercial spaces in Kolkata.',
    approach: [
      'Create and promote short-form content that introduces the products and demonstrates their use.',
      'Talk to potential customers about product comprehension, interest, price expectations and reasons for hesitation.',
      'Study comparable products, retail settings and educational use cases to explore potential audiences and institutional partnerships.',
      'Translate feedback into recommendations around instructions, gameplay demonstrations, musical themes, child-friendly designs and gifting.',
    ],
    outcome:
      'For September–November 2026, company-acknowledged project records document 18 promotional videos, more than 18,000 cumulative views and over 200 consumer research interactions. These are collective team results. Feedback highlighted student price sensitivity and the importance of demonstrating gameplay. No sales or conversion impact is claimed.',
    learning:
      'An interesting product still needs to be understood. Before scaling awareness, it helps to listen carefully to how people perceive the price, the instructions and the experience itself.',
    links: [
      { label: 'Discuss this project', url: 'mailto:sunilchaisir22187@gmail.com?subject=MUSO%20project' },
    ],
    color: '#B6E4C2',
  },
  {
    slug: 'sabera',
    title: 'SABERA',
    subtitle: 'Outreach meets execution.',
    category: 'Business development · Project coordination',
    period: 'April — October 2024',
    role: 'Project Coordinator',
    summary:
      'Connecting corporate outreach, registrations and vendor relationships with the practical work of delivering a project.',
    metrics: [
      { value: '₹2L+', label: 'Sponsorship revenue supported' },
      { value: '₹1.5L+', label: 'Registration revenue supported' },
      { value: '100+', label: 'Vendors onboarded & coordinated' },
    ],
    context:
      'SABERA introduced me to the commercial and operational side of business: finding potential partners, communicating a useful proposition, coordinating registrations and keeping stakeholders informed while several activities run in parallel.',
    contribution:
      'As Project Coordinator, I supported sponsorship acquisition through corporate outreach, cold emails, cold calls and lead generation. My responsibilities also included registration campaigns, vendor onboarding and communication, invoicing support and coordination between stakeholders.',
    approach: [
      'Identify prospective corporate partners and start conversations through direct outreach.',
      'Communicate the opportunity, follow up professionally and support sponsorship discussions.',
      'Help execute registration campaigns and coordinate the information needed to keep them moving.',
      'Onboard and coordinate vendors, support invoicing and maintain communication across project activities.',
    ],
    outcome:
      'My project work contributed to more than ₹2 lakh in sponsorship revenue and more than ₹1.5 lakh in registration revenue, alongside the onboarding and coordination of over 100 vendors. These are reported outcomes I helped support, rather than revenue acquired solely by me.',
    learning:
      'Business development is built through clear communication and consistent follow-up. The experience made rejection, relationship management and operational details part of my understanding of how commercial work gets done.',
    links: [
      { label: 'Discuss this experience', url: 'mailto:sunilchaisir22187@gmail.com?subject=SABERA%20experience' },
    ],
    color: '#9388BA',
  },
];
