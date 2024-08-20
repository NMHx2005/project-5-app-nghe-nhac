export default function FormButton(props: any) {
    const { text } = props;

    return (
        <>
            <button
                className="h-[50px] w-full bg-primary text-white rounded-[6px] font-[600] text-[16px]"
                type="submit"
            >
                {text}
            </button>
        </>
    )
}