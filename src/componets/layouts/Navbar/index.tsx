import { signIn, signOut, useSession } from "next-auth/react";
import Style from "./Navbar.module.css";
import Link from "next/link";
const NavbarBody = () => {
  const { data }: any = useSession();
  console.log(data);
  return (
    <div className={Style.navbar}>
      <div><Link href="/products">Navbar body</Link></div>
      <div >
      {/* {data && (data.user.fullName || data.user.name)} */}
      {data && data.user.fullName}
      {data ? (
        <button className={Style.button} onClick={() => signOut()}> Sing out </button>
      ) : (
        <button onClick={() => signIn()}> Sing in </button>
      )}
      </div>
      {/* <button onClick={() => signIn()}> Sing in </button> */}
    </div>
  );
};

export default NavbarBody;
