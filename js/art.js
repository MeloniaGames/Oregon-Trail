/* =========================================================================
   ILLUSTRATED VECTOR PORTRAITS & DYNAMIC SCENE RENDERER
   ========================================================================= */
const Portraits = {
    vance: () => `
        <svg viewBox="0 0 100 120" class="w-full h-full">
            <rect width="100" height="120" fill="#2d2218"/>
            <path d="M 10 38 Q 50 20, 90 38 Q 95 44, 85 45 Q 50 35, 15 45 Z" fill="#1b120c" stroke="#3a2717" stroke-width="1.5"/>
            <path d="M 28 36 Q 50 15, 72 36 Z" fill="#2a1a0f"/>
            <ellipse cx="50" cy="55" rx="20" ry="24" fill="#dcb892"/>
            <path d="M 32 60 Q 50 90, 68 60 Q 64 85, 50 92 Q 36 85, 32 60 Z" fill="#3a2517"/>
            <circle cx="43" cy="52" r="2.5" fill="#1b120c"/><circle cx="57" cy="52" r="2.5" fill="#1b120c"/>
            <path d="M 20 85 L 50 78 L 80 85 L 88 120 L 12 120 Z" fill="#4d321d" stroke="#2a1b10" stroke-width="2"/>
            <polygon points="46,78 54,78 52,120 48,120" fill="#c29b38"/>
        </svg>`,
    sterling: () => `
        <svg viewBox="0 0 100 120" class="w-full h-full">
            <rect width="100" height="120" fill="#222b27"/>
            <path d="M 25 35 Q 50 18, 75 35 Q 85 55, 78 80 Q 50 82, 22 80 Q 15 55, 25 35 Z" fill="#4a2e1b"/>
            <ellipse cx="50" cy="52" rx="18" ry="22" fill="#edd0b2"/>
            <circle cx="44" cy="50" r="2" fill="#21150c"/><circle cx="56" cy="50" r="2" fill="#21150c"/>
            <path d="M 46 62 Q 50 65, 54 62" stroke="#8a3b2b" stroke-width="1.5" fill="none"/>
            <path d="M 18 85 Q 50 75, 82 85 L 90 120 L 10 120 Z" fill="#2f4a3c" stroke="#1c2d24" stroke-width="2"/>
            <circle cx="50" cy="88" r="4" fill="#c29b38"/>
        </svg>`,
    clark: () => `
        <svg viewBox="0 0 100 120" class="w-full h-full">
            <rect width="100" height="120" fill="#242618"/>
            <ellipse cx="50" cy="35" rx="42" ry="14" fill="#c7a760" stroke="#7d632b" stroke-width="1.5"/>
            <path d="M 30 35 Q 50 18, 70 35 Z" fill="#ad8e49"/>
            <ellipse cx="50" cy="54" rx="20" ry="22" fill="#d5aa81"/>
            <circle cx="43" cy="50" r="2.5" fill="#1b120c"/><circle cx="57" cy="50" r="2.5" fill="#1b120c"/>
            <path d="M 38 65 Q 50 72, 62 65" stroke="#4a301a" stroke-width="2" fill="none"/>
            <path d="M 20 86 L 80 86 L 85 120 L 15 120 Z" fill="#8c3d2b"/>
            <rect x="32" y="86" width="6" height="34" fill="#282218"/><rect x="62" y="86" width="6" height="34" fill="#282218"/>
        </svg>`,
    maeve: () => `
        <svg viewBox="0 0 100 120" class="w-full h-full">
            <rect width="100" height="120" fill="#2b2230"/>
            <path d="M 20 52 Q 18 22, 50 18 Q 82 22, 80 52 L 74 52 Q 72 30, 50 28 Q 28 30, 26 52 Z" fill="#c9b48a" stroke="#7d6a45" stroke-width="1.5"/>
            <ellipse cx="50" cy="55" rx="18" ry="21" fill="#f0d4b8"/>
            <path d="M 32 44 Q 50 34, 68 44" stroke="#8a4a24" stroke-width="5" fill="none"/>
            <circle cx="44" cy="54" r="2" fill="#21150c"/><circle cx="56" cy="54" r="2" fill="#21150c"/>
            <path d="M 45 65 Q 50 68, 55 65" stroke="#a0453a" stroke-width="1.5" fill="none"/>
            <path d="M 16 88 Q 50 76, 84 88 L 90 120 L 10 120 Z" fill="#5b3550" stroke="#2c1a27" stroke-width="2"/>
            <path d="M 36 82 L 50 96 L 64 82" fill="#efe3c6"/>
        </svg>`,
    child: () => `
        <svg viewBox="0 0 100 120" class="w-full h-full">
            <rect width="100" height="120" fill="#24302a"/>
            <ellipse cx="50" cy="60" rx="17" ry="19" fill="#f2d7bb"/>
            <path d="M 32 54 Q 34 34, 50 36 Q 66 34, 68 54 Q 60 44, 50 46 Q 40 44, 32 54 Z" fill="#c78a3a"/>
            <path d="M 31 52 Q 24 70, 30 82" stroke="#c78a3a" stroke-width="5" fill="none"/>
            <path d="M 69 52 Q 76 70, 70 82" stroke="#c78a3a" stroke-width="5" fill="none"/>
            <circle cx="44" cy="60" r="2" fill="#21150c"/><circle cx="56" cy="60" r="2" fill="#21150c"/>
            <circle cx="40" cy="66" r="3" fill="#f2a5a0" opacity="0.6"/><circle cx="60" cy="66" r="3" fill="#f2a5a0" opacity="0.6"/>
            <path d="M 45 70 Q 50 74, 55 70" stroke="#8a3b2b" stroke-width="1.5" fill="none"/>
            <path d="M 24 92 Q 50 82, 76 92 L 80 120 L 20 120 Z" fill="#3d6b8c" stroke="#1f3a4d" stroke-width="2"/>
        </svg>`,
    merchant: () => `
        <svg viewBox="0 0 100 120" class="w-full h-full">
            <rect width="100" height="120" fill="#1c242c"/>
            <rect x="30" y="15" width="40" height="28" fill="#151a1e"/>
            <ellipse cx="50" cy="43" rx="35" ry="8" fill="#1f252a"/>
            <ellipse cx="50" cy="58" rx="19" ry="22" fill="#e5c5a3"/>
            <circle cx="43" cy="55" r="5" fill="none" stroke="#c29b38" stroke-width="1.5"/>
            <circle cx="57" cy="55" r="5" fill="none" stroke="#c29b38" stroke-width="1.5"/>
            <line x1="48" y1="55" x2="52" y2="55" stroke="#c29b38" stroke-width="1.5"/>
            <path d="M 38 68 Q 50 74, 62 68" stroke="#6b4a2f" stroke-width="3" fill="none"/>
            <path d="M 20 88 L 80 88 L 88 120 L 12 120 Z" fill="#324555"/>
            <polygon points="46,88 54,88 50,110" fill="#edd8be"/>
        </svg>`,
    guide: () => `
        <svg viewBox="0 0 100 120" class="w-full h-full">
            <rect width="100" height="120" fill="#291a18"/>
            <line x1="58" y1="35" x2="72" y2="12" stroke="#c29b38" stroke-width="3"/>
            <ellipse cx="50" cy="55" rx="20" ry="23" fill="#b07d57"/>
            <path d="M 28 42 L 72 42" stroke="#7a1f1d" stroke-width="3"/>
            <rect x="26" y="55" width="6" height="40" fill="#150f0c"/><rect x="68" y="55" width="6" height="40" fill="#150f0c"/>
            <circle cx="43" cy="52" r="2.5" fill="#150f0c"/><circle cx="57" cy="52" r="2.5" fill="#150f0c"/>
            <path d="M 20 86 L 80 86 L 86 120 L 14 120 Z" fill="#947348" stroke="#523d24" stroke-width="2"/>
            <path d="M 30 96 L 70 96" stroke="#c29b38" stroke-width="2" stroke-dasharray="3 3"/>
        </svg>`,
    soldier: () => `
        <svg viewBox="0 0 100 120" class="w-full h-full">
            <rect width="100" height="120" fill="#1d2433"/>
            <path d="M 30 40 L 32 22 Q 50 14, 68 22 L 70 40 Z" fill="#22324f"/>
            <rect x="28" y="38" width="44" height="5" fill="#111827"/>
            <circle cx="50" cy="30" r="3" fill="#c29b38"/>
            <ellipse cx="50" cy="58" rx="19" ry="21" fill="#e0b996"/>
            <circle cx="43" cy="56" r="2.3" fill="#1b120c"/><circle cx="57" cy="56" r="2.3" fill="#1b120c"/>
            <path d="M 40 67 Q 50 63, 60 67" stroke="#3a2517" stroke-width="3" fill="none"/>
            <path d="M 18 88 L 82 88 L 88 120 L 12 120 Z" fill="#2b3f66" stroke="#141d31" stroke-width="2"/>
            <circle cx="50" cy="98" r="2" fill="#c29b38"/><circle cx="50" cy="108" r="2" fill="#c29b38"/>
            <rect x="18" y="86" width="14" height="4" fill="#c29b38"/><rect x="68" y="86" width="14" height="4" fill="#c29b38"/>
        </svg>`,
    trader: () => `
        <svg viewBox="0 0 100 120" class="w-full h-full">
            <rect width="100" height="120" fill="#2c1f14"/>
            <path d="M 22 40 Q 50 10, 78 40 Q 70 30, 50 30 Q 30 30, 22 40 Z" fill="#6b4a2a"/>
            <path d="M 72 34 Q 86 44, 80 56" stroke="#6b4a2a" stroke-width="5" fill="none"/>
            <ellipse cx="50" cy="56" rx="19" ry="22" fill="#d9b28c"/>
            <path d="M 31 60 Q 50 96, 69 60 Q 62 78, 50 80 Q 38 78, 31 60 Z" fill="#7a5a3a"/>
            <circle cx="43" cy="53" r="2.3" fill="#1b120c"/><circle cx="57" cy="53" r="2.3" fill="#1b120c"/>
            <path d="M 18 88 L 82 88 L 88 120 L 12 120 Z" fill="#8a3324" stroke="#4a1a12" stroke-width="2"/>
            <path d="M 18 96 L 82 96" stroke="#f5cb5c" stroke-width="2"/>
        </svg>`
};

