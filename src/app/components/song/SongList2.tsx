/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import SongItem2 from "./SongItem2";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";

export default function SongList2(props: any) {
  const { data } = props;
  const [singers, setSingers] = useState<{ [key: string]: string }>({});
  const [updatedData, setUpdatedData] = useState<any[]>([]);

  useEffect(() => {
    const singerRef = ref(dbFirebase, "singers");
    onValue(singerRef, (snapshot) => {
      const singersData: { [key: string]: string } = {};
      snapshot.forEach((childSnapshot) => {
        const key = childSnapshot.key;
        const value = childSnapshot.val();
        singersData[key] = value.title;
      });
      setSingers(singersData);
    });
  }, []);

  useEffect(() => {
    const newData = data.map((item: any) => {
      let singerNames = "";
      if (Array.isArray(item.singerId)) {
        singerNames = item.singerId.map((id: string) => singers[id] || "").join(", ");
      }
      return {
        ...item,
        singer: singerNames
      };
    });
    setUpdatedData(newData);
  }, [data, singers]);

  return (
    <>
      <div className="grid grid-cols-1 gap-[10px]">
        {updatedData.map((item: any, index: number) => (
          <SongItem2
            id={item.id} 
            key={index}
            image={item.image}
            title={item.title}
            singer={item.singer}
            time={item.time}
            link={item.link}
            audio={item.audio}
            wishlist={item.wishlist}
          />
        ))}
      </div>
    </>
  );
}
