import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";

export default async function Section3() {
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

  result = result.slice(0, 5);

  return (
    <>
      <div className="">
        <Title text="Ca Sĩ Nổi Bật" />
        <CardList data={result} />
      </div>
    </>
  )
}