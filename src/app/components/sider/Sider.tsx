import Link from "next/link";
import SiderMenu from "./SiderMenu";

export default function Side() {
    return (
        <>
            <div className="h-[100vh] bg-[#212121] fixed w-[280px]">
                <div className="bg-[#1C1C1C] px-[20px] py-[25px]">
                    <Link href="/">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/logo.svg"
                            alt="Logo"
                            className="h-[42px] w-auto"
                        />
                    </Link>
                </div>
                <SiderMenu />
            </div>
        </>
    );
}