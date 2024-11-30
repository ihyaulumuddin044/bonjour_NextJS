import Link from "next/link";
import Style from "./register.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";

const RegisterPagesView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push } = useRouter();
  const hendleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);
    const data = {
      email: event.target.email.value,
      fullName: event.target.fullname.value,
      password: event.target.password.value,
    };
    const result = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (result.status === 200) {
      event.target.reset();
      setIsLoading(false);
      push("/auth/login");
    } else {
      setIsLoading(false);
      setError(
        result.status == 400 ? "email already exists" : "something went wrong"
      );
    }
  };
  return (
    <div className={Style.register}>
      <h1 className={Style.register__title}> register</h1>
      {error && <p className={Style.register__error}>{error}</p>}
      <div className={Style.register__form}>
        <form onSubmit={hendleSubmit}>
          <div className={Style.register__form__item}>
            <label
              htmlFor="email"
              className={Style.register__form__item__label}
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="email"
              className={Style.register__form__item__input}
            />
            <label
              htmlFor="fullname"
              className={Style.register__form__item__label}
            >
              Fullname
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="fullname"
              className={Style.register__form__item__input}
            />
            <label
              htmlFor="password"
              className={Style.register__form__item__label}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              className={Style.register__form__item__input}
            />
          </div>
          <button
            type="submit"
            className={Style.register__form__item__button}
            disabled={isLoading}
          >
            {isLoading ? "loading..." : "Register"}
          </button>
          <p className="mt-[15px]">
            have an account? Sing in{" "}
            <Link
              href="/auth/login"
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

export default RegisterPagesView;
