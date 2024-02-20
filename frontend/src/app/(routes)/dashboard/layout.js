import Footer from "@/app/_components/Footer/Footer";
import Navbar from "@/app/_components/Navbar";
import Sidebar from "@/app/_components/SideNavbar/Sidebar";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function SignupLayout({ children }) {
    return (
        <section className="flex flex-col w-full min-h-[100vh]">
            <Navbar />
            <div className="flex min-h-full">
                <div className="flex w-[245px] pl-[24px] pt-[150px] h-full">
                    <Sidebar selection={0} />
                </div>
                {children}
            </div>
            <Footer />
        </section>
    );
}
