import { useRouter } from "next/router";
import { NextPage } from "next";

const ShopDetail: NextPage = () => {
    const { query } = useRouter();
    const slug = query.slug as string[] | undefined;

    return (
        <div>
            <h1>Shopping Detail</h1>
            {slug && slug.length >= 2 ? (
                <p>Shop: {slug[0]} - {slug[1]}</p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ShopDetail;
