const profile = {
  name: "Oscar Patrik Minj",

  headline:
    "Chemical Engineering @ IISER Bhopal | Data Science @ IIT Madras | ML & Embedded Systems",

  summary:
    "Building real-world engineering solutions using Machine Learning, TinyML, and Embedded Systems.",

  about:
    "Chemical Engineering student at IISER Bhopal and Data Science student at IIT Madras. Passionate about combining ML, embedded systems, and engineering for industrial and real-world applications.",

  quickFacts: [
    "🎓 IISER Bhopal – Chemical Engineering",
    "📊 IIT Madras – Data Science",
    "🤖 TinyML & Embedded Systems",
    "🔬 Research Intern – IIT Roorkee"
  ],

  education: [
    {
      title: "B.S. Chemical Engineering",
      org: "IISER Bhopal",
      period: "2023 – 2027",
      details: "CGPA: 7.21 | SGPA: 8.47"
    },
    {
      title: "B.S. Data Science (Diploma)",
      org: "IIT Madras",
      period: "2023 – Present",
      details: "Score: 67.5%"
    },
    {
      title: "Class XII (CBSE)",
      org: "St. Michael’s School, Raigarh",
      period: "2023",
      details: "84.8%"
    }
  ],

  achievements: [
    {
      year: "2025",
      title: "IAS SRFP – IIT Roorkee",
      details: "Selected for prestigious research fellowship"
    },
    {
      year: "—",
      title: "Academic Excellence Award",
      details: "District Administration, Raigarh"
    },
    {
      year: "2017–2022",
      title: "Roll Ball State Champion",
      details: "Gold Medalist (multiple years)"
    }
  ],

  internships: [
    {
      role: "Summer Research Fellow Intern",
      org: "IIT Roorkee",
      period: "May – Jul 2025",
      details:
        "Built TinyML anomaly detection system on ESP32 using TensorFlow Lite and DHT11 sensors."
    }
  ],

  projects: [
    {
      title: "Rental Billing Management System",
      details:
        "Automated tenant billing, invoice generation, and data management using Flask + SQLite.",
      period: "May – Jul 2024"
    }
  ],

  skills: [
    "Python", "C", "MATLAB",
    "TensorFlow", "Keras", "NumPy", "TinyML",
    "ESP32", "Arduino", "DHT11",
    "Heat Transfer", "Mass Transfer", "Thermodynamics",
    "Git", "Docker", "LaTeX"
  ],

  coursework: [
    {
      title: "Chemical Engineering",
      details: "Heat Transfer, Mass Transfer, Fluid Mechanics, Thermodynamics"
    },
    {
      title: "Mathematics",
      details: "Calculus, Linear Algebra, Probability, Numerical Methods"
    },
    {
      title: "Computer Science",
      details: "DSA, Machine Learning, Python, C Programming"
    }
  ],

  experience: [
    {
      role: "Student Development Council",
      org: "IISER Bhopal",
      period: "2023 – Present",
      details:
        "Organized events, managed repositories, and led student initiatives."
    },
    {
      role: "Cultural Council",
      org: "IISER Bhopal",
      period: "—",
      details:
        "Managed 100+ student team and organized large-scale cultural events."
    }
  ],

  contact: {
    email: "oscar23@iiserb.ac.in",
    phone: "+91-9340903869",
    location: "Bhopal, India",
    linkedin: "https://linkedin.com/in/oscar-minj",
    github: "https://github.com/oscarminj"
  }
};

const byId = (id) => document.getElementById(id);

function createCard(item, titleKey, orgKey = "org") {
  const el = document.createElement("div");
  el.className = "card";
  el.innerHTML = `
    <h3>${item[titleKey]}</h3>
    ${item.org ? `<p class="meta"><strong>${item[orgKey]}</strong> • ${item.period}</p>` : ""}
    <p>${item.details}</p>
  `;
  return el;
}

function render() {
  byId("name").textContent = profile.name;
  byId("headline").textContent = profile.headline;
  byId("summary").textContent = profile.summary;
  byId("aboutText").textContent = profile.about;

  byId("quickFacts").innerHTML =
    profile.quickFacts.map(f => `<li>${f}</li>`).join("");

  byId("educationList").append(
    ...profile.education.map(e => createCard(e, "title"))
  );

  byId("achievementsList").append(
    ...profile.achievements.map(a => {
      const el = document.createElement("div");
      el.className = "timeline-item";
      el.innerHTML = `<p class="meta">${a.year}</p><h3>${a.title}</h3><p>${a.details}</p>`;
      return el;
    })
  );

  byId("internshipList").append(
    ...profile.internships.map(i => createCard(i, "role"))
  );

  byId("projectList").append(
    ...profile.projects.map(p => createCard(p, "title"))
  );

  byId("courseList").append(
    ...profile.coursework.map(c => createCard(c, "title"))
  );

  byId("skillsList").innerHTML =
    profile.skills.map(s => `<span>${s}</span>`).join("");

  byId("experienceList").append(
    ...profile.experience.map(e => createCard(e, "role"))
  );

  byId("contactInfo").innerHTML = `
    <p>Email: ${profile.contact.email}</p>
    <p><a href="${profile.contact.linkedin}" target="_blank">LinkedIn</a></p>
    <p><a href="${profile.contact.github}" target="_blank">GitHub</a></p>
  `;

  byId("footerText").textContent =
    `© ${new Date().getFullYear()} ${profile.name}`;
}

render();
