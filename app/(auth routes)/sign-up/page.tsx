"use client";

import { register, RegisterRequest } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import css from "./SignUpPage.module.css"
interface ApiError {
  response?: {
    data?: {
      error?: string;
    };
  };
  message?: string;
}
const SignUpPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (FormData: FormData) => {
    console.log(FormData);
    try {
      const formValues = Object.fromEntries(FormData) as RegisterRequest;
      console.log(formValues)
      const res = await register(formValues);
      console.log(res)
      if (res) {
        console.log(res)
        router.push("/profile");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError(
        (error as ApiError).response?.data?.error ?? 
        (error as ApiError).message ?? 
        "Oops ... some error"
      );
    }
  };
  return (
    <main className={css.mainContent}>
  <h1 className={css.formTitle}>Sign up</h1>
	<form action={handleSubmit} className={css.form}>
    <div className={css.formGroup}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" className={css.input} required />
    </div>

    <div className={css.formGroup}>
      <label htmlFor="password">Password</label>
      <input id="password" type="password" name="password" className={css.input} required />
    </div>

    <div className={css.actions}>
      <button type="submit" className={css.submitButton}>
        Register
      </button>
    </div>

    <p className={css.error}>Error</p>
  </form>
</main>


  );
};

export default SignUpPage;