const COMPANION_PORTRAITS = ['sterling', 'clark', 'maeve', 'child'];

function regionFor(miles) {
    if (miles < 320) return 'prairie';
    if (miles < 640) return 'plains';
    if (miles < 900) return 'highplains';
    if (miles < 1300) return 'rockies';
    if (miles < 1640) return 'desert';
    if (miles < 1790) return 'bluemtns';
    return 'cascades';
}

const REGION_PALETTE = {
    prairie:    { sky: ['#5f8fb8', '#f2d6a2'], far: '#7d9a5a', mid: '#5f7a3a', ground: '#4d6a2b', near: '#3c5522' },
    plains:     { sky: ['#6d9cc2', '#f4d9a8'], far: '#b09a6a', mid: '#9b8650', ground: '#8c7a45', near: '#6e5f32' },
    highplains: { sky: ['#6a98c0', '#f0cf98'], far: '#a68562', mid: '#8f7048', ground: '#7f6a42', near: '#5f4f30' },
    rockies:    { sky: ['#5a87b3', '#e9d2a8'], far: '#6c7b88', mid: '#5b6b78', ground: '#6b7048', near: '#4f5535', snowcaps: true },
    desert:     { sky: ['#7fa9cc', '#f7d79a'], far: '#c79a62', mid: '#b88a52', ground: '#a77d46', near: '#86602f' },
    bluemtns:   { sky: ['#5c84a6', '#d8d2b8'], far: '#4d6577', mid: '#3d5566', ground: '#3e5a35', near: '#2b4426', pines: true },
    cascades:   { sky: ['#5b8db5', '#e4e8c8'], far: '#5d7f6a', mid: '#3f6e48', ground: '#3f7a3a', near: '#2d5e27', pines: true, hood: true }
};

