// motion.js: pure functions of time for seek(t) films.
// Every value is computed from t alone (no state, no timers), so any frame renders the same
// whether you play to it or jump to it. Loads as a classic <script> (works from file://) or
// with require().
(function (root) {
  "use strict";

  const clamp = (x, lo = 0, hi = 1) => (x < lo ? lo : x > hi ? hi : x);

  /**
   * Position of a damped spring released at t = 0, travelling from 0 to 1.
   * stiffness and damping follow the usual mass = 1 convention. Below critical damping it
   * overshoots; at or above, it settles without crossing 1.
   */
  function spring(t, stiffness = 170, damping = 26) {
    if (t <= 0) return 0;
    const omega = Math.sqrt(stiffness);          // natural frequency
    const zeta = damping / (2 * omega);          // damping ratio
    if (zeta >= 1) {
      // critically damped (over-damped springs are treated as critical: they read the same)
      return 1 - (1 + omega * t) * Math.exp(-omega * t);
    }
    const omegaD = omega * Math.sqrt(1 - zeta * zeta);
    const decay = Math.exp(-zeta * omega * t);
    return 1 - decay * (Math.cos(omegaD * t) + (zeta * omega / omegaD) * Math.sin(omegaD * t));
  }

  /**
   * Presets as [stiffness, damping]. Pick one per piece and keep it: one motion personality.
   *   calm     no overshoot, settles in about half a second (brand pieces, type, logos)
   *   snappy   about 1% overshoot, quick (product UI: buttons, toggles, indicators)
   *   standard no overshoot (cards, containers, camera)
   *   heavy    slow, no overshoot (big type, lockups, large objects)
   *   playful  visible overshoot (mascots and stickers only; never in a calm piece)
   */
  const SPRINGS = {
    calm: [170, 26.1],
    snappy: [320, 30],
    standard: [170, 26],
    heavy: [110, 21],
    playful: [220, 14],
  };
  const preset = (name) => SPRINGS[name] || SPRINGS.standard;

  /**
   * A value that changes several times. keys = [[time, value], ...] in time order.
   * Each change adds its own spring, so a new target never restarts the motion: the value stays
   * continuous and can still be seeked to any t.
   */
  function track(t, keys, stiffness = 170, damping = 26) {
    let value = keys[0][1];
    for (let i = 1; i < keys.length; i++) {
      const [at, target] = keys[i];
      value += (target - keys[i - 1][1]) * spring(t - at, stiffness, damping);
    }
    return value;
  }

  /** A stretchy indicator (tabs, sliders): the leading edge moves on a stiffer spring than the trailing one. */
  function indicator(t, stops, width = 120) {
    const a = track(t, stops, 320, 30);
    const b = track(t, stops, 140, 22);
    return { left: Math.min(a, b), right: Math.max(a, b) + width };
  }

  /** Opacity for text inside a morphing container: it arrives after the morph begins and leaves before the next one. */
  function swapAlpha(t, morphStart, nextMorph, fadeIn = 0.12, fadeOut = 0.1, lag = 0.08) {
    const arriving = clamp((t - morphStart - lag) / fadeIn);
    const leaving = clamp((nextMorph - fadeOut - t) / fadeOut);
    return Math.min(arriving, leaving);
  }

  /** Time inside a loop of length dur, for any t (negative t included). */
  const loopT = (t, dur) => ((t % dur) + dur) % dur;

  /** A seeded random generator returning [0, 1). Films never call Math.random. */
  function rng(seed) {
    let s = seed >>> 0;
    return function next() {
      s = (s + 0x6d2b79f5) >>> 0;
      let x = s;
      x = Math.imul(x ^ (x >>> 15), x | 1);
      x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
      return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
    };
  }

  /**
   * Stop-motion "boil": a small offset that jumps every `hold` frames and is identical within a
   * hold. Use a different id per object so they don't move together.
   */
  function boil(t, id, fps = 24, hold = 3, amount = 1.5) {
    const step = Math.floor((t * fps) / hold);
    const r = rng(id * 7919 + step * 104729);
    return [(r() * 2 - 1) * amount, (r() * 2 - 1) * amount];
  }

  const api = { clamp, spring, SPRINGS, preset, track, indicator, swapAlpha, loopT, rng, boil };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else Object.assign(root, api);
})(typeof window !== "undefined" ? window : globalThis);
