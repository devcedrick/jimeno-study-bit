"use client";

import { useState } from "react";
import { updateProfile } from "@/app/actions/settings";
import { Loader2, Save } from "lucide-react";
import { Button } from "@/components/ui";

interface SettingsFormProps {
    initialProfile: {
        full_name: string | null;
        daily_goal_minutes: number | null;
        penalty_mode: string | null;
    };
}

export function SettingsForm({ initialProfile }: SettingsFormProps) {
    const [fullName, setFullName] = useState(initialProfile.full_name || "");
    const [dailyGoal, setDailyGoal] = useState(initialProfile.daily_goal_minutes?.toString() || "120");
    const [penaltyMode, setPenaltyMode] = useState(initialProfile.penalty_mode || "pause_timer");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsLoading(true);
        setMessage(null);

        const result = await updateProfile({
            fullName,
            dailyGoalMinutes: parseInt(dailyGoal) || 120,
            penaltyMode: penaltyMode as "none" | "pause_timer" | "streak_debit",
        });

        setIsLoading(false);

        if (result.success) {
            setMessage({ type: "success", text: "Settings saved successfully!" });
        } else {
            setMessage({ type: "error", text: result.error || "Failed to save settings" });
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            {message && (
                <div
                    className={`p-4 rounded-lg text-sm ${message.type === "success"
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                        }`}
                >
                    {message.text}
                </div>
            )}

            <section className="space-y-4">
                <h2 className="text-lg font-semibold text-neutral-900 border-b pb-2">
                    Profile Settings
                </h2>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-neutral-700">
                        Full Name
                    </label>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full max-w-md px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-neutral-900 bg-white"
                    />
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-lg font-semibold text-neutral-900 border-b pb-2">
                    Study Preferences
                </h2>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-neutral-700">
                        Daily Goal (minutes)
                    </label>
                    <input
                        type="number"
                        min="10"
                        step="10"
                        value={dailyGoal}
                        onChange={(e) => setDailyGoal(e.target.value)}
                        className="w-full max-w-md px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-neutral-900 bg-white"
                    />
                    <p className="text-xs text-neutral-500">
                        Target study time per day. Default is 120 minutes (2 hours).
                    </p>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-lg font-semibold text-neutral-900 border-b pb-2">
                    Distraction Management
                </h2>
                <div className="space-y-3">
                    <label className="block text-sm font-medium text-neutral-700">
                        Penalty Mode
                    </label>
                    <div className="space-y-2">
                        <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-neutral-50 transition-colors">
                            <input
                                type="radio"
                                name="penaltyMode"
                                value="pause_timer"
                                checked={penaltyMode === "pause_timer"}
                                onChange={(e) => setPenaltyMode(e.target.value)}
                                className="w-4 h-4 text-cyan-600 focus:ring-cyan-500"
                            />
                            <div>
                                <div className="font-medium text-neutral-900">Pause Timer (Recommended)</div>
                                <div className="text-xs text-neutral-500">
                                    Automatically pause the timer when you leave the tab.
                                </div>
                            </div>
                        </label>

                        <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-neutral-50 transition-colors">
                            <input
                                type="radio"
                                name="penaltyMode"
                                value="none"
                                checked={penaltyMode === "none"}
                                onChange={(e) => setPenaltyMode(e.target.value)}
                                className="w-4 h-4 text-cyan-600 focus:ring-cyan-500"
                            />
                            <div>
                                <div className="font-medium text-neutral-900">None</div>
                                <div className="text-xs text-neutral-500">
                                    Just warn me, but don&apos;t pause the timer.
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            </section>

            <div className="pt-4">
                <Button disabled={isLoading} size="lg">
                    {isLoading ? (
                        <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Saving...
                        </>
                    ) : (
                        <>
                            <Save className="w-5 h-5 mr-2" />
                            Save Changes
                        </>
                    )}
                </Button>
            </div>
        </form>
    );
}
