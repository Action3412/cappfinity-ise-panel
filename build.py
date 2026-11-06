#!/usr/bin/env python3
"""Assemble dist/ (index.html + vote/index.html) from src/.  Usage: build.py <vote_url>"""
import re, sys, os, shutil, qrcode

ROOT = os.path.dirname(os.path.abspath(__file__))
vote_url = sys.argv[1] if len(sys.argv) > 1 else "https://cappfinity-ise-panel.netlify.app/vote/"
vote_short = re.sub(r"^https?://", "", vote_url).rstrip("/")

def qr_svg(data, dark="#262626"):
    q = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, border=1)
    q.add_data(data); q.make(); m = q.get_matrix(); n = len(m)
    rects = "".join(f'<rect x="{x}" y="{y}" width="1" height="1"/>' for y, row in enumerate(m) for x, v in enumerate(row) if v)
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {n} {n}" shape-rendering="crispEdges"><g fill="{dark}">{rects}</g></svg>'

rd = lambda p: open(os.path.join(ROOT, p), encoding="utf-8").read()
strip_dims = lambda svg: re.sub(r'<svg width="\d+" height="\d+"', "<svg", svg, count=1)

cfg = rd("src/poll-config.js").replace("__VOTE_URL__", vote_url).replace("__VOTE_SHORT__", vote_short)
lib = rd("library.js").replace(" — ", " – ").replace("—", " – ")
wm = rd("assets/wordmark.b64").strip()
qr_sd = rd("assets/qr.svg")                      # Skills Discovery link QR (placeholder until the real link arrives)
lock = strip_dims(rd("assets/lockup-clean.svg"))
sd = strip_dims(rd("assets/sd-clean.svg"))
qr_vote = qr_svg(vote_url)

index = (rd("src/index.html")
         .replace("__POLLCFG__", cfg).replace("__LIBRARY__", lib).replace("__WORDMARK__", wm)
         .replace("__QR__", qr_sd).replace("__LOCKUP__", lock).replace("__SDMARK__", sd).replace("__QRVOTE__", qr_vote))
vote = rd("src/vote.html").replace("__POLLCFG__", cfg).replace("__WORDMARK__", wm)

dist = os.path.join(ROOT, "dist")
os.makedirs(os.path.join(dist, "vote"), exist_ok=True)
open(os.path.join(dist, "index.html"), "w", encoding="utf-8").write(index)
open(os.path.join(dist, "vote", "index.html"), "w", encoding="utf-8").write(vote)
open(os.path.join(dist, "_headers"), "w").write("/*\n  Cache-Control: no-cache\n")
for leftover in ("__", ):
    for f in ("index.html", "vote/index.html"):
        t = open(os.path.join(dist, f), encoding="utf-8").read()
        m = re.findall(r"__[A-Z_]+__", t)
        if m: print("UNRESOLVED placeholders in", f, set(m))
print("built", vote_url, len(index), len(vote))
