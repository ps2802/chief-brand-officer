#!/usr/bin/env bash
# ./checks.sh out/final.mp4 [action_second]  → contact, strip, phone, loop_check, loudness
# Executable checks feed the critique loop; the visual scores come from LOOKING at the PNGs.
set -euo pipefail
V=${1:-out/final.mp4}; A=${2:-1}; D=$(dirname "$V")
DUR=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$V")
rows(){ python3 -c "import math;print(max(1,math.ceil($DUR*$1/$2)))"; }   # rows for fps $1, cols $2
ffmpeg -loglevel error -y -i "$V" -vf "fps=2,scale=270:-1,tile=6x$(rows 2 6)" -frames:v 1 "$D/contact.png"
ffmpeg -loglevel error -y -ss "$(echo "$A - 0.1" | bc)" -i "$V" -vf "scale=320:-1,tile=12x1" -frames:v 1 "$D/strip.png"
ffmpeg -loglevel error -y -i "$V" -vf "fps=1,scale=360:-1,tile=5x$(rows 1 5)" -frames:v 1 "$D/phone.png"
ffmpeg -loglevel error -y -stream_loop 1 -i "$V" -c copy "$D/loop_check.mp4"
if ffprobe -loglevel error -select_streams a -show_entries stream=index -of csv=p=0 "$V" | grep -q .; then
  ffmpeg -hide_banner -nostats -i "$V" -af ebur128 -f null - 2>&1 | grep -E '^\s+I:' | tail -1 | sed 's/^/integrated loudness (target -14 LUFS):/'
fi
echo "wrote $D/contact.png strip.png phone.png loop_check.mp4"
