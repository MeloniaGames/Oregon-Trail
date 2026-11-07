/* =========================================================================
   WEB AUDIO SYNTHESIZER — no external sound files needed
   ========================================================================= */
class FrontierAudioEngine {
    constructor() {
        this.ctx = null;
        this.muted = localStorage.getItem('fd-muted') === '1';
    }
    init() {
        if (!this.ctx) {
            const AC = window.AudioContext || window.webkitAudioContext;
            if (!AC) return false;
            this.ctx = new AC();
        }
        if (this.ctx.state === 'suspended') this.ctx.resume();
        return true;
    }
    toggleMute() {
        this.muted = !this.muted;
        localStorage.setItem('fd-muted', this.muted ? '1' : '0');
        this.syncIcon();
        if (!this.muted) this.click();
    }
    syncIcon() {
        const btn = document.getElementById('btn-audio');
        if (!btn) return;
        btn.innerHTML = `<i data-lucide="${this.muted ? 'volume-x' : 'volume-2'}" class="w-4 h-4"></i>`;
        if (window.lucide) lucide.createIcons();
    }
    _tone(freq, dur, type = 'sine', vol = 0.12, delay = 0, slideTo = null) {
        if (this.muted || !this.init()) return;
        try {
            const t = this.ctx.currentTime + delay;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, t);
            if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
            gain.gain.setValueAtTime(vol, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + dur);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(t);
            osc.stop(t + dur);
        } catch (e) { /* audio unavailable */ }
    }
    _noise(dur, filterType, freq, vol = 0.5, decay = 0.3) {
        if (this.muted || !this.init()) return;
        try {
            const size = Math.floor(this.ctx.sampleRate * dur);
            const buffer = this.ctx.createBuffer(1, size, this.ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < size; i++) data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (size * decay));
            const src = this.ctx.createBufferSource();
            src.buffer = buffer;
            const filter = this.ctx.createBiquadFilter();
            filter.type = filterType;
            filter.frequency.value = freq;
            const gain = this.ctx.createGain();
            gain.gain.value = vol;
            src.connect(filter);
            filter.connect(gain);
            gain.connect(this.ctx.destination);
            src.start();
        } catch (e) { /* audio unavailable */ }
    }
    click() { this._tone(320, 0.08, 'triangle', 0.1); }
    pageTurn() { this._noise(0.12, 'lowpass', 1100, 0.6, 0.3); }
    wagonCreak() { this._tone(90, 0.22, 'sawtooth', 0.06, 0, 140); }
    gunshot() { this._noise(0.4, 'bandpass', 750, 1.2, 0.15); }
    miss() { this._tone(900, 0.15, 'sine', 0.04, 0.05, 300); }
    hit() { this._tone(180, 0.18, 'square', 0.06, 0.05, 90); }
    coin() { this._tone(1320, 0.09, 'square', 0.05); this._tone(1760, 0.14, 'square', 0.05, 0.08); }
    error() { this._tone(160, 0.18, 'square', 0.06); this._tone(120, 0.22, 'square', 0.06, 0.12); }
    splash() { this._noise(0.9, 'lowpass', 600, 0.9, 0.4); }
    thunder() { this._noise(1.6, 'lowpass', 180, 1.4, 0.5); }
    fanfare() { [261.6, 329.6, 392.0, 523.25].forEach((f, i) => this._tone(f, 0.35, 'sine', 0.16, i * 0.12)); }
    triumph() { [392, 523.25, 659.25, 783.99, 1046.5].forEach((f, i) => this._tone(f, 0.5, 'triangle', 0.12, i * 0.16)); }
    dirge() { [196.0, 185.0, 174.6, 164.8].forEach((f, i) => this._tone(f, 0.45, 'sawtooth', 0.08, i * 0.2)); }
    badge() { [659.25, 830.6, 987.8].forEach((f, i) => this._tone(f, 0.25, 'triangle', 0.1, i * 0.08)); }
}
const audio = new FrontierAudioEngine();
