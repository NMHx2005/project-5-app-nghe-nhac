import BannerHome from "@/app/components/banner/BannerHome";
import SongList from "@/app/components/song/SongList";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";

export default async function Section1() {
  let result: any = await new Promise((resolve) => {
    const songsRef = ref(dbFirebase, "songs");
    onValue(songsRef, async (snapshot) => {
      const data: any = [];
      for (const key in snapshot.val()) {
        const value = snapshot.val()[key];
        data.push({
          id: key,
          image: value.image,
          title: value.title,
          audio: value.audio,
          listen: value.listen,
          singer: "Hồ Quang Hiếu, Huỳnh Văn",
          wishlist: value.wishlist
        });
      }
      resolve(data);
    });
  });

  result = result.slice(0, 3);

  return (
    <>
      <div className="flex items-start">
        <div className="w-[534px]">
          <BannerHome />
        </div>
        <div className="flex-1 ml-[20px]">
          <Title text="Nghe Nhiều" />
          <SongList data={result} />
        </div>
      </div>
    </>
  )
}