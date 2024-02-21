import Link from "next/link";

export default function Sidebar({ selection }) {
    return (
        <div className="flex flex-col gap-10">
            <Link
                href="/dashboard"
                className={
                    selection == 0
                        ? "SidebarItem Selected flex items-center gap-6 justify-center"
                        : "SidebarItem Unselected flex items-center gap-6 justify-center"
                }
            >
                <div className="w-[58px] flex flex-row-reverse">
                    <img src="svg/homeIcon.svg" className="SidebarIcon" />
                </div>
                <div className="SidebarLabel w-[155px]">Home</div>
            </Link>
            <Link
                href=""
                className={
                    selection == 1
                        ? "SidebarItem Selected flex items-center gap-6 justify-center"
                        : "SidebarItem Unselected flex items-center gap-6 justify-center"
                }
            >
                <div className="w-[58px] flex flex-row-reverse">
                    <img src="svg/quizzesIcon.svg" className="SidebarIcon" />
                </div>
                <div className="SidebarLabel w-[155px]">Quizzes</div>
            </Link>
            <Link
                href=""
                className={
                    selection == 2
                        ? "SidebarItem Selected flex items-center gap-6 justify-center"
                        : "SidebarItem Unselected flex items-center gap-6 justify-center"
                }
            >
                <div className="w-[58px] flex flex-row-reverse">
                    <img src="svg/newspaperIcon.svg" className="SidebarIcon" />
                </div>
                <div className="SidebarLabel w-[155px]">Resources</div>
            </Link>
            <Link
                href=""
                className={
                    selection == 3
                        ? "SidebarItem Selected flex items-center gap-6 justify-center"
                        : "SidebarItem Unselected flex items-center gap-6 justify-center"
                }
            >
                <div className="w-[58px] flex flex-row-reverse">
                    <img src="svg/accountIcon.svg" className="SidebarIcon" />
                </div>
                <div className="SidebarLabel w-[155px]">Profile</div>
            </Link>
        </div>
    );
}
