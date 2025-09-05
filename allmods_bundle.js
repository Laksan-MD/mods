// allmods_bundle.js
// Loads almost every Sandboxels mod except Tools/Settings + alchemy.js + moreMachanics.js

const mods = [
  // Chemistry & Science
  "chem.js",
  "aScientistsWish.js",
  "morechemistry.js",
  "nousersthings.js",
  "spring.js",
  "biology.js",
  "mixture.js",
  "moreliquids.js",
  "halogen.js",
  "noblegas.js",
  "radioactive.js",
  "liquid_mixing.js",

  // Machines & Mechanics
  // removed moreMachanics.js
  "logicgates.js",
  "circuitcore.js",
  "ExtraMachines.js",
  "fans.js",
  "drill.js",
  "combustion.js",
  "conveyance.js",
  "pullers.js",
  "pushers.js",
  "portal.js",
  "spouts.js",
  "waterspout.js",
  "WhisperingTheory.js",

  // Food & Cooking
  "aChefsDream.js",
  "aChefsDream2.js",
  "morefoodsmod.js",
  "soups.js",
  "mustard.js",
  "pizzasstuff.js",
  "weAllScreamFor.js",

  // Weapons
  "weapons.js",
  "aircrafts.js",
  "guided_rocket.js",
  "icb.js",
  "life_eater.js",
  "war_crimes.js",

  // Life & Nature
  "fey_and_more.js",
  "fantastic_creatures.js",
  "flowers_and_forests.js",
  "plants.js",
  "moretrees.js",
  "ocean.js",
  "volcanic_expansion.js",

  // Fun & Games
  "minecraft.js",
  "star_wars.js",
  "sports_beta.js",
  "doom.js",
  "maze.js",

  // Visual
  "clouds.js",
  "sky.js",
  "lightmap.js",
  "nicer_flame.js",
  "occlusion.js",
  "moreViews.js",
  "manyMoreThemes.js",

  // Playground expanding mods (screen/worldgen)
  "worldgenlibrary.js",
  "the_ground.js",
  "the_ground_og.js",
  "building.js",
  "citybuilding.js",
  "worldgen_test.js",
];

mods.forEach(mod => {
  let s = document.createElement("script");
  s.src = "mods/" + mod; // assumes mods are in your /mods/ folder
  document.head.appendChild(s);
});
