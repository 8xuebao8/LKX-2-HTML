/* Gem Guide · English guide content (mirrors guides-data.js) */

const ORIGIN_TYPES_EN = {
  natural:   { text: 'Formed by nature and only cut and polished after mining. The rarest, and the most expensive for the same look.', ex: 'Unheated ruby, spinel, most garnets' },
  enhanced:  { text: 'A natural gem improved by a traditional, stable, widely accepted method such as heating or waxing. Reports may use the plain gem name.', ex: 'Heated sapphire, heated aquamarine, waxed jadeite' },
  treated:   { text: 'A natural gem whose colour or clarity is changed by non-traditional methods such as filling, dyeing, diffusion or irradiation. Must be disclosed and is worth noticeably less.', ex: 'Lead-glass-filled ruby, B-jade, dyed lapis' },
  synthetic: { text: 'Made in a lab with the same chemistry and crystal structure as the natural gem – only the origin differs. Must be labelled "synthetic" or "lab-grown".', ex: 'Lab-grown diamond, synthetic ruby and sapphire, synthetic emerald' },
  imitation: { text: 'Looks like a gem but is a completely different material. It can be another natural gem (blue topaz posing as aquamarine) or man-made (glass, cubic zirconia).', ex: 'CZ imitating diamond, glass imitating emerald, moissanite' },
  assembled: { text: 'Two or three layers glued together to look like a single stone. Must be labelled "assembled".', ex: 'Opal doublets / triplets, garnet-topped glass' }
};

