/* =========================================================================
   FRONTIER DESTINY — STATIC GAME DATA
   Items, professions, landmarks, heirlooms, badges, endings & dialogue.
   ========================================================================= */

const WAGON_CAPACITY = 2000; // lbs of cargo a prairie schooner can safely haul
const MAX_YOKES = 6;
const ROUNDS_PER_BOX = 20;

// Shop catalog. `unit` = amount added per purchase step, weight is per unit.
const SHOP_ITEMS = [
    { id: 'oxen', name: 'Yoke of Oxen', icon: 'beef', unit: 1, unitLabel: 'yoke', price: 40, weight: 0,
      desc: 'Two oxen per yoke. They pull the wagon — more yokes keep you moving when the load is heavy. Max 6 yokes.' },
    { id: 'food', name: 'Flour, Bacon & Beans', icon: 'wheat', unit: 25, unitLabel: '25 lb sack', price: 5, weight: 25,
      desc: 'Each traveler eats 1–3 lbs a day depending on rations. Plan for roughly 150 days.' },
    { id: 'clothing', name: 'Clothing & Blankets', icon: 'shirt', unit: 1, unitLabel: 'set', price: 10, weight: 12,
      desc: 'Wool coats, boots and blankets. Travelers without a set suffer in cold mountain weather.' },
    { id: 'ammo', name: 'Powder & Shot', icon: 'crosshair', unit: 1, unitLabel: 'box of 20', price: 2, weight: 3,
      desc: 'Each box holds 20 rounds for hunting. Also prized as a trade good.' },
    { id: 'wheel', name: 'Spare Wagon Wheel', icon: 'circle-dot', unit: 1, unitLabel: 'wheel', price: 10, weight: 40,
      desc: 'Iron-rimmed hickory wheel. Rocky ruts shatter wheels without warning.' },
    { id: 'axle', name: 'Spare Wagon Axle', icon: 'minus', unit: 1, unitLabel: 'axle', price: 10, weight: 50,
      desc: 'Seasoned oak axle. A snapped axle halts the wagon cold.' },
    { id: 'tongue', name: 'Spare Wagon Tongue', icon: 'move-right', unit: 1, unitLabel: 'tongue', price: 10, weight: 35,
      desc: 'The pole that hitches the oxen to the wagon. Breaks on steep descents.' },
    { id: 'medicine', name: 'Medicine Chest', icon: 'cross', unit: 1, unitLabel: 'kit', price: 8, weight: 3,
      desc: 'Laudanum, quinine and bandages. Cures one illness or injury.' }
];

// Price multiplier rises the farther west the store is.
const STORE_MARKUP = { independence: 1, kearny: 1.25, laramie: 1.5, bridger: 1.75, hall: 2, boise: 2.25 };

// Each family brings treasured belongings. They weigh down the wagon but are worth points on arrival.
const HEIRLOOMS = [
    { id: 'stove', name: 'Iron Cookstove', weight: 180, icon: 'flame', memory: 'Mother baked every Christmas pie in it.' },
    { id: 'dresser', name: 'Walnut Dresser', weight: 120, icon: 'archive', memory: 'Carved by Grandfather in Ohio.' },
    { id: 'clock', name: 'Grandfather Clock', weight: 90, icon: 'clock', memory: 'It has chimed for three generations.' },
    { id: 'books', name: 'Crate of Books', weight: 50, icon: 'book-open', memory: 'Shakespeare, a Bible and a speller for the children.' },
    { id: 'chair', name: 'Rocking Chair', weight: 35, icon: 'armchair', memory: 'Every child in the family was rocked to sleep in it.' }
];

/* Professions — perks are intentionally NOT disclosed on selection.
   They are hinted when they trigger and fully revealed at the journey's end. */
