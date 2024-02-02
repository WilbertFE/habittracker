/* eslint-disable react/prop-types */
export default function Clear({onClear}){
    return (
      <div className="w-full mt-4">
        <button onClick={onClear} className="block mx-auto px-4 py-2 bg-dark text-light rounded-sm">clear all</button>
      </div>
    );
  }