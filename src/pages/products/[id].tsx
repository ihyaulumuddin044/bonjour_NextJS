// import { console } from "inspector";
import { useRouter } from "next/router";

const productDetail = () => {
    const { query} = useRouter();
    // console.log()
  return (
    <div>
      <div>product Detail</div>
      <p>product: {query.id}</p>
    </div>
  );
};

export default productDetail;
