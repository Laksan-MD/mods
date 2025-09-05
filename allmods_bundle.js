// allmods_everything.js
// Loads EVERY Sandboxels mod, including Tools & Settings

const mods = [
  // --- Chemistry & Science ---
  "chem.js","morechemistry.js","aScientistsWish.js","nousersthings.js","spring.js",
  "biology.js","mixture.js","moreliquids.js","halogen.js","noblegas.js",
  "radioactive.js","liquid_mixing.js","alchemy.js",

  // --- Mechanics & Machines ---
  "logicgates.js","circuitcore.js","ExtraMachines.js","fans.js","drill.js",
  "combustion.js","conveyance.js","pullers.js","pushers.js","portal.js",
  "spouts.js","waterspout.js","WhisperingTheory.js","gears.js","pulleys.js",
  "moreMachanics.js",

  // --- Food & Cooking ---
  "aChefsDream.js","aChefsDream2.js","morefoodsmod.js","soups.js",
  "mustard.js","pizzasstuff.js","weAllScreamFor.js","community_desserts.js",
  "ketchup_mod.js",

  // --- Weapons ---
  "weapons.js","aircrafts.js","guided_rocket.js","icb.js",
  "life_eater.js","war_crimes.js","explosives.js","tanks.js",

  // --- Nature & Fantasy ---
  "fey_and_more.js","fantastic_creatures.js","flowers_and_forests.js",
  "plants.js","moretrees.js","ocean.js","volcanic_expansion.js","sbstuff.js",

  // --- Fun & Games ---
  "minecraft.js","star_wars.js","sports_beta.js","doom.js","maze.js","sus.js",

  // --- Visual ---
  "clouds.js","sky.js","lightmap.js","nicer_flame.js","occlusion.js",
  "moreViews.js","manyMoreThemes.js","glow.js",

  // --- Playground expanders ---
  "worldgenlibrary.js","the_ground.js","the_ground_og.js",
  "building.js","citybuilding.js","worldgen_test.js",

  // --- Tools ---
  "no_scroll.js","fast_reload.js","debugtools.js",

  // --- Settings ---
  "settings.js","sandbox_settings.js",
];

mods.forEach(mod => {
  try {
    let s = document.createElement("script");
    s.src = "mods/" + mod;
    s.onerror = () => console.warn("❌ Failed to load:", mod);
    document.head.appendChild(s);
  } catch(e) {
    console.error("⚠️ Error in mod:", mod, e);
  }
});
