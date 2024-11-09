import Link from "next/link";
import { useRouter } from "next/router";
import Style from './Login.module.css'

const loginPages = () => {
    const {push} = useRouter();
    const hendleProduct = () => {
        push("/products")
    }
  return (
    <div className={Style.login}>
      <h1>login Pages</h1>
      <button onClick={() => hendleProduct()}>product</button>
      <p>  belum punya akun? <Link href="/auth/register">register</Link></p>
    </div>
  );
};

export default loginPages;
