/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import ButtonPlay from "../button/ButtonPlay";
import ButtonHeart from "../button/ButtonHeart";

export default function SongItem(props: any) {

    const { 
        id = "",
        image = "", 
        title = "", 
        singer = "", 
        listen = "",
        audio = "",
        wishlist = "",
    } = props;


    return (
        <>
            <div className="bg-[#212121] rounded-[15px] p-[10px] flex items-center" song-id={id} song-data={JSON.stringify(props)}>
                <div className="w-[76px] aspect-square rounded-[10px] truncate mr-[10px]">
                    <img 
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1">
                    <div className="mb-[2px]">
                        <Link href="" className="font-[600] text-[16px] text-white">
                            {title}
                        </Link>
                    </div>
                    <div className="font-[400] text-[12px] text-[#FFFFFF80] mb-[5px]">
                        {singer}
                    </div>
                    <div className="font-[400] text-[12px] text-white">
                        {listen.toLocaleString()} lượt nghe
                    </div>
                </div>
                <div className="">
                <ButtonPlay {...props} className="w-[34px] h-[34px] rounded-full border border-white inline-flex items-center justify-center text-[15px] text-white ml-[10px]" />
                    <ButtonHeart {...props} />
                </div>
            </div>
        </>
    )
}