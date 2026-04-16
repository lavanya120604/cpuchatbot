export interface FAQItem {
  id: string;
  category: string;
  keywords: string[];
  patterns: string[];
  answer: string;
}

export const faqData: FAQItem[] = [
  // Academic & Timetable
  {
    id: "exam-start",
    category: "Academic",
    keywords: ["exam", "semester", "start", "when", "final", "major"],
    patterns: ["when will the semester exams start", "when are exams", "exam date", "when is major exam", "major exam start"],
    answer: "BCA major exams start from **8 May 2026** 📚. The timetable will be updated on the portal soon. Stay tuned and start preparing! 💪"
  },
  {
    id: "timetable",
    category: "Academic",
    keywords: ["timetable", "schedule", "download", "class"],
    patterns: ["where can i download the timetable", "timetable download", "class schedule", "where is timetable"],
    answer: "You can download the timetable from the **CPU Student Portal** at cpur.in 📋. Go to Academics → Timetable section. If it's not updated yet, check back soon!"
  },
  {
    id: "passing-criteria",
    category: "Academic",
    keywords: ["passing", "criteria", "marks", "minimum", "pass"],
    patterns: ["what are the passing criteria", "minimum marks to pass", "passing marks"],
    answer: "The passing criteria is **40% in each subject** (internal + external combined) 📊. You need minimum 40% in theory and practical separately."
  },
  {
    id: "attendance",
    category: "Academic",
    keywords: ["attendance", "days", "required", "minimum", "percentage"],
    patterns: ["how many attendance days are required", "minimum attendance", "attendance requirement"],
    answer: "You need a minimum of **75% attendance** to be eligible for exams 📝. If attendance is below 75%, you may face detention. Keep attending classes regularly!"
  },
  {
    id: "recheck",
    category: "Academic",
    keywords: ["recheck", "revaluation", "rechecking", "apply"],
    patterns: ["how to apply for rechecking", "revaluation process", "recheck form"],
    answer: "For rechecking/revaluation, visit the **Examination Department** 📄. Fill the revaluation form within 15 days of result declaration. Fee: ₹500 per subject. Contact: coe@cpur.edu.in"
  },
  {
    id: "practicals",
    category: "Academic",
    keywords: ["practical", "practicals", "lab", "viva"],
    patterns: ["when are bca practicals", "practical exam date", "lab exam"],
    answer: "BCA practicals start from **27 April 2026** 🖥️. Make sure your lab files and projects are ready. Check the portal for the detailed schedule!"
  },
  {
    id: "viva",
    category: "Academic",
    keywords: ["viva", "oral", "defense"],
    patterns: ["when is viva", "viva date", "oral exam"],
    answer: "Viva/oral exam dates will be announced along with the practical schedule 🎤. Keep checking the portal for updates!"
  },

  // Fees & Payment
  {
    id: "fee-deadline",
    category: "Fees",
    keywords: ["fee", "last", "date", "deadline", "submission"],
    patterns: ["what is the last date for fee submission", "fee deadline", "when to pay fees"],
    answer: "Fee submission deadline is usually **15 days before the start of semester exams** 💰. Check the Accounts Office or portal for exact dates. Don't wait till the last day!"
  },
  {
    id: "fee-online",
    category: "Fees",
    keywords: ["fee", "online", "pay", "payment", "how"],
    patterns: ["how to pay fees online", "online fee payment", "pay fees"],
    answer: "Pay fees online through the **CPU Student Portal** → Fee Payment section 💳. You can use UPI, Net Banking, or Debit/Credit Card. For issues, contact: accounts@cpur.edu.in"
  },
  {
    id: "late-fee",
    category: "Fees",
    keywords: ["late", "fee", "fine", "penalty"],
    patterns: ["what is the late fee fine", "late fee penalty", "fine for late payment"],
    answer: "Late fee fine is **₹100 per day** after the deadline ⚠️. Maximum fine can go up to ₹3000. Pay on time to avoid extra charges!"
  },
  {
    id: "scholarship",
    category: "Fees",
    keywords: ["scholarship", "bca", "available", "financial", "aid"],
    patterns: ["is scholarship available for bca students", "scholarship for bca", "financial aid"],
    answer: "Yes! Scholarships are available for meritorious students 🎓. Check with the **Student Welfare Cell** (dsw.office@cpur.edu.in). Government scholarships through state portals are also applicable."
  },

  // Admission
  {
    id: "admission-docs",
    category: "Admission",
    keywords: ["documents", "required", "admission", "docs"],
    patterns: ["what documents are required for admission", "admission documents", "docs for admission"],
    answer: "Documents required: **10th & 12th marksheets, Transfer Certificate, Migration Certificate, Aadhar Card, Passport photos, Category certificate (if applicable)** 📑. Visit the Admission Office for complete details."
  },
  {
    id: "migration",
    category: "Admission",
    keywords: ["migration", "certificate", "apply"],
    patterns: ["how can i apply for migration certificate", "migration certificate", "get migration"],
    answer: "Apply for migration certificate at the **Registrar Office** 📋. Submit a written application with your last semester marksheet. Processing time: 7-10 working days. Contact: registrar@cpur.edu.in"
  },
  {
    id: "entrance-exam",
    category: "Admission",
    keywords: ["entrance", "exam", "test"],
    patterns: ["is there any entrance exam", "entrance test", "admission test"],
    answer: "Career Point University conducts **CPUEE (Career Point University Entrance Exam)** for various programs 📝. Some programs also accept JEE/CUET scores. Check cpur.in for details."
  },

  // Hostel
  {
    id: "hostel-charges",
    category: "Hostel",
    keywords: ["hostel", "charges", "fees", "cost", "rent"],
    patterns: ["what are hostel charges", "hostel fees", "hostel cost"],
    answer: "Hostel charges range from **₹45,000 to ₹75,000 per year** depending on room type (triple/double sharing) 🏠. Mess charges are separate. Contact Warden: 9588870175"
  },
  {
    id: "hostel-wifi",
    category: "Hostel",
    keywords: ["wifi", "hostel", "internet", "available"],
    patterns: ["is wifi available in hostel", "hostel wifi", "internet in hostel"],
    answer: "Yes! **Wi-Fi is available in hostel** premises 📶. Speed may vary during peak hours. For connectivity issues, contact the IT department."
  },
  {
    id: "hostel-curfew",
    category: "Hostel",
    keywords: ["curfew", "hostel", "time", "gate"],
    patterns: ["what is the hostel curfew time", "hostel timing", "gate closing time"],
    answer: "Hostel curfew time: **9:30 PM for girls, 10:00 PM for boys** 🌙. Late entry requires prior permission from the Warden. Contact: 9588870175"
  },

  // General Campus
  {
    id: "library",
    category: "Campus",
    keywords: ["library", "located", "where", "timing", "book"],
    patterns: ["where is the library located", "library location", "library timing", "library hours"],
    answer: "The Central Library is located in the **Main Academic Block, Ground Floor** 📚. Timings: Mon-Sat 8:00 AM to 8:00 PM. Over 50,000+ books and digital resources available!"
  },
  {
    id: "office-hours",
    category: "Campus",
    keywords: ["office", "working", "hours", "timing"],
    patterns: ["what are office working hours", "office timing", "admin office hours"],
    answer: "Office working hours: **Mon-Fri 9:30 AM to 5:00 PM, Saturday 9:30 AM to 1:00 PM** 🕐. Sunday & public holidays: Closed."
  },
  {
    id: "id-card",
    category: "Campus",
    keywords: ["id", "card", "identity", "get"],
    patterns: ["how to get my id card", "id card issue", "identity card"],
    answer: "For ID card, visit the **Administrative Office** with your admission receipt and a passport-size photo 🪪. Processing takes 3-5 working days. Lost ID card replacement fee: ₹200."
  },
  {
    id: "contact-hod",
    category: "Campus",
    keywords: ["hod", "contact", "head", "department"],
    patterns: ["how to contact hod", "hod contact", "head of department contact"],
    answer: "HOD of Computer Application: **Dr. Garima Tyagi** 👩‍🏫. You can meet during office hours or email at the department. For appointments, visit the departmental office."
  },

  // Emergency & Support
  {
    id: "tech-issues",
    category: "Support",
    keywords: ["technical", "issues", "problem", "website", "portal"],
    patterns: ["whom do i contact for technical issues", "technical support", "portal not working"],
    answer: "For technical issues, contact the **IT Support Cell** 🖥️. Email: support@cpur.edu.in. For portal issues, try clearing browser cache first or use a different browser."
  },
  {
    id: "website-down",
    category: "Support",
    keywords: ["website", "not", "working", "down", "error"],
    patterns: ["what to do if website is not working", "website down", "portal error"],
    answer: "If the website is not working: 1️⃣ Clear browser cache 2️⃣ Try incognito mode 3️⃣ Use a different browser. If still not working, report to IT: support@cpur.edu.in"
  },

  // Farewell & Events
  {
    id: "farewell",
    category: "Events",
    keywords: ["farewell", "party", "event", "celebration"],
    patterns: ["when is farewell", "farewell date", "farewell party"],
    answer: "Farewell is on **25 April 2026** from **4 PM to 9 PM** 🎉🥳. It's going to be amazing! Make sure to dress up and enjoy your last celebration on campus!"
  },

  // Placements
  {
    id: "placements",
    category: "Placements",
    keywords: ["placement", "placements", "job", "recruit", "company", "hiring"],
    patterns: ["how are placements", "placement record", "which companies visit", "placement details"],
    answer: "CPU has a dedicated **Training & Placement Cell** 💼. Top recruiters include TCS, Infosys, Wipro, HCL, Tech Mahindra & more. Average package: 3-5 LPA. Visit the placement cell for registration!"
  },
  {
    id: "placement-register",
    category: "Placements",
    keywords: ["placement", "register", "registration", "apply"],
    patterns: ["how to register for placements", "placement registration"],
    answer: "Register for placements at the **Training & Placement Cell** 📋. Submit your updated resume, marksheets, and fill the registration form. Eligibility: Min 60% aggregate with no active backlogs."
  },

  // Sports
  {
    id: "sports",
    category: "Sports",
    keywords: ["sports", "facilities", "games", "ground", "gym"],
    patterns: ["what sports facilities are available", "sports ground", "gym facility"],
    answer: "CPU offers **Cricket, Football, Basketball, Badminton, Table Tennis, Volleyball** courts and a fully-equipped Gym 🏏🏀. Sports activities happen daily from 5 PM to 7 PM."
  },

  // Transport
  {
    id: "transport",
    category: "Transport",
    keywords: ["transport", "bus", "route", "shuttle"],
    patterns: ["is transport available", "bus service", "bus route", "transport facility"],
    answer: "Yes! CPU provides **bus services** covering major areas of Kota 🚌. Contact Bus Supervisors: Vijay (8005590396) or Nosheen (9828437118). Routes cover Railway Station, City Center & more."
  },

  // Contact Info
  {
    id: "registrar",
    category: "Contact",
    keywords: ["registrar", "contact", "registrar office"],
    patterns: ["registrar contact", "how to contact registrar"],
    answer: "**Registrar Office** 📞\nDr. Ravi Shankher - Registrar: 9057532048 (registrar@cpur.edu.in)\nMohit Mathur - Asst. Registrar: 9079134709 (ar.admin@cpur.edu.in)"
  },
  {
    id: "admission-office",
    category: "Contact",
    keywords: ["admission", "office", "contact"],
    patterns: ["admission office contact", "how to contact admission"],
    answer: "**Admission Office** 📞\nRajeev Singh - Sr. Manager: 9862388265 (rajeev.singh@cpuniverse.in)\nManish Pandit - Manager: 9057532042 (manish.pandit@cpuniverse.in)"
  },
  {
    id: "exam-dept",
    category: "Contact",
    keywords: ["examination", "department", "exam", "controller"],
    patterns: ["examination department contact", "exam controller"],
    answer: "**Examination Department** 📞\nRaaj Kumar Sharma - Controller: 7599565364 (coe@cpur.edu.in)\nMukut Bihari - Section Officer: 9829434653 (exam@cpur.edu.in)"
  },
  {
    id: "student-welfare",
    category: "Contact",
    keywords: ["welfare", "student", "dean", "helpdesk"],
    patterns: ["student welfare contact", "dean student welfare"],
    answer: "**Student Welfare Cell** 📞\nDr. Rakhee Chaudhary - Dean: 9079134709\nEmail: dsw.office@cpur.edu.in | studenthelpdesk@cpur.edu.in"
  },
  {
    id: "accounts",
    category: "Contact",
    keywords: ["accounts", "account", "executive"],
    patterns: ["accounts office contact", "account department"],
    answer: "**Accounts Office** 📞\nJitendra Soni: 9057531983\nKhushbu Rai: 9057531983\nGunjan Wadhwa: 9057531982\nEmail: accounts@cpur.edu.in"
  },
  {
    id: "anti-ragging",
    category: "Support",
    keywords: ["ragging", "anti", "complaint", "harassment"],
    patterns: ["anti ragging committee", "ragging complaint", "report ragging"],
    answer: "**Anti-Ragging Committee** 🚫\nDr. Rakhee Chaudhary: 9414209998\nMohit Mathur: 9079134709\nEmail: dsw.office@cpur.edu.in\nRagging is strictly prohibited. Report immediately!"
  },

  // Campus Life
  {
    id: "canteen",
    category: "Campus",
    keywords: ["canteen", "food", "mess", "eat", "cafeteria"],
    patterns: ["where is the canteen", "canteen timing", "food options"],
    answer: "The campus has a **central canteen** and mess facilities 🍽️. Canteen timings: 8 AM to 8 PM. Mess provides breakfast, lunch, snacks & dinner for hostel students."
  },
  {
    id: "medical",
    category: "Campus",
    keywords: ["medical", "health", "doctor", "clinic", "first aid"],
    patterns: ["medical facility", "is there a doctor", "health center"],
    answer: "CPU has a **Medical Center** on campus with first-aid facilities 🏥. A doctor visits daily during office hours. For emergencies, the university arranges hospital transport."
  },
  {
    id: "clubs",
    category: "Campus",
    keywords: ["club", "society", "cultural", "technical", "extracurricular"],
    patterns: ["what clubs are available", "student societies", "cultural club", "technical club"],
    answer: "CPU has various clubs: **Technical Club, Cultural Society, Literary Club, Music Club, Dance Club, Photography Club** 🎨🎵. Join through the Student Welfare Cell at the start of each semester!"
  },
  {
    id: "uniform",
    category: "Campus",
    keywords: ["uniform", "dress", "code"],
    patterns: ["is there a uniform", "dress code", "where to buy uniform"],
    answer: "Yes, CPU has a **uniform policy** 👔. Uniforms available at Venus Garments: 7442477006. Students must wear uniforms on all working days."
  },
  {
    id: "education-loan",
    category: "Fees",
    keywords: ["loan", "education", "bank"],
    patterns: ["education loan", "how to get loan", "bank loan"],
    answer: "Education loans are available through **Propelled Education Loan** 🏦. Contact Nikhil: 9252423532. Most nationalized banks also offer education loans for CPU programs."
  },

  // Greetings
  {
    id: "greeting-hi",
    category: "Greeting",
    keywords: ["hi", "hello", "hey", "good", "morning", "afternoon", "evening"],
    patterns: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening", "namaste"],
    answer: "Hello there! 👋😊 Welcome to **Career Point University Bot**! How can I help you today? Ask me about academics, fees, hostel, placements, or anything about campus life!"
  },
  {
    id: "greeting-thanks",
    category: "Greeting",
    keywords: ["thanks", "thank", "you", "helpful"],
    patterns: ["thanks", "thank you", "that was helpful", "thanks a lot"],
    answer: "You're welcome! 😊🙏 Happy to help! Feel free to ask anything else about Career Point University. I'm always here for you!"
  },
  {
    id: "greeting-bye",
    category: "Greeting",
    keywords: ["bye", "goodbye", "see", "later"],
    patterns: ["bye", "goodbye", "see you", "see you later"],
    answer: "Goodbye! 👋 All the best for your studies! Remember, CPU Bot is always here when you need help. Take care! 😊"
  },
  {
    id: "who-are-you",
    category: "Greeting",
    keywords: ["who", "are", "you", "name", "what"],
    patterns: ["who are you", "what is your name", "what are you"],
    answer: "I'm the **Career Point University Bot** 🤖! I'm your virtual assistant to help with academic queries, fees, hostel info, placements, and everything about campus life at CPU, Kota."
  },
];

export const fallbackResponses = [
  "I'm sorry, I couldn't find an exact answer for that 😅. Could you please rephrase your question? Or try asking about academics, fees, hostel, or placements!",
  "Hmm, I'm not sure about that one 🤔. Try asking about exam dates, fee payment, hostel charges, or contact information!",
  "I don't have info on that yet 📝. You can visit the Administrative Office or call the helpdesk at 9079134709 for more details!",
  "That's beyond my current knowledge 😊. For specific queries, please contact the relevant department. I can help with general university information!",
];

export const motivationalQuotes = [
  { quote: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "Your limitation—it's only your imagination.", author: "Unknown" },
  { quote: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { quote: "Great things never come from comfort zones.", author: "Unknown" },
  { quote: "Dream it. Wish it. Do it.", author: "Unknown" },
  { quote: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" },
  { quote: "Don't stop when you're tired. Stop when you're done.", author: "Unknown" },
  { quote: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" },
  { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
];