const PROFESSIONS = [
    { id: 'banker', title: 'Banker', icon: 'landmark', cash: 1200, food: 150, ammo: 4, clothing: 3, wheel: 0, axle: 0, tongue: 0, medicine: 1, oxen: 0,
      multiplier: 1, perk: 'A fat purse — but no special frontier skills.' ,
      flavor: 'A ledger-keeper from Philadelphia, seeking new fortunes.' },
    { id: 'blacksmith', title: 'Blacksmith', icon: 'hammer', cash: 650, food: 200, ammo: 6, clothing: 4, wheel: 1, axle: 1, tongue: 0, medicine: 1, oxen: 0,
      multiplier: 2, perk: 'Repairs broken wagon parts far more often, and shod oxen tire slower.',
      flavor: 'Strong arms and a soot-black apron.' },
    { id: 'carpenter', title: 'Carpenter', icon: 'axe', cash: 800, food: 200, ammo: 5, clothing: 4, wheel: 1, axle: 0, tongue: 1, medicine: 1, oxen: 0,
      multiplier: 2, perk: 'Hews replacement parts from timber quickly and floats wagons more safely.',
      flavor: 'A builder of barns and meeting houses.' },
    { id: 'farmer', title: 'Farmer', icon: 'sprout', cash: 420, food: 350, ammo: 5, clothing: 5, wheel: 0, axle: 0, tongue: 0, medicine: 1, oxen: 2,
      multiplier: 3, perk: 'Brings two yokes of their own oxen, and knows how to keep a team strong.',
      flavor: 'Calloused hands and seed corn in the wagon bed.' },
    { id: 'physician', title: 'Physician', icon: 'stethoscope', cash: 900, food: 150, ammo: 4, clothing: 4, wheel: 0, axle: 0, tongue: 0, medicine: 5, oxen: 0,
      multiplier: 2, perk: 'Sick companions recover faster, sometimes without medicine.',
      flavor: 'A black bag and a steady hand.' },
    { id: 'trapper', title: 'Trapper', icon: 'paw-print', cash: 520, food: 200, ammo: 20, clothing: 5, wheel: 0, axle: 0, tongue: 0, medicine: 1, oxen: 0,
      multiplier: 2.5, perk: 'Superb marksman — easier hunting and can haul more meat back to camp.',
      flavor: 'Buckskins, a long rifle and many winters in the woods.' }
];

const DEPARTURE_MONTHS = [
    { month: 2, day: 20, label: 'March', hint: 'Early start — grass is thin and the nights are bitter.' },
    { month: 3, day: 12, label: 'April', hint: 'The traditional time to leave. Rivers run high.' },
    { month: 4, day: 5, label: 'May', hint: 'Lush grass for the oxen, warm days ahead.' },
    { month: 5, day: 1, label: 'June', hint: 'Late. You must hurry to beat the mountain snows.' },
    { month: 6, day: 1, label: 'July', hint: 'Dangerously late. Winter will find you in the Blue Mountains.' }
];

/* Landmarks along the trail. type: outpost | river | fort | landmark | mountain | dalles | destination
   store: key into STORE_MARKUP if the location has a trading store. */
