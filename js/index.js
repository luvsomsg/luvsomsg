const skills = [
  "Unreal Engine", "Unity", "Blender", "Photoshop", "Production", "UI Design", "Systems design", "Level design",
  "Prototyping", "Playtesting"
];

const games = [
    {
    title: "Summoned",
    role: "Academic Group Project · 2025",
    background: "games/Summoned/images/main_menu.png",
    description: "Summoned is a two-player couch co-op where you play as Cedric and Hypatia, two outcast alchemists living in their laboratory on the outskirts of a village. However, when the local villagers discover their experiments, they light their torches and sharpen their pitchforks to put this forbidden witchcraft in the grave. The players must quickly gather the ingredients, and test untouched recipes to summon minions and protect your lab.",
    technologies: "Unreal Engine 5",
    skills: "Project Manager, Scrum Master, Game Designer",
    detailUrl: "https://luvsomsg.itch.io/summoned",
    gallery: [
      "games/Summoned/images/main_menu.png",
      "https://img.itch.zone/aW1hZ2UvMzk0NDI5Ny8yMzcyODc1Ni5wbmc=/347x500/6jgcEb.png",
      "https://img.itch.zone/aW1hZ2UvMzk0NDI5Ny8yNDM5MjMzMy5wbmc=/347x500/XyKoGY.png",
      "https://img.itch.zone/aW1hZ2UvMzk0NDI5Ny8yNDQwNzQzNy5wbmc=/347x500/69TG7O.png"
    ]
  },
  {
    title: "Disconnect 4",
    role: "Group project · 2026",
    background: "games/Disconnect 4/images/gameplay_screenshot.png",
    description: "A twisted version of the classic Connect 4, play against the Jester's distorted rules... Beginning as my university final major project, I successfully recieved a grant enabling me to develop the project into a digital game. Altering an existing game exposed me to the huge amount of playtesting, balancing and sytem complexity involved in a well-designed game. Working with only a single programmer (Thomas Jebson) compared to a team has given me a much more closer insight on how to communicate design ideas effectively across disciplines.",
    technologies: "Unity 6, C#, Blender 3D, Miro, GitHub, Affinity",
    skills: "Project Manager, Lead Designer, Assistant Programmer",
    detailUrl: "",
    gallery: [
      "games/Disconnect 4/images/main_menu.png",
      "games/Disconnect 4/images/gameplay_screenshot.png"
    ]
  },
  {
    title: "Lunch Money",
    role: "Group project · 2026",
    background: "games/Lunch Money/images/promo_art.png",
    description: "Lunch Money challenges you to run your own secret sweets business at your British secondary school.",
    technologies: "Unreal Engine 5",
    skills: "Game Designer",
    detailUrl: "https://store.steampowered.com/app/5362870/Lunch_Money/",
    gallery: [
      "games/Lunch Money/images/promo_art.png",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/5362870/f197b24c81ccf0ed318e2af96554c0294760d332/ss_f197b24c81ccf0ed318e2af96554c0294760d332.1920x1080.jpg?t=1794760129",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/5362870/0b3fd46ef6702512ba40c02d23f087c0bb68b1e1/ss_0b3fd46ef6702512ba40c02d23f087c0bb68b1e1.1920x1080.jpg?t=1794760129",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/5362870/bc68e909c9cf7dcabcd6f50e8f5baa729681b154/ss_bc68e909c9cf7dcabcd6f50e8f5baa729681b154.1920x1080.jpg?t=1794760129",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/5362870/84588416395033242c401319c0cf4093c51b0850/ss_84588416395033242c401319c0cf4093c51b0850.1920x1080.jpg?t=1794760129"
    ]
  },

  {
    title: "Crash Planted",
    role: "Academic Group Project · 2025",
    background: "games/Crash Planted/images/main_menu.png",
    description: "Crash Planted is a post-apocalyptic sci-fi survival game. You have crash landed into Earth's ocean and your spaceship is now flooding with water. With only 10 minutes you must race to gather your research, repair critical systems, and survive long enough for the escape pod to finish charging before you become submerged with your ship.",
    technologies: "Unreal Engine 5",
    skills: "Lead Designer, Scrum Master, Game Designer",
    detailUrl: "https://luvsomsg.itch.io/crash-planted",
    gallery: [
      "games/Crash Planted/images/main_menu.png",
      "https://img.itch.zone/aW1hZ2UvMzY4OTk4Ny8yMjI4OTE0OC5qcGVn/347x500/OMhwwK.jpeg",
      "https://img.itch.zone/aW1hZ2UvMzY4OTk4Ny8yMjI4OTE0OS5qcGVn/347x500/%2BsIuZ3.jpeg",
      "https://img.itch.zone/aW1hZ2UvMzY4OTk4Ny8yMjI4OTE1MS5qcGVn/347x500/yCD5Ht.jpeg",
      "https://img.itch.zone/aW1hZ2UvMzY4OTk4Ny8yMjI4OTI2NC5wbmc=/347x500/oGsdlf.png",
      "https://img.itch.zone/aW1hZ2UvMzY4OTk4Ny8yMjI4OTI2NS5wbmc=/347x500/%2BjE1TX.png"
    ]
  }
];

const skillContainer = document.querySelector("#about-skills");
const gameContainer = document.querySelector("#game-sections");

skills.forEach((skill) => {
  const tag = document.createElement("span");
  tag.className = "skill-tag";
  tag.textContent = skill;
  skillContainer.append(tag);
});

games.forEach((game, index) => {
  const section = document.createElement("section");
  section.className = "game-section";
  section.id = `game-${index + 1}`;
  section.setAttribute("aria-labelledby", `game-title-${index + 1}`);

  const gallery = game.gallery.map((src, imageIndex) =>
    `<img src="${src}" alt="${game.title} screenshot ${imageIndex + 1}" loading="lazy">`
  ).join("");

  section.innerHTML = `
    <div class="game-section__backdrop" style="background-image:url('${game.background}')"></div>
    <div class="game-section__veil"></div>
    <div class="game-section__content">
      <span class="game-number">PROJECT 0${index + 1} <span aria-hidden="true">/</span> ${game.role}</span>
      <h3 id="game-title-${index + 1}">${game.title}</h3>
      <p class="game-description">${game.description}</p>
      <div class="game-meta">
        <div><h4>Technologies</h4><p>${game.technologies}</p></div>
        <div><h4>Skills demonstrated</h4><p>${game.skills}</p></div>
        <div><h4>My contribution</h4><p>${game.role}</p></div>
      </div>
      <div class="game-gallery" aria-label="${game.title} image gallery">${gallery}</div>
      <a class="game-detail-link" href="${game.detailUrl}">Explore this project in detail <span aria-hidden="true">↗</span></a>
    </div>`;
  gameContainer.append(section);
});

document.querySelector("#year").textContent = new Date().getFullYear();
