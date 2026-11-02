(() => {
    const canvas = document.getElementById('binary-stream');
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const rowHeight = 23;
    const columnWidth = 28;
    const frameInterval = 1000 / 30;
    let width = 0;
    let height = 0;
    let streams = [];
    let frame = null;
    let previousTime = null;

    function makeStream(column) {
        const length = 12 + Math.floor(Math.random() * 18);
        return {
            x: column * columnWidth + columnWidth / 2,
            y: Math.random() * (height + length * rowHeight),
            speed: 22 + Math.random() * 32,
            length,
            opacity: 0.45 + Math.random() * 0.55,
            gold: Math.random() < 0.16,
            bits: Array.from({ length }, () => Math.random() < 0.5 ? '0' : '1'),
        };
    }

    function draw(elapsed) {
        context.clearRect(0, 0, width, height);
        for (const stream of streams) {
            stream.y += stream.speed * elapsed;
            if (stream.y - stream.length * rowHeight > height) {
                stream.y = -rowHeight;
                stream.bits = stream.bits.map(() => Math.random() < 0.5 ? '0' : '1');
            }
            for (let i = stream.length - 1; i >= 0; i--) {
                const y = stream.y - i * rowHeight;
                if (y < -rowHeight || y > height + rowHeight) continue;
                const fade = 1 - i / stream.length;
                const alpha = (i === 0 ? 0.48 : 0.26 * fade * fade) * stream.opacity;
                context.fillStyle = stream.gold && i < 2
                    ? `rgba(253,181,21,${alpha})`
                    : `rgba(167,210,237,${alpha})`;
                context.fillText(stream.bits[i], stream.x, y);
            }
        }
    }

    function animate(time) {
        if (previousTime === null) previousTime = time;
        const elapsed = time - previousTime;
        if (elapsed >= frameInterval) {
            // A returning tab never jumps forward or tries to catch up.
            draw(Math.min(elapsed / 1000, 0.1));
            previousTime = time;
        }
        frame = requestAnimationFrame(animate);
    }

    function syncMotion() {
        if (frame !== null) cancelAnimationFrame(frame);
        frame = null;
        previousTime = null;
        if (document.hidden) return;
        draw(0);
        if (!motion.matches) frame = requestAnimationFrame(animate);
    }

    function resize() {
        // Mobile browser toolbars often change only the viewport height.
        // Retain existing streams so they do not restart on every scroll.
        const nextWidth = window.innerWidth;
        const nextHeight = window.innerHeight;
        const scale = Math.min(window.devicePixelRatio || 1, 2);
        if (width === nextWidth && height === nextHeight && canvas.width === Math.round(width * scale)) return;
        const widthChanged = width !== nextWidth;
        width = nextWidth;
        height = nextHeight;
        canvas.width = Math.round(width * scale);
        canvas.height = Math.round(height * scale);
        context.setTransform(scale, 0, 0, scale, 0, 0);
        context.font = '14px "IBM Plex Mono", monospace';
        context.textAlign = 'center';
        if (widthChanged || streams.length === 0) {
            streams = Array.from({ length: Math.ceil(width / columnWidth) }, (_, column) => makeStream(column));
        }
        syncMotion();
    }

    window.addEventListener('resize', resize, { passive: true });
    document.addEventListener('visibilitychange', syncMotion);
    motion.addEventListener('change', syncMotion);
    resize();
})();