function weatherSky(weather, base) {
    switch (weather) {
        case 'Rain': return ['#59646d', '#9aa3a8'];
        case 'Thunderstorm': return ['#2f363d', '#5f676d'];
        case 'Snow': return ['#8d9aa7', '#dfe5ea'];
        case 'Blizzard': return ['#a9b3bc', '#e9edf0'];
        case 'Very Hot': return ['#8fb6d6', '#ffd28a'];
        case 'Hot': return ['#79a8cf', '#ffdca0'];
        case 'Cold': case 'Freezing': return ['#7d95ab', '#d9dde0'];
        default: return base;
    }
}

let _sceneUid = 0;

function wagonSVG(x, y, scale = 1, oxenYokes = 2) {
    const ox = (ox_x) => `
        <g transform="translate(${ox_x},0)">
            <line x1="-12" y1="-14" x2="-13" y2="0" stroke="#2a1a0e" stroke-width="3"/>
            <line x1="10" y1="-14" x2="11" y2="0" stroke="#2a1a0e" stroke-width="3"/>
            <ellipse cx="0" cy="-20" rx="18" ry="10" fill="#5a3a22"/>
            <circle cx="-19" cy="-24" r="6.5" fill="#4a2e18"/>
            <path d="M -23 -29 Q -28 -36, -22 -38 M -16 -29 Q -12 -36, -17 -38" stroke="#efe3c6" stroke-width="2" fill="none"/>
        </g>`;
    const yokes = Math.max(1, Math.min(3, oxenYokes));
    let oxen = '';
    for (let i = 0; i < yokes; i++) oxen += ox(-44 - i * 40);
    const wheel = (cx, r) => `
        <g class="wheel">
            <circle cx="${cx}" cy="${-r}" r="${r}" fill="none" stroke="#2a1a0e" stroke-width="3"/>
            ${[0, 45, 90, 135].map(a => {
                const rad = a * Math.PI / 180;
                return `<line x1="${cx - Math.cos(rad) * r}" y1="${-r - Math.sin(rad) * r}" x2="${cx + Math.cos(rad) * r}" y2="${-r + Math.sin(rad) * r}" stroke="#3b2513" stroke-width="1.6"/>`;
            }).join('')}
            <circle cx="${cx}" cy="${-r}" r="2.5" fill="#c29b38"/>
        </g>`;
    return `
        <g transform="translate(${x},${y}) scale(${scale})">
            <ellipse cx="0" cy="2" rx="${80 + yokes * 40}" ry="6" fill="#000" opacity="0.18" transform="translate(-${yokes * 18},0)"/>
            <g class="wagon-bob">
                <line x1="2" y1="-20" x2="${-44 - (yokes - 1) * 40 + 12}" y2="-22" stroke="#3b2513" stroke-width="3"/>
                ${oxen}
                <rect x="0" y="-40" width="92" height="22" fill="#6b4423" stroke="#2a1a0e" stroke-width="2"/>
                <path d="M 4 -40 Q 2 -82, 46 -84 Q 90 -82, 88 -40 Z" fill="#efe3c6" stroke="#a8946b" stroke-width="2"/>
                <path d="M 26 -40 Q 24 -76, 30 -82 M 46 -40 L 46 -84 M 66 -40 Q 68 -76, 62 -82" stroke="#c9b48a" stroke-width="1.5" fill="none"/>
                ${wheel(16, 13)}
                ${wheel(76, 15)}
            </g>
        </g>`;
}

