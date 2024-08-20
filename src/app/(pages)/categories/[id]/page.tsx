import CardInfor from "@/app/components/card/CardInfor";
import Section2 from "./Section2";
import { onValue, ref } from "firebase/database";
import { dbFirebase } from "@/app/firebaseConfig";
import { notFound } from "next/navigation";

/* eslint-disable @next/next/no-img-element */
export default async function SongsByCategoryPage(props: { params: { id: string } }) {
  const { params } = props;

  const result: any = await new Promise((resolve) => {
    const categoryRef = ref(dbFirebase, `categories/${params.id}`);
    onValue(categoryRef, async (snapshot) => {
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

      {/* Section 2 */}
      <Section2 id={params.id} />
    </>
  );
}