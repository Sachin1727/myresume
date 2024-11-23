// function scrollToSection(sectionId) {
//     document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
// }

// document.addEventListener('DOMContentLoaded', () => {
//     console.log("Website Loaded!");
// });
// script.js

// DOM Content Loaded Event
document.addEventListener("DOMContentLoaded", () => {
    // Highlight Active Navigation Link
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    // Toggle Dark Mode
    const darkModeToggle = document.createElement("button");
    darkModeToggle.innerText = "Toggle Dark Mode";
    darkModeToggle.style.position = "fixed";
    darkModeToggle.style.bottom = "10px";
    darkModeToggle.style.right = "10px";
    darkModeToggle.style.padding = "10px";
    darkModeToggle.style.backgroundColor = "#007acc";
    darkModeToggle.style.color = "#fff";
    darkModeToggle.style.border = "none";
    darkModeToggle.style.cursor = "pointer";
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Dynamic Content for Skills Section
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "Python",
        "React",
        "SQL",
        "Data Analysis",
        "Project Management",
    ];
    const skillsContainer = document.querySelector(".skills");
    if (skillsContainer) {
        skillsContainer.innerHTML = ""; // Clear existing content
        skills.forEach(skill => {
            const skillBadge = document.createElement("span");
            skillBadge.innerText = skill;
            skillBadge.classList.add("skill-badge");
            skillsContainer.appendChild(skillBadge);
        });
    }
});
