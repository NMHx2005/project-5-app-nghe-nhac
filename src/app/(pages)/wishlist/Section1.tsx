"use client";
import SongList2 from "@/app/components/song/SongList2";
import Title from "@/app/components/title/Title";
import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { equalTo, onValue, orderByChild, query, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { FaPlay, FaRegHeart } from "react-icons/fa6";

export default function Section1() {
    const [data, setData] = useState([]);

    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        onAuthStateChanged(authFirebase, async (user) => {
            if (user) {
                const userId = user.uid;
                console.log("Đã đăng nhập", userId);
            
                const result: any = await new Promise((resolve) => {
                    const songsRef = ref(dbFirebase, "songs");
                    onValue(songsRef, async (snapshot) => {
                        const data: any = [];
                        for (const key in snapshot.val()) {
                            const value = snapshot.val()[key];
                            if(value.wishlist && value.wishlist[userId]) {
                                data.push({
                                    id: key,
                                    title: value.title,
                                    image: value.image,
                                    audio: value.audio,
                                    listen: value.listen,
                                    link: `/song/${key}`,
                                    singerId: value.singerId,
                                    wishlist: value.wishlist
                                });
                            }
                        }
                        resolve(data);
                    });
                });
                setData(result);
            }
        });
    }, []);


    return (
        <>
            <div className="mt-[30px]">
                <Title text="Bài Hát Yêu Thích" />

                <SongList2 data={data} />
            </div>
        </>
    )
}