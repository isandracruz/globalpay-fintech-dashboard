import { CircleQuestionMark, Settings } from "lucide-react";

const links = [
    {
        name: 'Settings',
        href: '/settings',
        icon: Settings
    },
    {
        name: 'Support',
        href: '/support',
        icon: CircleQuestionMark 
    }
];

export default function SidenavFooter() {
    return (
        <div className="flex flex-col gap-2 border-t border-outline-variant/10 pt-6">
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-on-surface-variant hover:text-on-surface flex items-center gap-3 py-2 transition-colors"
                    >
                        <LinkIcon size={20} strokeWidth={2} />
                        <span className="text-xs font-medium">{link.name}</span>
                    </a>)
            })}
        </div>
    )

}