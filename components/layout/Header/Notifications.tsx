import { Bell } from "lucide-react";

export default function Notifications() {
    return (
        <>
            <div className="relative p-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
                <Bell size={20} strokeWidth={2} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full ring-2 ring-surface"></span>
            </div>
        </>
    );
}