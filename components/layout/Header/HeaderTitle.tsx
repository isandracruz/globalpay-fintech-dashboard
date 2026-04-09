"use client";

import { usePathname } from "next/navigation";

export default function HeaderTitle() {
    const pathname = usePathname();
    const pathSegment = pathname.split("/")[1];
    const title = pathSegment 
    ? pathSegment.charAt(0).toUpperCase() + pathSegment.slice(1)
    : "Dashboard";

    return (
        <div>
            <h2 className="text-xl font-bold text-on-surface">{title}</h2>
        </div>
    );
}