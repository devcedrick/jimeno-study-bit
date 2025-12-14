import { Sidebar } from "@/components/layout/Sidebar";
import { createServerClient } from "@/lib/supabase";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function ProtectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    console.log("[ProtectedLayout] Checking auth...");

    const supabase = await createServerClient();
    const { data: { user }, error } = await supabase.auth.getUser();

    console.log("[ProtectedLayout] User:", user?.email || "null", "Error:", error?.message || "none");

    if (!user) {
        console.log("[ProtectedLayout] No user, redirecting to /sign-in");
        redirect("/sign-in");
    }

    console.log("[ProtectedLayout] User authenticated, rendering layout");
    return <Sidebar>{children}</Sidebar>;
}
