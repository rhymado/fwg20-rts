// import Header from "../components/Header";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

type SiswaResponse = {
  msg: string;
  meta: {
    prevLink?: string;
    nextLink?: string;
    page: number;
    totalPage: number;
    totalData: number;
  };
  data: {
    id: number;
    address: string;
    age: number;
    image: string;
    name: string;
    nis: string;
    pwd: string;
    created_at: string;
    updated_at?: string;
  }[];
};

function Position() {
  const [siswa, setSiswa] = useState<SiswaResponse>();
  // const getSiswa = async () => {
  //   const url = "https://fwg20-backend.vercel.app/siswa";
  //   try {
  //     const result = await axios.get(url);
  //     console.log(result)
  //     console.log(result.data)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  useEffect(() => {
    // IIFE => immediately invoked function expression
    (async function () {
      const url = "https://fwg20-backend.vercel.app/siswa";
      try {
        const result: AxiosResponse<SiswaResponse> = await axios.get(url);
        console.log(result);
        // console.log(result.data);
        setSiswa(result.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <>
      {/* <Header /> */}
      <main className="border-2 border-solid border-black bg-gray-500 w-4/5 ml-[10%] mt-[5%] h-[80vh] relative">
        <div className="item">1. Default</div>
        <div className="item">2. Static</div>
        <div className="item relative -right-5">3. Relative</div>
        <div className="item absolute right-0 -bottom-3">4. Absolute</div>
        <div className="item fixed left-0 bottom-0">5. Fixed</div>
        <div className="item sticky top-0.5">6. Sticky</div>
        <div>
          <button className="bg-black text-white p-2" onClick={() => console.log(siswa)}>
            Get Siswa
          </button>
        </div>
      </main>
    </>
  );
}

export default Position;
