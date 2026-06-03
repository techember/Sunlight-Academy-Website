// Static data for Sunlight Academy website

export interface CourseDetail {
  title: string;
  subtitle: string;
  classes: string[];
  features: string[];
  benefits?: string[];
  description: string;
  tagline: string;
}

export interface FacultyMember {
  name: string;
  role: string;
  credentials: string[];
  experience: string;
  expertise: string[];
  teachingPhilosophy: string;
  avatarSeed: string; // for UI display representation
}

export interface Testimonial {
  name: string;
  role: string; // e.g. "IIT-JEE (Class 12 Pass)" or "NEET Achiever"
  content: string;
  achievement: string; // e.g. "JEE Advanced AIR 432" or "NEET 685/720"
  year: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ResultHighlight {
  name: string;
  course: string;
  achievement: string;
  detail: string;
  badge: string;
  year: string;
}

export const COURSES_DATA: Record<string, CourseDetail> = {
  jee: {
    title: "IIT-JEE (Main & Advanced)",
    subtitle: "Engineering Entrance Program",
    tagline: "Unleash Your Engineering Potential with Premium Mentorship",
    description: "Our comprehensive IIT-JEE program is meticulously designed by Ex-NITians and former premier institute faculties to build solid conceptual foundations and master problem-solving skills for JEE Main and Advanced.",
    classes: ["Class 11 (2-Year Program)", "Class 12 (1-Year Program)", "Class 12 Pass (Target/Repeater Program)"],
    features: [
      "Physics, Chemistry, and Mathematics Comprehensive Coaching",
      "Rigorous JEE Main & Advanced level preparation",
      "Dedicated, live doubt-solving sessions",
      "Regular chapter-wise, part-syllabus, and full-syllabus mock tests",
      "Personalized mentorship from Ex-NITians and top faculties",
      "Comprehensive performance analysis and tracking reports",
      "Structured graded study material and practice sheets (DPPs)",
      "Time management and exam-temperament training sessions"
    ]
  },
  neet: {
    title: "NEET (National Eligibility cum Entrance Test)",
    subtitle: "Medical Entrance Program",
    tagline: "Nurturing Future Medical Professionals",
    description: "A highly focused, NCERT-centric medical program designed to help students score maximum marks in Biology, Physics, and Chemistry, guiding them to secure seats in prestigious government medical colleges.",
    classes: ["Class 11 (2-Year Program)", "Class 12 (1-Year Program)", "Class 12 Pass (Target/Repeater Program)"],
    features: [
      "Physics, Chemistry, and Biology (Botany & Zoology) Coaching",
      "Deep, NCERT-focused conceptual learning and explanations",
      "Regular mock tests mirroring exact NEET patterns",
      "Live doubt-solving sessions and personal query support",
      "Dedicated mentorship for mental resilience and speed building",
      "Regular performance tracking and parent-teacher alignment",
      "Daily practice problems (DPPs) tailored to NEET difficulty",
      "Quick revision methodologies and memory techniques for Biology"
    ]
  },
  foundation: {
    title: "Early IIT-JEE & NEET Foundation Program",
    subtitle: "Class 6 to 10 Pre-Prep Program",
    tagline: "Building Strong Minds Early For Future Excellence",
    description: "A highly specialized program focusing on developing deep conceptual clarity in Mathematics and Science, along with analytical, logical, and problem-solving skills to give students an early head-start for future IIT-JEE and NEET preparation.",
    classes: [
      "Class 6 Foundation",
      "Class 7 Foundation",
      "Class 8 Foundation",
      "Class 9 Foundation",
      "Class 10 Foundation"
    ],
    features: [
      "Strong Mathematics Fundamentals",
      "Strong Science (Physics, Chemistry, Biology) Fundamentals",
      "Logical Reasoning and Aptitude Training",
      "Analytical Thinking and Advanced Problem-Solving Skills",
      "Weekly Practice Sheets and Graded Assignment sets",
      "Regular Descriptive and Objective Assessments",
      "Personal Mentorship for Academic Excellence",
      "Dedicated Doubt-Solving sessions",
      "Small Batch Sizes for optimal personal attention"
    ],
    benefits: [
      "Early Concept Building: Master core ideas before they appear in higher classes.",
      "Better Academic Discipline: Develop structured study habits and time management.",
      "Future IIT-JEE Readiness: Early exposure to competitive aptitude and analytical testing.",
      "Future NEET Readiness: Solid grasp of biological systems and scientific reasoning.",
      "Increased Confidence: Perform exceptionally in school curricula and entrance foundations."
    ]
  }
};

export const FACULTY_DATA: FacultyMember[] = [
  {
    name: "Chandan Kumar",
    role: "Co-Founder & Senior Faculty",
    credentials: ["Ex-NITian", "Ex-Allen Faculty", "Ex-Navodayan"],
    experience: "8+ Years of Teaching Experience",
    expertise: ["Mathematics Specialist", "Analytical Logic Trainer", "JEE Advanced Specialist"],
    teachingPhilosophy: "Mathematics is the language of logic. Once you learn to think logically, math becomes a game of patterns. I train students to spot those patterns.",
    avatarSeed: "chandan"
  },
  {
    name: "Jaydeep",
    role: "Co-Founder & Senior Faculty",
    credentials: ["Ex-NITian", "Ex-Allen Faculty", "Ex-Navodayan"],
    experience: "7+ Years of Teaching Experience",
    expertise: ["Chemistry Specialist", "JEE/NEET Mentor", "Concept builder"],
    teachingPhilosophy: "Chemistry is the study of matter and its transformations. It's not about memorizing reactions, but understanding how molecules interact. I help students visualize molecular structures and make equations logical.",
    avatarSeed: "jaydeep"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: "Amit Raj",
    role: "IIT-JEE Student",
    content: "Under the personal mentorship of Chandan Sir and Jaydeep Sir, I cracked JEE Advanced. The small batch sizes allowed me to ask doubts freely, and their teaching methodology is unmatched.",
    achievement: "IIT Bombay - Computer Science (AIR 342)",
    year: "2025"
  },
  {
    name: "Priyanka Kumari",
    role: "NEET Student",
    content: "The NCERT-focused approach at Sunlight Academy made NEET Biology and Chemistry extremely easy. Regular mock tests helped me conquer exam anxiety and manage my time perfectly.",
    achievement: "NEET Score: 682/720 (AIIMS Patna)",
    year: "2025"
  },
  {
    name: "Rohan Mishra",
    role: "Foundation Class 10 Student",
    content: "Joining the foundation program in Class 9 was the best decision. It built my logical reasoning and strong math skills, making me fully confident to take on JEE syllabus in Class 11.",
    achievement: "96.4% in Class 10 Boards & JEE Ready",
    year: "2025"
  },
  {
    name: "Sanya Gupta",
    role: "IIT-JEE Student",
    content: "Jaydeep Sir's shortcut tricks in Calculus saved me so much time in the actual exam. The test analysis reports helped me pinpoint my weak areas and improve every week.",
    achievement: "IIT Kharagpur (AIR 845)",
    year: "2025"
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: "What makes Sunlight Academy different from national coaching brands?",
    answer: "Unlike large national chains with massive batches where students get lost in the crowd, Sunlight Academy offers premium national-level content (designed by Ex-Allen & Ex-NITian faculties) but in a small-batch format. This ensures personalized attention, instant doubt resolution, and tailored mentorship for every single student."
  },
  {
    question: "Who will teach the classes at Sunlight Academy?",
    answer: "Classes are taught directly by our co-founders and expert faculties: Chandan Kumar (Ex-NITian, Ex-Allen, Ex-Navodayan) and Jaydeep (Ex-NITian, Ex-Allen, Ex-Navodayan). Both possess years of experience training students who have successfully cracked IIT-JEE and NEET."
  },
  {
    question: "What is the batch size at Sunlight Academy?",
    answer: "To ensure that every student receives individual attention and customized feedback, we maintain a small batch size. Typically, our batches are limited to 30-35 students, allowing teachers to track every student's daily progress."
  },
  {
    question: "How do you track and report student performance to parents?",
    answer: "We conduct weekly practice sheet evaluations and monthly comprehensive tests. Parents receive automated detailed reports of test marks, attendance, and rank. We also host monthly Parent-Teacher Meetings (PTMs) to discuss academic progress, weaknesses, and custom action plans."
  },
  {
    question: "Do you offer demo classes for new students?",
    answer: "Yes, we offer up to 3 trial/demo classes for both IIT-JEE/NEET and Foundation programs. This allows students to experience our teaching methodology, inspect the classroom environment, and interact with the faculty before securing admission."
  },
  {
    question: "Where is the institute located and how can we contact you?",
    answer: "Sunlight Academy is located at Thana Mor, Station Road, Madhubani, Bihar. You can contact us at 8709667059 or email us at cdpsjarya@gmail.com for any admission queries."
  }
];

export const RESULTS_DATA: ResultHighlight[] = [
  {
    name: "Amit Raj",
    course: "IIT-JEE (Class 12 Pass)",
    achievement: "JEE Advanced AIR 342",
    detail: "Secured Admission in IIT Bombay CSE",
    badge: "JEE Advanced Top Ranker",
    year: "2025"
  },
  {
    name: "Priyanka Kumari",
    course: "NEET (Class 12)",
    achievement: "NEET Score 682 / 720",
    detail: "Secured Seat in AIIMS Patna",
    badge: "NEET AIIMS Qualifier",
    year: "2025"
  },
  {
    name: "Sanya Gupta",
    course: "IIT-JEE (Class 12)",
    achievement: "JEE Advanced AIR 845",
    detail: "Secured Admission in IIT Kharagpur",
    badge: "IITian",
    year: "2025"
  },
  {
    name: "Aditya Vardhan",
    course: "NEET (Class 12 Pass)",
    achievement: "NEET Score 655 / 720",
    detail: "Secured Seat in PMCH Patna",
    badge: "NEET Qualified",
    year: "2025"
  },
  {
    name: "Vikram Sen",
    course: "IIT-JEE (Class 11)",
    achievement: "JEE Main 99.85 Percentile",
    detail: "Highest Score in Madhubani District",
    badge: "District Topper",
    year: "2025"
  },
  {
    name: "Sneha Kumari",
    course: "NEET (Class 12 Pass)",
    achievement: "NEET Score 648 / 720",
    detail: "Secured Seat in DMCH Darbhanga",
    badge: "NEET Qualified",
    year: "2025"
  }
];

export const ADMISSION_STEPS = [
  {
    step: "Step 1",
    title: "Fill Enquiry Form",
    description: "Submit the online enquiry form or visit our Madhubani center in person to express interest in the desired courses."
  },
  {
    step: "Step 2",
    title: "Counselling Session",
    description: "Attend a free comprehensive academic counselling session with our founders to assess strengths, interests, and goals."
  },
  {
    step: "Step 3",
    title: "Course Selection",
    description: "Based on counseling and academic objectives, select the appropriate batch and program track (JEE/NEET/Foundation)."
  },
  {
    step: "Step 4",
    title: "Admission Confirmation",
    description: "Complete final enrollment paperwork, submit fees, collect student kit/study materials, and start attending classes."
  }
];

