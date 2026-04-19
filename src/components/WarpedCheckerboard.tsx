type WarpedCheckerboardProps = {
  className?: string;
  invert?: boolean;
  /** Per-tile opacity (default tuned for primary bg; use ~0.1–0.14 on white backgrounds). */
  tileOpacity?: number;
};

const WarpedCheckerboard = ({
  className = "",
  invert = false,
  tileOpacity = 0.08,
}: WarpedCheckerboardProps) => {
  const fill = invert ? "hsl(var(--primary-foreground))" : "hsl(var(--primary))";

  // Generate a grid of warped checker squares
  const cols = 8;
  const rows = 10;
  const size = 50;

  const getWarp = (x: number, y: number) => {
    const cx = (cols * size) / 2;
    const cy = (rows * size) / 2;
    const dx = x - cx;
    const dy = y - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxDist = Math.sqrt(cx * cx + cy * cy);
    const factor = 0.3 * (dist / maxDist);
    return {
      x: x + dx * factor,
      y: y + dy * factor,
    };
  };

  const squares: React.ReactNode[] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const isChecked = (row + col) % 2 === 0;
      if (!isChecked) continue;

      const p1 = getWarp(col * size, row * size);
      const p2 = getWarp((col + 1) * size, row * size);
      const p3 = getWarp((col + 1) * size, (row + 1) * size);
      const p4 = getWarp(col * size, (row + 1) * size);

      squares.push(
        <polygon
          key={`${row}-${col}`}
          points={`${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y} ${p4.x},${p4.y}`}
          fill={fill}
          opacity={tileOpacity}
        />
      );
    }
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        viewBox={`0 0 ${cols * size} ${rows * size}`}
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        {squares}
      </svg>
    </div>
  );
};

export default WarpedCheckerboard;
