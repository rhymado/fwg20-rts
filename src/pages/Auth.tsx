import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

import { useOutletData } from "../router";
// import { useAuth } from "../contexts/auth";
import { useStoreSelector, useStoreDispatch } from "../redux/hooks";
import { setToken } from "../redux/slices/auth";

interface AuthResponse {
  msg: string;
  data: { token: string }[];
}

function Auth() {
  // const { token, onAuthStateChanged } = useAuth();
  const { token } = useStoreSelector((state) => state.auth);
  const dispatch = useStoreDispatch();
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
      .then((result: AxiosResponse<AuthResponse>) => {
        // onAuthStateChanged(result.data.data[0].token);
        dispatch(setToken({ token: result.data.data[0].token }));
      })
      .catch((err) => console.error(err));
  };
  const { value, setValue } = useOutletData();
  const navigate = useNavigate();
  useEffect(() => {
    if (token) navigate("/shop");
  }, [token]);
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="nis">NIS</label>
        <input type="text" name="nis" id="nis" value={form.nis} onChange={onChangeHandler} />
        <label htmlFor="pwd">Password</label>
        <input type="password" name="pwd" id="pwd" value={form.pwd} onChange={onChangeHandler} />
        <button type="submit">LOGIN</button>
      </form>
      <section>
        <button
          className="select-none cursor-pointer border-2 border-black border-solid hover:border-blue-600 p-2 my-2 text-xl"
          onClick={() => {
            if (value === 2) return navigate("/not-found");
            setValue((prevValue) => prevValue + 1);
          }}
        >
          counter: {value}
        </button>
      </section>
    </>
  );
}

export default Auth;
