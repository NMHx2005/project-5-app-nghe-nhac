import Link from 'next/link'

export default function NotFound() {
    return (
        <>
            <div className="text-center my-[60px]">
                <h2 className="text-[40px] font-[700] text-white">404 Not Found</h2>
                <p className="mt-[10px] mb-[30px] text-white">Could not find requested resource</p>
                <Link href="/" className="inline-flex bg-primary text-white py-[15px] px-[40px] rounded-[5px]">
                    Return home
                </Link>
            </div>
        </>
    )
}