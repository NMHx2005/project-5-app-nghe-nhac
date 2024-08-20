import CardItem from "./CardItem";

export default function CardList(props: { data: any}) {
    const {
        data = ""
    } = props;

    return (
        <>
            <div className="grid grid-cols-5 gap-[20px]">
                {data.map((item: any, index: number) => (
                    <CardItem
                        key={index}
                        title={item.title}
                        image={item.image}
                        description={item.description}
                        link={item.link}
                    />
                ))};
            </div>
        </>
    )
}