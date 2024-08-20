import CardInfor from "@/app/components/card/CardInfor";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { notFound } from "next/navigation";

export default async function SongDetailPage(props: { params: { id: string } }) {
  const { params } = props;

  const result: any = await new Promise((resolve) => {
    const songRef = ref(dbFirebase, `songs/${params.id}`);
    onValue(songRef, async (snapshot) => {
      const data = snapshot.val();
      resolve(data);
    });
  });

  if(!result) {
    notFound();
  }

  return (
    <>
      {/* CardInfor */}
      <CardInfor
        image={result.image}
        title={result.title}
        singerId={result.singerId} 
        description=""
      />

      {/* Section 2: Lời Bài Hát */}
      <Section2 lyric={result.lyric} />

      {/* Section 3: Bài Hát Cùng Danh Mục */}
      <Section3 categoryId={result.categoryId} songId={params.id} singerId={result.singerId}  />
    </> 
  );
}