"use client";
import { useState } from "react";
import css from "./SignInPage.module.css";
import { useRouter } from "next/navigation";
import { login, RegisterRequest } from "@/lib/api/clientApi";
interface ApiError {
  response?: {
    data?: {
      error?: string;
    };
  };
  message?: string;
}
const SignInPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const handleSubmit = async (FormData: FormData) => {
    try {
      const formValues = Object.fromEntries(FormData) as RegisterRequest;
      const res = await login(formValues);
      if (res) {
        router.push("/profile");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError(
        (error as ApiError).response?.data?.error ??
          (error as ApiError).message ??
          "Ooops... some error"
      );
    }
  };
  return (
    <main className={css.mainContent}>
      <form action={handleSubmit} className={css.form}>
        <h1 className={css.formTitle}>Sign in</h1>

        <div className={css.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            className={css.input}
            required
          />
        </div>

        <div className={css.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            className={css.input}
            required
          />
        </div>

        <div className={css.actions}>
          <button type="submit" className={css.submitButton}>
            Log in
          </button>
        </div>

        <p className={css.error}>{error}</p>
      </form>
    </main>
  );
};

export default SignInPage;
