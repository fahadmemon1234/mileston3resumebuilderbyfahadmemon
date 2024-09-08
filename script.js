var checkbox = document.getElementById("toggleSkillsButton");
checkbox.addEventListener("change", function () {
    toggleSectionVisibility(this.checked ? true : false);
});
function toggleSectionVisibility(isVisible) {
    var section = document.getElementById("skillsSection");
    if (section) {
        if (isVisible == true) {
            section.style.display = "block";
        }
        else {
            section.style.display = "none";
        }
    }
}
function GenerateResume() {
    var _a;
    var nameInput = document.getElementById("txtName");
    var emailInput = document.getElementById("txtEmail");
    var phoneInput = document.getElementById("txtPhone");
    var About = document.getElementById("txtabout");
    var profilePictureInput = document.getElementById("txtProfile");
    var collegeNameInput = document.getElementById("txtclg");
    var eduStartDateInput = document.getElementById("txteduStartDate");
    var eduEndDateInput = document.getElementById("txteduEndDate");
    var educationDescriptionInput = document.getElementById("txtEducationDescription");
    var skillInput = document.getElementById("txtSkill");
    var companyNameInput = document.getElementById("txtCompanyName");
    var position = document.getElementById("txtPosition");
    var expStartDateInput = document.getElementById("txtexStartDate");
    var expEndDateInput = document.getElementById("txtexEndDate");
    var experienceDescriptionInput = document.getElementById("txtExperienceDescription");
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var phone = phoneInput.value.trim();
    var profilePicture = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var collegeName = collegeNameInput.value.trim();
    var eduStartDate = eduStartDateInput.value.trim();
    var eduEndDate = eduEndDateInput.value.trim();
    var educationDescription = educationDescriptionInput.value.trim();
    var skill = skillInput.value.trim();
    var companyName = companyNameInput === null || companyNameInput === void 0 ? void 0 : companyNameInput.value.trim();
    var positiontxt = position.value.trim();
    var expStartDate = expStartDateInput.value.trim();
    var expEndDate = expEndDateInput.value.trim();
    var experienceDescription = experienceDescriptionInput.value.trim();
    var aboutText = About.value.trim();
    var formatDateRange = function (startDate, endDate) {
        var startYear = new Date(startDate).getFullYear();
        var endYear = new Date(endDate).getFullYear();
        return "".concat(startYear, " - ").concat(endYear);
    };
    if (name !== "" &&
        email !== "" &&
        phone !== "" &&
        collegeName !== "" &&
        eduStartDate !== "" &&
        eduEndDate !== "" &&
        educationDescription !== "" &&
        skill !== "" &&
        companyName !== "" &&
        positiontxt !== "" &&
        expStartDate !== "" &&
        expEndDate !== "" &&
        experienceDescription !== "" &&
        aboutText !== "") {
        var formattedEduDates = formatDateRange(eduStartDate, eduEndDate);
        var formattedExpDates = formatDateRange(expStartDate, expEndDate);
        var resumeHTML = "\n    <main class=\"main-content\">\n        <section class=\"left-section\">\n            <div class=\"left-content\">\n                <div class=\"profile\">\n                    <div class=\"image\">\n                        <img src=\"".concat(profilePicture
            ? URL.createObjectURL(profilePicture)
            : "https://art-template.ru/vcard1/assets/img/avatar-1.jpg", "\" alt=\"\">\n                    </div>\n                    <h2 class=\"name\">").concat(name, "</h2>\n                    <p class=\"career\">Web Developer</p>\n                </div>\n                <div class=\"contact-info\">\n                    <h3 class=\"main-title\">Contact Info</h3>\n                    <ul>\n                        <li><i class=\"fa fa-phone\"></i>").concat(phone, "</li>\n                        <li><i class=\"fa-solid fa-envelope\"></i>").concat(email, "</li>\n                    </ul>\n                </div>\n                <div class=\"skills-section\">\n                    <h3 class=\"main-title\">Skills</h3>\n                    <ul>\n                        <li>\n                            <p class=\"skill-title\">").concat(skill, "</p>\n                            <div class=\"progress-bar\">\n                                <div class=\"progress\"></div>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </section>\n        <section class=\"right-section\">\n            <div class=\"right-main-content\">\n                <section class=\"about sect\">\n                    <h2 class=\"right-title\">About Me</h2>\n                    <p class=\"para\">").concat(aboutText, "</p>\n                </section>\n                <section class=\"experience sect\">\n                    <h2 class=\"right-title\">Experience</h2>\n                    <div class=\"timeline\">\n                        <div class=\"left-tl-content\">\n                            <h5 class=\"tl-title\">").concat(companyName, "</h5>\n                            <p class=\"para\">").concat(formattedExpDates, "</p>\n                        </div>\n                        <div class=\"right-tl-content\">\n                            <div class=\"tl-content\">\n                                <h5 class=\"tl-title-2\">").concat(positiontxt, "</h5>\n                                <p class=\"para\">").concat(experienceDescription, "</p>\n                            </div>\n                        </div>\n                    </div>\n                </section>\n                <section class=\"education sect\">\n                    <h2 class=\"right-title\">Education</h2>\n                    <div class=\"timeline\">\n                        <div class=\"left-tl-content\">\n                            <h5 class=\"tl-title\">").concat(collegeName, "</h5>\n                            <p class=\"para\">").concat(formattedEduDates, "</p>\n                        </div>\n                        <div class=\"right-tl-content\">\n                            <div class=\"tl-content\">\n                                <h5 class=\"tl-title-2\">").concat(collegeName, "</h5>\n                                <p class=\"para\">").concat(educationDescription, "</p>\n                            </div>\n                        </div>\n                    </div>\n                </section>\n            </div>\n        </section>\n    </main>\n  ");
        var resumeOutput = document.getElementById("resume-output");
        if (resumeOutput) {
            resumeOutput.innerHTML = resumeHTML;
        }
        else {
            var errorMessage_1 = document.createElement("h1");
            errorMessage_1.className = "error";
            errorMessage_1.textContent = "The resume output is missing";
            errorMessage_1.style.color = "red";
            errorMessage_1.style.textAlign = "center";
            errorMessage_1.style.padding = "10px";
            document.body.appendChild(errorMessage_1);
            setTimeout(function () {
                if (document.body.contains(errorMessage_1)) {
                    document.body.removeChild(errorMessage_1);
                }
            }, 5000);
        }
    }
    else {
        var errorMessage_2 = document.createElement("h1");
        errorMessage_2.className = "error";
        errorMessage_2.textContent = "The resume data is missing or incomplete";
        errorMessage_2.style.color = "red";
        errorMessage_2.style.textAlign = "center";
        errorMessage_2.style.padding = "10px";
        document.body.appendChild(errorMessage_2);
        setTimeout(function () {
            if (document.body.contains(errorMessage_2)) {
                document.body.removeChild(errorMessage_2);
            }
        }, 5000);
    }
}
