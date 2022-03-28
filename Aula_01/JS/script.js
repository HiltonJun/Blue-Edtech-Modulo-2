const btnright = document.querySelector("#right_arrow");
const btnleft = document.querySelector("#left_arrow");
const descriptions = [
  `Astrologer is a starting Class in Elden Ring. The Astrologer has high Intelligence and Mind and some Dexterity. It starts the game at level 6, with a Staff, a sword and small shield. The Classes only determine the starting Stats and Equipment of the player, but as the game progresses, players can freely change their build to their preferred playstyle. There are 10 Classes in Elden Ring that the player can begin the game with.`,
  `Bandit is a starting Class in Elden Ring. The Bandit has High Arcane and Dexterity. It starts the game at level 5, with a dagger, parrying shield, bow and arrows. The Classes only determine the starting Stats and Equipment of the player, but as the game progresses, players can freely change their build to their preferred playstyle. There are 10 Classes in Elden Ring that the player can begin the game with.`,
  `Confessor is a starting Class in Elden Ring. The Confessor has high Faith and medium physical stats. It starts the game at level 10 with a broadsword, a kite shield and a finger seal. The Classes only determine the starting Stats and Equipment of the player, but as the game progresses, players can freely change their build to their preferred playstyle. There are 10 Classes in Elden Ring that the player can begin the game with.`,
  `Hero is a starting Class in Elden Ring. The Hero has high Strength and Vigor with some arcane. It starts the game at level 7, with a battle axe and leather shield. The Classes of Elden Ring only determine the starting Stats and Equipment of the player, but as the game progresses, players can freely change their build to their preferred playstyle. The Hero is a Strength-based class that begins the game with an axe.`,
  `Prisoner is a starting Class in Elden Ring. The Prisoner has high Intelligence and Dexterity, and medium physical stats. It starts the game at level 9, with an estoc, a staff and shield. The Classes only determine the starting Stats and Equipment of the player, but as the game progresses, players can freely change their build to their preferred playstyle. There are 10 Classes in Elden Ring that the player can begin the game with.`,
  `Prophet is a starting Class in Elden Ring. The Prophet has high Faith and mind and some arcane and strength. It starts at level 7, with a spear, a finger seal and a small shield. The Classes only determine the starting Stats and Equipment of the player, but as the game progresses, players can freely change their build to their preferred playstyle.`,
  `Samurai is a starting Class in Elden Ring. The Samurai has high Dexterity, Medium strength, endurance, mind and vigor. It starts the game at level 9 with a katana, bow, arrows (flaming arrows too!) and a shield. The Classes only determine the starting Stats and Equipment of the player, but as the game progresses, players can freely change their build to their preferred playstyle. There are 10 Classes in Elden Ring that the player can begin the game with.`,
  `Vagabond is a starting Class in Elden Ring. The Vagabond has high Vigor, Strength and Dexterity. It starts at level 9, with a sword, shield and halberd so possibly comparable to the Knight class in previous games. The Classes only determine the starting Stats and Equipment of the player, but as the game progresses, players can freely change their build to their preferred playstyle. There are 10 Classes in Elden Ring that the player can begin the game with.`,
  `Warrior is a starting Class in Elden Ring's. The Warrior has High Dex and medium physical stats. It starts the game at level 8, with two scimitars and a light shield. The Classes only determine the starting Stats and Equipment of the player, but as the game progresses, players can freely change their build to their preferred playstyle.`,
  `Wretch is a starting Class in Elden Ring. The Wretch is the “deprived” of the game. It starts at level 1 with 10 on all stats and just a club for weapons. It is the weakest starting Class in Elden Ring, and should be selected by those who want an added challenge in the earlier parts of the game. The Classes only determine the starting Stats and Equipment of the player, but as the game progresses, players can freely change their build to their preferred playstyle.`,
];
const quotes = [
  `"A scholar who reads fate in the stars. Heir to the school of glintstone sorcery"`,
  `"A church spy adept at covert operations. Equally adept with a sword as they are with incantations"`,
  `"A dangerous bandit who strikes for weak points. Excels at ranged combat with bows"`,
  `"A stalwart Hero, at home with a battleaxe, descended from a badlands chieftain"`,
  `"A prisoner bound in an iron mask. Studied in glintstone sorcery, having lived among the elite prior to sentencing."`,
  `"A seer ostracized for inauspicious prophecies. Well versed in healing incantations"`,
  `"A capable fighter from the distant land of reeds. Handy with Katana and Longbows."`,
  `"A knight exiled from their homeland to wander. A solid, armor-clad origin."`,
  `"A twinblade wielding warrior from a nomadic tribe. An origin of exceptional technique"`,
  `"As poor, purposeless and naked as the day they were born. A nice club is all they have."`,
];
const images = [
  "./Media/img/astrologer_class.png",
  "./Media/img/bandit_class.png",
  "./Media/img/confessor_class.png",
  "./Media/img/hero_class.png",
  "./Media/img/prisoner_class.png",
  "./Media/img/prophet_class.png",
  "./Media/img/samurai_class.png",
  "./Media/img/vagabond_class.png",
  "./Media/img/warrior_class.png",
  "./Media/img/wretch_class.png",
];
const classes = [
  "Astrologer",
  "Bandit",
  "Confessor",
  "Hero",
  "Prisoner",
  "Prophet",
  "Samurai",
  "Vagabond",
  "Warrior",
  "Wretch",
];
var index = 0;

btnright.addEventListener("click", function () {
  if (index >= 9) {
    index = 0;
    document.getElementById("class_picture").src = images[index];
    document.getElementById("class_name").innerText = `${classes[index]}`;
    document.getElementById("description").innerText = `${descriptions[index]}`;
    document.getElementById("quote").innerText = `${quotes[index]}`;
  } else {
    index += 1;
    document.getElementById("class_picture").src = images[index];
    document.getElementById("class_name").innerText = `${classes[index]}`;
    document.getElementById("description").innerText = `${descriptions[index]}`;
    document.getElementById("quote").innerText = `${quotes[index]}`;
  }
});

btnleft.addEventListener("click", function () {
  if (index <= 0) {
    index = 9;
    document.getElementById("class_picture").src = images[index];
    document.getElementById("class_name").innerText = `${classes[index]}`;
    document.getElementById("description").innerText = `${descriptions[index]}`;
    document.getElementById("quote").innerText = `${quotes[index]}`;
  } else {
    index -= 1;
    document.getElementById("class_picture").src = images[index];
    document.getElementById("class_name").innerText = `${classes[index]}`;
    document.getElementById("description").innerText = `${descriptions[index]}`;
    document.getElementById("quote").innerText = `${quotes[index]}`;
  }
});
