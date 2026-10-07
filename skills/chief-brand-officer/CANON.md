# Canon

The rules this lead works to. Each is an imperative with its source. Add your own with the "Absorbing a new source" steps in `SKILL.md`; newer rules override older ones only after the conflict is named and settled.

Sources are credited by name and link; nothing paid is reproduced here. `research/` holds our own write-ups.

## Anti-slop (run before anything ships)

- **The tell is convergence, not any one choice.** Every shared default becomes a fingerprint within months. The 2026 "tasteful" look (cream, rust accent, big italic serif, tracked-caps eyebrows, 01/02/03 numbering, ticker bars) is now the strongest tell. Make decisions only this brand would make, and be able to say why. [source: research/visual-slop]
- **Never use the four-point sparkle (✦)** in UI, illustration or film. It is the industry's "AI" glyph. Use the brand's own marks. [source: research/visual-slop]
- **Narrate films with a real voice when you can.** Stock TTS voices are recognised instantly. With no recording, use the most natural synthetic voice available, never the first default, and never reuse one clip twice in a piece. Fit each line inside its scene; lengthen the scene rather than speed the voice past +5%. [source: house practice]
- **No placeholder companies or personas** (Acme, Northwind, Contoso, Globex). Keep a one-page cast bible in `BRAND.md` (name, role, tool, city) and use it everywhere. Label composites as composites. Real usage beats any composite. [source: research/copy-slop]
- **Every number links to its primary source and is quoted exactly.** Prefer small, true, dated numbers from your own usage. No invented metrics, no "+ more", no "trusted by" walls. [source: research/copy-slop]
- **Get history and facts right.** Use real positions and real procedures, or don't depict them; someone will check. [source: house practice]
- **No template chrome:** no fake window dots, no 9:41 phones, no sticker scatter, no decorative section codes, no eyebrow above every heading. Vary section rhythm and headline structure; avoid the same two-beat formula on every section. [source: research/visual-slop]
- **Motion:** one orchestrated moment, not the same fade-up on every section. Nothing animates without a reason. Hold the final frame. Avoid "animated slides": one continuous visual idea that transforms. [source: research/visual-slop]
- **Copy tells to strip:** "it's not X, it's Y"; lists of three near-synonyms; em-dash punch; "-ing" significance tails; "serves as"; puffery (seamless, unlock, supercharge); dramatic fragments ("The X? A Y."); one keyword repeated everywhere. [source: research/copy-slop]
- **Signals that read as human:** specifics only you could say (real file names, PR numbers, times), real product screens, real people, dated changelogs, linked sources, an honest "in development" list, imperfection that comes from process rather than a filter. [source: research/visual-slop, research/copy-slop]
- **Before shipping, run a hostile review:** a fresh agent with no stake audits the work as a skeptical Hacker News commenter (desktop and phone screens, film frames, audio, all copy), ranked by credibility damage. Fix the critical and high items. [source: house practice]

## Brand & identity

- **Ground every piece in real assets.** For a product, visit the URL and save the real logo, screenshots, colours and fonts to `./assets`, and list them before animating. Never redraw product UI from imagination: crop and animate the real thing. [source: movez, "12-step course: motion design with Opus 5.5", movez.substack.com]
- **One display face, one UI face, one accent colour per shot.** Supporting colours stay supporting. [source: movez]
- **Keep one studio folder per brand** (assets, brand file, renders) so the renderer, audio and export pipeline get reused. [source: movez; AI in Public, "How to create motion graphics with Claude Opus 5.5", aiinpublic.com]

## Motion & choreography

