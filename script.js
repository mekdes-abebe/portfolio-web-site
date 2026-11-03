
/* =====================================
   1. THREE-DOT NAVIGATION
===================================== */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

// Open and close the menu.
if (menuButton && navMenu) {

    menuButton.addEventListener("click", function () {

        navMenu.classList.toggle("show");

        const isOpen = navMenu.classList.contains("show");

        menuButton.setAttribute("aria-expanded", isOpen);

    });

    // Close the menu when clicking outside it.
    document.addEventListener("click", function (event) {

        if (!event.target.closest(".menu-container")) {

            navMenu.classList.remove("show");
            menuButton.setAttribute("aria-expanded", "false");

        }

    });

    // Close the menu using Escape.
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            navMenu.classList.remove("show");
            menuButton.setAttribute("aria-expanded", "false");

        }

    });

}


/* =====================================
   2. SKILL INFORMATION
===================================== */

const skills = {

    "HTML5": {
        description: "HTML5 is used to create the structure of web pages.",
        learning: "Semantic HTML, headings, links, images, forms, and page structure.",
        practice: "Creating organized and meaningful website layouts.",
        example: "My portfolio and Discover Addis website."
    },

    "CSS3": {
        description: "CSS controls the appearance and layout of websites.",
        learning: "Selectors, colors, flexbox, grid, animations, and responsive design.",
        practice: "Building attractive layouts that work on different screen sizes.",
        example: "The visual design of my portfolio."
    },

    "JavaScript": {
        description: "JavaScript adds interaction and dynamic behavior to websites.",
        learning: "Variables, functions, conditions, loops, and basic DOM concepts.",
        practice: "Adding interactions to web pages.",
        example: "Menu buttons, modals, and interactive website elements."
    },

    "C++": {
        description: "C++ is a general-purpose programming language.",
        learning: "Programming logic, conditions, loops, functions, and OOP fundamentals.",
        practice: "Solving programming exercises.",
        example: "Programming fundamentals coursework."
    },

    "Java": {
        description: "Java is an object-oriented programming language.",
        learning: "Classes, objects, methods, and object-oriented programming concepts.",
        practice: "Understanding how object-oriented programs are organized.",
        example: "Java programming exercises."
    },

    "Python": {
        description: "Python is a readable and versatile programming language.",
        learning: "Python syntax, loops, functions, dictionaries, and classes.",
        practice: "Writing beginner Python programs.",
        example: "Python programming exercises."
    },

    "Git and GitHub": {
        description: "Git tracks changes in code, while GitHub hosts repositories.",
        learning: "Repositories, commits, branches, push, and pull.",
        practice: "Uploading and updating my projects.",
        example: "My four GitHub project repositories."
    },

    "MySQL": {
        description: "MySQL is a relational database management system.",
        learning: "Creating databases, tables, inserting data, and SQL queries.",
        practice: "Managing student information in a database.",
        example: "My school database practice."
    },

    "VS Code": {
        description: "Visual Studio Code is a code editor.",
        learning: "Creating files, organizing projects, and using extensions.",
        practice: "Writing and editing HTML, CSS, JavaScript, and Python.",
        example: "My portfolio and web development projects."
    }

};


/* =====================================
   3. SKILL MODAL
===================================== */

const skillCards = document.querySelectorAll(".skill-card");

const skillModal = document.getElementById("skillModal");
const closeSkillModal = document.getElementById("closeSkillModal");

const skillTitle = document.getElementById("skillTitle");
const skillDescription = document.getElementById("skillDescription");
const skillLearning = document.getElementById("skillLearning");
const skillPractice = document.getElementById("skillPractice");
const skillExample = document.getElementById("skillExample");

let previousSkillButton = null;


// Open the correct skill information.
skillCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const skillName = card.dataset.skill;
        const skill = skills[skillName];

        if (!skill || !skillModal) {
            return;
        }

        previousSkillButton = card;

        skillTitle.textContent = skillName;
        skillDescription.textContent = skill.description;
        skillLearning.textContent = skill.learning;
        skillPractice.textContent = skill.practice;
        skillExample.textContent = skill.example;

        skillModal.classList.add("show");
        skillModal.setAttribute("aria-hidden", "false");

        closeSkillModal.focus();

    });

});


// Close the skill modal.
function closeModal() {

    if (!skillModal) {
        return;
    }

    skillModal.classList.remove("show");
    skillModal.setAttribute("aria-hidden", "true");

    if (previousSkillButton) {
        previousSkillButton.focus();
    }

}


if (closeSkillModal) {

    closeSkillModal.addEventListener("click", closeModal);

}


if (skillModal) {

    // Close when clicking outside the popup.
    skillModal.addEventListener("click", function (event) {

        if (event.target === skillModal) {
            closeModal();
        }

    });

}


// Close modal using Escape.
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeModal();
    }

});

/* =====================================
   4. CERTIFICATE IMAGE VIEWER
===================================== */

const certificateButtons = document.querySelectorAll(".certificate-preview");

const certificateModal = document.getElementById("certificateModal");
const certificateImage = document.getElementById("certificateImage");
const closeCertificateModal = document.getElementById("closeCertificateModal");

if (certificateButtons.length > 0 && certificateModal) {

    certificateButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const imagePath = button.dataset.image;

            certificateImage.src = imagePath;

            certificateModal.classList.add("show");
            certificateModal.setAttribute("aria-hidden", "false");

            closeCertificateModal.focus();

        });

    });

}


if (closeCertificateModal) {

    closeCertificateModal.addEventListener("click", function () {

        certificateModal.classList.remove("show");
        certificateModal.setAttribute("aria-hidden", "true");

        certificateImage.src = "";

    });

}


if (certificateModal) {

    certificateModal.addEventListener("click", function (event) {

        if (event.target === certificateModal) {

            certificateModal.classList.remove("show");
            certificateModal.setAttribute("aria-hidden", "true");

            certificateImage.src = "";

        }

    });

}