const LANDMARKS = [
    { id: 'independence', miles: 0, name: 'Independence, Missouri', short: 'Independence', type: 'outpost', store: 'independence',
      fact: 'In the 1840s, Independence was the bustling "jumping-off" town where emigrants bought wagons, oxen and supplies for the journey west.' },
    { id: 'kansas', miles: 102, name: 'Kansas River Crossing', short: 'Kansas River', type: 'river', ferry: 5, baseDepth: 4.2, width: 620,
      fact: 'Ferries run by the Papin family and local Kanza people carried wagons across the Kansas River for a few dollars each.' },
    { id: 'blue', miles: 185, name: 'Big Blue River Crossing', short: 'Big Blue River', type: 'river', ferry: 0, baseDepth: 3.0, width: 210,
      fact: 'There was no ferry at the Big Blue. Spring rains could leave emigrants waiting days for the water to drop.' },
    { id: 'kearny', miles: 320, name: 'Fort Kearny', short: 'Fort Kearny', type: 'fort', store: 'kearny',
      fact: 'Built in 1848 on the Platte River, Fort Kearny was the first army post established to protect emigrants on the trail.' },
    { id: 'courthouse', miles: 500, name: 'Courthouse & Jail Rocks', short: 'Courthouse Rock', type: 'landmark', silhouette: 'courthouse',
      fact: 'Travelers thought these massive clay-and-sandstone bluffs resembled a courthouse and jail back home. Many climbed them to carve their names.' },
    { id: 'chimney', miles: 555, name: 'Chimney Rock', short: 'Chimney Rock', type: 'landmark', silhouette: 'chimney',
      fact: 'Chimney Rock was the most-mentioned landmark in emigrant diaries. Its spire could be seen for days before travelers reached it.' },
    { id: 'scotts', miles: 596, name: 'Scotts Bluff', short: 'Scotts Bluff', type: 'landmark', silhouette: 'scotts',
      fact: 'Named for fur trader Hiram Scott, who died nearby around 1828. The bluffs rise about 800 feet above the North Platte River.' },
    { id: 'laramie', miles: 660, name: 'Fort Laramie', short: 'Fort Laramie', type: 'fort', store: 'laramie',
      fact: 'Originally a fur-trading post, Fort Laramie was a crucial resupply stop. The U.S. Army purchased it in 1849.' },
    { id: 'indrock', miles: 840, name: 'Independence Rock', short: 'Independence Rock', type: 'landmark', silhouette: 'dome',
      fact: 'Emigrants hoped to reach this granite dome by the Fourth of July to stay on schedule. Thousands of names are carved on it.' },
    { id: 'southpass', miles: 940, name: 'South Pass', short: 'South Pass', type: 'mountain', branch: 'mountainman',
      fact: 'A broad, gentle saddle over the Continental Divide. West of here, rivers flow toward the Pacific Ocean.' },
    { id: 'bridger', miles: 1050, name: 'Fort Bridger', short: 'Fort Bridger', type: 'fort', store: 'bridger',
      fact: 'Mountain man Jim Bridger built this trading post in 1843 to supply and repair emigrant wagons.' },
    { id: 'soda', miles: 1150, name: 'Soda Springs', short: 'Soda Springs', type: 'landmark', silhouette: 'springs',
      fact: 'Naturally carbonated springs bubbled here. Travelers mixed the fizzy water with sugar and called it "soda."' },
    { id: 'hall', miles: 1260, name: 'Fort Hall', short: 'Fort Hall', type: 'fort', store: 'hall', branch: 'california',
      fact: 'A Hudson\'s Bay Company post. Here the California Trail split southwest from the Oregon Trail.' },
    { id: 'snake', miles: 1440, name: 'Three Island Crossing', short: 'Snake River', type: 'river', ferry: 0, guide: true, baseDepth: 5.2, width: 1000,
      fact: 'The most dangerous river crossing on the trail. Shoshone guides helped many emigrants find safe passage across the Snake.' },
    { id: 'boise', miles: 1530, name: 'Fort Boise', short: 'Fort Boise', type: 'fort', store: 'boise',
      fact: 'A small Hudson\'s Bay Company post near the mouth of the Boise River, welcomed after the harsh Snake River plain.' },
    { id: 'bluemtns', miles: 1680, name: 'Blue Mountains', short: 'Blue Mountains', type: 'mountain',
      fact: 'Steep, timbered slopes forced emigrants to lower wagons with ropes. Early snow here trapped late-season travelers.' },
    { id: 'dalles', miles: 1800, name: 'The Dalles', short: 'The Dalles', type: 'dalles',
      fact: 'Here the trail ended at the Columbia River. Emigrants chose between rafting the dangerous river or taking the Barlow Road toll route around Mount Hood.' },
    { id: 'willamette', miles: 2000, name: 'Willamette Valley, Oregon', short: 'Willamette Valley', type: 'destination',
      fact: 'The fertile Willamette Valley was the goal of most Oregon emigrants. The 1850 Donation Land Act later granted settlers free land.' }
];