function landmarkSilhouette(lm, pal) {
    if (!lm) return '';
    const dark = '#00000033';
    switch (lm.silhouette || lm.type) {
        case 'courthouse':
            return `<path d="M 330 190 L 345 130 L 360 122 L 420 122 L 432 130 L 448 190 Z" fill="#b59a72" stroke="${dark}" stroke-width="2"/>
                    <path d="M 465 190 L 474 150 L 498 148 L 506 190 Z" fill="#a88d66"/>`;
        case 'chimney':
            return `<path d="M 360 195 Q 400 150, 418 150 L 424 70 L 434 68 L 438 150 Q 460 150, 500 195 Z" fill="#b8956a" stroke="${dark}" stroke-width="2"/>`;
        case 'scotts':
            return `<path d="M 250 195 L 270 120 L 300 108 L 350 110 L 380 96 L 440 100 L 470 120 L 510 195 Z" fill="#9c8058" stroke="${dark}" stroke-width="2"/>
                    <path d="M 270 120 L 300 108 L 350 110 L 380 96 L 440 100 L 470 120" stroke="#c4a77a" stroke-width="3" fill="none"/>`;
        case 'dome':
            return `<path d="M 300 200 Q 320 130, 410 128 Q 500 130, 520 200 Z" fill="#8a8173" stroke="${dark}" stroke-width="2"/>
                    <path d="M 340 160 Q 380 150, 420 150" stroke="#a49b8b" stroke-width="3" fill="none"/>`;
        case 'springs':
            return `<ellipse cx="430" cy="225" rx="70" ry="12" fill="#7fb8c4" opacity="0.85"/>
                    <ellipse cx="430" cy="223" rx="40" ry="6" fill="#bfe3ea" opacity="0.7"/>
                    <circle cx="410" cy="212" r="3" fill="#e8f7fa" class="bubble"/><circle cx="440" cy="208" r="2" fill="#e8f7fa" class="bubble" style="animation-delay:.6s"/>
                    <circle cx="458" cy="214" r="2.5" fill="#e8f7fa" class="bubble" style="animation-delay:1.2s"/>`;
        case 'fort':
        case 'outpost':
            const isTown = lm.type === 'outpost';
            if (isTown) {
                return `<rect x="350" y="140" width="80" height="60" fill="#6b4423" stroke="#2a1a0e" stroke-width="2"/>
                        <polygon points="342,140 390,112 438,140" fill="#7a2f1d"/>
                        <rect x="380" y="168" width="18" height="32" fill="#2a1a0e"/>
                        <rect x="358" y="152" width="14" height="12" fill="#fde68a"/>
                        <rect x="408" y="152" width="14" height="12" fill="#fde68a"/>
                        <rect x="445" y="155" width="70" height="45" fill="#7d5531" stroke="#2a1a0e" stroke-width="2"/>
                        <rect x="440" y="148" width="80" height="9" fill="#4a2e18"/>
                        <text x="480" y="178" text-anchor="middle" font-family="Cinzel" font-size="8" fill="#f5ebd7">OUTFITTERS</text>
                        <rect x="290" y="160" width="50" height="40" fill="#5a3a22" stroke="#2a1a0e" stroke-width="2"/>
                        <polygon points="285,160 315,142 345,160" fill="#4a2e18"/>`;
            }
            let pickets = '';
            for (let px = 330; px <= 510; px += 9) pickets += `<path d="M ${px} 200 L ${px} 150 L ${px + 4.5} 143 L ${px + 9} 150 L ${px + 9} 200" fill="#7d5531" stroke="#3b2513" stroke-width="1"/>`;
            return `${pickets}
                    <rect x="320" y="128" width="28" height="72" fill="#6b4423" stroke="#2a1a0e" stroke-width="2"/>
                    <polygon points="316,128 334,112 352,128" fill="#4a2e18"/>
                    <rect x="496" y="128" width="28" height="72" fill="#6b4423" stroke="#2a1a0e" stroke-width="2"/>
                    <polygon points="492,128 510,112 528,128" fill="#4a2e18"/>
                    <line x1="420" y1="146" x2="420" y2="90" stroke="#2a1a0e" stroke-width="2"/>
                    <g class="flag"><rect x="420" y="90" width="26" height="15" fill="#b91c1c"/><rect x="420" y="90" width="11" height="8" fill="#1e3a8a"/>
                    <line x1="431" y1="95" x2="446" y2="95" stroke="#fff" stroke-width="1.5"/><line x1="420" y1="101" x2="446" y2="101" stroke="#fff" stroke-width="1.5"/></g>
                    <rect x="405" y="170" width="30" height="30" fill="#2a1a0e"/>`;
        case 'mountain':
            return `<polygon points="200,200 330,70 460,200" fill="#6a7a88" stroke="${dark}" stroke-width="2"/>
                    <polygon points="330,70 300,100 315,98 330,110 345,98 360,100" fill="#f5f7fa"/>
                    <polygon points="380,200 480,100 600,200" fill="#5b6b78"/>
                    <polygon points="480,100 458,124 480,118 500,124" fill="#f5f7fa"/>`;
        case 'dalles':
            return `<path d="M 380 190 L 400 120 L 470 110 L 520 125 L 560 190 Z" fill="#4d4a44" stroke="${dark}" stroke-width="2"/>
                    <path d="M 0 232 Q 300 216, 600 228 L 600 262 Q 300 250, 0 264 Z" fill="#3c6f86" opacity="0.9"/>`;
        case 'destination':
            return `<rect x="400" y="160" width="70" height="40" fill="#7d5531" stroke="#2a1a0e" stroke-width="2"/>
                    <polygon points="392,160 435,135 478,160" fill="#8c2d19"/>
                    <circle cx="520" cy="180" r="16" fill="#2f6b2a"/><circle cx="545" cy="186" r="13" fill="#367a30"/>
                    <circle cx="520" cy="176" r="2" fill="#dc2626"/><circle cx="548" cy="183" r="2" fill="#dc2626"/>`;
        default: return '';
    }
}

