// Toogle menu on mobile
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});

// Scroll Header
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 650) {
    header.classList.add('bg-green-600', 'bg-opacity-80');
  } else {
    header.classList.remove('bg-green-600', 'bg-opacity-80');
  }
});

const warnalogo = `
| Warna     | Keterangan                          | Kode Hex  |
| --------- | ----------------------------------- | --------- |
| 🔵 Biru   | Buku tengah                         | #0072BC | border-sky-700
| 🔴 Merah  | Lembaran kiri dan kanan             | #ED1C24 | border-red-600
| 🟢 Hijau  | Lembaran dalam kiri dan kanan       | #00A651 | border-green-600
| 🟠 Oranye | Lembaran paling luar kiri dan kanan | #F7941D | border-amber-500
| ⚪ Putih   | Latar belakang buku dan teks       | #FFFFFF | border-white
| ⚫ Hitam   | Tulisan dan garis tepi             | #000000 | border-black
`;


// Team
const teamMembers = [
  {
    name: "M.Rizqi",
    role: "Developer",
    desc: "Bertugas membuat website ini atau ngoding",
    img: "assets/img/Rizqi H.jpg",
    border: "border-sky-700",
    href : "biodata/Rizqi.html"
  },
  {
    name: "M.Hisyam",
    role: "Wawancara & Kameramen",
    desc: "Kapada dan Wawancara",
    img: "./assets/img/Hisyam.jpg",
    border: "border-green-600",
    href : "biodata/Hisyam.html"
  },
  {
    name: "M.ichsan",
    role: "Mencari target",
    desc: "Mencari teman/target untuk di Wawancara",
    img: "./assets/img/ichsan.jpg",
    border: "border-red-600",
    href : "biodata/Ichsan.html"
  },
  {
    name : 'Yerika',
    role : 'Pengatur & Wawancara',
    desc : 'Memberikan tugas pada tim, Wawancara dan membantu Developer',
    img : "./assets/img/Yerika.jpg",
    border : "border-pink-300",
    href : "biodata/Yerika.html"
  },
  {
    name : 'Annisa',
    role : 'Pengatur',
    desc : 'Memberikan tugas pada tim & membantu Developer',
    img : "./assets/img/Annisa.jpg",
    border : "border-violet-300",
    href : "biodata/Annisa.html"
  },
  {
    name : 'Rangga',
    role : 'Asisten Developer',
    desc : 'Wawancara, Kameramen & membantu Developer',
    img : "./assets/img/Rangga.jpg",
    border : "border-blue-600",
    href : "biodata/Rangga.html"
  },
  {
    name: "Hilman",
    role: "Kameramen",
    desc: "Membantu merekam video",
    img: "assets/img/Hilman.jpg",
    border: "border-red-600",
    href : "biodata/Hilman.html"
  },
];

const container = document.querySelector("#team-container");

container.innerHTML = teamMembers.map(member => `
  <div class="p-4 bg-white rounded shadow text-center">
    <div class="w-40 h-40 rounded-full overflow-hidden border-4 ${member.border} mx-auto mb-4">
      <img src="${member.img}" alt="${member.name}" class="w-full h-full object-cover">
    </div>
    <h3 class="text-xl font-semibold">${member.name}</h3>
    <h4 class="text-lg font-semibold">${member.role}</h4>
    <p class="text-gray-600">${member.desc}</p>
    <a href="${member.href}" class="text-blue-500 mt-2 inline-block">Lihat Biodata</a>
  </div>
`).join('');

const tableBody = document.getElementById('table-body');
const dokumentasi = [
  {
    nama: "Vidi Firdaus",
    ttl: "06 Februari 1998",
  },
  {
    nama: "Franika Dewi Rahayu",
    ttl: "12 Oktober 2005",
  },
  {
    nama: "Wili ardian",
    ttl: "2009",
  },
  {
    nama: "Hasanudin",
    ttl: "-",
  },
  {
    nama: "ilham adewijaya",
    ttl: "Tasikmalaya, 14 januari 2009",
  },
];

