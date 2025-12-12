import { SessionTimerClient } from "@/components/SessionTimerClient";
import { getSubjects } from "@/lib/db/subjects";
import { getActiveSession } from "@/app/actions/sessions";

import { createServerClient } from "@/lib/supabase";

export const metadata = {
    title: "Study Session",
};

export default async function SessionsPage() {
    const supabase = await createServerClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    const [subjects, activeSession, profileResult] = await Promise.all([
        getSubjects(),
        getActiveSession(),
        user
            ? supabase
                .from("profiles")
                .select("penalty_mode")
                .eq("id", user.id)
                .single()
            : Promise.resolve({ data: null }),
    ]);

    const penaltyMode = profileResult.data?.penalty_mode as "none" | "pause_timer" | "streak_debit" | null;

    return (
        <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white py-8 px-4">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-neutral-900 mb-2">
                        Study Session
                    </h1>
                    <p className="text-neutral-600">
                        Track your focus time and build consistent study habits
                    </p>
                </div>

                <SessionTimerClient
                    subjects={subjects}
                    initialActiveSession={activeSession}
                    penaltyMode={penaltyMode}
                />
            </div>
        </div>
    );
}
