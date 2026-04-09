import Sidenav from "@/components/layout/Sidenav/Sidenav";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-surface text-on-surface">
            <Sidenav />

            <main className="flex-1 flex flex-col min-w-0">

                <header className="h-16 border-b border-gray-800/50">
                    <h1>Header</h1>
                </header>

                <div className="flex-1 p-6 md:p-8 overflow-y-auto">
                    {children}
                </div>

            </main>
        </div>
    );
}