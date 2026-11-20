export type ChapterAccent = "sky" | "lime" | "violet" | "clay" | "forest";

export interface Chapter {
  id: string;
  index: string;
  title: string;
  kicker: string;
  code: string;
  description: string;
  items: string[];
  accent: ChapterAccent;
  plate: "sight" | "mesh" | "orbit" | "pulse" | "plan";
  footer: string;
}

export const chapters: Chapter[] = [
  {
    id: "security-surveillance",
    index: "01",
    title: "Security & Surveillance",
    kicker: "Perimeter / Identity",
    code: "SEC — 01",
    description:
      "Camera coverage, credentialed access and keyless entry planned together. The result is a clear view of activity and access across the site.",
    items: ["CCTV Systems", "Access Control", "Biometric & Attendance", "Smart Locks"],
    accent: "sky",
    plate: "sight",
    footer: "Vision / Control",
  },
  {
    id: "network-infrastructure",
    index: "02",
    title: "Network Infrastructure",
    kicker: "Backbone / Signal",
    code: "NET — 02",
    description:
      "The structured layer beneath reliable connectivity. Cabling, voice, data centre infrastructure and enterprise hardware, specified as one network.",
    items: ["Structured Cabling", "EPABX", "Data Centers", "IT Products"],
    accent: "lime",
    plate: "mesh",
    footer: "Link / Transport",
  },
  {
    id: "smart-automation",
    index: "03",
    title: "Smart Automation",
    kicker: "Environment / Control",
    code: "AUT — 03",
    description:
      "Control layers for homes, hotels and industrial environments. Everyday operations are brought into responsive, manageable systems.",
    items: ["Home Automation", "Hotel Management", "Industrial IoT", "Hotel Automation"],
    accent: "violet",
    plate: "orbit",
    footer: "Loop / Feedback",
  },
  {
    id: "safety-solutions",
    index: "04",
    title: "Safety Solutions",
    kicker: "Detection / Response",
    code: "SAF — 04",
    description:
      "Detection, suppression, exit guidance and voice communication planned as a coordinated safety response — not as isolated devices.",
    items: ["Fire Alarm", "Fire Fighting", "Emergency Lighting", "Public Announcement"],
    accent: "clay",
    plate: "pulse",
    footer: "Alert / Guidance",
  },
  {
    id: "engineering-solutions",
    index: "05",
    title: "Engineering Solutions",
    kicker: "Build / Verify",
    code: "MEP — 05",
    description:
      "Mechanical, electrical and plumbing services integrated with the built environment, alongside video verification at the entry point.",
    items: ["MEP Services", "Video Door Phone"],
    accent: "forest",
    plate: "plan",
    footer: "Plan / As-built",
  },
];

export const capabilityStrip = [
  "CCTV & Surveillance",
  "Access Control",
  "Structured Cabling",
  "Home Automation",
  "Fire & Safety",
  "EPABX Systems",
  "MEP Engineering",
  "Smart Locks",
  "Public Address",
  "IT Products",
];

export const catalogue = [
  { name: "CCTV Systems", code: "01 / SURVEILLANCE" },
  { name: "EPABX", code: "02 / COMMUNICATION" },
  { name: "Networking", code: "03 / INFRASTRUCTURE" },
  { name: "MEP", code: "04 / ENGINEERING" },
  { name: "Smart Locks", code: "05 / ACCESS" },
  { name: "IT Products", code: "06 / HARDWARE" },
  { name: "Home Automation", code: "07 / LIVING" },
  { name: "Fire Alarm System", code: "08 / DETECTION" },
  { name: "Fire Fighting System", code: "09 / RESPONSE" },
  { name: "Hotel Automation", code: "10 / HOSPITALITY" },
  { name: "Video Door Phone", code: "11 / ENTRY" },
  { name: "Biometric & Attendance", code: "12 / IDENTITY" },
  { name: "Access Control", code: "13 / PERIMETER" },
  { name: "Public Announcement", code: "14 / AUDIO" },
];

