import Footer from "@/app/_components/Footer/Footer";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function SignupLayout({ children }) {
    return (
        <section className="flex flex-col w-full">
            <div className="flex">{children}</div>
            <Footer />
        </section>
    );
}
