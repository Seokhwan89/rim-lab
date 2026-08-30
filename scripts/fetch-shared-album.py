#!/usr/bin/env python3
"""Fetch photos from a public Google Photos shared-album link.

Usage:
  python3 scripts/fetch-shared-album.py <share-url> <out-dir> [--state state.json]

Lists every photo in the shared album (no login needed — link sharing must be
on), downloads any photo not yet recorded in the state file at up to 1600px,
and updates the state file. Designed for the RIM Lab standing album: the same
link keeps serving newly added photos, so re-running picks up only what's new.
"""
import json, os, re, subprocess, sys, hashlib

UA = ('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
      '(KHTML, like Gecko) Chrome/126.0 Safari/537.36')

def curl(url, out=None):
    cmd = ['curl', '-sL', '--max-time', '60', '-A', UA, url]
    if out:
        cmd += ['-o', out]
        return subprocess.run(cmd).returncode == 0
    r = subprocess.run(cmd, capture_output=True)
    return r.stdout.decode('utf-8', 'ignore')

def main():
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    share_url, out_dir = sys.argv[1], sys.argv[2]
    state_path = sys.argv[sys.argv.index('--state') + 1] if '--state' in sys.argv else os.path.join(out_dir, '.album-state.json')
    os.makedirs(out_dir, exist_ok=True)
    seen = set()
    if os.path.exists(state_path):
        seen = set(json.load(open(state_path)).get('seen', []))

    html = curl(share_url)
    # base URLs of album media; each is served at any size via =wNNNN / =d suffix
    urls = sorted(set(re.findall(r'https://lh3\.googleusercontent\.com/pw/[A-Za-z0-9_-]{40,}', html)))
    if not urls:
        sys.exit('no photos found — is link sharing on for this album?')
    print(f'album has {len(urls)} media items; {len(seen)} already seen')
    new = 0
    for u in urls:
        pid = hashlib.md5(u.encode()).hexdigest()[:16]
        if pid in seen:
            continue
        out = os.path.join(out_dir, f'gp_{pid}.jpg')
        if curl(u + '=w1600', out) and os.path.getsize(out) > 1000:
            print('downloaded', out)
            seen.add(pid)
            new += 1
        else:
            print('FAILED', u[:80])
    json.dump({'seen': sorted(seen), 'album': share_url}, open(state_path, 'w'), indent=1)
    print(f'done: {new} new photo(s)')

if __name__ == '__main__':
    main()