/**
 * Render a full scene.
 * opts: { region, weather, landmark, river, wagon(bool), moving(bool), yokes, night(bool) }
 */
function renderScene(opts = {}) {
    const uid = ++_sceneUid;
    const region = opts.region || 'prairie';
    const pal = REGION_PALETTE[region];
    const weather = opts.weather || 'Fair';
    const sky = weatherSky(weather, pal.sky);
    const snowy = weather === 'Snow' || weather === 'Blizzard';
    const stormy = weather === 'Rain' || weather === 'Thunderstorm';
    const night = !!opts.night;

    let farHills = '';
    if (region === 'rockies' || region === 'bluemtns' || region === 'cascades') {
        farHills = `<polygon points="0,170 80,110 150,150 240,80 330,150 420,100 520,150 600,95 600,200 0,200" fill="${pal.far}"/>`;
        if (pal.snowcaps || snowy) farHills += `<polygon points="240,80 222,98 240,94 258,98" fill="#f1f5f9"/><polygon points="420,100 404,116 420,112 436,116" fill="#f1f5f9"/><polygon points="600,95 586,110 600,106" fill="#f1f5f9"/>`;
    } else if (region === 'desert') {
        farHills = `<path d="M 0 175 L 60 150 L 160 150 L 190 135 L 300 135 L 330 155 L 600 150 L 600 200 L 0 200 Z" fill="${pal.far}"/>`;
    } else {
        farHills = `<path d="M 0 165 Q 120 140, 240 160 T 480 150 T 600 158 L 600 200 L 0 200 Z" fill="${pal.far}"/>`;
    }
    if (pal.hood) farHills += `<polygon points="70,170 140,55 210,170" fill="#7b8f9e"/><polygon points="140,55 118,86 132,82 140,92 150,82 162,86" fill="#f8fafc"/>`;

    let pines = '';
    if (pal.pines) {
        for (let i = 0; i < 12; i++) {
            const px = 20 + i * 52 + (i % 3) * 7;
            const h = 30 + (i % 4) * 8;
            pines += `<polygon points="${px},${192} ${px + 11},${192 - h} ${px + 22},${192}" fill="#1f3a2c"/>`;
        }
    }

    // Foreground grass tufts for parallax (drawn twice for seamless loop)
    let tufts = '';
    for (let i = 0; i < 24; i++) {
        const tx = i * 50 + (i % 3) * 13;
        const ty = 255 + (i % 4) * 9;
        tufts += `<path d="M ${tx} ${ty} l 4 -10 l 3 10 l 4 -8 l 3 8" stroke="${snowy ? '#e5e7eb' : pal.near}" stroke-width="2" fill="none"/>`;
    }

    const riverBand = opts.river ? `
        <path d="M 0 214 Q 300 200, 600 212 L 600 268 Q 300 258, 0 272 Z" fill="#2f6175"/>
        <path class="river-flow" d="M -600 232 Q -450 226, -300 232 T 0 232 T 300 232 T 600 232 T 900 232" stroke="#8fc1d1" stroke-width="2" fill="none" opacity="0.55"/>
        <path class="river-flow" style="animation-duration:5s" d="M -600 250 Q -450 244, -300 250 T 0 250 T 300 250 T 600 250 T 900 250" stroke="#b6dbe6" stroke-width="1.5" fill="none" opacity="0.4"/>` : '';

    const clouds = stormy || snowy
        ? `<g class="cloud-drift" opacity="0.85"><ellipse cx="120" cy="45" rx="110" ry="28" fill="#4b5560"/><ellipse cx="330" cy="35" rx="140" ry="30" fill="#59636d"/><ellipse cx="540" cy="50" rx="110" ry="26" fill="#4b5560"/></g>`
        : `<g class="cloud-drift" opacity="0.8"><ellipse cx="110" cy="52" rx="44" ry="11" fill="#fff8ec"/><ellipse cx="140" cy="45" rx="30" ry="10" fill="#fff8ec"/><ellipse cx="420" cy="38" rx="52" ry="12" fill="#fff8ec"/><ellipse cx="455" cy="31" rx="28" ry="9" fill="#fff8ec"/></g>`;

    const sun = night
        ? `<circle cx="500" cy="55" r="18" fill="#f5ebd7" opacity="0.9"/>`
        : (stormy || snowy ? '' : `<circle cx="505" cy="62" r="24" fill="#fff1c1" opacity="0.9"/><circle cx="505" cy="62" r="40" fill="#fff1c1" opacity="0.2"/>`);

    const wagonX = opts.wagonX ?? 175;
    const wagonY = opts.river ? 226 : 236;
    const wagon = opts.wagon === false ? '' : wagonSVG(wagonX, wagonY, 1, opts.yokes || 2);
    const lightning = weather === 'Thunderstorm' ? `<rect class="lightning" width="600" height="300" fill="#fff"/>` : '';
    const nightTint = night ? `<rect width="600" height="300" fill="#0b1026" opacity="0.55"/>` : '';
    const snowCover = snowy ? `<rect y="195" width="600" height="105" fill="#f1f5f9" opacity="0.55"/>` : '';

    return `
        <svg viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" class="w-full h-full ${opts.moving ? 'scene-moving' : ''}">
            <defs><linearGradient id="sky${uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${sky[0]}"/><stop offset="100%" stop-color="${sky[1]}"/></linearGradient></defs>
            <rect width="600" height="300" fill="url(#sky${uid})"/>
            ${sun}
            ${clouds}
            ${farHills}
            <path d="M 0 185 Q 150 172, 300 182 T 600 178 L 600 205 L 0 205 Z" fill="${pal.mid}"/>
            ${pines}
            ${landmarkSilhouette(opts.landmark, pal)}
            <rect y="198" width="600" height="102" fill="${pal.ground}"/>
            <path d="M 0 238 Q 300 228, 600 240 L 600 252 Q 300 242, 0 250 Z" fill="#00000022"/>
            ${riverBand}
            ${snowCover}
            <g class="parallax-near">${tufts}<g transform="translate(-1200,0)">${tufts}</g></g>
            ${wagon}
            ${nightTint}
            ${lightning}
        </svg>`;
}

