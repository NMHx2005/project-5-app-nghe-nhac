import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { notFound } from "next/navigation";

/* eslint-disable @next/next/no-img-element */
export default async function CardInfor(props: {
    title: string,
    image: string,
    singerId: string,
    description: string,
}) {
    const {
        title = "",
        image = "",
        singerId = "",
        description = ""
    } = props;

    const singerNames: any = await new Promise((resolve) => {
        const singerRef = ref(dbFirebase, "singers");
        onValue(singerRef, (snapshot) => {
            const singersData: { [key: string]: string } = {};
            snapshot.forEach((childSnapshot) => {
                const key = childSnapshot.key;
                const value = childSnapshot.val();
                singersData[key] = value.title;
            });
    
            // Chuyển đổi singerId thành một mảng nếu nó là một chuỗi
            const singerIdArray = typeof singerId === "string" ? [singerId] : singerId;
    
            const names = singerIdArray.map((id: string) => singersData[id] || "Unknown").join(", ");
            resolve(names);
        }); 
    });
    
    return (
        <>
            <div className="flex items-center">
                <div className="w-[180px] aspect-square rounded-[15px] truncate">
                    <img   
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1 ml-[20px]">
                    <h1 className="font-[700] text-[35px] text-primary">
                        {title}
                    </h1>
                    <div className="font-[400] text-[14px] text-[#EFEEE0] mt-[10px]">
                        {singerNames}
                    </div>
                </div>
            </div>
        </>
    )
}