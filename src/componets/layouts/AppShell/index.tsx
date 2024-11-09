import NavbarBody from "../Navbar";

type AppShellProps = {
  children: React.ReactNode,
}

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  return (
    <div>
      <NavbarBody  />
      {children}
    </div>
  );
};

export default AppShell;
