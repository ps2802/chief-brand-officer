# What makes startup copy read as AI-written or low-trust (2025–2026)

Research date: 2 Oct 2026. Audience lens: founders, engineering leaders, CTOs judging a devtool or B2B landing page.

How strength is graded:
- **Strong**: a primary study or dataset, or several independent primary sources agree.
- **Moderate**: one primary source, or several credible practitioner sources that agree.
- **Weak**: anecdotes, blogs, or my own inference from adjacent evidence.

## Read this first: three findings that frame everything below

1. **Being *suspected* of AI costs you, whether or not the text is AI.** Raptive surveyed 3,000 US adults (Aug 2025). When readers *thought* content was AI-generated, they rated it 48% less trustworthy and 57% less authentic, and purchase consideration for the ads next to it fell 14%. This held "regardless of whether it was really AI-generated or not." So the goal is to avoid the tells, not to pass a detector. [Raptive](https://raptive.com/blog/the-ai-stink-is-real-and-its-costing-brands/)
2. **Casual readers are poor detectors. Heavy LLM users are very good ones.** One 2025 study found people at about chance. In another, five annotators who use ChatGPT a lot, voting together, misclassified only 1 of 300 articles. Founders and CTOs in 2026 are heavy LLM users, so assume your buyer is in the expert group. [Russell, Karpinska & Iyyer, ACL 2025](https://arxiv.org/abs/2501.15654); [Wikipedia: Signs of AI writing, "Your detection ability"](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)
3. **The tells shift as models change.** "Delve" faded to about 1 in 1,000 ChatGPT chats by July 2025. The Economist (30 Jul 2026, 55,940 sentences) found that em dashes are now mostly a *Claude* habit: only Claude used them more than professional writers, and ChatGPT used them less. Because this team writes with Claude, the em dash is our own model's fingerprint. [Washington Post via Yahoo](https://www.yahoo.com/news/articles/clues-chatgpt-wrote-something-analyzed-214947550.html); [Wikipedia citing The Economist](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)

Wikipedia's own caveat: "Density across multiple tells is the signal." No single item below proves anything.

---

## A. Writing tells (ranked)

### 1. "It's not X, it's Y" / "not just X, but Y" (negative parallelism)
- **What it is:** The sentence sets up a misconception nobody held, then corrects it. Variants: "No X. No Y. Just Z." and "Y rather than X."
- **Strength:** Strong. It is the most widely cited tell of 2025–26.
- **Sources:**
  - [Washington Post analysis of 328,744 ChatGPT messages](https://www.yahoo.com/news/articles/clues-chatgpt-wrote-something-analyzed-214947550.html): "not just X, but Y" appeared in 6% of chats in July 2025.
  - [The Atlantic, Will Oremus, 12 Jul 2026](https://theatlantic.com/technology/2026/07/ai-chatbot-writing-tic-negative-parallelism/687892) (via [AI Weekly summary](https://aiweekly.co/alerts/atlantic-tracks-ais-not-x-but-y-tic-into-fortune-500-filings)): the phrasing rose in Fortune 500 filings from about 50 uses in 2023 to over 200 in 2025, and it now "flipped its polarity in the reader's mind."
  - [HN, ertgbnm](https://news.ycombinator.com/item?id=45529020): "my current AI text flag is the use of 'It's not X. It's Y.'"

### 2. Specifics flattened into generic, inflated claims
- **What it is:** The model swaps a concrete fact for a bigger, vaguer one. "Inventor of the first train-coupling device" becomes "a revolutionary titan of industry." Sentences tell you something matters ("pivotal," "game-changing," "transforms how teams work") instead of showing it.
- **Strength:** Strong. It is the mechanism behind most other tells.
- **Sources:**
  - [Wikipedia, "Content" intro](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing): LLMs "regress to the mean... the subject becomes simultaneously less specific and more exaggerated."
  - [The Register, "Semantic ablation", 16 Feb 2026](https://www.theregister.com/2026/02/16/semantic_ablation_ai_writing/): AI polishing replaces "precise, rare tokens with the most probable, generic sequences."
  - [Hollis Robbins, 13 Aug 2025](https://hollisrobbinsanecdotal.substack.com/p/how-to-tell-if-something-is-ai-written): "if you can't see anything, if nothing springs to mind, it's probably AI."

### 3. AI vocabulary and promotional puffery
- **What it is:** Two overlapping groups.
  - The research-measured group: delve, underscore, pivotal, crucial, intricate, showcase, foster, enhance, tapestry, landscape, robust, "align with."
  - The marketing group: seamless, elevate, unlock, supercharge, empower, unleash, cutting-edge, next-generation, revolutionize, effortless.
- **Strength:** Strong for the research group, measured across 15M+ abstracts and in PNAS. Moderate for the marketing group, which is consistently named by practitioners but not counted in a corpus study.
- **Sources:**
  - [Kobak et al., Science Advances, Jul 2025](https://www.science.org/doi/10.1126/sciadv.adt3813): the excess words after 2023 were "style-affecting verbs and adjectives," and at least 13.5% of 2024 PubMed abstracts were LLM-processed.
  - [Reinhart et al., PNAS, Feb 2025](https://www.pnas.org/doi/10.1073/pnas.2422455122): ChatGPT used "camaraderie" and "tapestry" about 150x more often than humans ([summary](https://techxplore.com/news/2025-02-differences-human-ai-generated-text.html)).
  - [hereticpleb, "10 tells of slop UI", 27 Sep 2026](https://hereticpleb.vercel.app/blog/10-tells-of-slop) (384 points on [HN](https://news.ycombinator.com/item?id=49867038)): generic taglines with "Elevate", "Seamless", "Next-Generation", "Supercharge", "Unleash", "Empower."
- **Caveat:** The vocabulary changes with each model generation. Wikipedia keeps per-era lists, and newer models are "more subtly positive."

### 4. Em dashes used for punch
- **What it is:** Dashes that set up a reveal or a parallelism, often with spaces around them, in places where a human would use a comma, colon or full stop.
- **Strength:** Strong as a *perceived* tell. Moderate and model-specific as an actual one.
- **Sources:**
  - [Washington Post](https://www.yahoo.com/news/articles/clues-chatgpt-wrote-something-analyzed-214947550.html): by summer 2025, "more than half" of ChatGPT responses had an em dash, up from fewer than 1 in 10 a year earlier.
  - [Wikipedia, "Overuse of em dashes"](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing): models use them "in a formulaic, pat way, often mimicking 'punched up' sales-like writing." Citing The Economist (Jul 2026): "only Claude used em dashes more than professional writers."
  - [Poynter, 28 Sep 2026](https://www.poynter.org/reporting-editing/2026/ai-changing-human-writing-editors-em-dash/): editors describe "flagxiety," people cutting good dashes so they don't look like AI.

### 5. Reflexive rule of three
- **What it is:** Triplets everywhere ("fast, secure, and scalable"), and the three items are often near-synonyms.
- **Strength:** Strong.
- **Sources:**
  - [Wikipedia, "Rule of three"](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing), citing Russell et al. 2025, Kriss in NYT Dec 2025, and The Economist Jul 2026: LLMs use it "to make superficial analyses appear more comprehensive."
  - [aismells, "Always three things"](https://aismells.com/always-three-things): "What the LLM lacks is not technical ability, but taste."

### 6. Tacked-on "-ing" significance clauses, and avoiding "is"
- **What it is:**
  - Sentences ending in clauses like "..., highlighting its commitment to developer experience" or "..., ensuring seamless collaboration."
  - "Serves as / stands as / boasts" where a person would just write "is" or "has."
- **Strength:** Strong.
- **Sources:**
  - [Reinhart et al., PNAS 2025](https://techxplore.com/news/2025-02-differences-human-ai-generated-text.html): present participial clauses at "two to five times the rate of human text," and nominalizations at 1.5–2x.
  - [Wikipedia, "Superficial analyses" and "Avoidance of basic copulatives"](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing).

### 7. Staccato drama and fake suspense
- **What it is:**
  - Clusters of one-line sentences: "The algorithm changed. Sites lost traffic. Panic spread."
  - "The X? A Y." and "Here's the thing / Here's the kicker."
  - "But" and "And" fragments presented as if they were profound.
- **Strength:** Moderate. Practitioners agree; I found no corpus count.
- **Sources:**
  - [Search Engine Journal, Carolyn Shelby, 24 Sep 2025](https://www.searchenginejournal.com/and-the-truth-this-writing-style-screams-ai/555854/): a cadence "borrowed from speeches, sales copy" that reads as "hyperventilating."
  - [tropes.fyi (ossama.is)](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1): "Not X. Not Y. Just Z.", "The X? A Y.", and "Here's the Kicker" as "false suspense."
  - [Slop Cop on HN](https://news.ycombinator.com/item?id=47806845): flags "staccato bursts" and "hook then evidence."

### 8. Chat formatting on a web page: bold-label bullets, emoji bullets, decorative bold
- **What it is:**
  - Every bullet starts with "**Label**: description."
  - ✨🚀✅ used as bullets or in headings.
  - Bold sprinkled through paragraphs.
- **Strength:** Moderate to strong.
- **Sources:**
  - [Wikipedia, "Inline-header vertical lists", "Overuse of boldface", "Emoji as formatting"](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing).
  - [Washington Post](https://www.yahoo.com/news/articles/clues-chatgpt-wrote-something-analyzed-214947550.html): 70% of ChatGPT messages had an emoji by July 2025, and the green check appeared 11x more often than in human text.
  - [hereticpleb](https://hereticpleb.vercel.app/blog/10-tells-of-slop): "emoji proliferation" and "Welcome to your Dashboard, [Name] ✨."

### 9. Vague authority ("studies show", "industry reports", "experts agree")
- **What it is:** Claims credited to an unnamed source, or to a named source that doesn't say what's claimed. This overlaps with B1.
- **Strength:** Strong.
- **Sources:**
  - [Wikipedia, "Vague attributions and overgeneralization of opinions"](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing).
  - [momentic, "34 types of AI slop", 28 May 2026](https://momenticmarketing.com/blog/avoid-ai-slop): "Citing 'research' without sources or specifics."

### 10. Same-shaped sentences and paragraphs
- **What it is:** Uniform rhythm. Every paragraph follows the same template, and every section ends with a summary line.
- **Strength:** Moderate.
- **Sources:**
  - [GPTZero on burstiness](https://gptzero.me/news/how-ai-detectors-work/): human writing varies sentence length more; AI text is more uniform. GPTZero itself has since moved past this metric.
  - The Economist 2026 (as summarized by [Fast Company](https://www.fastcompany.com/91584243/how-to-identify-ai-generated-writing-viral-report-has-surprising-new-clues-economist)): LLMs "skimp on commas, semicolons, and parentheses," write overly long sentences, and use "and" more than any other word.
  - [Wikipedia, "Section summaries"](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing).

### 11. Title Case Headings, and "Introducing..."
- **What it is:** Every main word capitalized in section headings.
- **Strength:** Moderate for title case. Weak for "Introducing...", which I found no source for beyond general launch-post cliché.
- **Sources:**
  - [Wikipedia, "Title case"](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing): "AI chatbots strongly tend to capitalize all main words" (cites Russell et al. 2025).

### 12. Colon habits ("X: The Y for Z" taglines, a colon before every list)
- **Strength:** Weak to moderate. Practitioner sources only.
- **Sources:**
  - [Blake Stockton, 30 Jun 2025](https://www.blakestockton.com/colons-everywhere/): "Colons are useful. Just don't let them become your writing's default move."

### 13. Throat-clearing openers and closers ("In today's fast-paced world", "It's important to note", "In conclusion")
- **Strength:** Moderate, but **historical**. Wikipedia moved "didactic disclaimers" and "section summaries" to *historical indicators* (Nov 2022–2024). People still read them as AI, but current models produce them less.
- **Sources:**
  - [Wikipedia, "Historical indicators"](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing).
  - [momentic](https://momenticmarketing.com/blog/avoid-ai-slop): "Manufactured hooks: clichéd openings about 'rapidly evolving' landscapes."

### 14. Relentless, uniform enthusiasm
- **What it is:** A minor feature gets the same excitement as a launch, and every outcome gets a silver lining.
- **Strength:** Moderate.
- **Sources:**
  - [Wikipedia, "Promotional and advertisement-like language"](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing): "LLMs have serious problems keeping a neutral tone."
  - [momentic](https://momenticmarketing.com/blog/avoid-ai-slop): "uniform enthusiasm."

### 15. Tidy aphorisms and invented concept labels ("X is the new Y", "the supervision paradox")
- **Strength:** Weak. Plausible and often mentioned, but thinly sourced.
- **Sources:**
  - [tropes.fyi, "Invented Concept Labels"](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1).
  - [Reuters Institute, 9 Dec 2025](https://reutersinstitute.politics.ox.ac.uk/news/how-ai-generated-prose-diverges-human-writing-and-why-it-matters), quoting Alex Mahadevan on lines like "AI in journalism isn't just a tool, it's a revolution": "a lot of words that don't say anything."

### 16. Hedging
- **Strength:** Weak and **contested**. Wikipedia lists hedging qualifiers ("very", "perhaps", "tends to") among features *more common in human* writing (citing Reinhart/PNAS). Old LLM disclaimers ("may vary") are historical. Over-hedging still reads as weak copy, but it is not a reliable AI tell.
- **Sources:**
  - [Wikipedia, "Signs of human writing: Syntax"](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing).

### Near-proof tells (rare, but fatal when they appear)
- **What they are:** Leftover prompt text or chat context; "[Company Name]" or "[Describe the feature]" placeholders; "Certainly! Here's..."; citation debris such as `oaicite` or `turn0search0`.
- **Strength:** Strong.
- **Sources:**
  - [Wikipedia, "Phrasal templates and placeholder text" and "Internal formatting bugs"](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing).
  - HN commenter weakfish on "[chat context leaking through](https://news.ycombinator.com/item?id=49867038)."

**Not good tells**, per Wikipedia's "Ineffective indicators": perfect grammar, "bland" prose, formal prose in general, and transition words on their own.

---

## B. Credibility and trust tells on startup sites (ranked)

### 1. Unsourced, misattributed or unlinked statistics
- **What it is:** "Atlassian says engineers lose 9 hours a week," with no link.
- **Strength:** Strong.
- **Sources:**
  - [Stanford Web Credibility guideline #1](https://credibility.stanford.edu/guidelines/index.html) (research with 4,500+ people): "Provide third-party support (citations, references, source material)... especially if you link to this evidence."
  - LLMs fabricate sources at high rates. In one study, 19.9% of GPT-4o citations in literature reviews could not be traced to any real paper ([JMIR Mental Health study](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12658395/)).
- **Worked example (checked today):**
  - Atlassian's 2024 report says "69% of developers are losing eight hours or more per week" ([source](https://www.atlassian.com/blog/developer/developer-experience-report-2024)).
  - Its 2025 report says "50% report losing 10+ hours per week" ([source](https://www.atlassian.com/blog/developer/developer-experience-report-2025)).
  - Neither report has a "9 hours" figure. A CTO who clicks through will find the mismatch.

### 2. Invented or inflated metrics and social proof
- **What it is:** "Trusted by 10,000+ teams" or "1M tasks automated" from a product with a recent domain registration.
- **Strength:** Strong.
- **Sources:**
  - [HN, Feb 2025](https://news.ycombinator.com/item?id=43016679), Urgo: "pretty much everything on the page looks to be fake. It says 10,000+ happy artists." The founder then removed the claims.
  - [HN, "Are we in the era of AI slop landing pages?"](https://news.ycombinator.com/item?id=49024805), aashir-saas: "fake metrics, 'Trusted by 10,000+ professionals'... screams 0% trust and 100% AI generated."
  - [FTC rule 16 CFR 465](https://www.ftc.gov/system/files/ftc_gov/pdf/r311003consumerreviewstestimonialsfinalrulefrn.pdf) (in force since 21 Oct 2024) bans fake indicators of social influence.

### 3. Fake, AI-generated or anonymous testimonials
- **What it is:** First name and initial only, a stock or AI headshot, praise with nothing specific in it, or every quote in the same voice.
- **Strength:** Strong. Backed by law and by documented call-outs.
- **Sources:**
  - [FTC final rule](https://www.goodwinlaw.com/en/insights/publications/2024/09/alerts-practices-cldr-ftc-finalizes-rule-on-consumer-reviews) prohibits testimonials that falsely claim to be from a real person, **explicitly including AI-generated ones**, with penalties of up to $51,744 per violation.
  - [FTC Operation AI Comply, 25 Sep 2024](https://www.ftc.gov/news-events/news/press-releases/2024/09/ftc-announces-crackdown-deceptive-ai-claims-schemes): Rytr was barred from selling a review and testimonial generator.
  - [HN](https://news.ycombinator.com/item?id=43016679), threeducks: "Those testimonials are AI-generated and fake. For example, 'Emma Davis' is this stock photo."

### 4. "Trusted by" logos you haven't earned
- **What it is:** Customer logos with no relationship behind them, or logos from a pilot that ended years ago.
- **Strength:** Strong.
- **Sources:**
  - [The Block, summarizing The Verge and Mashable, Jul 2022](https://www.theblock.co/news/business/2022-07-31-lime-salesforce-do-not-have-partnerships-with-helium-mashable-the-verge-160422): Helium showed Lime and Salesforce logos. Both denied any partnership, Lime prepared a cease-and-desist, and the logos came down the same day.
  - [Ask HN on logo permission](https://news.ycombinator.com/item?id=32416402): logo use is normally a contract term.

### 5. Placeholder companies in social proof or demos ("Acme", "Northwind", "Contoso", "Initech")
- **What it is:** Developers know these as Microsoft and template sample data, so they read as placeholders.
- **Strength:** Moderate. One documented audit, plus strong face validity with technical buyers.
- **Sources:**
  - [codent-labs issue #66, 18 Sep 2026](https://github.com/codent-labs/codent/issues/66): "Northwind is the canonical fictional company from Microsoft's Northwind sample database... the logo strip reads as placeholder content." It does more damage when the site also claims its stats are "verified by the clients whose logos you'll see."

### 6. Fictional named personas presented like customers
- **What it is:** "Maya, VP Eng at a Series B fintech" quoted as if she were a real user.
- **Strength:** Moderate on legal grounds, weak on perception data.
- **Sources:**
  - The [FTC rule](https://www.ftc.gov/system/files/ftc_gov/pdf/r311003consumerreviewstestimonialsfinalrulefrn.pdf) treats a testimonial that misrepresents itself as coming from a real person as deceptive.
  - If a persona is used, label it clearly as an illustration ("Example: a team of 8..."). Never format it as a quote with a name and title.

### 7. No visible people: no founder faces, names, address or way to reach a human
- **Strength:** Moderate to strong.
- **Sources:**
  - [Stanford guidelines #2, #4, #5](https://credibility.stanford.edu/guidelines/index.html): "Show there are real people behind the site," "Show that there's a real organization behind your site," and "Make it easy to contact you."
  - [NN/g, "Photos as Web Content"](https://www.nngroup.com/articles/photos-as-web-content/): users spent 10% more time on real employee portraits than on bios that took up far more space, while they "ignore stock photos of generic people."

### 8. Illustrations or stock and AI imagery instead of the real product
- **Strength:** Moderate.
- **Sources:**
  - [Evil Martians, study of 100 devtool landing pages, 8 Jul 2025](https://evilmartians.com/chronicles/we-studied-100-devtool-landing-pages-here-is-what-actually-works-in-2025): heroes overwhelmingly show static or animated product UI, and illustrations are used only when "the UI doesn't yet exist, or when the product lives under the hood."
  - [NN/g](https://www.nngroup.com/articles/photos-as-web-content/): "users pay attention to information-carrying images."

### 9. Templated "slop UI" look
- **What it is:** Gradient soup, rounded corners on everything, monospace or all-caps decorative headers, meaningless "verified" or "active" badges, the same card grid every other site uses.
- **Strength:** Moderate.
- **Sources:**
  - [hereticpleb](https://hereticpleb.vercel.app/blog/10-tells-of-slop) and its [HN thread](https://news.ycombinator.com/item?id=49867038) (243 comments), plus [HN on slop landing pages](https://news.ycombinator.com/item?id=49024805).
  - minimaxir pushed back that "landing pages were already heavily templated prior to agents." Replies said older templates at least showed craft.

### 10. Undated posts, stale content, no changelog
- **Strength:** Moderate for dates and freshness. Weak for "a changelog specifically," where I found practitioner opinion only.
- **Sources:**
  - [Stanford guideline #8](https://credibility.stanford.edu/guidelines/index.html): "People assign more credibility to sites that show they have been recently updated or reviewed."
  - [NN/g, "Trustworthiness in Web Design"](https://www.nngroup.com/articles/trustworthy-design/): content must be "comprehensive, correct, and current."

### 11. Hidden or implausible pricing (only "Contact sales", or tiers with no company behind them)
- **Strength:** Moderate.
- **Sources:**
  - [NN/g](https://www.nngroup.com/articles/trustworthy-design/), "up-front disclosure": be "upfront with all information that relates to the customer experience," including pricing.
  - [PostHog, "Why we ditched 'talk to sales'"](https://posthog.com/blog/transparent-enterprise-pricing) is a primary account of transparent pricing building trust when the company and founders were unknown.

### 12. Capability claims that outrun proof ("AI-washing")
- **Strength:** Strong, from enforcement cases.
- **Sources:**
  - [FTC Operation AI Comply](https://www.ftc.gov/news-events/news/press-releases/2024/09/ftc-announces-crackdown-deceptive-ai-claims-schemes): DoNotPay's "world's first robot lawyer" claims ended in a $193,000 settlement.
  - [Stack Overflow 2025 survey](https://stackoverflow.co/company/press/archive/stack-overflow-2025-developer-survey/): 46% of developers distrust the accuracy of AI output, against 33% who trust it. This is a buyer group already skeptical of AI claims.

### 13. Bought popularity: fake GitHub stars and inflated follower counts
- **Strength:** Strong.
- **Sources:**
  - [He et al. (CMU/NCSU), arXiv 2412.13459 v2](https://arxiv.org/abs/2412.13459): about 6M suspected fake stars. Fake stars "only have a promotion effect in the short term (i.e., less than two months) and become a liability in the long term."

### 14. Generic legal and security pages (template privacy policy, "bank-grade security", "SOC 2 compliant" with no report)
- **Strength:** Weak on perception evidence. In practice, CTOs check these during vendor security review.
- **Sources:**
  - [TechCrunch, 2011](https://techcrunch.com/2011/04/15/chatroulette-posts-lawyers-notes-in-privacy-policy-for-your-entertainment-and-edification/): Chatroulette published its lawyer's bracketed notes in its privacy policy.
  - Vendor security reviews ask for the SOC 2 report date and scope, the subprocessor list and a trust center ([Secureframe](https://secureframe.com/blog/soc-2-vs-security-questionnaires)). A vague security claim invites those questions and can't answer them.

---

## What earns trust instead

Each item below is the fix for one or more tells above.

1. **Link every number to its primary source, and quote it exactly.**
   - Write "Atlassian's 2025 DevEx survey (3,500 devs): 50% lose 10+ hours a week" with a link. A rounded or remembered figure isn't good enough.
   - Your own usage numbers beat third-party ones, with the date and how they were counted ("142 decisions routed in September, from our relay logs").
   - Sources: [Stanford #1](https://credibility.stanford.edu/guidelines/index.html), [Wikipedia on vague attribution](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing).
2. **Use small, true numbers over big round ones.** "Join 20 early teams" is credible. "10,000+" from a new domain gets checked and caught. Sources: [LaunchList](https://getlaunchlist.com/blog/how-to-create-a-waitlist-landing-page); [HN call-out](https://news.ycombinator.com/item?id=43016679).
3. **Show real founders.**
   - Include names, faces, roles and a link to each person's GitHub, LinkedIn or X, plus a real contact email and the company's legal entity and location.
   - Sources: [Stanford #2, #4, #5](https://credibility.stanford.edu/guidelines/index.html), [NN/g photos](https://www.nngroup.com/articles/photos-as-web-content/).
4. **Show the real product.**
   - Use actual screenshots, terminal output, short real recordings and copy-pasteable install commands above the fold.
   - Developers go straight to code, docs and pricing.
   - Sources: [Evil Martians](https://evilmartians.com/chronicles/we-studied-100-devtool-landing-pages-here-is-what-actually-works-in-2025), [daily.dev](https://business.daily.dev/resources/create-developer-first-landing-pages-convert/).
5. **Only use testimonials from people who exist and can be found.**
   - Give a full name, role, company and photo, and link to where they said it if you can.
   - With no customers yet, show nothing, or a clearly labeled design-partner quote. Never a persona.
   - Sources: [FTC rule](https://www.goodwinlaw.com/en/insights/publications/2024/09/alerts-practices-cldr-ftc-finalizes-rule-on-consumer-reviews); [Evil Martians](https://evilmartians.com/chronicles/we-studied-100-devtool-landing-pages-here-is-what-actually-works-in-2025) (avatar, name, company logo).
6. **Keep a dated changelog and dated posts.**
   - The dates prove the company is alive and shipping. Link versions to commits or releases if the product is open.
   - Source: [Stanford #8](https://credibility.stanford.edu/guidelines/index.html).
7. **Publish your pricing**, or at least say plainly how pricing works. Source: [PostHog](https://posthog.com/blog/transparent-enterprise-pricing), [NN/g up-front disclosure](https://www.nngroup.com/articles/trustworthy-design/).
8. **Link out to proof you don't control**: GitHub repo, npm downloads, public issues, HN or Product Hunt threads, press. Source: [NN/g](https://www.nngroup.com/articles/trustworthy-design/): "people have learned to trust these external sources more than company-sponsored content."
9. **Make claims narrow and testable.** "Routes a decision to the right person's agent in under 3s" beats "seamlessly supercharges collaboration." Source: [FTC AI Comply](https://www.ftc.gov/news-events/news/press-releases/2024/09/ftc-announces-crackdown-deceptive-ai-claims-schemes); [Reuters Institute](https://reutersinstitute.politics.ox.ac.uk/news/how-ai-generated-prose-diverges-human-writing-and-why-it-matters).
10. **Write like a specific person explaining a specific thing.**
    - Use plain "is" and "has," vary sentence length, and use sentence-case headings.
    - Make one claim per sentence, each something a reader can picture (Robbins' test).
    - Use em dashes rarely. Our drafting model is the one that over-uses them.

## Gaps and caveats

- **Reddit:** the fetch tool refused reddit.com, so there are no Reddit threads here. HN covers the same ground.
- **Paywalled originals:** The Economist (Jul 2026), The Atlantic (Jul 2026) and NYT/Kriss (Dec 2025) are cited through Wikipedia's sourced summaries and secondary write-ups, not read directly.
- **Untraceable stat:** a widely repeated "88% of B2B buyers distrust buzzwords" figure could not be traced to a primary source. The page returned 403. It is left out on purpose, as an example of B1.
- **Limits of Raptive:** the study measured *consumer* content (travel, food, finance), not B2B devtool pages. Applying it to CTOs is an extrapolation, though a plausible one.
