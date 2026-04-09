import SidenavFooter from "./SidenavFooter";
import SidenavLinks from "./SidenavLinks";
import SidenavLogo from "./SidenavLogo";

export default function Sidenav() {
    return (
        <aside className="left-0 top-0 h-screen w-64 bg-surface-container-low flex flex-col p-6 z-50 border-r border-outline-variant/10">
            <SidenavLogo />

            <SidenavLinks />

            <SidenavFooter />
        </aside>
    );
}