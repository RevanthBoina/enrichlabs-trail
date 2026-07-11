import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | undefined>(undefined);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Viewport visibility detection - pause cursor when out of viewport
    const el = cursorRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Check for touch device - hide cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // Add class to body to hide native cursor on interactive elements
    document.body.classList.add("cursor-active");

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
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = undefined;
      }
      // Remove class to restore native cursor
      document.body.classList.remove("cursor-active");
    };
  }, [isVisible]);

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />;
}