const ILLNESSES = {
    cholera:    { name: 'Cholera',      drain: 9, recover: 0.10, cause: 'contaminated water' },
    dysentery:  { name: 'Dysentery',    drain: 6, recover: 0.12, cause: 'spoiled food' },
    typhoid:    { name: 'Typhoid',      drain: 6, recover: 0.10, cause: 'dirty water' },
    measles:    { name: 'Measles',      drain: 4, recover: 0.16, cause: 'a passing wagon train' },
    fever:      { name: 'Mountain Fever', drain: 5, recover: 0.14, cause: 'tick bites' },
    exhaustion: { name: 'Exhaustion',   drain: 3, recover: 0.25, cause: 'the punishing pace' },
    brokenarm:  { name: 'Broken Arm',   drain: 2, recover: 0.08, cause: 'a fall from the wagon' },
    snakebite:  { name: 'Snakebite',    drain: 7, recover: 0.15, cause: 'a prairie rattlesnake' },
    frostbite:  { name: 'Frostbite',    drain: 4, recover: 0.12, cause: 'freezing weather' }
};

const BADGES = [
    { id: 'pathfinder', title: 'Great Pathfinder', desc: 'Departed Independence for the Oregon Country.', icon: 'compass' },
    { id: 'river_master', title: 'River Master', desc: 'Crossed every river of one journey without a single loss.', icon: 'anchor' },
    { id: 'sharpshooter', title: 'Plains Sharpshooter', desc: 'Brought down 5 or more animals in a single hunt.', icon: 'crosshair' },
    { id: 'physician', title: 'Pioneer Physician', desc: 'Cured an illness on the trail with your medicine chest.', icon: 'heart-pulse' },
    { id: 'iron_yoke', title: 'Iron Yoke', desc: 'Reached 1,000 miles without losing a single ox.', icon: 'shield-check' },
    { id: 'sole_survivor', title: 'Sole Survivor', desc: 'Persevered alone after every companion passed away.', icon: 'user-x' },
    { id: 'historian', title: 'Parchment Historian', desc: 'Studied every landmark and fort along the trail.', icon: 'book-open' },
    { id: 'bountiful', title: 'Bountiful Harvest', desc: 'Arrived in Oregon with over 400 lbs of food.', icon: 'wheat' },
    { id: 'heirloom', title: 'Keeper of Memories', desc: 'Arrived in Oregon with every family heirloom.', icon: 'gem' },
    { id: 'early_bird', title: 'Ahead of the Snows', desc: 'Reached the Willamette Valley before September 15.', icon: 'sunrise' },
    { id: 'trader', title: 'Shrewd Trader', desc: 'Completed three trades on the trail in one journey.', icon: 'handshake' },
    { id: 'columbia', title: 'Rapids Runner', desc: 'Rafted the Columbia River without capsizing.', icon: 'waves' }
];

