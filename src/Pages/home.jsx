import { useState } from "react";
// import components
import Button from "../components/Elements/Button/Index";
import Card from "../components/Elements/Card/index";

export default function home() {
  const [tambah, setTambah] = useState(0);

  const handleTambah = () => {
    setTambah(tambah + 1);
  };

  return (
    <>
      <div className=" flex justify-center items-center min-h-screen bg-blue-300">
        <div className="flex items-center  gap-x-3">
          <Button classname="bg-amber-500" onClick={handleTambah}>
            Tambah
          </Button>
          <p className=" bg-white p-4 border rounded-full">{tambah}</p>
        </div>
      </div>
    </>
  );
}
