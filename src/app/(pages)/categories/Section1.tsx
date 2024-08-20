import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";

export default async function Section1() {
  let result: any = await new Promise((resolve) => {
    const categoriesRef = ref(dbFirebase, "categories");
    onValue(categoriesRef, async (snapshot) => {
      const data: any = [];
      for (const key in snapshot.val()) {
        const value = snapshot.val()[key];
        data.push({
          id: key,
          title: value.title,
          image: value.image,
          description: value.description,
          link: `/categories/${key}`
        });
      }
      resolve(data);
    });
  });

  return (
    <>
      <div className="mt-[30px]">
        <Title text="Danh Mục Bài Hát" />
        <CardList data={result} />
      </div>
    </>
  )
}