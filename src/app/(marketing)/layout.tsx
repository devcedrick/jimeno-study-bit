import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { createServerClient } from "@/lib/supabase";

export default async function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const supabase = await createServerClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    return (
        <>
            <Header user={user} />
            <main id="main-content" className="flex-1 pt-16" role="main">
                {children}
            </main>
            <Footer />
        </>
    );
}
