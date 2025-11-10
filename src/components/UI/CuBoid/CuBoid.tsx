import React from "react";
import "./styles.module.css";

type Rotation = {
  x: number;
  y: number;
};

type CuboidProps = {
  width?: number;
  height?: number;
  depth?: number;
  gap?: number;
  perspective?: number;
  rotation?: Rotation;
};

export default function Cuboid({
  width = 500,
  height = 500,
  depth = 500,
  gap = 0,
  perspective = 1000,
  rotation = { x: 0, y: 0 },
}: CuboidProps) {
  const OFFSET = 200;

  const px = (n: number) => `${n}px`;

  const sx = {
    container: {
      width: px(width),
      height: px(height),
      perspective: px(perspective),
      direction: "ltr",
    } as React.CSSProperties,

    cuboid: {
      width: px(width),
      height: px(height),
      position: "relative" as const,
      transformStyle: "preserve-3d" as const,
      transform: `translateZ(${px(OFFSET * -1)}) rotateX(${
        rotation.x
      }deg) rotateY(${rotation.y}deg)`,
      transition: "transform ease-out .5s",
    } as React.CSSProperties,

    face: {
      base: {
        position: "absolute" as const,
        width: px(width),
        height: px(height),
        border: "2px solid var(--color-dark-font-secondary)",
        boxShadow: "inset 0 0 1rem hsl(var(--hue) 71% 30%)",
        fontSize: "0",
        fontWeight: "bold" as const,
        color: "white",
        display: "flex" as const,
        justifyContent: "center" as const,
        alignItems: "center" as const,
        textShadow: ".1em .1em  #000",
        backgroundImage: `
          radial-gradient(rgb(255 255 255 / .2) 1px, transparent 1px),
          radial-gradient(rgb(255 255 255 / .1) 1px, transparent 1px)`,
        backgroundSize: "calc(20 * 1px) calc(20 * 1px)",
        backgroundPosition: "0 0, calc(10 * 1px) calc(10 * 1px)",
        textTransform: "uppercase" as const,
      } as React.CSSProperties,

      front: {
        transform: `rotateY(0deg) translateZ(${depth / 2 + gap}px)`,
      } as React.CSSProperties,

      back: {
        transform: `rotateY(180deg) translateZ(${depth / 2 + gap}px)`,
      } as React.CSSProperties,

      right: {
        width: px(depth),
        transform: `rotateY(90deg) translateZ(${width - depth / 2 + gap}px)`,
      } as React.CSSProperties,

      left: {
        width: px(depth),
        transform: `rotateY(-90deg) translateZ(${depth / 2 + gap}px)`,
      } as React.CSSProperties,

      top: {
        height: px(depth),
        transform: `rotateX(90deg) translateZ(${depth / 2 + gap}px)`,
      } as React.CSSProperties,

      bottom: {
        height: px(depth),
        transform: `rotateX(-90deg) translateZ(${height - depth / 2 + gap}px)`,
      } as React.CSSProperties,
    },
  };

  return (
    <div style={sx.container}>
      <div style={sx.cuboid}>
        <div style={{ ...sx.face.base, ...sx.face.front }}>جلو</div>
        <div style={{ ...sx.face.base, ...sx.face.left }}>چپ</div>
        <div style={{ ...sx.face.base, ...sx.face.top }}>بالا</div>
        <div style={{ ...sx.face.base, ...sx.face.bottom }}>پایین</div>
        <div style={{ ...sx.face.base, ...sx.face.right }}>راست</div>
        <div style={{ ...sx.face.base, ...sx.face.back }}>عقب</div>
      </div>
    </div>
  );
}
