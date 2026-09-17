#!/usr/bin/env python3
"""Convert photos for the site: JPEG/PNG -> WebP, long edge <= 1200px, quality 76.
Usage: python3 scripts/optimize-image.py <input> <output.webp> [--max 1200] [--q 76]
All images under public/images are stored this way (2026-09-17) to stay well
inside the Vercel Hobby bandwidth allotment."""
import sys, argparse
from PIL import Image, ImageOps
ap = argparse.ArgumentParser(); ap.add_argument('src'); ap.add_argument('dst'); ap.add_argument('--max', type=int, default=1200); ap.add_argument('--q', type=int, default=76)
a = ap.parse_args()
im = ImageOps.exif_transpose(Image.open(a.src)).convert('RGB'); w, h = im.size
if max(w, h) > a.max:
    s = a.max / max(w, h); im = im.resize((round(w * s), round(h * s)), Image.LANCZOS)
assert a.dst.endswith('.webp'), 'output must be .webp'
im.save(a.dst, 'WEBP', quality=a.q, method=6); print(a.dst, im.size)
