import { useRouter } from "next/router";
import NavbarBody from "../Navbar";

type AppShellProps = {
  children: React.ReactNode,
}
const navbarDesible = ['/auth/login', "auth/register"]

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const {pathname} = useRouter();
  return (
    <div>
      {!navbarDesible.includes(pathname) && <NavbarBody />}
      {children}
    </div>
  );
};

export default AppShell;