// Special non-trail scenes
const SpecialScenes = {
    title: () => `
        <svg viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" class="w-full h-full scene-moving">
            <defs><linearGradient id="tsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2b1a3a"/><stop offset="55%" stop-color="#b8583a"/><stop offset="100%" stop-color="#f3b46a"/></linearGradient></defs>
            <rect width="600" height="300" fill="url(#tsky)"/>
            <circle cx="300" cy="205" r="70" fill="#ffd28a" opacity="0.9"/>
            <polygon points="0,210 90,150 170,190 260,130 340,195 430,140 520,185 600,150 600,300 0,300" fill="#3a2230"/>
            <rect y="220" width="600" height="80" fill="#24140f"/>
            ${wagonSVG(330, 250, 1.1, 2).replace('class="wagon-bob"', 'class="wagon-bob" fill-opacity="1"')}
            <text x="300" y="66" text-anchor="middle" font-family="Cinzel" font-weight="900" font-size="34" fill="#f5cb5c" stroke="#21150c" stroke-width="1" letter-spacing="4">FRONTIER DESTINY</text>
            <text x="300" y="92" text-anchor="middle" font-family="IM Fell English" font-style="italic" font-size="16" fill="#f5ebd7">The Oregon Trail · 1848</text>
        </svg>`,
    register: () => `
        <svg viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" class="w-full h-full">
            <rect width="600" height="300" fill="#21150c"/>
            <rect x="40" y="30" width="520" height="240" rx="4" fill="#382415" stroke="#c29b38" stroke-width="2"/>
            <rect x="140" y="55" width="320" height="190" fill="#efe1c3" stroke="#8e6c46" stroke-width="2"/>
            <line x1="300" y1="55" x2="300" y2="245" stroke="#8e6c46" stroke-width="2"/>
            ${[0, 1, 2, 3, 4, 5, 6].map(i => `<line x1="160" y1="${85 + i * 22}" x2="285" y2="${85 + i * 22}" stroke="#b8a27d"/><line x1="315" y1="${85 + i * 22}" x2="440" y2="${85 + i * 22}" stroke="#b8a27d"/>`).join('')}
            <path d="M 470 80 L 520 40 L 525 45 L 476 86 Z" fill="#f5ebd7" stroke="#21150c"/>
            <text x="300" y="285" text-anchor="middle" font-family="Cinzel" font-size="13" fill="#f5ebd7" letter-spacing="3">EXPEDITION ENLISTMENT REGISTER</text>
        </svg>`,
    calendar: () => `
        <svg viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" class="w-full h-full">
            <defs><linearGradient id="csky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#5f8fb8"/><stop offset="100%" stop-color="#f2d6a2"/></linearGradient></defs>
            <rect width="600" height="300" fill="url(#csky)"/>
            <path d="M 0 190 Q 300 160, 600 185 L 600 300 L 0 300 Z" fill="#4d6a2b"/>
            <rect x="200" y="50" width="200" height="190" rx="6" fill="#f5ebd7" stroke="#21150c" stroke-width="3"/>
            <rect x="200" y="50" width="200" height="40" rx="6" fill="#7a1f1d"/>
            <text x="300" y="77" text-anchor="middle" font-family="Cinzel" font-size="18" font-weight="bold" fill="#f5ebd7">ANNO 1848</text>
            ${Array.from({ length: 20 }, (_, i) => `<rect x="${215 + (i % 5) * 35}" y="${100 + Math.floor(i / 5) * 33}" width="28" height="26" fill="${i === 7 ? '#c29b38' : '#e3d3b6'}" stroke="#8e6c46"/>`).join('')}
        </svg>`,
    store: () => `
        <svg viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" class="w-full h-full">
            <rect width="600" height="300" fill="#2a1a0e"/>
            <rect y="230" width="600" height="70" fill="#4a2e18"/>
            ${[0, 1, 2].map(r => `<rect x="30" y="${50 + r * 58}" width="540" height="8" fill="#6b4423"/>`).join('')}
            ${Array.from({ length: 14 }, (_, i) => `<rect x="${45 + i * 37}" y="${22}" width="26" height="28" rx="3" fill="${['#7a1f1d', '#c29b38', '#2a4d32', '#223c52'][i % 4]}"/>`).join('')}
            ${Array.from({ length: 10 }, (_, i) => `<ellipse cx="${60 + i * 52}" cy="${96}" rx="18" ry="14" fill="#dfcaa7" stroke="#8e6c46"/>`).join('')}
            ${Array.from({ length: 8 }, (_, i) => `<rect x="${50 + i * 66}" y="${128}" width="44" height="38" fill="#8c5a32" stroke="#3b2513"/>`).join('')}
            <rect x="90" y="190" width="420" height="50" fill="#6b4423" stroke="#2a1a0e" stroke-width="3"/>
            <rect x="260" y="176" width="40" height="14" fill="#c29b38"/>
            <circle cx="470" cy="180" r="12" fill="#3b2513"/><circle cx="440" cy="183" r="9" fill="#5a3a22"/>
            <text x="300" y="222" text-anchor="middle" font-family="Cinzel" font-size="14" font-weight="bold" fill="#f5cb5c" letter-spacing="2">PRATT &amp; SONS OUTFITTERS</text>
        </svg>`
};

