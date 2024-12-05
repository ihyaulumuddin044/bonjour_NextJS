import { useRouter } from "next/router";
import NavbarBody from "../Navbar";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["400"], subsets: ["latin"] });
type AppShellProps = {
  children: React.ReactNode;
};
const navbarDesible = ["/auth/login", "/auth/register", "/404"];

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();
  return (
    <div className={roboto.className}>
      {!navbarDesible.includes(pathname) && <NavbarBody />}
      {children}
    </div>
  );
};

export default AppShell;
