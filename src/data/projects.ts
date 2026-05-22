import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Learning Platform (Web App)',
    subtitle: 'แพลตฟอร์มเรียนรู้ออนไลน์ด้วยระบบ Gamification',
    summary:
      'พัฒนาเว็บแอปพลิเคชันสำหรับการเรียนรู้ที่ผสาน Gamification เพื่อเพิ่มแรงจูงใจในการเรียน มีระบบจัดอันดับ การออกแบบด่าน และการติดตามความก้าวหน้าของผู้เรียน',
    problem:
      'ผู้เรียนออนไลน์มักขาดแรงจูงใจและความต่อเนื่องในการเรียน เนื่องจากเนื้อหาที่นำเสนอขาดความน่าสนใจและไม่มีระบบรางวัลที่กระตุ้นการเรียน',
    solution:
      'ออกแบบและพัฒนาแพลตฟอร์มที่มีระบบ Gamification ครบครัน ประกอบด้วย Rank System, Design Game, Profile Page และ Setting Page เพื่อให้ผู้ใช้ได้รับประสบการณ์ที่สนุกและท้าทาย',
    process: [
      'วิเคราะห์ความต้องการของผู้เรียนและออกแบบ UX Flow',
      'ออกแบบ UI ใน Figma ก่อนนำไปพัฒนา',
      'พัฒนาระบบ Authentication และ Profile Management',
      'สร้างระบบ Gamification: XP, Rank และ Leaderboard',
      'ออกแบบ Landing Page ที่ดึงดูดใจ',
      'ทดสอบและปรับปรุง User Experience',
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Figma'],
    features: [
      'ระบบ Rank และ Leaderboard แบบ Real-time',
      'Design Game System สำหรับการเรียนรู้เชิงโต้ตอบ',
      'Profile Page พร้อมระบบ Achievement',
      'Landing Page ที่ออกแบบอย่างมืออาชีพ',
      'Setting Page ปรับแต่งได้ตามความต้องการ',
    ],
    results: [
      'UI/UX ที่ทันสมัยและใช้งานง่าย',
      'ระบบ Gamification ที่สมบูรณ์',
      'รองรับทั้ง Desktop และ Mobile',
    ],
    images: [
      '/images/projects/Final-Project-1/LandingPage.png',
      '/images/projects/Final-Project-1/HomePage.png',
      '/images/projects/Final-Project-1/HomePage2.png',
      '/images/projects/Final-Project-1/DesignGame.png',
      '/images/projects/Final-Project-1/DesignGame2.png',
      '/images/projects/Final-Project-1/ProfilePage.png',
      '/images/projects/Final-Project-1/RankPage.png',
      '/images/projects/Final-Project-1/SettingPage.png',
    ],
    category: 'Web App',
    year: '2024',
    githubUrl: 'https://github.com/ThanakhonOonklan',
  },
  {
    id: 2,
    title: 'IoT Equipment System',
    subtitle: 'ระบบจัดการอุปกรณ์ IoT ด้วย Dashboard',
    summary:
      'พัฒนาระบบจัดการอุปกรณ์ครุภัณฑ์ด้วย IoT โดยมี Dashboard สำหรับการติดตาม การยืม-คืน และการจัดการผู้ใช้งานในองค์กร',
    problem:
      'การจัดการอุปกรณ์ครุภัณฑ์ในองค์กรยังคงใช้เอกสารกระดาษ ทำให้ติดตามสถานะอุปกรณ์ได้ยากและเกิดความผิดพลาดในการบันทึกข้อมูล',
    solution:
      'พัฒนาระบบ Web Application ที่เชื่อมต่อกับ IoT Sensor สำหรับติดตามสถานะอุปกรณ์แบบ Real-time พร้อม Dashboard สรุปข้อมูลภาพรวม',
    process: [
      'วิเคราะห์ workflow การยืม-คืนอุปกรณ์ในปัจจุบัน',
      'ออกแบบ Database Schema สำหรับระบบ',
      'พัฒนา Dashboard แสดงสถานะอุปกรณ์',
      'สร้างระบบยืม-คืนอุปกรณ์พร้อมประวัติการทำรายการ',
      'พัฒนาระบบ User Management',
      'ทดสอบระบบกับข้อมูลจริง',
    ],
    techStack: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
    features: [
      'Dashboard สรุปสถานะอุปกรณ์ทั้งหมด',
      'ระบบยืม-คืนอุปกรณ์พร้อมติดตาม',
      'ประวัติการทำรายการ (History)',
      'จัดการรายการอุปกรณ์ครุภัณฑ์',
      'ระบบจัดการผู้ใช้งาน',
    ],
    results: [
      'ลดเวลาการจัดการเอกสารได้มากกว่า 60%',
      'ติดตามสถานะอุปกรณ์แบบ Real-time',
      'ระบบใช้งานได้ในสภาพแวดล้อมจริง',
    ],
    images: [
      '/images/projects/IotEquipmentSystem-Project/Dashboard.png',
      '/images/projects/IotEquipmentSystem-Project/borrow.png',
      '/images/projects/IotEquipmentSystem-Project/equipment.png',
      '/images/projects/IotEquipmentSystem-Project/history.png',
      '/images/projects/IotEquipmentSystem-Project/return-equipment.jpg',
      '/images/projects/IotEquipmentSystem-Project/users.png',
    ],
    category: 'Web App',
    year: '2024',
    githubUrl: 'https://github.com/ThanakhonOonklan',
  },
  {
    id: 3,
    title: 'IoT Robot & Sensor Project',
    subtitle: 'โปรเจกต์หุ่นยนต์และเซ็นเซอร์ด้วย IoT',
    summary:
      'โปรเจกต์การออกแบบและสร้าง Robot Prototype พร้อมระบบ Moisture Sensor เพื่อประยุกต์ใช้ในงาน IoT จริง พร้อมทีมงาน',
    problem:
      'ต้องการสาธิตการประยุกต์ใช้ IoT ในการควบคุมหุ่นยนต์และตรวจจับความชื้นเพื่อใช้ในงานเกษตรอัจฉริยะหรืองานอุตสาหกรรม',
    solution:
      'สร้าง Robot Prototype ที่ควบคุมได้ผ่านระบบ IoT พร้อม Moisture Sensor สำหรับวัดความชื้นและส่งข้อมูลแบบ Wireless',
    process: [
      'ศึกษาและออกแบบ Circuit สำหรับ Moisture Sensor',
      'สร้าง Robot Prototype จากชิ้นส่วน',
      'เขียนโปรแกรมควบคุมหุ่นยนต์',
      'เชื่อมต่อ Sensor กับระบบ IoT',
      'ทดสอบและปรับปรุง Prototype',
      'นำเสนอผลงานในชั้นเรียน',
    ],
    techStack: ['Arduino', 'IoT', 'Python', 'C++', 'Sensor'],
    features: [
      'Robot Prototype ที่ควบคุมได้',
      'Moisture Sensor วัดความชื้นแบบ Real-time',
      'ระบบส่งข้อมูล Wireless',
      'สาธิตการทำงานจริงในสภาพแวดล้อมจริง',
    ],
    results: [
      'Robot Prototype ที่ใช้งานได้จริง',
      'Sensor ทำงานแม่นยำสูง',
      'ผ่านการนำเสนอในชั้นเรียน',
    ],
    images: [
      '/images/projects/Final-Project-2/IoT-Moisture-Sensor.jpg',
      '/images/projects/Final-Project-2/Robot-Prototype.jpg',
      '/images/projects/Final-Project-2/Robot-Prototype2.jpg',
      '/images/projects/Final-Project-2/Project-Team-Photo.jpg',
      '/images/projects/Final-Project-2/Project-Team-Photo2.jpg',
    ],
    category: 'IoT',
    year: '2024',
    githubUrl: 'https://github.com/ThanakhonOonklan',
  },
  {
    id: 4,
    title: 'Internship Experience',
    subtitle: 'ประสบการณ์ฝึกงานในองค์กรจริง',
    summary:
      'ประสบการณ์ฝึกงานในองค์กร ได้เรียนรู้และพัฒนาทักษะในสภาพแวดล้อมการทำงานจริง ทำงานร่วมกับทีมในการแก้ปัญหาและพัฒนาระบบ',
    problem:
      'ต้องการประสบการณ์จริงในการทำงานในองค์กร เพื่อพัฒนาทักษะ Hard Skills และ Soft Skills ที่จำเป็นในสายงาน IT',
    solution:
      'เข้าร่วมโปรแกรมฝึกงาน ได้ทำงานกับ Team จริง เรียนรู้กระบวนการทำงาน ใช้เครื่องมือและ Technology ที่ใช้ในองค์กรจริง',
    process: [
      'เรียนรู้ Process และ Workflow ขององค์กร',
      'ทำงานร่วมกับ Team ในโปรเจกต์จริง',
      'พัฒนาทักษะการใช้เครื่องมือในองค์กร',
      'แก้ปัญหาที่พบในการทำงานจริง',
      'นำเสนอผลงานต่อหัวหน้างาน',
    ],
    techStack: ['VS Code', 'Git', 'Figma', 'JavaScript', 'HTML5', 'CSS3'],
    features: [
      'ประสบการณ์การทำงานจริงในองค์กร',
      'การทำงานเป็นทีมกับ Professional',
      'การใช้เครื่องมือในองค์กรจริง',
      'การแก้ปัญหาในสภาพแวดล้อมจริง',
    ],
    results: [
      'ได้รับประสบการณ์และทักษะในสายงาน IT',
      'พัฒนา Soft Skills การทำงานเป็นทีม',
      'เข้าใจ Workflow ในองค์กรจริง',
    ],
    images: [
      '/images/projects/Internship/Internship-Photo1.jpg',
      '/images/projects/Internship/Internship-Photo2.jpg',
      '/images/projects/Internship/Internship-Photo3.jpg',
      '/images/projects/Internship/Internship-Photo4.jpg',
      '/images/projects/Internship/Internship-Photo5.jpg',
      '/images/projects/Internship/Internship-Photo6.jpg',
      '/images/projects/Internship/Internship-Photo7.jpg',
      '/images/projects/Internship/Internship-Photo8.jpg',
    ],
    category: 'Experience',
    year: '2024',
  },
  {
    id: 5,
    title: 'Java POS System',
    subtitle: 'ระบบ Point of Sale ด้วย Java',
    summary:
      'พัฒนาระบบ Point of Sale (POS) ด้วยภาษา Java สำหรับร้านค้า ประกอบด้วย Dashboard, หน้าร้าน (Front Store) และระบบจัดการสมาชิก',
    problem:
      'ร้านค้าขนาดเล็กต้องการระบบ POS ที่ใช้งานง่ายและมีค่าใช้จ่ายต่ำ เพื่อช่วยในการจัดการการขายและสมาชิก',
    solution:
      'พัฒนา Desktop Application ด้วย Java ที่ครอบคลุมทุกฟังก์ชันพื้นฐานของระบบ POS รวมถึง Dashboard สรุปยอดขาย และระบบสมาชิก',
    process: [
      'ออกแบบ System Architecture สำหรับ POS',
      'พัฒนา GUI ด้วย Java Swing',
      'สร้าง Database Connection กับ MySQL',
      'พัฒนาระบบการขายและออกใบเสร็จ',
      'สร้างระบบจัดการสมาชิก',
      'ทดสอบระบบกับ Use Case จริง',
    ],
    techStack: ['Java', 'MySQL', 'Java Swing', 'JDBC'],
    features: [
      'Dashboard แสดงสรุปยอดขาย',
      'Front Store สำหรับการขายสินค้า',
      'ระบบจัดการสมาชิก (Member)',
      'ระบบออกใบเสร็จ',
      'รายงานการขาย',
    ],
    results: [
      'ระบบ POS ที่ใช้งานได้จริง',
      'รองรับการขายสินค้าหลายประเภท',
      'ระบบสมาชิกที่สมบูรณ์',
    ],
    images: [
      '/images/projects/Java-Project/Dashboard.png',
      '/images/projects/Java-Project/Front-store.png',
      '/images/projects/Java-Project/member.png',
    ],
    category: 'Desktop App',
    year: '2023',
    githubUrl: 'https://github.com/ThanakhonOonklan',
  },
  {
    id: 6,
    title: 'Infographic Design',
    subtitle: 'การออกแบบ Infographic สำหรับงาน FutureSkill',
    summary:
      'ออกแบบ Infographic และ Poster สำหรับงาน FutureSkill ประกอบด้วยสื่อประชาสัมพันธ์หลายชิ้น เช่น Poster, Display, Q&A และ 3-Day Program',
    problem:
      'งาน FutureSkill ต้องการสื่อประชาสัมพันธ์ที่ดึงดูดใจและสื่อสารข้อมูลได้อย่างชัดเจน เพื่อดึงดูดผู้เข้าร่วมงาน',
    solution:
      'ออกแบบสื่อประชาสัมพันธ์หลายชิ้นด้วย Figma โดยใช้ Typography และ Color Palette ที่สอดคล้องกัน สร้าง Visual Identity ให้กับงาน',
    process: [
      'ศึกษา Brand Identity และ Theme ของงาน',
      'ออกแบบ Color Palette และ Typography System',
      'ร่าง Concept สำหรับแต่ละชิ้นงาน',
      'สร้างสื่อประชาสัมพันธ์ด้วย Figma',
      'ปรับปรุงตาม Feedback จากทีม',
      'Export ไฟล์ในรูปแบบที่ใช้งานได้จริง',
    ],
    techStack: ['Figma', 'Photoshop', 'Illustrator'],
    features: [
      'Poster ประชาสัมพันธ์งาน FutureSkill',
      'Display Board สำหรับงาน',
      'Q&A Infographic',
      '3-Day Program Schedule',
      'Tomorrow Campaign Visual',
    ],
    results: [
      'สื่อประชาสัมพันธ์ที่ใช้งานจริงในงาน',
      'Visual Identity ที่สอดคล้องกันทุกชิ้น',
      'ได้รับคำชมจากทีมงานและผู้เข้าร่วม',
    ],
    images: [
      '/images/projects/Infographic-Design/FutureSkill-Poster.png',
      '/images/projects/Infographic-Design/FutureSkill-Display.png',
      '/images/projects/Infographic-Design/FutureSkill-3Day.png',
      '/images/projects/Infographic-Design/FutureSkill-Q&A.png',
      '/images/projects/Infographic-Design/FutureSkill-Tomorrow.png',
    ],
    category: 'Design',
    year: '2023',
  },
];
