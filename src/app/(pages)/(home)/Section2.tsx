import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";

export default async function Section2() {
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

  result = result.slice(0, 5);

  return (
    <>
      <div className="">
        <Title text="Danh Mục Nổi Bật" />
        <CardList data={result} />
      </div>
    </>
  )
}