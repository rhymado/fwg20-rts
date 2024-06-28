import { Dispatch, SetStateAction, useEffect, useState } from "react";

function useLocalStorage<S = undefined>(initialValue: S | (() => S), key: string): [S, Dispatch<SetStateAction<S>>] {
  const [value, setValue] = useState<S>(() => {
    // cek apakah nilai yg bersangkutan ada di local storage
    const valueLocal = localStorage.getItem(key);
    // jika tidak didapatkan value dari local storage
    if (!valueLocal) {
      // gunakan initialValue yg ada di parameter
      if (initialValue instanceof Function) return initialValue();
      return initialValue;
    }
    // jika ditemukan, maka gunakan nilai yg ada di local storage
    return JSON.parse(valueLocal);
  });

  useEffect(() => {
    // jika value berubah, perbaharui nilai value di local storage
    const newValueLocal = JSON.stringify(value);
    localStorage.setItem(key, newValueLocal);
  }, [value]);

  return [value, setValue];
}

export default useLocalStorage;
