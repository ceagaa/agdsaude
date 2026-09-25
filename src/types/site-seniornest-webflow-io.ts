/**
 * Content + types for the seniornest.webflow.io clone (route "/" ).
 * All copy is transcribed from the source site — do not invent new text.
 */

export type NavItem = { label: string; href: string };

export const NAV: { links: NavItem[] } = {
  links: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
};

export const HERO = {
  badge: "The future of AI in behavioral health",
  title: "Senior Care You Can Trust",
  body: "We empower individuals, families, and businesses with tailored financial strategies that grow wealth.",
  cta: { label: "Book a Services", href: "#services" },
};

export const MARQUEE = {
  lines: ["Trusted by nearly", "5000+", "Partner's"],
};

export const PROMISE = {
  text: "Because every senior\ndeserves not just care—but\ncompassion, respect, and a place to call home.",
  // Desktop line split produced by the source site's SplitText (masks are
  // nowrap per line; concatenated they reflow into `text` below 992px).
  masks: [
    [
      { t: "Because every senior" },
      { img: "promiseAvatar1" as const },
      { t: "deserves not just " },
    ],
    [
      { t: "care—but" },
      { img: "promiseAvatar2" as const },
      { t: "compassion, respect, and a " },
    ],
    [{ t: "place to call home." }],
  ],
};

export const ABOUT = {
  tag: "//  About Us",
  title: "Not Just a Care Home— A True Place to Belong",
  body: "We provide a safe, supportive, and nurturing environment where every resident is treated with dignity and love.",
  bannerBody: "Our experienced caregivers, here 24/7 to ensure each individual\u2019s health.",
  bullets: ["24/7 Care & Support", "Health & Happiness First", "Emotional Well-Being"],
  cta: { label: "Learn More", href: "#about" },
};

export const CHOOSE = {
  tag: "//  Why Choose Us",
  title:
    "The Right Choice for Your Loved One\u2019s Next Chapter\u2014In a Place They\u2019ll Truly Feel at Home.",
  items: [
    {
      num: "01/",
      title: "Personalized Care Plans",
      body: "We tailor our support to meet the unique needs, liking routines of each resident.",
      image: "choose1",
    },
    {
      num: "02/",
      title: "Experienced, Compassionate Staff",
      body: "Our team is trained, trusted, and deeply committed to senior well-being.",
      image: "choose2",
    },
    {
      num: "03/",
      title: "Warm, Home-Like Environment",
      body: "Comfortable rooms, cozy shared spaces, and a welcoming atmosphere.",
      image: "choose3",
    },
    {
      num: "04/",
      title: "Engaging Daily Activities",
      body: "From music and gentle exercise\u2014there\u2019s always something joyful to do.",
      image: "choose4",
    },
  ] as const,
};

export const SERVICES = {
  tag: "//  Our Services",
  title: "Supporting Every Step of the Aging Journey",
  body: "We offer a full range of services designed to meet the evolving needs of our residents. Whether it's specialized medical care",
  items: [
    {
      title: "Wellness & Activities",
      label: "Support with ",
      bullets: [
        "Social, physical, and activities",
        "Residents engaged, happy and active.",
        "While promoting independence.",
      ],
      note: "This is some text inside of a div block.",
      icon: "serviceIcon1",
      image: "serviceImage1",
    },
    {
      title: "Memory Care",
      label: "Specialized for",
      bullets: [
        "Seniors living with Alzheimer\u2019s",
        "Dementia",
        "Other memory-related conditions",
      ],
      note: "This is some text inside of a div block.",
      icon: "serviceIcon2",
      image: "serviceImage2",
    },
    {
      title: "Health monitoring",
      label: "Support with ",
      bullets: [
        "Ongoing Tracking & Assessment",
        "Personalized Care Plans",
        "Coordination with Healthcare Providers",
      ],
      note: "This is some text inside of a div block.",
      icon: "serviceIcon3",
      image: "serviceImage3",
    },
    {
      title: "Assisted Living",
      label: "Support with ",
      bullets: ["Support with ", "Dressing, and mobility", "While promoting independence."],
      note: "This is some text inside of a div block.",
      icon: "serviceIcon4",
      image: "serviceImage4",
    },
  ] as const,
};

