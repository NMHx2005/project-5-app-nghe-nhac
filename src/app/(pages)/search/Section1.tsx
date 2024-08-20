"use client"

/* eslint-disable @next/next/no-img-element */
import SongList2 from "@/app/components/song/SongList2";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Section1() {
  const searchParams = useSearchParams();
  const keywordDefault = searchParams.get("keyword") || "";
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchApi = async () => {
      let result: any = await new Promise((resolve) => {
        const songsRef = ref(dbFirebase, "songs");
        onValue(songsRef, async (snapshot) => {
          const data: any = [];
          for (const key in snapshot.val()) { 
            const value = snapshot.val()[key];
            data.push({
              id: key,
              title: value.title,
              image: value.image,
              audio: value.audio,
              listen: value.listen,
              link: `/song/${key}`,
              singerId: value.singerId
            });
          }
          resolve(data);
        });
      });

      const regex = new RegExp(keywordDefault, "i");
      result = result.filter((item: any) => regex.test(item.title));

      setData(result);
    }
    fetchApi();
  }, [keywordDefault]);

  return (
    <>
      <div className="mt-[30px]">
        <Title text="Kết Quả Tìm Kiếm" />

        <SongList2 data={data} />
      </div>
    </>
  )
}