import { useState } from "react";

export default function Tambah({onAddWType}){
    const [isOpen, setIsOpen] = useState(true);

    return (
    <>
    <button className="flex w-[60px] h-[60px] bg-black rounded-full fixed right-6 bottom-20">
        <span className="text-light text-3xl m-auto">+</span>
    </button>
    <div className="hidden fixed left-0 top-0 right-0 bottom-0 bg-black/30">
        <div className="fixed left-12 right-12 min-h-[50px] bottom-[50%] translate-y-[50%] bg-white rounded-lg shadow-lg">
            <form>
                <div className="flex flex-wrap m-4">
                    <label className="block w-full mb-2" htmlFor="nama-kebiasaan">Nama :</label>
                    <input className="border border-black" type="text" id="nama-kebiasaan" />
                </div>
                <div className="flex flex-wrap m-4 mb-10">
                    <span className="block w-full mb-2">Tipe :</span>
                    <select className="border border-black">
                        <option value="sport">Olahraga</option>
                        <option value="work">Pekerjaan</option>
                        <option value="study">Belajar</option>
                        <option value="default">Default</option>
                    </select>
                </div> 
                <div className="flex flex-wrap m-4">
                    <button type="submit" className="block py-2 px-4 bg-dark text-light rounded-md">Tambah</button>
                </div>
            </form>
            <button onClick={() => setIsOpen(false)} className="w-[40px] h-[40px] rounded-full bg-red-500 absolute -top-4 -right-4 text-light">X</button>
        </div>
    </div>
    </>
    );
}