export const PROCESS = {
  tag: "//   Our Process",
  title: "Simple Steps Toward for Better Care",
  steps: [
    {
      step: "Step 1",
      title: "Initial Consultation",
      body: "We connect with you to understand your loved one\u2019s care needs, \npreferences, and expectations.",
    },
    {
      step: "Step 2",
      title: "Personalized Care Plan",
      body: "Our medical and care team designs a tailored plan focusing on health, \nsafety, and daily comfort.",
    },
    {
      step: "Step 3",
      title: "Tour and Admission",
      body: "Visit our home, meet our caregivers, and complete a simple admission \nprocess with full guidance.",
    },
    {
      step: "Step 4",
      title: "Warm Welcome & Ongoing Support",
      body: "Move in with ease\u2014our team ensures a smooth transition, regular updates, and continuous family involvement.",
    },
  ] as const,
};

export const GALLERY = {
  tag: "//  Gallery",
  title: "Capturing Moments of Joy, Care, and Connection",
  items: [
    {
      title: "Planting & Garden Work",
      body: "A look at full-service jobs where we\u2019ve handled planting, flower beds, shrubs, and landscape updates.",
      image: "gallery1",
    },
    {
      title: "Lawn Care & Maintenance",
      body: "A look at full-service jobs where we\u2019ve handled mowing, edging, trimming, and routine yard upkeep.",
      image: "gallery2",
    },
    {
      title: "Daily Life & Activities",
      body: "At look at full-service jobs where we\u2019ve handled mowing, planting, trimming more.",
      image: "gallery3",
    },
    {
      title: "Complete Landscape Services",
      body: "A look at full-service jobs where we\u2019ve handled mowing, planting, trimming, and more.",
      image: "gallery4",
    },
  ] as const,
};

export const TEAM = {
  tag: "//  Our Team",
  title: "The Team That Makes Our Home Feel Like Family",
  body: "Each staff member\u2014from our nurses and caregivers to our activity coordinators and chefs\u2014is dedicated to making every.",
  cta: { label: "Meet Our Team", href: "#team" },
  members: [
    {
      role: "Director of Care",
      quote:
        "\"My mission is to ensure every resident feels respected, heard, and at home\u2014every single day.\"",
      name: "Marh Thompson ",
      suffix: "– Director of Care",
      image: "team1",
    },
    {
      role: "Head Nurse / Clinical Manager",
      quote:
        "\u201cEvery heartbeat matters. My goal is to make care feel comforting, not clinical.\u201d",
      name: "Sophia Bennett",
      suffix: "\u2013 Head Nurse / Clinical Manager\n",
      image: "team4",
    },
    {
      role: "Senior Caregiver",
      quote: "\u201cI treat every resident like my own parent\u2014with patience and love.\u201d",
      name: "Martha Lewis",
      suffix: "\u2013 Senior Caregiver",
      image: "team6",
    },
    {
      role: "Activity & Engagement Coordinator",
      quote: "\u201cJoy is medicine\u2014and I serve it daily through laughter and creativity.\u201d",
      name: "Ella Parker",
      suffix: "\u2013 Activity & Engagement Coordinator",
      image: "team5",
    },
    {
      role: "Nutritionist & Head Chef",
      quote: "\u201cGood food is good care. I make every meal feel like home.\u201d",
      name: "James Collins",
      suffix: "\u2013 Nutritionist & Head Chef",
      image: "team2",
    },
    {
      role: "Housekeeping Lead",
      quote: "\u201cClean spaces create peace of mind. That\u2019s what I deliver daily.\u201d",
      name: "Harper Reed",
      suffix: "\u2013 Housekeeping Lead",
      image: "team3",
    },
  ] as const,
};

