const profile = {
  name: "Your Name",
  headline:
    "3rd-year Chemical Engineering student at IISER Bhopal + DIE Diploma student at IIDM.",
  summary:
    "I am building my career at the intersection of chemical engineering, research, and practical industrial problem-solving. I enjoy converting concepts into real solutions through projects, internships, and collaborative work.",
  about:
    "Currently pursuing Chemical Engineering at IISER Bhopal while also completing a DIE diploma at IIDM. My focus areas include process optimization, sustainability, and data-driven engineering decisions. I am actively seeking opportunities where I can apply both academic and practical knowledge.",
  quickFacts: [
    "3rd Year, Chemical Engineering",
    "Institute: IISER Bhopal",
    "Diploma: DIE (IIDM)",
    "Open to internships and research roles"
  ],
  education: [
    {
      title: "B.S./B.Tech. Track in Chemical Engineering",
      org: "IISER Bhopal",
      period: "2023 - Present",
      details:
        "Coursework includes thermodynamics, transport phenomena, reaction engineering, and numerical methods."
    },
    {
      title: "DIE Diploma",
      org: "IIDM",
      period: "Ongoing",
      details:
        "Applied industrial skills with focus on operations, systems, and practical implementation."
    }
  ],
  achievements: [
    {
      year: "2026",
      title: "Academic & Project Milestones",
      details:
        "Add your top achievements here (awards, ranks, paper submissions, project outcomes, competitions)."
    },
    {
      year: "2025",
      title: "Technical Development",
      details:
        "Completed domain-specific projects and coursework supporting chemical engineering and industry exposure."
    }
  ],
  internships: [
    {
      role: "Process/Research Intern",
      org: "Organization Name",
      period: "Month YYYY - Month YYYY",
      details:
        "Worked on process analysis, data collection, and technical reporting. Replace with your actual internship details."
    }
  ],
  experience: [
    {
      role: "Student Team Member / Project Contributor",
      org: "Lab, Club, or Initiative",
      period: "YYYY - Present",
      details:
        "Contributed to collaborative technical projects, documentation, and experimentation. Replace with specific work experience."
    }
  ],
  contact: {
    email: "your.email@example.com",
    phone: "+91-XXXXXXXXXX",
    location: "Bhopal, Madhya Pradesh, India",
    linkedin: "https://www.linkedin.com/in/your-profile"
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
    <p><strong>LinkedIn:</strong> <a href="${profile.contact.linkedin}" target="_blank" rel="noreferrer">${profile.contact.linkedin}</a></p>
  `;

  byId("footerText").textContent = `© ${new Date().getFullYear()} ${profile.name} · Built with HTML, CSS, and JavaScript`;
}

render();
