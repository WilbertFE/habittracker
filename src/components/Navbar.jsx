/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Navbar({onType, stayOn, setStayOn}){
    const [isOpen, setIsOpen] = useState(false);

    function handleType(type){
      setStayOn(type);
      onType(type);
    }

    const habits = JSON.parse(localStorage.getItem('allHabit') ? localStorage.getItem('allHabit') : '[]');

    console.log('ok');
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
                <div style={stayOn === 'all' ? {backgroundColor: '#f1f5f9'} : {}} onClick={() => handleType('all')} className="flex items-center cursor-pointer">
                  <img src="/habittracker/default.png" alt="all" className="block w-8 mr-2" />
                  <span className="text-lg text-dark">Semua</span>
                  <span className="ml-auto mr-2">{habits.length}</span>
                </div>
                <div style={stayOn === 'sport' ? {backgroundColor: '#f1f5f9'} : {}} onClick={() => handleType('sport')} className="flex items-center cursor-pointer">
                  <img src="/habittracker/gym.png" alt="sport" className="block w-8 mr-2" />
                  <span className="text-lg text-dark">Olahraga</span>
                  <span className="ml-auto mr-2">{habits.filter((habit) => habit.type === 'sport').length}</span>
                </div>
                <div style={stayOn === 'work' ? {backgroundColor: '#f1f5f9'} : {}} onClick={() => handleType('work')} className="flex items-center cursor-pointer">
                  <img src="/habittracker/working.png" alt="work" className="block w-8 mr-2" />
                  <span className="text-lg text-dark">Pekerjaan</span>
                  <span className="ml-auto mr-2">{habits.filter((habit) => habit.type === 'work').length}</span>
                </div>
                <div style={stayOn === 'study' ? {backgroundColor: '#f1f5f9'} : {}} onClick={() => handleType('study')} className="flex items-center cursor-pointer">
                  <img src="/habittracker/library.png" alt="study" className="block w-8 mr-2" />
                  <span className="text-lg text-dark">Belajar</span>
                  <span className="ml-auto mr-2">{habits.filter((habit) => habit.type === 'study').length}</span>
                </div>
                <div style={stayOn === 'default' ? {backgroundColor: '#f1f5f9'} : {}} onClick={() => handleType('default')} className="flex items-center cursor-pointer">
                  <img src="/habittracker/settings.png" alt="default" className="block w-8 mr-2" />
                  <span className="text-lg text-dark">Default</span>
                  <span className="ml-auto mr-2">{habits.filter((habit) => habit.type === 'default').length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </nav>
    );
}