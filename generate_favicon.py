#!/usr/bin/env python3
"""Render the SVG favicon. Run: uv run --with cairosvg --with pillow generate_favicon.py"""

from io import BytesIO
from pathlib import Path

import cairosvg
from PIL import Image


def main():
    static = Path(__file__).resolve().parent / "static"
    source = (static / "favicon.svg").read_bytes()
    master = Image.open(BytesIO(cairosvg.svg2png(
        bytestring=source, output_width=1024, output_height=1024,
    )))
    sizes = {
        "favicon-key-16.png": 16,
        "favicon-key-32.png": 32,
        "apple-touch-icon-key.png": 180,
        # Keep older bookmarks and clients consistent with the new icon.
        "favicon-16x16.png": 16,
        "favicon-32x32.png": 32,
        "apple-touch-icon.png": 180,
        "sc.png": 512,
        "img/favicon-16x16.png": 16,
        "img/favicon-32x32.png": 32,
        "img/apple-touch-icon.png": 180,
    }
    for filename, size in sizes.items():
        master.resize((size, size), Image.Resampling.LANCZOS).save(static / filename)
    master.save(static / "favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
    (static / "img/favicon.ico").write_bytes((static / "favicon.ico").read_bytes())
    print("Generated SVG favicon's PNG, Apple touch, and ICO variants.")


if __name__ == "__main__":
    main()
