#!/usr/bin/env sh
# Installs the specialist skills chief-brand-officer routes to. All are optional: the CBO works
# without them and uses each one when it is present. Read a repo before you install it.
set -e
add() { echo "→ $1"; npx -y skills add "$1" || echo "  (skipped $1)"; }

add greensock/gsap-skills            # gsap-core, gsap-timeline, gsap-scrolltrigger, gsap-performance
add emilkowalski/skills              # emil-design-eng, review-animations, animation-vocabulary
add pbakaus/impeccable               # impeccable
add Leonxlnx/taste-skill             # high-end-visual-design, design-taste-frontend, brandkit
add petergyang/no-ai-slop            # no-ai-slop
add richtabor/agent-skills           # motion-design, humanize, x-writing
add LottieFiles/motion-design-skill  # motion-director

echo "→ hyperframes"
npx -y hyperframes skills || echo "  (skipped hyperframes)"
