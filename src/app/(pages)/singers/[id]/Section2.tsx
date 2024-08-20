/* eslint-disable @next/next/no-img-element */
import SongList2 from "@/app/components/song/SongList2";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";

export default async function Section2(props: { singerId: string }) {
  const { singerId } = props;

  const result: any = await new Promise((resolve) => {
    const songsRef = ref(dbFirebase, "songs");
    onValue(songsRef, async (snapshot) => {
      const data: any = [];
      for (const key in snapshot.val()) {
        const value = snapshot.val()[key];
        if(value.singerId.includes(singerId)) {
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
      }
      resolve(data);
    });
  });

  return (
    <>
      <div className="mt-[30px]">
        <Title text="Danh Sách Bài Hát" />

        <SongList2 data={result} />
      </div>
    </>
  )
}