/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Tambah({onAddWType}){
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('sport');

    function handleSubmit(e){
        // reset
        e.preventDefault();
        // menghilangkan modal
        setIsOpen(false);
        // menambah kebiasaan
        onAddWType(inputValue, selectValue);
        // mengreset state
        setInputValue('');
        setSelectValue('sport');
    }

    function handleDeleteM(){
        // reset state
        setInputValue('');
        setSelectValue('sport');
        // hapus modal
        setIsOpen(false);
    }

    return (
    <>
    <button onClick={() => setIsOpen(true)} className="w-[60px] h-[60px] bg-black rounded-full fixed right-6 bottom-20 text-light text-3xl">+</button>
    <div style={isOpen ? {display: 'block'} : {display: 'none'}} className="fixed left-0 top-0 right-0 bottom-0 bg-black/30">
        <div className="fixed left-12 right-12 min-h-[50px] bottom-[50%] translate-y-[50%] bg-white rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap m-4">
                    <label className="block w-full mb-2 text-dark" htmlFor="nama-kebiasaan">Nama :</label>
                    <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="border border-dark px-1" type="text" id="nama-kebiasaan" />
                </div>
                <div className="flex flex-wrap m-4 mb-10">
                    <span className="block w-full mb-2 text-dark">Tipe :</span>
                    <select value={selectValue} onChange={(e) => setSelectValue(e.target.value)} className="border border-black">
                        <option value="sport">Olahraga</option>
                        <option value="work">Pekerjaan</option>
                        <option value="study">Belajar</option>
                        <option value="default">Default</option>
                    </select>
                </div> 
                <div className="flex flex-wrap m-4">
                    <button type="submit" className="block p-2 px-4 text-sm bg-dark text-light rounded-md">Tambah</button>
                </div>
            </form>
            <button onClick={handleDeleteM} className="w-[45px] h-[45px] rounded-full bg-red-500 absolute -top-4 -right-4 text-light">X</button>
        </div>
    </div>
    </>
    );
}