const TREATMENTS_EN = {
  heat: { cn: 'Enhancement', what: 'The gem is heated to several hundred or over a thousand °C to improve colour or dissolve silk, making it brighter and clearer.', why: 'The oldest and most common treatment. Most sapphires, rubies, tanzanites and aquamarines are heated.', risk: 'The colour is permanent and the market accepts it. But an unheated stone of the same quality can cost 30–100% more.', ask: 'Heated or unheated? Does the report say "No indications of heating"?', detect: 'Needs lab testing (changes in inclusions, spectra)' },
  oil: { cn: 'Enhancement', what: 'Colourless oil is soaked into surface-reaching fissures so they are less visible, improving apparent clarity.', why: 'Almost all emeralds are oiled – it is standard practice.', risk: 'Oil slowly seeps out or dries, so fissures reappear; ultrasonic and steam cleaning speed this up. Stones can be re-oiled.', ask: 'How much clarity enhancement: none / minor / moderate / significant?', detect: 'Flash effects and flow structures in fissures under magnification' },
  fill: { cn: 'Treatment', what: 'Fractures and cavities are filled with resin, glass or lead glass.', why: 'Turns heavily fractured, otherwise unusable material into clean-looking gems at very low prices.', risk: 'Lead-glass-filled ruby is damaged by acids and heat – even jewellery repairs can ruin it; resins yellow with age. Worth far less than unfilled stones.', ask: 'Is it filled? With what? Is it on the report?', detect: 'Gas bubbles, flash effects and lustre differences under magnification' },
  irradiation: { cn: 'Treatment', what: 'The gem is exposed to radiation or high-energy particles to change its colour, often followed by heating.', why: 'Nearly all blue topaz, many coloured diamonds and some tourmalines are irradiated.', risk: 'Most colours are stable but some fade in light. Legitimate goods are tested for residual radioactivity and are safe.', ask: 'Is it irradiated? Is the colour stable?', detect: 'Usually needs lab testing' },
  diffusion: { cn: 'Treatment', what: 'Colouring elements such as beryllium or titanium are diffused into the gem at high temperature – sometimes only a surface layer, sometimes right through.', why: 'Turns poor corundum into orange, yellow or blue stones that imitate fine sapphire.', risk: 'Surface-diffused stones lose colour if re-polished. Worth far less than heated or unheated stones of the same colour.', ask: 'Any beryllium or surface diffusion? Insist on a reputable report.', detect: 'Immersion shows colour concentrated at the surface or facet edges; Be-diffusion needs advanced instruments' },
  dye: { cn: 'Treatment', what: 'Dye is soaked into porous or fractured gems to change or deepen colour.', why: 'Common in jadeite (C-jade), lapis, turquoise, chalcedony, pearls and quartzite ("Malay jade").', risk: 'Colour fades with time, light and sweat; value is very low.', ask: 'Is it dyed? With the seller’s OK, rub an inconspicuous spot with an alcohol or acetone swab.', detect: 'Colour concentrated along cracks or grain boundaries under magnification' },
  bleach: { cn: 'Enhancement / Treatment', what: 'Chemicals are used to remove unwanted colour or stains.', why: 'Bleaching pearls is a routine enhancement; acid-bleaching jadeite is the first step of B-jade and must be disclosed.', risk: 'Bleached pearls are fine; acid-bleached jadeite is structurally damaged, must be polymer-filled, loses much of its value and ages.', ask: 'Jadeite: is it A-jade? Does the report say "treated"?', detect: 'B-jade: etched surface network, fluorescence reaction' },
  coating: { cn: 'Treatment', what: 'A thin film is applied to the surface to create colour or a rainbow effect.', why: 'Common in "mystic topaz" and "aurora" crystal; diamonds are sometimes coated on the pavilion to improve colour.', risk: 'The coating wears and scratches in daily use, revealing the original colour. Low value.', ask: 'Is it coated?', detect: 'Scratches, peeling film or unusual iridescence under magnification' },
  wax: { cn: 'Enhancement', what: 'Wax is applied to jade or porous gems to improve lustre and fill tiny pits.', why: 'A routine finishing step for jadeite, nephrite, lapis and turquoise.', risk: 'Minimal impact; wax wears off and can be reapplied. Heavy impregnation counts as a treatment.', ask: 'Just routine waxing, or polymer impregnation?', detect: 'A hot point brings wax to the surface' },
  stabilize: { cn: 'Treatment', what: 'Resin is forced into loose, porous material to make it solid and deepen the colour.', why: 'Most turquoise on the market is stabilised – otherwise it cannot be cut or worn.', risk: 'Durability improves, but value is well below natural, high-grade material.', ask: 'Natural or stabilised?', detect: 'Low SG, plastic smell with a hot point, resin visible under magnification' },
  laser: { cn: 'Treatment', what: 'A laser drills a fine channel into a diamond, and dark inclusions are then removed chemically.', why: 'Makes dark inclusions less visible, improving apparent clarity.', risk: 'Permanent, but leaves tiny channels and reduces value. Reputable reports disclose it.', ask: 'Does the report mention a laser drill hole?', detect: 'Fine tubes running in from the surface under magnification' },
  hpht: { cn: 'Treatment', what: 'High pressure and high temperature change a diamond’s colour – brown to white, or to a fancy colour.', why: 'Turns brown natural diamonds white; also used to improve lab-grown diamonds after growth.', risk: 'Permanent, but worth less than untreated diamonds of the same colour. Reputable reports disclose it.', ask: 'Does the report mention HPHT treatment?', detect: 'Needs lab spectroscopy' },
  assembled: { cn: 'Treatment', what: 'Two or three layers are glued into one "gem" – for example a thin opal slice on a black backing under a clear cap.', why: 'Creates a large, colourful look from very little rare material, at a much lower price.', risk: 'Water and heat can separate the layers; worth far less than a solid stone.', ask: 'Solid, or a doublet / triplet?', detect: 'A join line or colour layers visible from the side' }
};

const BUY_STEPS_EN = [
  { t: 'Decide how you’ll wear it', d: 'A ring worn every day needs durability 4–5. Pendants, earrings and occasional pieces allow far more choice.' },
  { t: 'Set your budget', d: 'Fix the total first, then choose bigger or better. On the same budget, lesser-known gems often get you a larger, prettier stone.' },
  { t: 'Pick a colour, then a gem', d: 'Several gems can give the same colour, with prices 10× apart. Use Explore to see your options.' },
  { t: 'Ask about treatments and reports', d: 'Ask "Is it treated, and how?", insist on a reputable lab report and verify the number on the lab’s website.' },
  { t: 'Inspect it and check after-sales', d: 'Look at it in daylight and under lamps; confirm the return policy and keep your receipt and report.' }
];

