"use client";

import { AlertTriangle, ArrowLeft } from "lucide-react";

interface DistractionWarningProps {
    isVisible: boolean;
    distractionCount: number;
    onResume: () => void;
}

export function DistractionWarning({
    isVisible,
    distractionCount,
    onResume,
}: DistractionWarningProps) {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-amber-500/95 z-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                    <AlertTriangle className="w-10 h-10 text-white" />
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                        Distraction Detected!
                    </h2>
                    <p className="text-amber-100">
                        You switched away from your study session.
                        {distractionCount > 1 && (
                            <span className="block mt-1">
                                This is distraction #{distractionCount} this session.
                            </span>
                        )}
                    </p>
                </div>

                <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-amber-100 text-sm">
                        Staying focused improves learning retention by up to 50%.
                    </p>
                </div>

                <button
                    onClick={onResume}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-600 rounded-xl font-bold text-lg hover:bg-amber-50 transition-colors shadow-lg"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Return to Study
                </button>

                <p className="text-amber-200 text-xs">
                    Your timer has been paused.
                </p>
            </div>
        </div>
    );
}
