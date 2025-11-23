#!/usr/bin/env python3
"""
Generate favicon PNG files from SVG
Requires: pip install cairosvg pillow
"""

try:
    import cairosvg
    from PIL import Image
    import io
    
    # Read the SVG
    with open('static/favicon.svg', 'r') as f:
        svg_content = f.read()
    
    # Generate different sizes
    sizes = [16, 32, 180]  # 16x16, 32x32, and 180x180 for apple-touch-icon
    
    for size in sizes:
        # Convert SVG to PNG
        png_data = cairosvg.svg2png(bytestring=svg_content.encode('utf-8'), output_width=size, output_height=size)
        
        # Save to appropriate file
        if size == 16:
            filename = 'static/favicon-16x16.png'
        elif size == 32:
            filename = 'static/favicon-32x32.png'
        elif size == 180:
            filename = 'static/apple-touch-icon.png'
        
        with open(filename, 'wb') as f:
            f.write(png_data)
        print(f"Generated {filename}")
    
    # Generate ICO file (16x16)
    png_data = cairosvg.svg2png(bytestring=svg_content.encode('utf-8'), output_width=16, output_height=16)
    img = Image.open(io.BytesIO(png_data))
    img.save('static/favicon.ico', format='ICO', sizes=[(16, 16)])
    print("Generated static/favicon.ico")
    
except ImportError:
    print("Error: cairosvg and pillow are required.")
    print("Install with: pip install cairosvg pillow")
    print("\nAlternatively, you can use online tools to convert static/favicon.svg to PNG/ICO formats")

