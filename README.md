# Your Chief Brand Officer

A senior brand and motion lead for your coding agent (Claude Code, Codex, Cursor and others that
read skills): it owns how everything you ship looks, moves and sounds.

One skill sits on top of the best specialist skills. It gives them a shared canon and grounds every
piece in your brand, so the work stops looking like everyone else's. It briefs before it builds,
routes each job to the right specialist, renders, looks at its own frames, and critiques before
showing you anything.

## Install

```sh
npx skills add ps2802/chief-brand-officer
```

Then, optionally, the specialists it routes to:

```sh
curl -fsSL https://raw.githubusercontent.com/ps2802/chief-brand-officer/main/install-companions.sh -o install-companions.sh
# read it, then:
sh install-companions.sh
```

Every companion is optional. Without one, the CBO does that work itself to the same canon.

## What you get

| | |
|---|---|
| `SKILL.md` | The operating order: intake → canon → brand → brief → route → render → critique. One recommendation, not a menu. |
| `INTAKE.md` | The short interview it opens with (one message, defaults for every question), then it executes without check-ins. |
| `CANON.md` | The rules, each with its source: anti-slop, brand, motion, type, film, sound, accessibility, critique. |
| `BRAND.md` | Your brand system: palette with a job per colour, type, motifs, motion personality, cast bible, voice. Fill it once, or let the CBO fill it from your site. |
| `prompts/` | A director's brief for flagship films and a critique pass to run after every render. |
| `research/` | What reads as "AI slop" in 2026, in visuals and in copy, with sources. |
| `kit/` | A deterministic film engine: every frame is a pure function of time; springs, seeded noise, a renderer, synthesized SFX, beat detection, and visual checks. |

## Companions it routes to

| For | Skill | Repo |
|---|---|---|
| Video and film | hyperframes | `npx hyperframes skills` |
| Timing and easing | motion-design, motion-director | richtabor/agent-skills, LottieFiles/motion-design-skill |
| Web animation | gsap-* | greensock/gsap-skills |
| Interface polish | emil-design-eng, review-animations, animation-vocabulary | emilkowalski/skills |
| Visual quality | impeccable, high-end-visual-design, design-taste-frontend, brandkit | pbakaus/impeccable, Leonxlnx/taste-skill |
| Not looking AI-made | no-ai-slop | petergyang/no-ai-slop |
| Words | humanize, x-writing | richtabor/agent-skills |

## Use

Ask for brand or motion work in plain words: "make a 45-second launch film for our sign-up flow",
"this hero feels generic, fix it", "turn this reference into our style". The CBO reads the canon and
your brand file first, asks only what it must, and comes back with something it has watched.

To teach it, share an article, thread or prompt and say "learn this". It writes a short digest,
adds only the actionable rules to the canon with credit, and tells you if a new rule conflicts with
an old one.

## Credits

The canon distils public work by Meaghan Choi (via @0xCarnagee), the movez "motion design with Opus
5.5" course, AI in Public, Anthropic's frontend-design guidance, Adrian Krebs, and others cited
inline. Nothing paid is reproduced; each rule links back to where it came from. Built while making
the launch film and site for [Pantheon](https://www.joinpantheon.network).

## License

MIT
