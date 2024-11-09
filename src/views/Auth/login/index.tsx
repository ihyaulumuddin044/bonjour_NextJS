import Link from "next/link";
import Style from './login.module.scss'
import { useRouter } from "next/router";


const LoginPagesView = () => {
    const {push} = useRouter();

    const hendleProduct = () => {
        push("/products")
    }
  return (
    <div className={Style.login}>
      <h1>login Pages</h1>
      <button className="text-blue-500 shadow-sm bg-cyan-500" onClick={() => hendleProduct()}>product</button>
      <p style={{color: "red", }}>
        belum punya akun? <Link href="/auth/register">register</Link>
      </p>
    </div>
  );
};

export default LoginPagesView;