import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

import Navbar from "./_components/Navbar";
import AuthenticationProvider from "./_contexts/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthenticationProvider>
                    <main className="flex min-h-screen w-full flex-col items-center justify-between text-sm lg:flex">
                        {children}
                    </main>
                </AuthenticationProvider>
            </body>
        </html>
    );
}
