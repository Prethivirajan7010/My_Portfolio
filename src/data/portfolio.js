import {
  BadgeCheck,
  BriefcaseBusiness,
  Award,
  Database,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Trophy,
} from 'lucide-react';

export const profile = {
  name: 'Prethivirajan S',
  role: 'Full-Stack Developer',
  location: 'Coimbatore, Tamil Nadu, India',
  email: 'prethivi1011@gmail.com',
  phone: '+91 7010299315',
  resumeHref: '/Prethivirajan-S-Resume.pdf',
  heroImage: '/prethivirajan-photo.jpeg',
  availability: 'Open to software development roles, internships, and full-stack opportunities.',
  summary:
    'Full-stack developer focused on clean user experiences, scalable web applications, and dependable backend systems. I build end-to-end products across React, Tailwind CSS, .NET Core Web API, SQL, and modern JavaScript ecosystems.',
  intro:
    'I design and deliver software with thoughtful interfaces, maintainable architecture, and reliable integrations so teams can move from idea to production with confidence.',
  links: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/prethivirajan', icon: Linkedin },
    { label: 'GitHub', href: 'https://github.com/Prethivirajan7010', icon: Github },
    { label: 'Email', href: 'mailto:prethivi1011@gmail.com', icon: Mail },
  ],
  highlights: [
    'React.js, JavaScript, Tailwind CSS, TypeScript',
    '.NET Core Web API, Node.js, REST API design',
    'SQL Server, MySQL, MongoDB, CRUD workflows',
  ],
  stats: [
    { label: 'Internship Experience', value: '2+' },
    { label: 'Core Projects', value: '2' },
    { label: 'CGPA', value: '8.1' },
  ],
};

export const expertise = [
  {
    title: 'Frontend Engineering',
    description:
      'Responsive and reusable interfaces built with React, JavaScript, Tailwind CSS, lifecycle awareness, and component-driven architecture.',
    icon: Sparkles,
  },
  {
    title: 'Backend & API Systems',
    description:
      'RESTful APIs, CRUD operations, service integration, authentication flows, and maintainable business logic with .NET Core Web API and Node.js.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Database & Delivery',
    description:
      'Structured persistence and app reliability with SQL Server, MongoDB, MySQL, Git workflows, and practical deployment-minded engineering.',
    icon: Database,
  },
];

export const experiences = [
  {
    company: 'THANGAM INFO TECH',
    title: 'Full-Stack Developer Intern',
    period: 'Feb 2026 - Apr 2026',
    points: [
      'Contributed to a Clinical Management System for patient records using React.js, TypeScript, Tailwind CSS, .NET Core Web API, and MS SQL Server.',
      'Built scalable features across frontend, backend services, and database operations while improving maintainability and delivery speed.',
      'Designed RESTful APIs and CRUD workflows that improved data accuracy and optimized application performance.',
    ],
  },
  {
    company: 'Robomiracle Technologies Pvt. Ltd.',
    title: 'Industrial Trainee',
    period: 'Industry Training',
    points: [
      'Supported automation workflows and system integration initiatives for robotics-oriented applications.',
      'Gained hands-on exposure to hardware-software integration and real-world system design practices.',
      'Strengthened practical problem solving while collaborating in an engineering-focused environment.',
    ],
  },
];

export const projects = [
  {
    title: 'Migration Works Portal',
    stack: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    summary:
      'A full-stack hiring platform helping migrant workers discover local opportunities through role-based access and streamlined registration flows.',
    impact: [
      'Implemented role-based authentication and RESTful APIs for worker and employer workflows.',
      'Designed scalable management flows for registration, opportunity discovery, and profile operations.',
      'Optimized matching and onboarding experiences for a high-traffic usage pattern.',
    ],
    links: [
      { label: 'GitHub Profile', href: 'https://github.com/Prethivirajan7010' },
      { label: 'Contact for Demo', href: '#contact' },
    ],
    preview: '/project-migration.svg',
    icon: Globe,
  },
  {
    title: 'Employee Payslip Generator',
    stack: ['HTML', 'CSS', 'JavaScript'],
    summary:
      'A web-based payroll solution for salary processing with working-day calculations, deductions, allowances, and responsive payroll workflows.',
    impact: [
      'Developed the application using HTML, CSS, and JavaScript, implementing business logic and CRUD operations for salary calculation based on working days, deductions, and allowances.',
      'Designed a responsive user interface that made payroll workflows easier to use across devices.',
      'Optimized data processing and performance, reducing manual payroll effort and improving accuracy.',
    ],
    links: [
      { label: 'GitHub Profile', href: 'https://github.com/Prethivirajan7010' },
      { label: 'Download Resume', href: '/Prethivirajan-S-Resume.docx' },
    ],
    preview: '/project-payslip.svg',
    icon: BadgeCheck,
  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS', 'Responsive UI', 'Lifecycle Hooks', 'Nx Monorepo'],
  },
  {
    title: 'Backend & APIs',
    items: ['.NET Core Web API', 'Node.js', 'REST APIs', 'JWT Authentication', 'API Integration', 'CRUD Operations'],
  },
  { title: 'Databases', items: ['SQL Server', 'MySQL', 'MongoDB'] },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Visual Studio', 'Power BI', 'UiPath Studio', 'Excel'],
  },
  { title: 'Programming', items: ['JavaScript', 'TypeScript', 'Python'] },
];

export const achievements = [
  {
    title: "Kalam's World Record - 24-Hour Codeathon",
    description:
      'Recognized for participating in a record-setting 24-hour coding event in June 2024, demonstrating endurance, teamwork, and problem-solving under pressure.',
    icon: Trophy,
  },
  {
    title: 'Bachelor of Engineering in Computer Science',
    description: 'Suguna College of Engineering, Coimbatore (2022 - 2026) with a CGPA of 8.1.',
    icon: GraduationCap,
  },
];

export const certifications = [
  {
    title: 'Python Web Developer - Infosys Foundation',
    subtitle: 'Finishing School for Employability',
    period: 'July 2025 - August 2025',
    location: 'Suguna College of Engineering, Coimbatore',
    grade: 'Grade A',
    description:
      'Completed certification with Grade A, gaining hands-on experience in backend development using Python and Flask. Built and deployed web applications, with exposure to REST APIs, application deployment, and modern development practices.',
    icon: Award,
  },
];

export const contactCards = [
  {
    label: 'Location',
    value: 'Coimbatore, Tamil Nadu, India',
    href: 'https://maps.google.com/?q=Coimbatore',
    icon: MapPin,
  },
  {
    label: 'Email',
    value: 'prethivi1011@gmail.com',
    href: 'mailto:prethivi1011@gmail.com',
    icon: Mail,
  },
  {
    label: 'Phone',
    value: '+91 7010299315',
    href: 'tel:+917010299315',
    icon: Phone,
  },
];
