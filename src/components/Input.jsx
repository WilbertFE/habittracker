/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Input({onAdd, onMenus}){
    const [value, setValue] = useState('');
  
    function handleClick(value){
      onAdd(value);
      setValue('');
    }
  
    return (
      <div style={onMenus === false ? {display: 'flex'} : {display: 'none'}} className="w-full flex items-center py-4">
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="block w-full bg-transparent border-b text-white text-lg mx-4 focus:outline-none" placeholder="Masukkan Kebiasaan Baru"/> 
        <button onClick={() => handleClick(value)} style={value !== '' ? {display:'block'} : {}} className="hidden text-light text-2xl">&#10004;</button>
      </div>
    );
  }