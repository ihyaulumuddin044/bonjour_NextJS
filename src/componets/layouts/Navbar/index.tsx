import { signIn, signOut, useSession } from "next-auth/react";
import Style from "./Navbar.module.css";
const NavbarBody = () => {
  const { data }: any = useSession();
  console.log(data);
  return (
    <div className={Style.navbar}>
      <div>Navbar body</div>
      <div >
      {data && data.user.name}
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
