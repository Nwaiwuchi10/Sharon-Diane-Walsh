"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => { setPos({ x: e.clientX, y: e.clientY }); setVisible(true); };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => { window.removeEventListener("mousemove", move); document.removeEventListener("mouseleave", leave); };
  }, []);

  useEffect(() => {
    let id: number;
    const tick = () => {
      setTrail(prev => ({ x: prev.x + (pos.x - prev.x) * 0.13, y: prev.y + (pos.y - prev.y) * 0.13 }));
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [pos]);

  useEffect(() => {
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovered(!!(t.closest("a") || t.closest("button") || t.tagName === "INPUT" || t.tagName === "TEXTAREA"));
    };
    window.addEventListener("mouseover", over);
    return () => window.removeEventListener("mouseover", over);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Outer trailing ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-[#c9a84c] transition-[width,height,background] duration-200"
        style={{
          width: hovered ? 56 : 40,
          height: hovered ? 56 : 40,
          transform: `translate3d(${trail.x - (hovered ? 28 : 20)}px, ${trail.y - (hovered ? 28 : 20)}px, 0)`,
          background: hovered ? "rgba(201,168,76,0.12)" : "transparent",
        }}
      />
      {/* Inner dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#c9a84c]"
        style={{
          width: hovered ? 6 : 8,
          height: hovered ? 6 : 8,
          transform: `translate3d(${pos.x - (hovered ? 3 : 4)}px, ${pos.y - (hovered ? 3 : 4)}px, 0)`,
          opacity: hovered ? 0.6 : 1,
        }}
      />
    </>
  );
}
