import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const productPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { push } = useRouter();
  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);
  return (
    <div>
      <h1>product pages</h1>
    </div>
  );
};

export default productPage;
