import Link from "next/link";
import Style from "./login.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";
import { signIn } from "next-auth/react";

const LoginPagesView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push, query } = useRouter();
  const callbackUrl: any = query.callbackUrl || "/"; 
  const hendleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);
    const data = {
      email: event.target.email.value,
      name: event.target.fullname.value,
      password: event.target.password.value,
    };
    try {
      const res = await signIn("credentials",{
        redirect: false,
        email: event.tagret.email.value,
        password: event.tagret.password.value,
        callbackUrl,
      })
      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      }else{
        setIsLoading(false);
        setError(res.error); 
      }
    } catch (error: any) {
      setIsLoading(false);
      setError(error)
    }
    // const result = await fetch("/api/auth/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
    // if (result.status === 200) {
    //   event.target.reset();
    //   setIsLoading(false);
    //   push("/auth/login");
    // } else {
    //   setIsLoading(false);
    //   setError(
    //     result.status == 400 ? "email already exists" : "something went wrong"
    //   );
    // }
  };
  return (
    <div className={Style.Login}>
      <h1 className={Style.Login__title}> Login</h1>
      {error && <p className={Style.Login__error}>{error}</p>}
      <div className={Style.Login__form}>
        <form onSubmit={hendleSubmit}>
          <div className={Style.Login__form__item}>
            <label htmlFor="email" className={Style.Login__form__item__label}>
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="email"
              className={Style.Login__form__item__input}
            />
            <label
              htmlFor="password"
              className={Style.Login__form__item__label}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              className={Style.Login__form__item__input}
            />
          </div>
          <button
            type="submit"
            className={Style.Login__form__item__button}
            disabled={isLoading}
          >
            {isLoading ? "loading..." : "Login"}
          </button>
          <p className="mt-[15px]">
            Don't have an account? Register{" "}
            <Link
              href="/auth/register"
              className="text-blue-500 underline font-bold"
            >
              {" "}
              Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPagesView;
