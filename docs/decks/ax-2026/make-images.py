#!/usr/bin/env python3
"""Rebuild deck/img/ from the repo's WebP assets (PPTX cannot embed WebP)."""
import os, subprocess, sys
from PIL import Image

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', '..'))
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'img')

SRC = {
    'group':     'public/images/lab/group-photo.webp',
    'lab-space': 'public/images/lab/lab-space-1.webp',
    'ai-grasp':  'public/images/projects/ai-based-multifinger-grasping.webp',
    'hands':     'public/images/projects/robotic-hands.webp',
    'cvt':       'public/images/projects/compact-variable-transmission.webp',
    'magnetic':  'public/images/projects/magnetic-gear.webp',
    'factory':   'public/images/projects/factory-automation.webp',
    'surgical':  'public/images/projects/surgical-robots.webp',
    'exo':       'public/images/projects/hand-exoskeletons.webp',
    'lowerlimb': 'public/images/projects/lower-limb-exo.webp',
    'tesollo':   'public/images/lab/equipment-tesollo-dg5fm.webp',
    'optitrack': 'public/images/lab/equipment-optitrack.webp',
    'printer':   'public/images/lab/equipment-3d-printing.webp',
    'mecheye':   'public/images/lab/equipment-mecheye-nano.webp',
}

os.makedirs(OUT, exist_ok=True)
for name, rel in SRC.items():
    src = os.path.join(ROOT, rel)
    if not os.path.exists(src):
        print('missing:', rel, file=sys.stderr)
        continue
    im = Image.open(src).convert('RGB')
    im.save(os.path.join(OUT, name + '.jpg'), 'JPEG', quality=88)

Image.open(os.path.join(ROOT, 'public/logo/rim-mark.png')).save(os.path.join(OUT, 'logo.png'))

import qrcode
qrcode.make('https://rim.sogang.ac.kr').save(os.path.join(OUT, 'qr.png'))
print('wrote', OUT)