tableBody.innerHTML = dokumentasi.map(item => `
  <tr>
    <td class="py-3 px-4 border-b">${item.nama}</td>
    <td class="py-3 px-4 border-b">${item.ttl}</td>
  </tr>
`).join('');

// Video Active
const video = document.getElementById("videoPlayer");

video.addEventListener("play", () => {
  video.classList.add("border-4", "border-amber-500", "shadow-amber-400");
});

video.addEventListener("pause", () => {
  video.classList.remove("border-4", "border-amber-500", "shadow-amber-400");
});

video.addEventListener("ended", () => {
  video.classList.remove("border-4", "border-amber-500", "shadow-amber-400");
});

function renderPortfolio() {
  const portfolioData = [
    {
      title: "Math-formula",
      desc: "create a way to find the answer key to a math problem",
      link: "https://math-formulav4.vercel.app/",
      source_code: "https://github.com/Decayy25/math-formula.git"
    },
    {
      title: "Gacha-Khodam",
      desc: "only for joke with friends, to summon khodam using gacha system.",
      link: "https://gacha-khodam-iota.vercel.app/",
      source_code: "https://github.com/Decayy25/Gacha-Khodam.git"
    },
    {
      title: "tic-tac-toe",
      desc: "A simple tic tac toe game using C++ programming language.",
      link: "#",
      source_code: "https://github.com/Decayy25/tic-tac-toe"
    },
    {
      title: "E-Commerce Website",
      desc: "A simple e-commerce website using HTML, CSS, Tailwind, and JavaScript.",
      link: "https://simple-e-commerce-sigma-liard.vercel.app/",
      source_code: "https://github.com/Decayy25/my-quest-from-teacher.git"
    },
  ];

  const container = document.getElementById('my-project');
  if (!container) return;

  container.innerHTML = portfolioData.map((item, index) => `
    <div 
      class="p-8 bg-white rounded-2xl border-1 border-gray-200 shadow"
      data-aos="fade-up"
      data-aos-delay="${index * 100}"
    >
      <h3 class="text-xl font-semibold">${item.title}</h3>
      <p class="text-gray-600 mt-2">${item.desc}</p>
      <div class="mt-4 flex justify-between">
        <a href="${item.link}" class="portfolio-link text-blue-500" target="_blank" rel="noopener noreferrer">
          View Demo
        </a>
        <a href="${item.source_code}" class="portfolio-link text-blue-500" target="_blank" rel="noopener noreferrer">
          Source Code
        </a>
      </div>
    </div>
  `).join('');

  AOS.refresh();
}

// Langguage & Framework Section
function renderSkills() {
  const skillsData = [
    { name: "TypeScript", aos: 'fade-up', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Tailwind CSS", aos: 'fade-left', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "C++", aos: 'fade-down', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-plain.svg" },
    { name: "Git", aos: 'fade-up', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain.svg" },
    { name: "React", aos: 'fade-left', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Node.js", aos: 'fade-down', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg" },
    { name: "MongoDB", aos: 'fade-right', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg" },
    { name: "Express", aos: 'fade-right', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    { name: "Nextjs", aos: 'fade-down', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "React Native", aos: 'fade-right', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original-wordmark.svg" },
  ];

  const container = document.getElementById('my-skills');
  if (!container) return;
  container.innerHTML = skillsData.map((skill, index) => `
    <div 
      class="p-6 bg-white hover:border-2 hover:border-blue-500 p-6 shadow-lg hover:scale-105 transition rounded-2xl flex flex-col items-center text-center"
      data-aos="${skill.aos}"
      data-aos-delay="${index * 100}"
    >
      <img src="${skill.icon}" alt="${skill.name} Icon" class="w-32 h-32 mb-4" />
      <h4 class="text-lg font-semibold">${skill.name}</h4>
    </div>
  `).join('');
  AOS.refresh();
}

document.addEventListener('DOMContentLoaded', () => {
  renderPortfolio();
  renderSkills();
});
AOS.init({
  duration: 800,
  easing: 'slide',
  once: true,
});
