/* eslint-disable @next/next/no-img-element */
import SongList2 from "@/app/components/song/SongList2";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { equalTo, onValue, orderByChild, query, ref } from "firebase/database";

export default async function Section2(props: { id: string }) {
    const { id } = props;

    const result: any = await new Promise((resolve) => {
        const songsRef = ref(dbFirebase, "songs");
        const songsQuery = query(songsRef, orderByChild("categoryId"), equalTo(id));
        onValue(songsQuery, async (snapshot) => {
            const data: any = [];
            for (const key in snapshot.val()) {
                const value = snapshot.val()[key];
                data.push({
                    id: key,
                    title: value.title,
                    image: value.image,
                    audio: value.audio,
                    listen: value.listen,
                    link: `/song/${key}`,
                    singerId: value.singerId,
                    wishlist: value.wishlist
                });
            }
            resolve(data);
        });
    });

    return (
        <>
            <div className="mt-[30px]">
                <Title text="Danh Sách Bài Hát" />

                <SongList2 data={result}/>
            </div>
        </>
    )
}
