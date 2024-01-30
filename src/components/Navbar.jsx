import { useState } from "react";

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    return (
    <nav className="fixed right-0 left-0 bg-secondary shadow-sm">
        <div className="container">
          <div className="flex mx-4">
            <div className="w-1/2 py-5">
              <h1 className="text-light font-bold text-2xl">Habit Tracker</h1>
            </div>
            <div className="w-1/2 flex items-center justify-end relative">
              <input id="typeOpen" onChange={() => setIsOpen(!isOpen)} type="checkbox" className="hidden"></input>
              <label htmlFor="typeOpen" className="mr-4 cursor-pointer">
                <span className="text-light text-lg mr-2">Menu</span>
                <span className="text-light text-2xl relative -top-[6px]">&#x2304;</span>
              </label>
              <div style={isOpen ? {display: 'flex'} : {display: 'none'}} className="flex-col justify-around absolute top-16 w-[200px] h-[250px] p-4 bg-white rounded-lg shadow-md">
                <div className="flex items-center bg-slate-100">
                  <img src="/habittracker/default.png" alt="default" className="block w-8 mr-2" />
                  <span className="text-lg text-dark">Default</span>
                </div>
                <div className="flex items-center">
                  <img src="/habittracker/hobbies.png" alt="hobbies" className="block w-8 mr-2" />
                  <span className="text-lg text-dark">Hobi</span>
                </div>
                <div className="flex items-center">
                  <img src="/habittracker/going-to-work.png" alt="work" className="block w-8 mr-2" />
                  <span className="text-lg text-dark">Pekerjaan</span>
                </div>
                <div className="flex items-center">
                  <img src="/habittracker/library.png" alt="study" className="block w-8 mr-2" />
                  <span className="text-lg text-dark">Belajar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </nav>
    );
}