const ENDINGS = {
    dynasty:    { title: 'The Pioneer Dynasty', color: '#1b3d17', scene: 'homestead',
                  desc: 'Every soul in your party survived the two-thousand-mile odyssey! You stake a rich claim in the Willamette Valley. Within five years your homestead flourishes with apple orchards, healthy cattle and a busy grist mill.' },
    homestead:  { title: 'Willamette Homesteaders', color: '#2d5e27', scene: 'homestead',
                  desc: 'Weary and grieving, your party reaches the green Willamette Valley at last. You raise a log cabin before the winter rains and plant your first wheat in the spring. The hardships of the trail become stories told by the hearth.' },
    founders:   { title: 'The Town Founders', color: '#f5ebd7', scene: 'town',
                  desc: 'Your trade proves priceless in the new settlement. Neighbors come for your skills, a schoolhouse and meeting hall rise around your shop, and a growing town takes your family\'s name.' },
    sole:       { title: "The Sole Survivor's Burden", color: '#dfcaa7', scene: 'cross',
                  desc: 'You reach the Pacific slope alone. Your beloved companions rest beneath wooden markers along the trail. You build a quiet cabin in the timber and keep their memory alive in your journal.' },
    lost:       { title: 'The Lost Expedition', color: '#c75d4a', scene: 'snow',
                  desc: 'The frontier proved too cruel. Your wagon lies silent beside the trail, and the journey of your party ends far from the promised valley — a cautionary tale told to the emigrants who follow.' },
    stranded:   { title: 'Stranded & Rescued', color: '#dfcaa7', scene: 'stranded',
                  desc: 'With your last oxen gone, the wagon can go no farther. A passing Nez Perce family shares food and guides your exhausted party to the mission station at Waiilatpu, where you wait out the winter.' },
    tycoon:     { title: 'Trading Post Tycoons', color: '#c29b38', scene: 'post',
                  desc: 'Seeing the endless tide of wagons, you invest your fortune in a trading post at Fort Hall. You sell flour and oxen to ten thousand emigrants and grow wealthy — though you never see Oregon.' },
    goldrush:   { title: 'Gold Rush Fever', color: '#f5cb5c', scene: 'gold',
                  desc: 'Rumors of gold at Sutter\'s Mill prove true! Turning south onto the California Trail, your party reaches the American River in the first wave of the 1849 rush, trading plows for pans.' },
    mountain:   { title: 'Legend of the High Country', color: '#dfcaa7', scene: 'moon',
                  desc: 'You trade your wagon for pack horses and winter with the mountain men in the Wind River Range. Your exploits as a trapper and guide become legend around western campfires.' }
};

// Dialogue lines for "Talk to people" at forts & towns. Educational tips Mission-US style.
const FORT_TALK = [
    { who: 'Sergeant Owen Pike', role: 'Fort Garrison', portrait: 'soldier',
      text: '"A heavy wagon is a dead wagon at a river crossing. Every pound you carry makes it more likely to swamp. Lighten your load before deep water."' },
    { who: 'Mrs. Eliza Thornbury', role: 'Fellow Emigrant', portrait: 'maeve',
      text: '"We passed cookstoves and pianos dumped beside the trail. Folks overload in Missouri and regret it in the mountains."' },
    { who: 'Pierre Lacroix', role: 'Fur Trader', portrait: 'trader',
      text: '"Keep the oxen at a steady pace. Push them too hard and they drop in the harness, and then where will you be?"' },
    { who: 'Walks Far', role: 'Shoshone Guide', portrait: 'guide',
      text: '"The Snake River is wide and fast. At the islands there is a safe way across, if you know where the gravel bars lie."' },
    { who: 'Dr. Amos Whitlow', role: 'Traveling Surgeon', portrait: 'merchant',
      text: '"Boil your water when you can. Cholera follows the wagon trains like a shadow, and it kills in a single day."' },
    { who: 'Hannah Voss', role: 'Widow & Emigrant', portrait: 'maeve',
      text: '"Bring warm clothes for everyone. The Blue Mountains can freeze in September, and a body without a coat won\'t last."' },
    { who: 'Jacques Dubois', role: 'Trading Post Clerk', portrait: 'trader',
      text: '"Prices climb the farther west you go. Flour that costs a nickel in Independence costs four times that by Fort Boise."' },
    { who: 'Corporal Ben Ruiz', role: 'Army Scout', portrait: 'soldier',
      text: '"Mind the calendar. If you\'re not past the Blue Mountains by November, the snows may close the trail for good."' }
];

// Native nations encountered by region (respectful trading encounters).
const NATIONS_BY_REGION = {
    prairie: 'Kanza', plains: 'Pawnee', highplains: 'Lakota', rockies: 'Shoshone', desert: 'Shoshone-Bannock', bluemtns: 'Cayuse', cascades: 'Nez Perce'
};
