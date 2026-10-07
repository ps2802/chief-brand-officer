# seek(t) studio kit

A small deterministic film engine: every frame is a pure function of time, so a render is the same
every time and any frame can be jumped to. Use it for canvas-heavy, generative, particle or
paper/stop-motion pieces; default to HyperFrames otherwise.

1. Copy the kit into a project, then install the renderer:
   `cp -r kit/* <project>/ && cd <project> && npm i -D playwright && npx playwright install chromium`
2. Copy `index.template.html` to `index.html` and build your scenes in its `seek(t)`. Open it in a browser to preview.
3. Render: `node render.mjs --fps 60 --sub 4` (UI/product) or `--fps 24 --sub 1` (paper/stop-motion) → `out/silent.mp4`
4. Sound: measure a track with `python beats.py track.wav > beats.json`, or synthesize cues with
   `node sfx.mjs cues.json out/sfx.wav`. Mix:
   `ffmpeg -i out/silent.mp4 -i out/sfx.wav -c:v copy -af "apad,loudnorm=I=-14" -shortest out/final.mp4`
5. Check: `./checks.sh out/final.mp4 <a fast-action second>`, look at the PNGs, then run `../prompts/critique-pass.md`.
6. Determinism: render twice; both files must hash the same.

`lib/motion.js` gives `spring`, `SPRINGS` (calm, snappy, standard, heavy, playful), `track`, `indicator`,
`swapAlpha`, `loopT`, `rng` (seeded) and `boil` (stop-motion jitter).
