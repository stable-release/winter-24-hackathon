import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full bg-[#F0F2F2] h-[136px] mt-auto">
            <div className="mx-[148px] my-[20px] flex">
                <div className="w-1/2 flex flex-col gap-3">
                    <Link href="" className="FooterItem">
                        Company
                    </Link>
                    <Link href="" className="FooterItem">
                        Who We Are
                    </Link>
                    <Link href="" className="FooterItem">
                        Contact
                    </Link>
                </div>
                <div className="w-1/2 flex flex-col justify-center">
                    <div className="w-full flex justify-end gap-5">
                        <Link href="" className="FooterItem">
                            Facebook
                        </Link>
                        <Link href="" className="FooterItem">
                            Instagram
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