- **Name the emotion, then pick one motion personality per piece** (calm, snappy, heavy or playful; see `kit/lib/motion.js`). [source: house practice]
- **Three layers in every shot:** primary, secondary (50–150 ms behind) and ambient. [source: house practice]
- **Entrances ease out, exits ease in, on-screen moves ease in-out.** Never linear for spatial motion. Exits run 65–75% of the entrance duration. [source: house practice]
- **Use closed-form springs for anything with mass,** not fixed curves: `spring`, `SPRINGS` and `track` in `kit/lib/motion.js`. [source: movez]
- **No overshoot on type, logos or brand marks.** A hair of overshoot is allowed only on product-UI elements (buttons, toggles, indicators). [source: movez, adapted]
- **For a value with several targets, sum one spring per change (`track`)** and never restart a spring. Stretchy indicators: stiffer leading edge than trailing edge. [source: movez]
- **Text inside a morphing container enters after the morph starts and leaves before the next** (`swapAlpha`). [source: movez]
- **Something new every 2–4 seconds;** hook in the first 2 seconds. [source: movez]
- **No hard cuts in brand films:** every transition is an object that becomes the next scene. [source: house practice]
- **Banned looks:** a centred title on a gradient, everything fading in, corner labels, frame borders, glow or gradients on UI chrome, generic particle bursts, bouncy easing. [source: movez]
- **Loops:** the last frame equals the first, cursor position and velocity included. [source: movez]

## Typography & layout

