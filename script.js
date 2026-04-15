const profile = {
  name: "Oscar Patrik Minj",

  headline:
    "Computer Science Student at IISER Bhopal | ML & AI Developer | Research Enthusiast",

  summary:
    "Passionate about Machine Learning, TinyML, and full-stack development. Experienced in building real-world AI systems and deploying models on edge devices like Arduino and ESP32.",

  about:
    "I am Oscar Patrik Minj, a Computer Science student at IISER Bhopal with a strong interest in Machine Learning, Artificial Intelligence, and real-world problem solving. I enjoy building intelligent systems, deploying models on edge devices, and working on impactful projects combining software and hardware. My goal is to contribute to cutting-edge research and develop scalable AI-driven solutions.",

  quickFacts: [
    "📍 IISER Bhopal",
    "🎓 B.S. Computer Science",
    "💡 ML | AI | TinyML",
    "🏆 AIR 95 – IISER Aptitude Test",
    "🔬 Research Intern – IIT Roorkee"
  ],

  education: [
    {
      title: "B.S. Computer Science",
      org: "IISER Bhopal",
      period: "2023 – Present",
      details: "CGPA: 6.95 | Focus on ML, AI, Data Structures, and Systems"
    },
    {
      title: "B.S. Data Science (Online)",
      org: "IIT Madras",
      period: "2023 – Present",
      details: "CGPA: 6.75 | Focus on statistics, ML, and data analysis"
    },
    {
      title: "Senior Secondary & Secondary",
      org: "St. Michael’s School, Raigarh",
      period: "2021 – 2023",
      details: "Senior: 8.48 CGPA | Secondary: 8.25 CGPA"
    }
  ],

  achievements: [
    {
      year: "2025",
      title: "IAS Summer Research Fellowship",
      details: "Selected as Summer Research Fellow at IIT Roorkee"
    },
    {
      year: "2023",
      title: "IISER Aptitude Test Rank 95",
      details: "Secured AIR 95 in national entrance exam"
    },
    {
      year: "2022",
      title: "Academic Excellence Award",
      details: "Awarded by District Administration, Raigarh"
    },
    {
      year: "2017–2022",
      title: "RollBall State Champion",
      details: "Winner in multiple state championships"
    }
  ],

  internships: [
    {
      role: "Summer Research Fellow",
      org: "IIT Roorkee",
      period: "May 2025 – Present",
      details:
        "Developed TinyML models using TensorFlow and CNNs. Deployed optimized models on Arduino for real-time clothing detection."
    }
  ],

  experience: [
    {
      role: "Student Development Council",
      org: "IISER Bhopal",
      period: "2023 – Present",
      details:
        "Organized academic events, managed repositories, and contributed as a core team member."
    },
    {
      role: "LLM Automation Agent Developer",
      org: "Personal Project",
      period: "2025 – Present",
      details:
        "Built AI agent using FastAPI and OpenAI APIs to automate multi-step workflows from natural language."
    },
    {
      role: "AutoGraderAI Developer",
      org: "Personal Project",
      period: "2024",
      details:
        "Developed an automated assignment evaluation system using LLMs."
    }
  ],

  contact: {
    email: "oscar23@iiserb.ac.in",
    phone: "+91-XXXXXXXXXX",
    location: "Bhopal, Madhya Pradesh, India",
    linkedin: "https://linkedin.com/in/oscar-minj",
    github: "https://github.com/oscarminj"
  }
};

const byId = (id) => document.getElementById(id);

function createCard(item, titleKey, orgKey = "org") {
  const article = document.createElement("article");
  article.className = "card";
  article.innerHTML = `
    <h3>${item[titleKey]}</h3>
    <p class="meta"><strong>${item[orgKey]}</strong> • ${item.period}</p>
    <p>${item.details}</p>
  `;
  return article;
}

function render() {
  byId("name").textContent = profile.name;
  byId("headline").textContent = profile.headline;
  byId("summary").textContent = profile.summary;
  byId("aboutText").textContent = profile.about;

  byId("quickFacts").innerHTML = profile.quickFacts
    .map((fact) => `<li>${fact}</li>`)
    .join("");

  byId("educationList").append(
    ...profile.education.map((item) => createCard(item, "title"))
  );

  byId("achievementsList").append(
    ...profile.achievements.map((item) => {
      const block = document.createElement("article");
      block.className = "timeline-item";
      block.innerHTML = `
        <p class="meta">${item.year}</p>
        <h3>${item.title}</h3>
        <p>${item.details}</p>
      `;
      return block;
    })
  );

  byId("internshipList").append(
    ...profile.internships.map((item) => createCard(item, "role"))
  );

  byId("experienceList").append(
    ...profile.experience.map((item) => createCard(item, "role"))
  );

  byId("contactInfo").innerHTML = `
    <p><strong>Email:</strong> <a href="mailto:${profile.contact.email}">${profile.contact.email}</a></p>
    <p><strong>Phone:</strong> <a href="tel:${profile.contact.phone}">${profile.contact.phone}</a></p>
    <p><strong>Location:</strong> ${profile.contact.location}</p>
    <p><strong>LinkedIn:</strong> <a href="${profile.contact.linkedin}" target="_blank">${profile.contact.linkedin}</a></p>
    <p><strong>GitHub:</strong> <a href="${profile.contact.github}" target="_blank">${profile.contact.github}</a></p>
  `;

  byId("footerText").textContent =
    `© ${new Date().getFullYear()} ${profile.name} · Built with HTML, CSS, and JavaScript`;
}

render();
