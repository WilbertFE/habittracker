/* eslint-disable react/prop-types */
import { useState } from "react";

// data default
let defaultHabits = [
  {
    name: 'Olahraga',
    checked: true
  },
  {
    name: 'Belajar',
    checked: false
  },
  {
    name: 'Ngoding',
    checked: false
  }
];

// jika localStorage ada isinya
if(localStorage.length > 0){
  defaultHabits = [];
  for(let i=1; i<=localStorage.length / 2; i++){
    const newHabit = {};
    newHabit.id = i;
    newHabit.name = localStorage[`${newHabit.id}`];
    newHabit.checked = localStorage[`${newHabit.name}`] === 'true' ? true : false;
    defaultHabits.push(newHabit);
  }
}

export default function App() {

  const [habits, setHabits] = useState(defaultHabits);

 
  function handleToggle(id){
    const newHabits = habits.map((habit) => {
      if (habit.id === id){
        localStorage[`${habit.name}`] = localStorage[`${habit.name}`] === 'true' ? 'false' : 'true';
        return {...habit, checked: !habit.checked};
      } else {
        return habit;
      }
    });
    setHabits(newHabits);
  }

  function handleDelete(id){
    localStorage.clear();
    const nextHabits = habits.filter((habit) => habit.id !== id);
    nextHabits.map((habit, i) => {
        habit.id = i + 1;
        localStorage[`${i + 1}`] = habit.name;
        localStorage[`${habit.name}`] = habit.checked;
    });
    setHabits(nextHabits);
  }

  function handleClear(){
    localStorage.clear();
    setHabits([]);
  }

  function handleAdd(value){
    const newObj = {};
    newObj.id = localStorage.length / 2 + 1;
    newObj.name = value;
    newObj.checked = false;

    localStorage[`${newObj.id}`] = newObj.name;
    localStorage[`${newObj.name}`] = newObj.checked;

    const nextHabits = [...habits, newObj];
    setHabits(nextHabits);
  }

  return (
    <div id="app" className="font-roboto bg-primary min-h-[1000px]">
      {/* Awal Header */}
        <Header habits={habits} />
      {/* Akhir Header */}

      {/* Awal Lists */}
        <Main habits={habits} onToggle={handleToggle} onDelete={handleDelete} onClear={handleClear} />
      {/* Akhir Lists */}

      {/* Awal Footer */}
      <Footer onAdd={handleAdd} />
      {/* Akhir Footer */}

    </div>
  ); 
}


// Awal komponen header
function Header({habits}){

  return (
    <header className="pt-12">
         <div className="container">
          <div className="flex flex-wrap mx-4">
            <Title />
            <Tracker habits={habits} />
          </div>
         </div>
    </header>
  );
}

function Title(){
  return (
    <div className="w-full my-4">
     <h1 className="pt-4 text-light text-5xl text-center font-bold">Habit Tracker</h1>
     <p className="text-center text-light text-base text-opacity-90 lowercase">ciptakan hari yang produktif</p>
    </div>
  );
}

function Tracker({habits}){
  const totalLength = habits.length;
  const checkedLength = habits.filter((habit) => habit.checked).length;
  const trackerValue = `${Math.round((checkedLength / totalLength) * 100)}%`;

  return (
    <div className="w-full py-4">
      <h1 className="text-center text-light text-xl bg-dark/70 p-2 rounded-lg">Kebiasaan Selesai: <strong>{totalLength > 0 ? trackerValue : 'Kebiasaan kosong'}</strong></h1>
    </div>
  );
}
// Akhir komponen header

// Awal komponen main
function Main({habits, onToggle, onDelete, onClear}){
  const [sortBy, setSortBy] = useState('input');
  let sortedItems;

  switch (sortBy){
    case 'name':
      sortedItems = habits.slice().sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'checked':
      sortedItems = habits.slice().sort((a, b) => a.checked - b.checked);
      break;
    default:
      sortedItems = habits;
      break;
  }

  return (
    <main className="pt-4 pb-32"> 
         <div className="container">
          <div className="flex flex-wrap mx-4">
            <Sort setSortBy={setSortBy} habits={habits} />
            {sortedItems.map((habit) => (
              <Item key={habit.id} habit={habit} onToggle={onToggle} onDelete={onDelete} />
            ))}
            <Clear onClear={onClear} habits={habits} />
          </div>
         </div>
    </main>
  );
}

function Item({habit, onToggle, onDelete}){
  return (
    <div className="w-full flex items-center p-4 my-2 bg-light rounded-lg shadow-sm">
      <input type="checkbox" onChange={() => onToggle(habit.id)} checked={habit.checked} className="block w-[20px] h-[20px] mr-4" />
      <h3 style={habit.checked ? {textDecoration: 'line-through'} : {}} className="text-lg text-dark flex-1 truncate">{habit.name}</h3>
      <button onClick={() => onDelete(habit.id)}><img src="/habittracker/delete.png" alt="delete.png" /></button>
    </div>
  );
}

function Clear({onClear, habits}){
  return (
    <div className="w-full mt-4">
      <button onClick={onClear}  style={habits.length === 0 ? {display: 'none'} : {}} className="block mx-auto px-4 py-2 bg-dark text-light rounded-full">clear all</button>
    </div>
  );
}

function Sort({setSortBy, habits}){
  return (
    <div className="w-full mb-4" style={habits.length === 0 ? {display: 'none'} : {}}>
      <select onChange={(e) => setSortBy(e.target.value)} className="p-1 block mx-auto bg-light">
        <option value="input">Berdasarkan input</option>
        <option value="name">Berdasarkan nama</option>
        <option value="checked">Berdasarkan ceklis</option>
      </select>
    </div>
  );
}

// Akhir komponen main

// Awal komponen footer
function Footer({onAdd}){

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-secondary border-t-4 border-dark/40">
        <div className="container">
          <div className="flex flex-wrap mx-4">
            <Input onAdd={onAdd} />
          </div>
        </div>
    </footer>
  );
}

function Input({onAdd}){
  const [value, setValue] = useState('');

  function handleClick(value){
    onAdd(value);
    setValue('');
  }

  return (
    <div className="w-full flex items-center py-4">
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="block w-full bg-transparent border-b text-white text-lg mx-4 focus:outline-none" placeholder="Masukkan Kebiasaan Baru"/> 
      <button onClick={() => handleClick(value)} style={value !== '' ? {display:'block'} : {}} className="hidden text-light text-2xl">&#10004;</button>
    </div>
  );
}
// Akhir komponen footer
