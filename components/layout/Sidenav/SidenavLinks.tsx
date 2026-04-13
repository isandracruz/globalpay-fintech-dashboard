'use client';

import { clsx } from "clsx";
import { LayoutDashboard, ArrowLeftRight, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: 'Dashboard',
        href: '/',
        icon: LayoutDashboard
    },
    {
        name: 'Transfers',
        href: '/transfers',
        icon: ArrowLeftRight
    },
    {
        name: 'Beneficiaries',
        href: '/beneficiaries',
        icon: Users
    },
];

export default function SidenavLinks() {
    const pathname = usePathname();

    return (
        <nav className="flex-1 flex flex-col gap-2">
            {links.map((link) => {
                const LinkIcon = link.icon;

                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx("text-on-surface-variant hover:bg-[#00293d]/30 rounded-xl px-4 py-3 flex items-center gap-3 transition-all", {
                            "bg-surface-variant text-primary": pathname === link.href
                        })}

                    >
                        <LinkIcon size={20} strokeWidth={2} />

                        <span className="font-medium text-sm">{link.name}</span>
                    </Link>
                )
            })}
        </nav>
    );
}