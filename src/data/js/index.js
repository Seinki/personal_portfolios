import heroimage from '../../assets/img/hero-image.png';
import portfolio1 from '../../assets/img/portfolios/prototype-planet-burger.png';
import portfolio2 from '../../assets/img/portfolios/ui-planet-burger.png';
import portfolio3 from '../../assets/img/portfolios/coursely-e-course.png';
import portfolio4 from '../../assets/img/portfolios/personal-portfolio.png';

export const navLinks = [
  {
    id: 1,
    path: "",
    text: "Home",
  },
  {
    id: 2,
    path: "about",
    text: "About",
  },
  {
    id: 3,
    path: "exp",
    text: "Experiences",
  },
  {
    id: 4,
    path: "portfolio",
    text: "Portfolios",
  },
  {
    id: 5,
    path: "contact",
    text: "Contact",
  },
];

export const heroImg = [
  {
    id: 1,
    image: heroimage,
  },
];

export const cards = [
  {
    id: 1,
    title: "IT Support",
    icon: "fa-solid fa-computer",
    desc: "To provides technical support and solutions to information technology-related problems to end users globally. Includes customer service, hardware and software troubleshooting, installation, network configuration, and system maintenance.",
  },
  {
    id: 2,
    title: "Web Development",
    icon: "fa-solid fa-code",
    desc: "To design, develop and maintain websites. Involves programming, responsive user interface, and handling site functions, with a focus on understanding user needs, security, and optimal performance that follows industry standards and the latest trends.",
  },
  {
    id: 3,
    title: "Cyber Security",
    icon: "fa-solid fa-shield-halved",
    desc: "To identify and evaluate potential security gaps in computer systems and networks to prevent cyber-attacks. Particularly on penetration testing, attack simulation, risk analysis to identify potential vulnerabilities that can be exploited by attackers.",
  },
];

export const exp = [
  {
    id: 1,
    defaultActiveKey: 0,
    eventKey: 0,
    title: "Ninja Xpress",
    jobDesc: "Staff Warehouse",
    time: "December 2021 - Present",
    desc: [
      {
        id: 1,
        description:
          "Membantu mengangkat barang (paket) dalam karung maupun tidak ke dalam gudang.",
      },
      {
        id: 2,
        description:
          "Membantu pemindaian awal paket menggunakan alat scanning barcode khusus resi untuk memilah dan memilih berdasarkan tujuan paket (kota / provinsi).",
      },
      {
        id: 3,
        description:
          "Melakukan pemindaian menggunakan mesin DWS (Dimension, Weight, and Scanning) agar mendapatkan akurasi data paket yang baik dan benar berdasarkan dimensi, berat dan foto dari paket.",
      },
      {
        id: 4,
        description:
          "Memindai paket dan memasukkannya ke dalam karung berlabel barcode khusus resi berdasarkan tujuan paket (kota).",
      },
    ],
  },
  {
    id: 2,
    defaultActiveKey: "",
    eventKey: 1,
    title: "Baraka Solution",
    jobDesc: "Junior Web Programmer & IT Support",
    time: "November 2022 - December 2022 (Internship)",
    desc: [
      {
        id: 1,
        description:
          "Membantu membuat dan mengembangkan aplikasi web yang dibutuhkan Perusahaan.",
      },
      {
        id: 2,
        description:
          "Membuat Prototype pengajuan desain website / web form dengan melakukan riset dan analisis kebutuhan pengguna dan mengumpulkan feedback dari pengguna, serta menerapkan keterampilan HTML, CSS, dan JavaScript untuk membuat prototype pengajuan desain website.",
      },
      {
        id: 3,
        description:
          "Mengelola source code menggunakan tool GIT & GitHub agar dapat berkolaborasi antar tim dan mengelola repositori dengan baik dan benar.",
      },
      {
        id: 4,
        description:
          "Melakukan uji coba untuk memastikan tampilan website berfungsi dengan baik.",
      },
      {
        id: 5,
        description:
          "Mendaftarkan website ke layanan hosting dan melakukan restore data website jika terjadi masalah.",
      },
    ],
  },
  {
    id: 3,
    defaultActiveKey: "",
    eventKey: 2,
    title: "Jati Kopi",
    jobDesc: "Server/Waiter",
    time: "Maret 2020 - November 2021",
    desc: [
      {
        id: 1,
        description:
          "Memastikan pelanggan mendapatkan pelayanan yang ramah dan profesional selama kunjungan mereka di restoran.",
      },
      {
        id: 2,
        description:
          "Bertanggung jawab untuk mencatat dengan akurat pesanan pelanggan dan mengkomunikasikannya ke dapur atau bar sesuai prosedur.",
      },
      {
        id: 3,
        description:
          "Melibatkan tugas-tugas seperti membersihkan meja, menyediakan peralatan makan yang bersih, dan menjaga kebersihan area kerja untuk menciptakan lingkungan bersih dan nyaman.",
      },
      {
        id: 4,
        description:
          "Mengelola transaksi pembayaran dengan akurat, memberikan tagihan kepada pelanggan, dan memberikan kembalian dengan tepat waktu.",
      },
    ],
  },
];

export const portfolio = [
  {
    id: 1,
    img: portfolio1,
    title: "UI/UX Planet Burger",
    desc: "Implementasi tugas project pembuatan UI website planet burger pada saat magang di Baraka Solution",
    link: "https://www.figma.com/proto/YvxnkuoZ278fq4YZXrPMCv/Tugas-Project-UI-(RubicWeb---Seinki)?node-id=1-2&scaling=scale-down",
  },
  {
    id: 2,
    img: portfolio2,
    title: "Frontend Planet Burger",
    desc: "Implementasi tugas project pembuatan Frontend website untuk planet burger pada saat magang di Baraka Solution",
    link: "https://github.com/Seinki/Project-Implementasi-Skill-Web-PlanetBurger-",
  },
  {
    id: 3,
    img: portfolio3,
    title: "CourseLy - E-Course",
    desc: "Project pembuatan website e-learning bernama CourseLy untuk berlatih penggunaan framework React Vite",
    link: "https://github.com/Seinki/coursely-web-course",
  },
  {
    id: 4,
    img: portfolio4,
    title: "Personal Portfolios",
    desc: "Web personal portfolio ini akan terus dikembangkan menjadi lebih baik kedepannya.",
    link: "",
  },
];
