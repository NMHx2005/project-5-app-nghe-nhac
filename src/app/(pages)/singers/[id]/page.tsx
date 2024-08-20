import CardInfor from "@/app/components/card/CardInfor";
import Section2 from "./Section2";
import { onValue, ref } from "firebase/database";
import { dbFirebase } from "@/app/firebaseConfig";
import { notFound } from "next/navigation";

export default async function SingerDetailPage({ params }: { params: { id: string } }) {

  const result: any = await new Promise((resolve) => {
    const singerRef = ref(dbFirebase, `singers/${params.id}`);
    onValue(singerRef, async (snapshot) => {
      const data = snapshot.val();
      resolve(data);
    });
  });

  if(!result) {
    notFound();
  }

  return (
    <>
      {/* CardInfo */}
      <CardInfor
        image={result.image}
        title={result.title}
        description={result.description}
        singerId={result.singerId}
      />

      {/* Section 2: Danh Sách Bài Hát */}
      <Section2 singerId={params.id} />
    </>
  );
}