"use client";

import { useEffect, useRef, useCallback } from "react";

export type DistractionType =
    | "phone"
    | "social_media"
    | "conversation"
    | "daydreaming"
    | "food"
    | "other";

interface UseDistractionWatcherOptions {
    isActive: boolean;
    onDistraction: (type: DistractionType) => void;
    onReturn: () => void;
    debounceMs?: number;
}

export function useDistractionWatcher({
    isActive,
    onDistraction,
    onReturn,
    debounceMs = 500,
}: UseDistractionWatcherOptions) {
    const lastVisibilityChange = useRef<number>(0);
    const isDistracted = useRef<boolean>(false);

    const handleVisibilityChange = useCallback(() => {
        if (!isActive) return;

        const now = Date.now();
        if (now - lastVisibilityChange.current < debounceMs) return;
        lastVisibilityChange.current = now;

        if (document.hidden) {
            if (!isDistracted.current) {
                isDistracted.current = true;
                onDistraction("other");
            }
        } else {
            if (isDistracted.current) {
                isDistracted.current = false;
                onReturn();
            }
        }
    }, [isActive, onDistraction, onReturn, debounceMs]);

    const handleBlur = useCallback(() => {
        if (!isActive) return;

        const now = Date.now();
        if (now - lastVisibilityChange.current < debounceMs) return;
        lastVisibilityChange.current = now;

        if (!isDistracted.current) {
            isDistracted.current = true;
            onDistraction("other");
        }
    }, [isActive, onDistraction, debounceMs]);

    const handleFocus = useCallback(() => {
        if (!isActive) return;

        if (isDistracted.current) {
            isDistracted.current = false;
            onReturn();
        }
    }, [isActive, onReturn]);

    useEffect(() => {
        if (!isActive) {
            isDistracted.current = false;
            return;
        }

        document.addEventListener("visibilitychange", handleVisibilityChange);
        window.addEventListener("blur", handleBlur);
        window.addEventListener("focus", handleFocus);

        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            window.removeEventListener("blur", handleBlur);
            window.removeEventListener("focus", handleFocus);
        };
    }, [isActive, handleVisibilityChange, handleBlur, handleFocus]);

    return {
        resetDistraction: () => {
            isDistracted.current = false;
        },
    };
}
