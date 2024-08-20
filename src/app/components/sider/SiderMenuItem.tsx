import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface MenuLink {
    icon: ReactNode,
    title: string,
    link: string, // Thay đổi từ Url thành string
    logged?: Boolean
}

export default function SiderMenuItem(props: { item: MenuLink, isShow: Boolean }) {
    const { item, isShow = false } = props;

    const pathname = usePathname();

    return (
        <>
            {isShow && (
                <li className="mb-[30px]"> 
                    <Link 
                        href={item.link} 
                        className={
                            "flex items-center hover:text-primary " + (item.link === pathname ? "text-primary" : "text-white") 
                        }
                    >
                        <span className="text-[20px] mr-[20px]">
                            {item.icon}
                        </span>
                        <span className="text-[16px] font-[700]"> 
                            {item.title}
                        </span>
                    </Link>
                </li> 
            )}
        </>
    )
}
