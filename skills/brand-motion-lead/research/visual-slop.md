# What reads as "AI slop" in web, illustration, motion and launch video (late 2025 to Oct 2026)

Research date: 2 Oct 2026. Method: web search and fetch across design blogs, X posts (where they could be fetched), Hacker News threads (full comments pulled via the Algolia API), GitHub detector projects, and press (New Yorker, NN/g, The Conversation).

**Limits:**
- Reddit could not be reached (the fetcher's user agent is blocked), so any Reddit opinion here is second-hand.
- Most X articles returned 402 or paywalls.
- Many "AI slop" pages are SEO listicles from AI-tool vendors. They were used only when a stronger source agrees with them, and are marked [listicle].

**How to read the strength ratings:**
- **Strong:** several independent sources, including at least one primary or measured source.
- **Moderate:** two or three sources, or one strong source.
- **Weak:** one source or anecdote only, or the claim is mostly inferred.

---

## 0. Two framing findings

1. **Two waves of web slop, not one.**
   - **Wave 1 (2024 to mid-2025):** the "purple" look. Indigo or violet gradient, Inter, a centred hero, three icon cards and untouched shadcn. Adam Wathan's Aug 2025 apology for `bg-indigo-500` is the origin story everyone cites.
   - **Wave 2 (Apr to Oct 2026):** the "tasteful" or "Claude Design" look. Cream or beige background, rust or terracotta accent, a big italic serif with one emphasised word, tracked-out caps eyebrows, ticker bars, hairlines, and 01/02/03 numbering. The New Yorker (Kyle Chayka, Jun 2026) and Jim Nielsen (Jul 2026) named it.
   - **The lesson:** the fix for wave 1 became the fingerprint of wave 2. Any single "anti-slop" default turns into a tell within months once agents share it.
2. **The Opus 5.5 video wave (since 22 Sep 2026) has its own tells, different from diffusion-video tells.**
   - Opus writes code that renders frames, so you don't get melted hands. You get "animated slides": centred text on a gradient, everything fading in, the same palette and grid of squares, corner labels and frames, and a logo at the end.
   - **About "brief contagion":** the term goes back to one X article by @0xMovez ("How to build motion design studio with Opus 5.5"). It is paywalled, and we only saw it through search snippets. In that article it means hundreds of identical one-line prompts (the viral "15-second showreel… go all out" prompt) producing reels that "rhyme". The term is **not widely used**. The sameness it describes is widely reported.

---

## 1. Ranked tells (top 30)

### Web and landing pages

**1. Indigo, violet or blue-purple gradients (the "VibeCode Purple" hero wash).** — **Strong**
Tailwind's `indigo-500` default, learned from tutorials, shows up as purple-to-blue hero washes and buttons.
- Adam Wathan (Tailwind creator), Aug 2025: "I'd like to formally apologize for making every button in Tailwind UI `bg-indigo-500` five years ago, leading to every AI generated UI on earth also being indigo." https://x.com/adamwathan/status/1953510802159219096
- Adrian Krebs scored 1,590 Show HN sites with deterministic DOM and CSS checks (Apr 2026). "VibeCode Purple" and "gradients everywhere" are among his 16 patterns. https://www.adriankrebs.ch/blog/design-slop/
- Anthropic's own frontend-design skill (Nov 2025) says to avoid "clichéd color schemes (particularly purple gradients on white backgrounds)". https://claude.com/blog/improving-frontend-design-through-skills

**2. Default type: Inter everywhere, or the "tasteful free font" set (Geist, Space Grotesk, Instrument Serif, Fraunces).** — **Strong**
- Anthropic skill: "Never use: Inter, Roboto, Open Sans, Lato, default system fonts". It also says Claude "converge[s] on common choices (Space Grotesk, for example)". https://claude.com/blog/improving-frontend-design-through-skills
- Krebs flags Inter, plus the combinations Space Grotesk / Instrument Serif / Geist, plus a "serif italic accent font on one hero word". https://www.adriankrebs.ch/blog/design-slop/
- Adpharm (May 2026): "Inter, Roboto, Arial… Space Grotesk as the 'I tried' upgrade." https://www.theadpharm.com/insights/claude-design-without-the-ai-slop-look
- **The brief's "Space Mono plus a heavy display face" is not verified.** No source names Space Mono specifically. The closest is "monospace labels in all capitals" (avoid-ai-design). Treat it as **weak**.

**3. Centred hero with an eyebrow pill badge, a 64pt headline, a subhead and two CTAs.** — **Strong**
- Krebs: "centered hero set in generic sans" and "badge positioned above hero H1". https://www.adriankrebs.ch/blog/design-slop/
- Adpharm: "Centered hero with eyebrow plus 64-pt headline plus subhead plus two CTAs." https://www.theadpharm.com/insights/claude-design-without-the-ai-slop-look
- Setproduct (Sep 2026): the "'Introducing [Product]' pill badge" and the "chat input box as hero element". https://www.setproduct.com/blog/why-every-ai-startup-looks-the-same

**4. Uniform rounded cards: three icon-topped feature cards, the same radius, padding and height everywhere, and cards nested inside cards.** — **Strong**
- Krebs: "identical feature cards with icon on top". https://www.adriankrebs.ch/blog/design-slop/
- Kosta Canatselis (Jul 2026): "Same padding, same radius, same card height across the whole screen". His fix: "Break the uniformity on purpose." https://world.hey.com/kostac/spot-the-slop-a-ui-designer-s-guide-to-fixing-ai-defaults-4c448c9c
- Impeccable bans "cards nested in cards… the rounded-square icon tile above every heading". https://github.com/pbakaus/impeccable
- HN, on vibe-coded.lol (Oct 2025), podgietaru: "This style of site uses 1/3 of the page to display 3 icons." https://news.ycombinator.com/item?id=45622944

**5. The wave-2 "Claude Design" look: cream or beige, rust or orange accents, big italic serif with highlighted words, tracked-out subheads.** — **Strong (newest and fastest-rising)**
- Kyle Chayka, New Yorker (Jun 2026): "a predominance of beige- and cream-colored backgrounds, rusty orange-hued accents, and large serif typefaces that are italicized and highlighted in zealous attempts to emphasize". Subheads are "tracked out". https://kylechayka.substack.com/p/the-generic-style-of-ai-web-design and https://pxlnv.com/linklog/claude-aesthetic/
- Jim Nielsen (Jul 2026): "beige/cream colors, orange accents, and serif typefaces". The HN thread had 378 points. One commenter: "The first HTML docs I generated with Fable had that cream serif with orange highlight look… until I saw it on every other vibe-coded website". https://blog.jim-nielsen.com/2026/ai-aesthetic/ and https://news.ycombinator.com/item?id=49117099
- The avoid-ai-design README calls these "second-order defaults": "cream with a terracotta accent (Claude's own interface color)", "near-black with one acid-green or vermilion signal", "broadsheet hairlines". https://github.com/funboy322/avoid-ai-design

**6. The same fade-up (or fade plus scale) on every section, with everything entering at once or staggered identically.** — **Strong**
- avoid-ai-design lists "The same fade-up on every section" as a motion tell. https://github.com/funboy322/avoid-ai-design
- Canatselis: motion that is "absent or identical — identical fade-ins throughout". https://world.hey.com/kostac/spot-the-slop-a-ui-designer-s-guide-to-fixing-ai-defaults-4c448c9c
- Artimind (29 Sep 2026), on motion: "Everything animating at once, typically fade plus scale on linear curves, eliminating hierarchy." https://aiartimind.com/how-to-make-motion-graphics-with-claude-opus-5-5/
- **Note:** Anthropic's own skill *recommends* "one well-orchestrated page load with staggered reveals". So staggered reveals became a default, partly by instruction. https://claude.com/blog/improving-frontend-design-through-skills

**7. Glows and glass: coloured glows, coloured box-shadows, glassmorphism, aurora and gradient blobs, gradient borders with a 1px glow.** — **Strong**
- Setproduct: "single radial glow (purple-to-blue, usually top center)", "gradient-border cards with 1px glow", "glassmorphism panels with backdrop blur". https://www.setproduct.com/blog/why-every-ai-startup-looks-the-same
- slop-detect's 27-pattern fingerprint gives weights to "colored glows", "glassmorphism" and "aurora blobs". https://github.com/ravidsrk/slop-detect
- Adpharm: "Generic glassmorphism. Soft drop shadows. Animated gradient blobs." https://www.theadpharm.com/insights/claude-design-without-the-ai-slop-look

**8. Generic, weightless copy as a co-signal ("Unleash", "seamless", "Build faster. Ship smarter.", "Meet your AI copilot").** — **Strong**
This is copy rather than visual design, but nearly every visual-tell source lists it, and audiences notice it first.
- Canatselis: "Headlines that could belong to anyone". His test: "would our founder actually say this out loud?" https://world.hey.com/kostac/spot-the-slop-a-ui-designer-s-guide-to-fixing-ai-defaults-4c448c9c
- 925Studios: "confident and weightless". https://www.925studios.co/blog/ai-slop-design-tells
- HN, internet2000, on AI demo sites: "It's mostly the atrocious copywriting". https://news.ycombinator.com/item?id=49117099

**9. Permanent dark mode with low-contrast grey, brown or beige body text.** — **Moderate to strong**
- Krebs: "Permanent dark mode with medium-grey body text" and "barely-passing body-text contrast". https://www.adriankrebs.ch/blog/design-slop/
- HN, vunderba: "The number of dark-mode sites I've seen where the text… are various shades of dark brown or beige is just awful." https://news.ycombinator.com/item?id=47864393

**10. The ✨ sparkle icon (and the four-point sparkle logo).** — **Strong as an "AI" signifier; contested as a "slop" tell**
- NN/g (Sep 2024): "sparkle ambiguity". In their study, no participants spontaneously linked it to AI. https://www.nngroup.com/articles/ai-sparkles-icon-problem/
- Jim Nielsen: "before AI what were the connotations of the sparkle emoji ✨?… now it means AI." https://blog.jim-nielsen.com/2026/ai-aesthetic/
- HN, ajkjk: "the telltale sign of 'buttons not to click'". https://news.ycombinator.com/item?id=49117099
- Setproduct lists the "four-point sparkle icon". https://www.setproduct.com/blog/why-every-ai-startup-looks-the-same

**11. Editorial-cosplay metadata: tracked all-caps eyebrows, mono caps labels, "A · B · C" meta strings, decorative 01/02/03 numbering.** — **Moderate**
- avoid-ai-design: "tracked all-caps eyebrows and `A · B · C` meta strings", "Decorative '01 / 02 / 03' numbering", "Monospace labels in all capitals". https://github.com/funboy322/avoid-ai-design
- Krebs: "numbered '1, 2, 3' step sequences" and "all-caps headings and section labels". https://www.adriankrebs.ch/blog/design-slop/
- Chayka: subheadings "tracked out". https://kylechayka.substack.com/p/the-generic-style-of-ai-web-design

**12. Fabricated proof: "trusted by" logo walls or marquees, invented testimonials, stat banners ("10x", "99.9%"), and count-up numbers.** — **Moderate**
- VibeMole (Jul 2026): "Fake dashboards, fake testimonials, fake metrics, fake logos, and fake 'trusted by' sections". [listicle, but it matches the others] https://vibemole.com/resources/avoid-vibecoded-app-design
- vibe-coded.lol satirises it with "99.9% Uptime… 420% AI-Powered… NaN Customer Satisfaction". https://vibe-coded.lol/
- Krebs: "stat banner rows". avoid-ai-design: "count-up stats". Setproduct: the "'Trusted by' logo marquee" and the "'Backed by' accelerator logo line".
- **Evidence gap:** the claim that *the logos themselves* are fake (Logoipsum-style placeholders) is anecdotal. The pattern of the section existing is well cited.

**13. Ticker or marquee bars, "as if the website were a cable-news show".** — **Moderate (recent)**
- Chayka: "ticker-like text bars". https://kylechayka.substack.com/p/the-generic-style-of-ai-web-design
- Setproduct: logo marquee. https://www.setproduct.com/blog/why-every-ai-startup-looks-the-same

**14. Gradient-filled headline text (`bg-clip-text`) and a single accented headline word.** — **Moderate**
- slop-detect gives "Hero gradient text" a weight of 6. https://github.com/ravidsrk/slop-detect
- avoid-ai-design: "Gradient-filled headline text using `bg-clip-text`", "One accented headline word". https://github.com/funboy322/avoid-ai-design

**15. Colour-stripe borders on cards (top or left accent edge).** — **Moderate**
- Krebs: "colored borders on cards (usually top or left edge)". https://www.adriankrebs.ch/blog/design-slop/
- HN commenters agreed it is a giveaway. https://news.ycombinator.com/item?id=47864393
- Impeccable: "side-tab borders". https://github.com/pbakaus/impeccable

**16. Emoji used as icons, or same-style Lucide icons on rounded-square tiles.** — **Moderate**
- Krebs: "sidebar or nav with emoji icons". https://www.adriankrebs.ch/blog/design-slop/
- VibeMole: "Lucide icon grids everywhere". https://vibemole.com/resources/avoid-vibecoded-app-design
- HN (Krebs thread): "rounded rectangle card grids with emoji icons".

**17. Bento grids.** — **Moderate, and contested (they predate AI)**
- Setproduct lists the bento feature section. slop-detect gives "Bento grid" a weight of 4.
- frontend.horse "The Linear Look" (pre-2024) already listed bento grids, glows and glass as a human SaaS trend. https://frontend.horse/articles/the-linear-look/

**18. Busy-ness: too many sections, too many widgets, decoration for its own sake.** — **Moderate**
- HN, TheOtherHobbes: "Busy-ness is a key tell… a lot of detail, but most of it is decoration… AI isn't good at understatement". https://news.ycombinator.com/item?id=49117099
- HN, yieldcrv: "loooooong landing pages is a sure tell sign of vibe coded slop". Same thread.
- HN, internet2000: "the 3D card in the bottom is both very elaborate and also pointless. No human would've put effort into making that." Same thread.

**19. Fake UI chrome and props: window traffic-light dots, terminal windows, dashboard mock panels, "neon glow underneath".** — **Moderate (terminal motif specifically is weak)**
- avoid-ai-design: "Fake window dots". https://github.com/funboy322/avoid-ai-design
- Chayka: "dashboard elements with multiple rounded rectangular outlines" and "neon glow underneath". https://kylechayka.substack.com/p/the-generic-style-of-ai-web-design
- HN (Krebs thread): "terminal-style fonts and dense text layouts".

**20. Untouched shadcn/ui and Tailwind defaults (`rounded-xl`, `shadow-lg`, `backdrop-blur`, identical nav).** — **Moderate to strong**
- Setproduct: "When ten thousand products import the same primitives, the output converges by arithmetic." https://www.setproduct.com/blog/why-every-ai-startup-looks-the-same
- Adpharm: "Shadcn-default cards. Tailwind-default rounded-xl buttons. Identical nav." https://www.theadpharm.com/insights/claude-design-without-the-ai-slop-look
- Krebs detects shadcn/ui with a CSS check.

### Motion graphics and launch video (the Opus 5.5 wave and code-rendered video)

**21. The Opus default reel: centred text on a gradient, everything fading in, a grid of squares, the same palette, a logo at the end.** — **Strong within the niche (very recent, one week of discourse)**
- Several write-ups converge on the same phrase: "Without a reference, Opus falls back to its default look: centered text, gradient background, everything fading in". Also: "hundreds of identical prompts produce showreels that look alike, the same color palette, the same grid of squares, the same closing logo". Seen via search snippets of pasqualepillitteri.it and @rexan_wong; the direct fetch failed.
  - https://pasqualepillitteri.it/en/news/19007/opus-5-5-motion-design-video-en
  - https://x.com/rexan_wong/status/2103707054108299437
- Rexan Wong: "my one prompt video looked mid so i went through a bunch of these videos to see how they were actually made". Same X link.
- A Japanese creator on skillry calls it "AI臭さ" (an "AI smell") in Claude Code videos. https://skillry.dev/ai-videos/opus-5-5

**22. Corner labels, frame borders and HUD-style corner text.** — **Moderate (named as a giveaway by practitioners)**
- 1LittleCoder's prompt: "Avoid the frames and texts on the corners which are typical ai made giveaways!" https://x.com/1littlecoder/status/2103587706999914649
- Practitioner guides list "corner labels and frame borders" and "glow on UI chrome" among banned defaults (from search snippets of Opus 5.5 guides). https://aiartimind.com/how-to-make-motion-graphics-with-claude-opus-5-5/

**23. "Animated slides" or PowerPoint feel: tableaux that animate in, rather than one continuous visual idea.** — **Moderate**
- Hugging Face guide (27 Sep 2026): "A scene may look like animated slides". https://huggingface.co/blog/karmen-beatapi/how-to-make-videos-with-claude-opus-5-5
- HN, Aldipower: "This is the next level of PowerPoint presentations". throwaway219450: "look like templates you'd see in an office suite that appear swish, but are ultimately bland". https://news.ycombinator.com/item?id=49836374
- apimaster bans "six static tableaux" and asks for "a visible visual mechanism". https://apimaster.ai/blog/claude-opus-5-5-video-prompts

**24. Effects soup: particle bursts, shockwave rings, lens flares, RGB split, neon glows, hue-shifting rainbow or purple-cyan gradients.** — **Moderate**
- apimaster: "particle bursts, neon glows, gradients on UI chrome… shockwave rings, RGB split, lens flares". https://apimaster.ai/blog/claude-opus-5-5-video-prompts
- Artimind: "Rainbow or purple-cyan gradients", "Decorative particles drifting upward without connection to the message". https://aiartimind.com/how-to-make-motion-graphics-with-claude-opus-5-5/

**25. Over-stuffed, constant motion that never settles, with no hold on the final frame.** — **Moderate**
- Artimind: "Constant motion through bouncing, orbiting or 3D tilting that never settles" and "No hold at the end". https://aiartimind.com/how-to-make-motion-graphics-with-claude-opus-5-5/
- HN, Tsarp: "these demos tend to squeeze in as many animations and transitions. Its usually hard to take away anything from the video at the end." https://news.ycombinator.com/item?id=49836374

**26. Uniform easing: linear fades, or the opposite, bouncy or elastic springs on everything.** — **Moderate, contested on which**
- Ripple Training: unguided AI video gives "flat fades and linear motion… everything entering at once". https://www.rippletraining.com/blog/motion/using-remotion-for-ai-generated-motion-graphics/
- Impeccable: "Don't use bounce/elastic easing (feels dated)". https://github.com/pbakaus/impeccable
- apimaster bans "bouncy easing" and "random camera shake". https://apimaster.ai/blog/claude-opus-5-5-video-prompts
- **Takeaway:** the tell is *one curve applied to everything*, not a particular curve.

**27. LLM-speak narration and on-screen copy: pithy fragments that don't build an argument; repeats the same point.** — **Moderate**
- HN, jhiggins777: "the same llm-speak that has pithy short sayings but are strung together not in a way that unfolds naturally". https://news.ycombinator.com/item?id=49836374
- HN, armchairhacker: "look good but aren't very informative… kept repeating the same point". Same thread.

### Illustration, imagery and generative video

**28. Anatomical, functional and physics errors: extra or merged fingers, garbled or melted text, objects merging, impossible shadows and reflections.** — **Strong historically, declining as models improve**
- Kellogg/Northwestern (Matt Groh et al., Sep 2024) give five categories: anatomical, stylistic, functional, physics and sociocultural implausibilities. Caveat: "false positives happen". https://insight.kellogg.northwestern.edu/article/ai-photos-identification
- Opus Clip's "12 tells" (Apr 2026) covers hand-morph frames, in-scene text turning to gibberish, and repeating texture tiling. [vendor] https://www.opus.pro/blog/ai-slop-aesthetic-12-tells

**29. House render styles: waxy, glossy, over-perfect surfaces; the yellow "piss filter" cast; everything Ghibli or Octane-lit; abstract glowing orbs, brains and blobs.** — **Moderate to strong**
- The "piss filter" is a documented nickname for GPT-image's warm or yellow cast. https://en.wikipedia.org/wiki/Piss_filter and https://x.com/mreflow/status/1957916152526487608
- HN, cyanregiment: "Sora everything is rendered in Octane… If it's cartoon or animated it's Ghibli." https://news.ycombinator.com/item?id=49117099
- Coca-Cola's 2025 AI holiday ad was called "soulless", "digital slop", with uncanny creatures. https://www.cnn.com/2025/11/06/business/video/coca-cola-ai-ad-backlash-digvid

**30. Fake imperfection: procedural grain spread evenly across the frame, "hand-drawn" filters, line-boil or stop-motion presets; hand-drawn but too perfect (uniform line weight, corrected symmetry).** — **Moderate for grain and filters; weak for "boil as a filter"**
- Studio2am (2026): "the difference between a scan and a plugin is immediately legible". https://studio2am.co/blogs/news/proof-of-hand-why-designers-are-reaching-for-imperfection-in-2026
- Search snippets of the same 2026 trend coverage say generated grain "distributes noise evenly across the whole frame and repeats at a predictable interval". https://studio2am.co/blogs/news/naive-grainy-and-blurred-on-purpose-2026s-pushback-against-ai-smooth-design
- Lindsay Marsh (Oct 2025): "AI is getting so good it can emulate some of these hand-drawn uniquely human looking elements". https://lindsaymarsh.substack.com/p/design-trends-2026-imperfection-rebellion
- **No designer or animator critique was found** that names line-boil or stop-motion filters as an AI tell. Tools that automate boil exist (e.g. Camillo Visini's SVG-filter boil). This tell is inferred, not documented.

### Other tells with real but thinner support (not ranked)

- **TTS voiceover tells: "TTS plateau" cadence, missing breaths, avatar lip desync.** — **Moderate, shrinking**
  - Opus Clip lists them. https://www.opus.pro/blog/ai-slop-aesthetic-12-tells
  - Counter-claim: vendors say top-tier TTS is now hard to distinguish and many audiences "don't notice or don't care". https://freetts.org/blog/text-to-speech-for-youtube-videos [vendor]
- **Generic AI music beds.** — **Weak.** Only Suno's "shimmer" artefact is documented. https://jackrighteous.com/en-us/blogs/guides-using-suno-ai-music-creation/reduce-ai-music-noise-fix-shimmer-hiss-in-suno-ai
- **Karaoke word-by-word captions.** — **Not an AI tell in the sources.** They are the default caption style of short-form video, used by humans and tools alike. No critique found linking them to AI.
- **"Everything on a beat" and "logo on black at the end".** — **Weak.** The only support is the Opus default "closing logo" (item 21). Logo-reveal endings are an old cliché, not an AI-specific one (Renderforest 2026 trend piece).
- **Tiny, thin icons and shimmering "thinking" text.** — **Moderate, but these are AI-*product* idioms rather than slop.** Jim Nielsen.
- **Missing empty, loading and error states (happy path only).** — **Weak to moderate.** Canatselis.

---

## 2. Human-craft signals (what reads as the opposite)

1. **Specificity of claim and copy.** Lines only this company could say. Canatselis: "Rewrite every line in a real person's voice." Setproduct: distinctive brands "borrow from the world it serves" (Anthropic's warmth and serif, Perplexity's newsroom language, Runway's film vocabulary).
   - https://world.hey.com/kostac/spot-the-slop-a-ui-designer-s-guide-to-fixing-ai-defaults-4c448c9c
   - https://www.setproduct.com/blog/why-every-ai-startup-looks-the-same
2. **The real product, not a mock of one.** Real screens, real data and real states instead of fake dashboards and invented stats. "The Linear Look" already preferred "screenshots over photography". The anti-pattern is fabricated proof (VibeMole). The better AI sites "run" the product in the hero instead of describing it (Veza Digital roundup) [listicle].
   - https://frontend.horse/articles/the-linear-look/
3. **A committed type choice with a reason.** Canatselis: "Change the font before you change anything else… the single highest-leverage move." Krebs' low-scoring sites used non-default faces (Söhne, Haas Grotesk, Untitled Sans).
   - https://www.adriankrebs.ch/blog/design-slop/
4. **Colour that means something.** Canatselis: "Use colour semantically, not decoratively." Anthropic: "Dominant colors with sharp accents" over "timid, evenly-distributed palettes".
5. **Deliberate hierarchy and broken uniformity.** "Make the primary thing bigger, closer, heavier" (Canatselis). In video, "one dominant action per beat" (Artimind).
6. **Motion with a reason.** Emil Kowalski: "Before you start animating, ask yourself: what's the purpose of this animation?" Also: "How often users will see an animation is a key factor". UI animation under 300ms. In film, every cut should be motivated: a storyboard Opus wrote under direction asked that "every cut be motivated by action" and to "keep text out of frames". Hold the resolved frame, and use a recurring visual element for continuity (Artimind).
   - https://emilkowal.ski/ui/you-dont-need-animations
   - https://www.orcarouter.ai/blog/claude-opus-5-5-video-plan-one-shot
7. **Restraint and economy.** HN, TheOtherHobbes: AI "isn't good at understatement, subtext, or… elegant distillation". HN, Tsarp: "optimize for learning" over "how fancy can i make it look".
8. **Constraint as the source of a point of view.** HN, dancheong (working designer): "What the article calls an aesthetic I'd call the absence of one: no constraint pushing back. Every strong visual tradition came from limits". Their own example is a colour system built from five traditional Korean temple pigments.
   - https://news.ycombinator.com/item?id=49117099
9. **Real imperfection from real process: scans, real paper, real hands, not presets.** Studio2am: "Imperfection carries information. It tells you a human made a decision". Use scans, not noise generators.
10. **Real people and visible provenance.** Brands now promote "human-made": Heineken, Polaroid, Cadbury, and the "Made by Humans" credit on Apple TV's *Pluribus*. The research cited says the *label* alone changes perceived value: people "judge the works they believe to be 'human created' as more beautiful, meaningful and profound." (Paul Harrison, The Conversation, Nov 2025.)
    - https://theconversation.com/a-backlash-against-ai-imagery-in-ads-may-have-begun-as-brands-promote-human-made-269276
11. **Craft in the unglamorous details: contrast, accessibility, and empty, error and loading states.** HN, vunderba, on WCAG contrast. Canatselis: "Design the unhappy paths deliberately."
12. **Reference-led art direction.** Practitioners say that naming a concrete style or reference beats describing one. Concrete art direction means "palette, lighting, materials, typography, composition, or motion language — not just 'make it slick'".
    - https://apimaster.ai/blog/claude-opus-5-5-video-prompts

---

## 3. Contested points

- **"AI look" or just the 2019–2022 SaaS look?** Glows, glass, bento, dark mode and Inter were "The Linear Look" before LLMs built sites. Several people push back on AI-specific framing:
  - HN, dancheong: "The beige-serif-sparkle look predates the models — it's the 2019–2022 premium-SaaS rebrand wave".
  - Tildes, Reapy: "a bit of a nothing burger… Everytime a tool comes out that does design that is all you will see for a while".
  - Krebs himself: "A single pattern doesn't necessarily make a site AI-generated", with an estimated 5–10% false positives.
  - Fair reading: these are **convergence** tells. They signal "nobody made a decision", whoever made it.
- **Fixes become tells (the treadmill).** Cream, terracotta and serif was the anti-purple fix and is now the stronger 2026 tell. HN, firasd, joked that a mid-2025 purple gradient will soon look distinctive. Any shared anti-slop skill will produce its own fingerprint.
- **Sparkle: AI-feature label or slop tell?** HN split: NicuCalcea says it means "this is an AI feature"; eddythompson80 says it "screams slop". NN/g finds it ambiguous to users either way.
- **Easing.** Some sources treat linear fades as the AI default and springs as the cure (Ripple Training). Others ban bouncy or elastic easing as the tell (Impeccable, apimaster). The consistent finding is *uniformity*.
- **Staggered reveals.** Anthropic's skill recommends them, and anti-slop lists flag "the same fade-up on every section". Both can be true: one orchestrated moment versus everything, always.
- **Imperfection as a signal.** Real scans read as human. But grain and hand-drawn filters are now one click, and AI is learning to fake them (Marsh). Imperfection only counts when it comes from the process.
- **Do audiences care?** HN, tptacek: AI look-and-feel is "basically fine". Vendors claim TTS audiences "don't notice or don't care". Against that: HN, ben_w: "Right now, looking like an AI did it… is a sign of being un-professional". Research shows an AI label alone lowers perceived value (The Conversation). Designers and developers are far more sensitive than general audiences. For general audiences the strongest tells are uncanny figures, garbled text, "soulless" ads (Coca-Cola) and generic copy, not fonts.
- **Opus 5.5 video vs "AI video".** HN, minimaxir: Opus output differs from "stereotypical AI slop videos" because it renders code, not diffusion pixels. Its tells are template and slide tells, not morphing. Practitioners report the default look is escapable with references and iteration ("magic vs meh"). The sameness may fade as the viral prompt wears out.
- **Unverified statistics to avoid quoting:** "Adobe: 73% of designers add imperfection", "HubSpot: 61% of marketers…", "54% AI fatigue / 52% disengage". All come from SEO pages with no primary source found.
