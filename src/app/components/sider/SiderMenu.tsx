"use client"

import { authFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { ReactNode, useEffect, useState } from "react";
import { FaHeart, FaHouse, FaMusic, FaPodcast, FaRightFromBracket, FaUser, FaUserPlus } from "react-icons/fa6";
import SiderMenuItem from "./SiderMenuItem";

export default function SiderMenu() {
  const [isLogin, setIsLogin] = useState<boolean>();

  useEffect(() => {
    onAuthStateChanged(authFirebase, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("Đã đăng nhập", uid);
        setIsLogin(true);
      } else {
        console.log("Chưa đăng nhập");
        setIsLogin(false);
      }
    });
  }, []);

  interface MenuLink {
    icon: ReactNode,
    title: string, // Thay đổi từ String thành string
    link: string, // Thay đổi từ Url thành string
    logged?: Boolean
  }

  const menu: MenuLink[] = [
    {
      icon: <FaHouse />,
      title: "Trang Chủ",
      link: "/"
    },
    {
      icon: <FaMusic />,
      title: "Danh mục bài hát",
      link: "/categories"
    },
    {
      icon: <FaPodcast />,
      title: "Ca sĩ",
      link: "/singers"
    },
    {
      icon: <FaHeart />,
      title: "Bài hát yêu thích",
      link: "/wishlist",
      logged: true
    },
    {
      icon: <FaRightFromBracket />,
      title: "Đăng xuất",
      link: "/logout",
      logged: true
    },
    {
      icon: <FaUser />,
      title: "Đăng nhập",
      link: "/login",
      logged: false
    },
    {
      icon: <FaUserPlus />,
      title: "Đăng ký",
      link: "/register",
      logged: false
    }
  ]

  return (
    <>
      <nav className="pt-[30px] px-[20px]">
        <ul className="">
          {menu.map((item, index) => (
            <SiderMenuItem key={index} item={item}
              isShow={item.logged === undefined || item. logged === isLogin ? true : false}
            />
          ))}
        </ul>
      </nav>
    </>
  )
}