- **Never put `will-change` on anything the camera scales** (it blurs text). [source: movez]
- **Every frame must read at 360 px wide.** [source: movez]
- **Lay scenes out against a layout function, not fixed pixels.** Render 9:16, 1:1 and 16:9 natively from one timeline; never crop 16:9 to vertical. [source: movez]
- **Accessibility in every film:** contrast at least 4.5:1, captions shipped as `.srt`, colour never the only signal, no flashes above three per second, and a reduced-motion cut with the same sequence of ideas. [source: Meaghan Choi's design principles as compiled by @0xCarnagee on X, Oct 2026]
- **On-screen words are anchors:** two lines at most, short lines, plain words before jargon, one name per thing. [source: Meaghan Choi's design principles as compiled by @0xCarnagee on X, Oct 2026]
- **Load fonts explicitly before rendering;** canvas text does not trigger a load. A fallback face in a render is a defect. [source: house practice]

## Film & video

- **Explainers run one arc:** open on the thing people get wrong, as an image, not a title card; build the smallest correct picture of how it works, one element per beat; prove it on a real case; change one variable and show what follows; close on the opening image, now read correctly, plus one next step. [source: Meaghan Choi's design principles as compiled by @0xCarnagee on X, Oct 2026]
- **Discovery first:** write the one question the film answers in the viewer's words, keep a cut list of true-but-unneeded facts, and use a metaphor only when it makes the idea more accurate. [source: Meaghan Choi's design principles as compiled by @0xCarnagee on X, Oct 2026]
- **Each scene names what it teaches and how you'd know it landed;** a scene that teaches nothing is cut. Keep objects alive between scenes and transform them rather than replacing them. [source: Meaghan Choi's design principles as compiled by @0xCarnagee on X, Oct 2026]
- **Go wide, then decide:** three or four directions side by side in one page that doubles as the decision log. [source: Meaghan Choi's design principles as compiled by @0xCarnagee on X, Oct 2026]
- **Every film is a pure function of time:** no CSS transitions, timers or carried state in render mode, and seeded noise only. Rendering twice gives byte-identical files. [source: movez]
- **Check that seeking works from anywhere:** the visible frame must be the same whether you play to t or jump to t. [source: house practice]
- **To render an existing CSS or WAAPI piece deterministically,** inject a virtual clock (`requestAnimationFrame`, timers, `Date` and animations driven by a `seek(t)`) rather than rewriting it. [source: house practice]
- **Each house look is a style pack:** engine, animation guide and reference stills, reused as one unit. New looks get their own pack. [source: house practice]
- **The prompt is 10%, the harness is 90%.** Never start from a bare one-liner: give a brand, a reference, a render engine and the critique loop. One-line "showreel" prompts produce reels that all rhyme ("brief contagion"). [source: AI in Public; movez]
- **Name a style or feed a reference rather than describe a vibe.** From a reference video, extract frames and write a style guide (hex palette, type, shot lengths, transitions, camera, grain, text in/out) and a shot list. Take the grammar, never the content. [source: movez]
- **For product films, write the state list, not the vibe:** inputs, direction, beats, build rules, gotchas. A cursor drives every change. [source: movez]
- **Engine:** HyperFrames by default; this skill's `kit/` for generative, particle, paper or canvas-heavy pieces. Always name the engine in the brief. [source: movez, adapted]
- **Frame rate:** 24 fps for paper or stop-motion looks; 60 fps with blended subframes for UI and product reels. [source: movez, adapted]
- **Sound is designed, not added.** With a track, measure it (`kit/beats.py`): state changes on beats, big moments on downbeats. With no track, synthesize score and SFX on the same timeline (`kit/sfx.mjs`). Master to −14 LUFS; duck the music under voice. [source: movez]
- **Long or flagship films start from the director's brief** (`prompts/director-brief.md`) and a gated workflow: plan, stills, animatic, full, polish, audio, render. [source: house practice]
- **For multi-chapter films, write the animation guide first,** then split chapters across sub-agents so they code in one style; scale them in waves with a review between. [source: house practice]
- **API keys live in `.env` and are referenced by name,** never pasted into prompts. [source: movez]

- **Thread one object through the whole film:** one element is on screen from the first frame to the last, and each scene is a new state of it. Different shapes become states of one shape, keeping position and velocity through every change. [source: @alexwtlf on X, "one orange dot" Opus 5.5 showreel, Oct 2026]
- **If a graph shows a motion, draw it from the same function that moves the object.** Two sources for one motion always feel fake. [source: @alexwtlf on X, "one orange dot" Opus 5.5 showreel, Oct 2026]
- **Transform words letter by letter;** anything attached to a letter stays with it until its own beat. A shape that fills the frame scales past all four corners. [source: @alexwtlf on X, "one orange dot" Opus 5.5 showreel, Oct 2026]
- **Check pacing with one still per beat** before the full export. [source: @alexwtlf on X, "one orange dot" Opus 5.5 showreel, Oct 2026]

- **One world, one camera:** place scenes side by side in a single world and move a camera with position and log-space zoom, so pans travel between spaces. Never zoom in and straight back out. [source: X post, "every frame in code from one prompt" 22 s square product loop, Oct 2026]
- **Morph and camera on one curve:** a shape glide and the camera move share the same timing curve so they read as one motion; old content dissolves during the second half of the glide. One gesture per scene. [source: X post, "every frame in code from one prompt" 22 s square product loop, Oct 2026]
- **Goo and floods:** splits and merges use blur plus an alpha threshold on an offscreen layer; a flood grows as a circle from the point that caused it to the farthest corner, with the new colour underneath. [source: X post, "every frame in code from one prompt" 22 s square product loop, Oct 2026]
- **Music in the next room:** low-pass the track before the payoff and open it on the drop. Place each sound effect at its measured peak. Licence every track and effect for commercial use. [source: X post, "every frame in code from one prompt" 22 s square product loop, Oct 2026]
- **Motion blur where it's fastest** (more subframes on a fast pan), then scan every frame for single-frame jumps. [source: X post, "every frame in code from one prompt" 22 s square product loop, Oct 2026]
- **Hand-offs never pop:** a drawing hands over only after it has fully landed; a cursor stays attached to what it drags, even while it stretches; counters swap whole values instead of ticking every frame. [source: X post, "every frame in code from one prompt" 22 s square product loop, Oct 2026]

- **End every film brief with a numbered list of locks:** what must be true in every frame, sized against other objects rather than pixels, with left/right geometry fixed for the whole film. [source: patterns across creators in yihui-dev/awesome-opus5-5-videos, Oct 2026]
- **Write a camera whitelist with numbers** (a small punch-in only on beats, slow eased pushes, a lens per shot) and ban everything else, including random drift. If moves feel quick, halve them. [source: patterns across creators in yihui-dev/awesome-opus5-5-videos, Oct 2026]
- **Let type be the transition:** reveal the next scene through the outgoing word's own letter shapes. [source: patterns across creators in yihui-dev/awesome-opus5-5-videos, Oct 2026]
- **Never morph points between unrelated shapes;** bridge them with an occluder or a shared edge, and reset a loop while the frame is fully covered. [source: patterns across creators in yihui-dev/awesome-opus5-5-videos, Oct 2026]
- **Treat impact effects as envelopes:** they peak on the hit, are gone by the next beat, and are capped (no pure-white flashes, small colour offsets, shake settled within half a second). [source: patterns across creators in yihui-dev/awesome-opus5-5-videos, Oct 2026]
- **Map the track's energy before animating** and scale intensity by section: quietest scene in the breakdown, biggest move on the drop. [source: patterns across creators in yihui-dev/awesome-opus5-5-videos, Oct 2026]
- **If the picture is a simulation or a machine, compute its sound from the same state** that draws it. [source: patterns across creators in yihui-dev/awesome-opus5-5-videos, Oct 2026]
- **Before depicting anything real, write a sourced facts file** with a confidence for each fact, flag disagreements instead of guessing, and build from the file. [source: patterns across creators in yihui-dev/awesome-opus5-5-videos, Oct 2026]
- **Animate continuously, then quantize per layer** (pixel grid, cut-outs on twos) while the camera stays at full rate. [source: patterns across creators in yihui-dev/awesome-opus5-5-videos, Oct 2026]
- **Run the final checks on the encoded file,** not on browser screenshots: decode frames, check spacing and duration, re-measure loudness after encoding. [source: patterns across creators in yihui-dev/awesome-opus5-5-videos, Oct 2026]
- **Make cutdowns separate scene lists from one codebase,** with captions measured in the real font and kept inside each platform's interface-safe zone. [source: patterns across creators in yihui-dev/awesome-opus5-5-videos, Oct 2026]
- **Name the reaction you want** in one line, and list reject-if criteria the model applies to its own frames (looks like a template, a slide deck, screenshots sliding). [source: patterns across creators in yihui-dev/awesome-opus5-5-videos, Oct 2026]

- **Ship the decisions, not just the clip:** keep a film as data (scenes, layers, keyframes, springs) rendered by one pure function of the project and time, with the same renderer for preview and export, so it can be improved later without starting over. [source: @0xCodila's motion-studio playbook, after Nate Parrott's public design work, Oct 2026]
- **Turn repeated corrections into controls:** when the same note on timing, damping, position or type comes up twice, give the person a slider or handle in a small local editor instead of describing it again. People keep the visual direction; the agent builds the tools. [source: @0xCodila's motion-studio playbook, after Nate Parrott's public design work, Oct 2026]

## Process & critique
- **Review with three questions before designing and before shipping:** who is this for, what are we communicating, and does it need to be there at all? Shape before polish; restraint is taste. [source: Meaghan Choi's design principles as compiled by @0xCarnagee on X, Oct 2026]

- **Never show a film you haven't watched.** After every render run `kit/checks.sh` (contact sheet, action strip, phone sheet, loop seam, loudness) and look at the images. [source: movez]
- **Before a full render, run a scene check:** report JS errors and the visible text at key timestamps, and compare it with the script and captions. [source: house practice]
- **Critique as a harsh director, not a proud author** (`prompts/critique-pass.md`). Score hook, phone readability, motion, variety, composition, brand accuracy and sound sync from 1 to 10; fix the three worst with timestamps; repeat until all are 8+. [source: movez, adapted]
- **Self-scores never replace the executable checks:** determinism, loop seam, measured loudness and font load are hard gates. [source: house practice]
- **Hunt specifically for** text overlapping during swaps, sliding instead of easing, corner labels and borders, centred-on-gradient shots, blurry scaled text, dead beats, and a stutter at the loop seam. [source: movez]
