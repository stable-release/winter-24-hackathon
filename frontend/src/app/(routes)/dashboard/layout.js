import Navbar from "@/app/_components/Navbar";
import Sidebar from "@/app/_components/SideNavbar/Sidebar";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function SignupLayout({ children }) {
    return (
        <div className="w-full h-full">
            <Navbar />
            <div className="flex min-h-full">
                <div className="flex w-[245px] pl-[24px] pt-[150px] h-full">
                    <Sidebar selection={0} />
                </div>
                {children}
            </div>
        </div>
    );
}
