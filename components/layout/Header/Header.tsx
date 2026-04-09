import HeaderTitle from "./HeaderTitle";
import Notifications from "./Notifications";
import UserProfile from "./UserProfile";

export default function Header() {
    return (
        <header className="sticky top-0 z-40 bg-[#00101b]/80 backdrop-blur-xl flex justify-between items-center px-8 h-12 w-full border-b border-outline-variant/30">
            <HeaderTitle />

            <div className="flex items-center gap-6">

                <Notifications />

                <div className="h-6 w-px bg-outline-variant/30"></div>

                <UserProfile />
            </div>
        </header>
    );
}