export const principles = [
  {
    number: "01",
    title: "One system",
    copy: "Security, networks and automation planned as one connected environment — not separate boxes that never speak.",
  },
  {
    number: "02",
    title: "Properly built",
    copy: "Careful specification and clean installation by people who understand the site and the people using it.",
  },
  {
    number: "03",
    title: "Still here",
    copy: "Maintenance, diagnostics and upgrades long after handover. That is the part that actually matters.",
  },
];

export const processSteps = [
  {
    number: "I",
    title: "Survey",
    copy: "We walk the site, understand the constraints and work out what really needs to happen.",
  },
  {
    number: "II",
    title: "Specify",
    copy: "Hardware and layout chosen for your environment — not pulled from a generic catalogue.",
  },
  {
    number: "III",
    title: "Install",
    copy: "Clean execution, full commissioning, and a handover you can actually understand.",
  },
  {
    number: "IV",
    title: "Maintain",
    copy: "Servicing, diagnostics and upgrades that keep the whole system doing its job.",
  },
];

export const faqs = [
  {
    question: "What do you actually install?",
    answer:
      "CCTV and surveillance, access control, biometrics, networking and EPABX, home and hotel automation, fire alarm and fighting systems, public address, MEP and IT products. We can take a whole site or a single system.",
  },
  {
    question: "Do you work on existing sites?",
    answer:
      "Yes. Most of our work is retrofits and upgrades in live homes, hotels and offices. We survey first, plan the least disruptive route, then install and commission around your schedule.",
  },
  {
    question: "Do you provide onsite support?",
    answer:
      "We do. Onsite diagnostics, servicing and system upgrades are part of what we do — not an afterthought once the invoice is paid.",
  },
  {
    question: "Can one team handle the whole project?",
    answer:
      "That is the idea. Security, network and automation are planned together so the parts talk to each other and there is one number to call when something needs attention.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Send us a note through the contact page or call us directly. Tell us what you are trying to solve and we will put together a scoped proposal after understanding the site.",
  },
];

export const electricalWorks = [
  {
    number: "01",
    title: "Total wiring",
    copy: "Complete residential and commercial wiring, from first fix to final connection and testing.",
  },
  {
    number: "02",
    title: "CCTV security",
    copy: "Camera coverage planned around the site, installed and maintained for a clear view of activity.",
  },
  {
    number: "03",
    title: "AC installation",
    copy: "Cooling installed with the right power supply, cable routes and commissioning.",
  },
  {
    number: "04",
    title: "Inverter & backup",
    copy: "Inverters and backup power sized to the load so the circuits that matter stay live.",
  },
  {
    number: "05",
    title: "Distribution boards",
    copy: "Distribution and protection laid out cleanly, labelled and safe to work on.",
  },
  {
    number: "06",
    title: "Maintenance & upgrades",
    copy: "Diagnostics, servicing and upgrades for existing systems — not just new installations.",
  },
];

export const serviceAreas = [
  "Kolathur",
  "Perangalathur",
  "New Washermenpet",
  "Tondiarpet",
  "Ambattur",
  "Royapuram",
  "MKB Nagar",
];

export const social = {
  platform: "Instagram",
  handle: "@brightlife_engineering_works",
  url: "https://www.instagram.com/brightlife_engineering_works/",
  followers: "251",
  rating: "4.8",
  reviews: "18",
  tagline: "Safe Power. Brighter Tomorrow.",
};

export const contact = {
  person: "MANAGER YOGARAJ",
  role: "Manager",
  phone: "+91 78454 16478",
  phoneHref: "tel:+917845416478",
  emails: ["brightlifeengineering@gmail.com"],
  address: [
    "5/3 Market Farm,",
    "Corporation Colony 2nd St,",
    "New Washermenpet, Tondiarpet,",
    "Chennai – 600 081.",
  ],
  mapSrc: "https://www.google.com/maps?q=New+Washermenpet,+Tondiarpet,+Chennai&output=embed",
};
