export default function PlayInfor() {
    return (
        <>
            <div className="flex items-center w-[218px]">
                <div className="truncate rounded-[14px] aspect-square w-[49px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                        src="" 
                        alt="" 
                        className="w-full h-full object-cover inner-image" 
                    />
                </div>
                <div className="ml-[12px]">
                    <div className="font-[700] text-[15px] text-white mb-[2px] line-clamp-1 inner-title"></div>
                    <div className="font-[700] text-[12px] text-[#FFFFFF70] line-clamp-1 inner-singer"></div>
                </div>
            </div>
        </>
    )
}