'use client';
import { useEffect, useRef, useState } from 'react';
type ScrollDirection = 'up' | 'down';
export function useScrollDirection(
    threshold: number = 10,
    initialDirection: ScrollDirection = 'up',
): ScrollDirection {
    const [direction, setDirection] = useState<ScrollDirection>(initialDirection);
    const lastYRef = useRef<number>(0);
    const tickingRef = useRef<boolean>(false);
    useEffect(() => {
        lastYRef.current = window.scrollY || 0;
        const update = () => {
            const currentY = window.scrollY || 0;
            const diff = currentY - lastYRef.current;
            if (Math.abs(diff) < threshold) {
                tickingRef.current = false;
                return;
            }
            const nextDirection: ScrollDirection = diff > 0 ? 'down' : 'up';
            setDirection((prev) => (prev === nextDirection ? prev : nextDirection));
            lastYRef.current = currentY;
            tickingRef.current = false;
        };
        const onScroll = () => {
            if (tickingRef.current) return;
            tickingRef.current = true;
            window.requestAnimationFrame(update);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [threshold]);
    return direction;
}