const SWAPS_WHY_EN = [
  'The same red at a much lower price, and almost never treated',
  'Affordable blues and violet-blues',
  'More durable and usually not filled',
  'Just as sparkly for a fraction of the budget',
  'Some sapphires and spinels also change colour, for far less',
  'Iolite is cheaper; sapphire is more durable',
  'Blue topaz is deeper in colour and cheaper (note: irradiated)',
  'Nephrite is tougher, with clearer entry-level pricing'
];

const LABS_EN = [
  { full: 'Gemological Institute of America', note: 'Created the diamond grading system; highly respected for coloured gems too' },
  { full: 'GemResearch Swisslab', note: 'Coloured gems, especially ruby and sapphire' },
  { full: 'Swiss Gemmological Institute', note: 'High-end coloured gems and pearls' },
  { full: 'Gübelin Gem Lab', note: 'High-end coloured gems and origin reports' },
  { full: 'American Gemological Laboratories', note: 'Coloured gems, mainly for the US market' },
  { full: 'National Gemstone Testing Center (China)', note: 'China’s leading authority; first choice for jadeite and nephrite' },
  { full: 'International Gemological Institute', note: 'The most common report for lab-grown diamonds' }
];

const RED_FLAGS_EN = [
  'A price far below the market ("factory direct", "clearance", "selling at a loss")',
  'They say "natural" but won’t answer "is it treated?"',
  'No report, or one from an unknown lab that can’t be verified online',
  'Stories ("old mine", "straight from the miner", "family heirloom") instead of a report',
  'Live-stream or social-media flash sales that rush your decision',
  'No returns, or vague return conditions',
  'A name with "diamond", "jade" or "gem" in it, but nobody can say what it really is (see name traps below)'
];

const NAME_TRAPS_EN = [
  { name: 'Huangyu 黄玉 ("yellow jade")', real: 'Topaz', note: 'Not jade, and not necessarily yellow' },
  { name: 'Mosang diamond 莫桑钻', real: 'Moissanite', note: 'Synthetic silicon carbide, not diamond' },
  { name: 'Rhinestone / "Austrian diamond"', real: 'Glass', note: 'Leaded glass, not diamond' },
  { name: 'Zircon / "Soviet diamond"', real: 'Cubic zirconia (CZ)', note: 'Man-made diamond simulant; natural zircon is a different gem' },
  { name: '"Malay jade"', real: 'Dyed quartzite', note: 'Not jadeite' },
  { name: 'Ziyawu 紫牙乌', real: 'Garnet', note: 'Just a trade nickname for garnet' },
  { name: '"Cat’s-eye"', real: 'Chrysoberyl cat’s-eye', note: 'Only chrysoberyl may be called simply "cat’s-eye"; others need a prefix, e.g. "quartz cat’s-eye"' },
  { name: 'Hetian jade 和田玉', real: 'Tremolite jade (nephrite)', note: 'A variety name, not an origin; Russian and Qinghai material is also sold as Hetian jade' },
  { name: '"Yellow crystal"', real: 'Citrine (mostly heated amethyst)', note: 'Natural citrine is rare' },
  { name: '"Cultured" / "synthetic diamond"', real: 'Lab-grown diamond', note: 'Real diamond, but not natural – and much cheaper' },
  { name: '"Paraíba"', real: 'Copper-bearing tourmaline', note: 'Originally a Brazilian origin, now any copper-bearing neon blue-green tourmaline; needs a report' }
];

const CARE_EN = [
  { lv: 'Durability 5 · very durable', d: 'Diamond, ruby, sapphire, spinel, alexandrite. Fine for daily wear; clean occasionally with mild soapy water.' },
  { lv: 'Durability 4 · fairly durable', d: 'Tourmaline, garnet, aquamarine, jadeite and more. Avoid hard knocks; take off for housework.' },
  { lv: 'Durability 3 · handle with care', d: 'Topaz, zircon, peridot, demantoid. Cleavage or lower hardness – avoid bumps.' },
  { lv: 'Durability 1–2 · delicate', d: 'Emerald, opal, pearl, tanzanite, turquoise. No ultrasonic or steam cleaning; keep away from perfume, sweat and heat. Last on, first off.' }
];
