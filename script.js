// Elements
const enterBtn = document.getElementById("enterBtn");
const intro = document.getElementById("intro");
const content = document.getElementById("content");
const music = document.getElementById("bgMusic");

// Enter TubaVerse
enterBtn.addEventListener("click", () => {

    intro.style.display = "none";
    content.style.display = "block";

    // Play music
    music.play().catch(() => {});

    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Achievement Popup
function showAchievement(title, text){

    const box = document.getElementById("achievementBox");

    box.innerHTML = `
        <div class="unlock-title">${title}</div>
        <div class="unlock-text">${text}</div>
    `;

    box.style.display = "block";

    setTimeout(() => {
        box.style.display = "none";
    }, 4000);

}

// Puffer Fish Achievement
function unlockPuffer(){

    const msg = document.getElementById("pufferMessage");

    msg.innerHTML = `
    🐡 Nickname Unlocked: Puffer Fish
    <br><br>
    Inflation Level: Maximum
    <br>
    Loyalty: Legendary
    <br>
    Chaos Resistance: Medium
    `;

    localStorage.setItem("pufferUnlocked", "true");

    showAchievement(
        "🐡 PUFFER FISH UNLOCKED",
        "Legendary Achievement Earned"
    );

}

// Spidey Achievement
function unlockSpidey(){

    const msg = document.getElementById("spideyMessage");

    msg.innerHTML = `
    🕷️ Neighborhood Spidey Located
    <br><br>
    Mission Status: Active
    <br>
    Friendship Protection Mode: ON
    `;

    localStorage.setItem("spideyUnlocked", "true");

    showAchievement(
        "🕷️ SPIDEY FOUND",
        "Rare Achievement Earned"
    );

}

// Restore Achievements
window.addEventListener("load", () => {

    if(localStorage.getItem("pufferUnlocked")){

        document.getElementById("pufferMessage")
        .innerHTML = `
        🐡 Nickname Unlocked: Puffer Fish
        <br><br>
        Inflation Level: Maximum
        <br>
        Loyalty: Legendary
        `;
    }

    if(localStorage.getItem("spideyUnlocked")){

        document.getElementById("spideyMessage")
        .innerHTML = `
        🕷️ Neighborhood Spidey Located
        <br><br>
        Mission Status: Active
        `;
    }

});

// Scroll Reveal Animation
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".chapter")
.forEach(section => {

    observer.observe(section);

});

// Secret Achievement
let clickCount = 0;

document.body.addEventListener("click", () => {

    clickCount++;

    if(clickCount === 25){

        showAchievement(
            "💖 FRIENDSHIP PRESERVED",
            "Secret Achievement Unlocked"
        );

    }

});
// Friendship Counter

const startDate = new Date("September 3, 2023");

const today = new Date();

const diff = today - startDate;

const days = Math.floor(
    diff / (1000 * 60 * 60 * 24)
);

const friendshipCounter =
document.getElementById("friendshipDays");

if(friendshipCounter){

    friendshipCounter.innerText =
    days + " Days";

}

// Cake Kingdom

function cakeMessage(type){

    const result =
    document.getElementById("cakeResult");

    if(!result) return;

    if(type === 1){

        result.innerHTML =
        "🍫 For being sweet sometimes.";

    }

    if(type === 2){

        result.innerHTML =
        "🎂 For surviving my nonsense.";

    }

    if(type === 3){

        result.innerHTML =
        "✨ Error: Too much chaos detected.";

    }

}

// Constellation Memories

function memory(num){

    const text =
    document.getElementById("memoryText");

    if(!text) return;

    const memories = {

        1:"⭐ A friendship that started on 3 September 2023.",

        2:"⭐ Somehow Puffer Fish became a nickname.",

        3:"⭐ Spidey reporting for duty.",

        4:"⭐ We survived arguments and stayed friends.",

        5:"⭐ Some friendships become part of your story."

    };

    text.innerHTML =
    memories[num];

}
function bestieProposal(){

    document
    .getElementById("proposalBox")
    .style.display = "block";

}

function acceptBestie(){

    showAchievement(
        "👑 BESTIE FOREVER",
        "Mythical Achievement Unlocked"
    );

    for(let i=0;i<80;i++){

        const confetti =
        document.createElement("div");

        confetti.className =
        "confetti";

        confetti.innerHTML =
        ["🎉","✨","💖","⭐","🐡","🕷️"]
        [Math.floor(Math.random()*6)];

        confetti.style.left =
        Math.random()*100 + "vw";

        confetti.style.animationDuration =
        (Math.random()*3+2)+"s";

        document.body.appendChild(
            confetti
        );

        setTimeout(()=>{

            confetti.remove();

        },5000);

    }

    const final =
    document.getElementById(
        "finalMessage"
    );

    final.style.display =
    "block";

    final.innerHTML = `

    <h1>🐡🕷️ Dynamic Duo</h1>

    <br>

    Achievement Unlocked

    <br><br>

    Best Friends Again 💖

    <br><br>

    Since 3 September 2023

    <br><br>

    Thank you for staying,
    Tuba.

    `;
}