function endingSceneSVG(kind) {
    const base = (sky1, sky2, ground, extra) => `
        <svg viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" class="w-full h-full">
            <defs><linearGradient id="end${kind}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${sky1}"/><stop offset="100%" stop-color="${sky2}"/></linearGradient></defs>
            <rect width="600" height="300" fill="url(#end${kind})"/>
            <path d="M 0 180 Q 300 150, 600 175 L 600 300 L 0 300 Z" fill="${ground}"/>
            ${extra}
        </svg>`;
    switch (kind) {
        case 'homestead': return base('#4a7090', '#d5e8ca', '#2d5e27', `
            <polygon points="60,180 140,60 220,180" fill="#7b8f9e"/><polygon points="140,60 120,90 140,84 160,90" fill="#f8fafc"/>
            <rect x="300" y="150" width="130" height="70" fill="#694026" stroke="#2b1a0e" stroke-width="2"/>
            <polygon points="285,150 365,108 445,150" fill="#8c2d19"/><rect x="352" y="182" width="24" height="38" fill="#2b1a0e"/>
            <rect x="312" y="164" width="22" height="18" fill="#fde68a"/><rect x="396" y="164" width="22" height="18" fill="#fde68a"/>
            ${[0, 1, 2, 3, 4].map(i => `<circle cx="${470 + i * 26}" cy="${200 - (i % 2) * 8}" r="13" fill="#2f6b2a"/><circle cx="${468 + i * 26}" cy="${196 - (i % 2) * 8}" r="2" fill="#dc2626"/>`).join('')}
            ${[0, 1, 2, 3, 4, 5].map(i => `<path d="M 20 ${235 + i * 10} L 260 ${228 + i * 10}" stroke="#c9a94a" stroke-width="3"/>`).join('')}`);
        case 'town': return base('#3d5d73', '#e8dfc4', '#3a5a4c', `
            ${[0, 1, 2, 3].map(i => `<rect x="${80 + i * 120}" y="${140 - (i % 2) * 15}" width="90" height="${80 + (i % 2) * 15}" fill="${['#dfcaa7', '#8c5a32', '#efe3c6', '#7d5531'][i]}" stroke="#1d1107" stroke-width="2"/>`).join('')}
            <polygon points="320,125 365,70 410,125" fill="#7a1f1d"/><rect x="358" y="48" width="14" height="24" fill="#dfcaa7"/>
            <text x="300" y="250" text-anchor="middle" font-family="Cinzel" font-size="14" fill="#f5ebd7">SCHOOL · MILL · MEETING HALL</text>`);
        case 'cross': return base('#1c242b', '#4a5560', '#141a1f', `
            <circle cx="470" cy="70" r="20" fill="#e5e7eb" opacity="0.8"/>
            <rect x="260" y="160" width="60" height="45" fill="#3b2513"/><polygon points="252,160 290,135 328,160" fill="#2a1a0e"/>
            ${[0, 1, 2].map(i => `<g transform="translate(${120 + i * 40},0)"><line x1="0" y1="205" x2="0" y2="240" stroke="#f5ebd7" stroke-width="4"/><line x1="-9" y1="216" x2="9" y2="216" stroke="#f5ebd7" stroke-width="4"/></g>`).join('')}`);
        case 'snow': return base('#0f141c', '#4a5d6e', '#d9e1e8', `
            <polygon points="0,200 150,90 300,200 450,70 600,200 600,300 0,300" fill="#4a5d6e"/>
            <rect y="210" width="600" height="90" fill="#e5ebf0"/>
            <path d="M 260 230 Q 300 196, 340 230 Z" fill="#cfd8df" stroke="#9aa7b3"/>
            <circle cx="350" cy="236" r="9" fill="none" stroke="#6b7280" stroke-width="3"/>`);
        case 'stranded': return base('#322822', '#a27b5a', '#4d3a2f', `
            <rect x="250" y="190" width="90" height="20" fill="#5a3a22" transform="rotate(-6 295 200)"/>
            <path d="M 254 192 Q 260 160, 296 158" stroke="#efe3c6" stroke-width="3" fill="none"/>
            <circle cx="350" cy="214" r="14" fill="none" stroke="#2a1a0e" stroke-width="3"/>
            <path d="M 420 210 Q 440 150, 470 210 Z" fill="#c9a77a"/><path d="M 470 210 Q 490 160, 515 210 Z" fill="#b38f62"/>`);
        case 'post': return base('#2a1f16', '#9b6a3d', '#5a3f25', `
            <rect x="180" y="130" width="240" height="90" fill="#523924" stroke="#1c1109" stroke-width="3"/>
            <rect x="170" y="120" width="260" height="14" fill="#3b2513"/>
            <text x="300" y="165" text-anchor="middle" font-family="Cinzel" font-size="14" font-weight="bold" fill="#f5cb5c">GENERAL TRADE</text>
            ${[0, 1, 2, 3].map(i => `<rect x="${200 + i * 50}" y="185" width="30" height="24" fill="#c29b38" stroke="#5c440d"/>`).join('')}`);
        case 'gold': return base('#3b2d1d', '#d9a35a', '#694f2d', `
            <path d="M 0 230 Q 300 210, 600 232 L 600 260 Q 300 240, 0 262 Z" fill="#4b8aa0"/>
            <ellipse cx="300" cy="226" rx="40" ry="10" fill="#3b2513"/>
            ${[0, 1, 2, 3, 4, 5].map(i => `<circle cx="${285 + (i % 3) * 12}" cy="${222 + Math.floor(i / 3) * 5}" r="3" fill="#f5cb5c"/>`).join('')}
            <polygon points="400,180 450,110 500,180" fill="#5a4330"/>`);
        case 'moon': return base('#0d1117', '#26324a', '#1a2230', `
            <circle cx="300" cy="100" r="45" fill="#f5ebd7" opacity="0.85"/>
            <polygon points="0,200 100,120 200,190 300,100 400,190 500,130 600,200 600,300 0,300" fill="#1b2433"/>
            <circle cx="300" cy="240" r="10" fill="#f97316"/><circle cx="300" cy="236" r="5" fill="#fde047"/>`);
        default: return base('#4a7090', '#d5e8ca', '#2d5e27', '');
    }
}
