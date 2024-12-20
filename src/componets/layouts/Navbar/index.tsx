import { signIn, signOut, useSession } from "next-auth/react";
import Style from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
// import Image from "next/image";
const NavbarBody = () => {
  const { data }: any = useSession();
  console.log(data);
  return (
    <div className={Style.navbar}>
      <div><Link href="/products">Navbar body</Link></div>
      <div className={Style.profile} >
      {data?.user?.image && <Image className={Style.avatar} src={data.user.image} alt="avatar" width={40} height={40}  />}
      {/* {data && (data.user.fullName || data.user.name)} */}
      {data && data.user.fullName}{" "}
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
