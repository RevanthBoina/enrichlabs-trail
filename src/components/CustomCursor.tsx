import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Check for touch device - hide cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Smooth lerp towards target position (60ms lag)
      currentRef.current.x += (posRef.current.x - currentRef.current.x) * 0.15;
      currentRef.current.y += (posRef.current.y - currentRef.current.y) * 0.15;
      
      if (cursor) {
        cursor.style.left = `${currentRef.current.x}px`;
        cursor.style.top = `${currentRef.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnterInteractive = () => cursor?.classList.add("expanded");
    const onLeaveInteractive = () => cursor?.classList.remove("expanded");

    // Interactive elements that expand the cursor
    const interactives = ".btn-lift, .tilt-card, a, button";
    
    document.addEventListener("mousemove", onMove);
    document.querySelectorAll(interactives).forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.querySelectorAll(interactives).forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />;
}