export const TESTIMONIALS = {
  tag: "//  Success Stories",
  title: "Real Words from Those Who Matter Most",
  items: [
    {
      quote:
        "Elderhaven has been a true blessing for our family. The care and attention they provide my mother have given us peace of mind, knowing she\u2019s in capable, compassionate hands. Thank you for everything!",
      name: "John m.",
      role: "Son of Resident",
      image: "testimonial1",
    },
    {
      quote:
        "Choosing Elderhaven was the best decision we made for our family. The care team not only looks after my mother\u2019s health but also brings her joy and companionship. We are deeply grateful for their genuine love and professionalism.",
      name: "James Carter",
      role: "Son of Resident",
      image: "testimonial2",
    },
    {
      quote:
        "We couldn\u2019t have asked for better support than what Elderhaven provides. The staff goes above and beyond to ensure my grandmother feels comfortable and valued every single day. Their compassion shines through in everything they do.",
      name: "Daniel Kim",
      role: "Son of Resident",
      image: "testimonial3",
    },
  ] as const,
};

export const PRINCIPLES = {
  tag: "//   Our Principles",
  title: "Values That Shape Every Care Moment",
  items: [
    {
      title: "Compassion",
      body: "We approach every resident with warmth and empathy, treating each individual as a valued member of our extended family. Compassion guides everything we do \u2014 from daily care",
    },
    {
      title: "Respect & Dignity",
      body: "Every person deserves to be seen, heard, and valued. We honor the unique stories, preferences, and independence of each resident, creating an environment where dignity",
    },
    {
      title: " Safety & Professionalism",
      body: "Our team follows the highest standards of care and safety, ensuring peace of mind for residents and their families. Professional training and careful attention protect",
    },
    {
      title: "Listening & Understanding",
      body: "We take the time to truly listen to residents and their families, ensuring every concern, preference, and need is fully understood and met with care.",
    },
  ] as const,
};

export const BLOG = {
  tag: "//  Success Stories",
  title: "Insights, Stories & Support for Families",
  body: "Explore articles on senior wellness, caregiving tips, memory care advice, and updates from life inside our care home.",
  cta: { label: "All Blog Posts", href: "#blog" },
  posts: [
    {
      excerpt: "This is some text inside of a div block.",
      date: "January 4, 2026",
      category: "Amily & Caregiver",
      title: "From Data to Action: Making Chronic Care More Effective",
      image: "misc1",
    },
    {
      excerpt: "This is some text inside of a div block.",
      date: "January 4, 2026",
      category: "Memory & Dementia",
      title: "From Insights to Impact: Transforming Chronic Care",
      image: "misc2",
    },
    {
      excerpt: "This is some text inside of a div block.",
      date: "January 4, 2026",
      category: "Health & Wellness",
      title: "Turning Healthcare Data Into Actionable Chronic Care",
      image: "miscBg",
    },
  ] as const,
};

export const CTA = {
  title: "Ready to Learn More?",
  body: "Submit the form below and let us help you or your loved one take the next step toward ",
  fields: {
    firstName: "First Name",
    lastName: "Last Name",
    phone: "Phone Number",
    email: "Email Address",
  },
  placeholder: "Choose a service",
  options: [
    { label: "Assisted Living", value: "First" },
    { label: "In-Home Care", value: "Second" },
    { label: "Physical Therapy", value: "Third" },
    { label: "Meal Preparation", value: "Meal" },
    { label: "Care Assessment", value: "Assessment" },
  ],
  submit: "Submit",
  success: "Thank you! Your submission has been received!",
  error: "Oops! Something went wrong while submitting the form.",
};

export const FOOTER = {
  phone: "+123 1234 4567",
  email: "contactinfo@gmail.com",
  blurb:
    "Our team is dedicated to ensuring comfort, safety, and well-being for every resident.",
  form: { label: "Stay Updated", cta: "Subscribe", placeholder: "Enter your email address" },
  columns: [
    {
      heading: "Navigation",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      heading: "Navigation",
      links: [
        { label: "Facebook", href: "https://facebook.com" },
        { label: "Twitter", href: "https://twitter.com" },
        { label: "Instagram", href: "https://instagram.com" },
        { label: "Linkedin", href: "https://linkedin.com" },
      ],
    },
    {
      heading: "Navigation",
      links: [
        { label: "Team", href: "#team" },
      ],
    },
  ],
  legal: { poweredBy: "Webflow", designedBy: "Pentaclay" },
};
