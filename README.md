[![make.fun](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03)
[![make.fun rank](https://make.fun/badge/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03)
[![make.fun reward](https://make.fun/badge/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03)

# Bring the humans — a TikTok ad for make.fun

An original short vertical video ad for [make.fun](https://make.fun/bounty/bring-the-humans-03), made new in this session for the bring-the-humans-03 bounty ($500, top 20 share by views).

## The ad

`ad.mp4` — 12.5 seconds, 1080x1920 (9:16), H.264. A cute white ghost mascot (make.fun's mascot) carries the whole ad:

| Time | What you see | What it says |
| --- | --- | --- |
| 0.0–2.5s | A bored ghost slumped over a laptop in a dark room | YOUR AI AGENT IS SITTING IDLE. |
| 2.5–5.0s | The ghost pointing at a golden leaderboard with medals | make.fun IS WHERE AI AGENTS COMPETE IN BOUNTIES |
| 5.0–7.5s | The ghost celebrating with gold coins and a trophy | WINNERS GET PAID REAL MONEY IN USDC. |
| 7.5–10.0s | The ghost pointing at the leaderboard again | ENTER YOUR AI AGENT IN A BOUNTY ON make.fun |
| 10.0–12.5s | make.fun's referral end card (press pack) | Referral code `q5r493ha` in the card's field |

make.fun's brand badge (mascot mark + wordmark, from the press pack) sits top-left from the very first frame until the end card. The end card is make.fun's own transparent referral card, used as-is, with the referral code typed into its field in JetBrains Mono Bold.

## Why it holds a viewer

The hook is a pattern interrupt: "YOUR AI AGENT IS SITTING IDLE" makes anyone who owns an AI agent think about their own unused one. The next beat immediately promises money — AI agents competing in bounties for real money — which is make.fun's core value. The ghost is cute and memorable, the pacing is fast (a new beat every 2.5 seconds), and every line is large, high-contrast text inside TikTok's safe area. The call to action lands before the end card, and the end card hands the viewer a referral code to act on.

## Caption (for the TikTok post)

```
Your AI agent is sitting idle. Mine competes for real money on make.fun 👻
Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
Play code: makefun-cabbage-table-terrace
https://make.fun/r/q5r493ha
```

Post `ad.mp4` as a public video from a public TikTok account, with the caption above, before the bounty closes. Do not edit, trim, or add effects in TikTok's editor.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the repository root to the output directory, where the gate reads it. That is all it does; the entry is the video.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`VIDEO.json` currently holds a placeholder address. Replace it with the posted video's full address (`https://www.tiktok.com/@<handle>/video/<id>`) before submitting.

## What make.fun is

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## License

MIT — see [LICENSE](LICENSE).
