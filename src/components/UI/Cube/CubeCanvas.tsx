"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
};

export default function CubeCanvas({
  width = 100,
  height = 100,
  depth = 50,
}: {
  width?: number;
  height?: number;
  depth?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function drawCube() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = width;
      const h = height;
      const d = depth;

      const originX = canvas.height / 2 - w;
      const originY = canvas.height / 2 + d;

      const frontTopLeft: Point = { x: originX, y: originY };
      const frontTopRight: Point = { x: originX + w, y: originY };
      const frontBottomLeft: Point = { x: originX, y: originY + h };
      const frontBottomRight: Point = { x: originX + w, y: originY + h };

      const backTopLeft: Point = {
        x: frontTopLeft.x + d,
        y: frontTopLeft.y - d,
      };
      const backTopRight: Point = {
        x: frontTopRight.x + d,
        y: frontTopRight.y - d,
      };
      const backBottomLeft: Point = {
        x: frontBottomLeft.x + d,
        y: frontBottomLeft.y - d,
      };
      const backBottomRight: Point = {
        x: frontBottomRight.x + d,
        y: frontBottomRight.y - d,
      };

      ctx.lineWidth = 2;
      ctx.strokeStyle = "#fff";

      ctx.beginPath();
      ctx.moveTo(frontTopLeft.x, frontTopLeft.y);
      ctx.lineTo(backTopLeft.x, backTopLeft.y);

      ctx.moveTo(frontTopRight.x, frontTopRight.y);
      ctx.lineTo(backTopRight.x, backTopRight.y);

      ctx.moveTo(frontBottomRight.x, frontBottomRight.y);
      ctx.lineTo(backBottomRight.x, backBottomRight.y);

      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(backTopLeft.x, backTopLeft.y);
      ctx.lineTo(backTopRight.x, backTopRight.y);
      ctx.moveTo(backTopRight.x, backTopRight.y);
      ctx.lineTo(backBottomRight.x, backBottomRight.y);
      ctx.closePath();
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(frontTopLeft.x, frontTopLeft.y);
      ctx.lineTo(frontTopRight.x, frontTopRight.y);
      ctx.lineTo(frontBottomRight.x, frontBottomRight.y);
      ctx.lineTo(frontBottomLeft.x, frontBottomLeft.y);
      ctx.closePath();
      ctx.stroke();
    }

    drawCube();
  }, [width, height, depth]);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={400}
      style={{
        display: "block",
        border:"1px solid #fff",
        borderRadius: "1rem"
      }}
    />
  );
}
