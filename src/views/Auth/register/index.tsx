import Link from "next/link";
import Style from "./register.module.scss";
import { useRouter } from "next/router";

const RegisterPagesView = () => {
  return (
    <div className={Style.register}>
      <h1 className={Style.register__title}> register</h1>
      <div className={Style.register__form}>
        <form action="">
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
          <button type="submit" className={Style.register__form__item__button}>
            Register
          </button>
          <p className="mt-[15px]">
            have an account? Sing in
            {" "}
            <Link href="/auth/login" className="text-blue-500 underline font-bold">
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
