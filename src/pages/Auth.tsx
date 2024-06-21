import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";

function Auth() {
  const [form, setForm] = useState<{ nis: string; pwd: string }>({ nis: "", pwd: "" });
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((form) => {
      return {
        ...form,
        [e.target.name]: e.target.value,
      };
    });
  };
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = "https://fwg20-backend.vercel.app/siswa/account";
    axios
      .post(url, form)
      .then((result: AxiosResponse) => console.log(result.data))
      .catch((err) => console.error(err));
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="nis">NIS</label>
      <input type="text" name="nis" id="nis" value={form.nis} onChange={onChangeHandler} />
      <label htmlFor="pwd">Password</label>
      <input type="password" name="pwd" id="pwd" value={form.pwd} onChange={onChangeHandler} />
      <button type="submit">LOGIN</button>
    </form>
  );
}

export default Auth;
