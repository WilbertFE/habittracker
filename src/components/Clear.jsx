/* eslint-disable react/prop-types */
export default function Clear({onClear, habits, onMenus}){
    return (
      <div className="w-full mt-4" style={onMenus === true ? {display: 'none'} : {display: 'block'}}>
        <button onClick={onClear}  style={habits.length === 0 ? {display: 'none'} : {}} className="block mx-auto px-4 py-2 bg-dark text-light rounded-sm">clear all</button>
      </div>
    );
  }