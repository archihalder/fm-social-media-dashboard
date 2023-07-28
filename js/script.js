const root = document.querySelector(":root");
const style = getComputedStyle(root);

// light colors
const toggleLight = style.getPropertyValue("--toggle-light");
const bgLight = style.getPropertyValue("--light-bg");
const topLight = style.getPropertyValue("--light-top-bg");
const cardLight = style.getPropertyValue("--light-card-bg");
const text1Light = style.getPropertyValue("--light-text1");
const text2Light = style.getPropertyValue("--light-text2");

// dark colors
const bgDark = style.getPropertyValue("--dark-bg");
const topDark = style.getPropertyValue("--dark-top-bg");
const text1Dark = style.getPropertyValue("--dark-text1");
const text2Dark = style.getPropertyValue("--dark-text2");
const cardDark = style.getPropertyValue("--dark-card-bg");

// getting elements and selectors
const body = document.body;
const toggleSwitch = document.getElementById("switch");
const heading1 = document.querySelector("h1");
const heading2 = document.querySelector("h2");
const topBar = document.querySelector(".top-bar");
const totalFoll = document.querySelector(".db-heading p");
const darkModeText = document.querySelector(".dm-toggle p");

const socialCard = document.querySelectorAll(".card");
const socialNumeric = document.querySelectorAll(".num");
const followerText = document.querySelectorAll(".follower-text");
const cardTitle = document.querySelectorAll(".card-title");

toggleSwitch.addEventListener("change", function () {
    if (toggleSwitch.checked) {
        // Switch is toggled ON -> Light Mode ON
        heading1.style.color = text2Light;
        heading2.style.color = text1Light;
        body.style.backgroundColor = bgLight;
        topBar.style.backgroundColor = topLight;
        totalFoll.style.color = text1Light;
        darkModeText.style.color = text1Light;

        socialCard.forEach((socialCard) => {
            socialCard.style.backgroundColor = cardLight;
        });

        socialNumeric.forEach((socialNumeric) => {
            socialNumeric.style.color = text2Light;
        });

        followerText.forEach((followerText) => {
            followerText.style.color = text1Light;
        });

        cardTitle.forEach((cardTitle) => {
            cardTitle.style.color = text1Light;
        });
    }
    else {
        // Switch is toggled OFF -> Dark Mode ON
        heading1.style.color = text2Dark;
        heading2.style.color = text1Dark;
        body.style.backgroundColor = bgDark;
        topBar.style.backgroundColor = topDark;
        totalFoll.style.color = text1Dark;
        darkModeText.style.color = text1Dark;

        socialCard.forEach((socialCard) => {
            socialCard.style.backgroundColor = cardDark;
        });

        socialNumeric.forEach((socialNumeric) => {
            socialNumeric.style.color = text2Dark;
        });

        followerText.forEach((followerText) => {
            followerText.style.color = text1Dark;
        });

        cardTitle.forEach((cardTitle) => {
            cardTitle.style.color = text1Dark;
        });
    }
});

socialCard.forEach((socialCard) => {
    socialCard.addEventListener("mouseenter", function () {
        if (toggleSwitch.checked) {
            this.style.backgroundColor = toggleLight;
        } else {
            this.style.backgroundColor = text1Light;
        }
    });
    socialCard.addEventListener("mouseleave", function () {
        if (toggleSwitch.checked) {
            this.style.backgroundColor = cardLight;
        } else {
            this.style.backgroundColor = cardDark;
        }
    });
});