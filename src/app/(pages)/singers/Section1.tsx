import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";

export default async function Section1() {
  let result: any = await new Promise((resolve) => {
    const singersRef = ref(dbFirebase, "singers");
    onValue(singersRef, async (snapshot) => {
      const data: any = [];
      for (const key in snapshot.val()) {
        const value = snapshot.val()[key];
        data.push({
          id: key,
          title: value.title,
          image: value.image,
          description: value.description,
          link: `/singers/${key}`
        });
      }
      resolve(data);
    });
  });

  return (
    <>
      <div className="mt-[30px]">
        <Title text="Danh Sách Ca Sĩ" />
        <CardList data={result} />
      </div>
    </>
  )
}