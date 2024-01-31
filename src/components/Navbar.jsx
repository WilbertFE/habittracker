/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Navbar({onType}){
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
                <span className="text-light text-lg mr-2">Menu <span className="text-light text-2xl relative -top-[6px]">&#x2304;</span></span>
              </label>
              <div style={isOpen ? {display: 'flex'} : {display: 'none'}} className="flex-col justify-around absolute top-16 w-[250px] h-[300px] p-4 bg-white rounded-lg shadow-md">
                <div onClick={() => onType('all')} className="flex items-center cursor-pointer bg-light">
                  <img src="/habittracker/default.png" alt="all" className="block w-8 mr-2" />
                  <span className="text-lg text-dark">Semua</span>
                </div>
                <div onClick={() => onType('sport')} className="flex items-center cursor-pointer">
                  <img src="/habittracker/gym.png" alt="sport" className="block w-8 mr-2" />
                  <span className="text-lg text-dark">Olahraga</span>
                </div>
                <div onClick={() => onType('work')} className="flex items-center cursor-pointer">
                  <img src="/habittracker/working.png" alt="work" className="block w-8 mr-2" />
                  <span className="text-lg text-dark">Pekerjaan</span>
                </div>
                <div onClick={() => onType('study')} className="flex items-center cursor-pointer">
                  <img src="/habittracker/library.png" alt="study" className="block w-8 mr-2" />
                  <span className="text-lg text-dark">Belajar</span>
                </div>
                <div onClick={() => onType('default')} className="flex items-center cursor-pointer">
                  <img src="/habittracker/settings.png" alt="default" className="block w-8 mr-2" />
                  <span className="text-lg text-dark">Default</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </nav>
    );
}