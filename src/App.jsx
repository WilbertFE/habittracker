/* eslint-disable react/prop-types */
import { useState } from "react";
import Header from "./components/Header";
import Tracker from "./components/Tracker";
import Main from "./components/Main";
import Footer from './components/Footer';
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import Tambah from "./components/Tambah";

// data default
let defaultHabits = [];

// jika localStorage ada isinyaa
if(localStorage.length > 0){
  defaultHabits = [];
  for(let i=1; i<=localStorage.length / 3; i++){
    const newHabit = {};
    newHabit.id = i;
    newHabit.name = localStorage[`${newHabit.id}`];
    newHabit.type = localStorage[`${newHabit.name}`];
    newHabit.checked = localStorage[`${newHabit.name}${newHabit.type}`] === 'true' ? true : false;
    defaultHabits.push(newHabit);
  }
}
 
export default function App() {
  const [habits, setHabits] = useState(defaultHabits);
  const [onMenus, setOnMenus] = useState(false);

 
  function handleToggle(id){
    localStorage.clear();
    const newHabits = habits.map((habit, i) => {
      localStorage[`${i + 1}`] = habit.name;
      localStorage[`${habit.name}`] = habit.type;
      localStorage[`${habit.name}${habit.type}`] = habit.checked;

      if (habit.id === id){
        localStorage[`${habit.name}${habit.type}`] = localStorage[`${habit.name}${habit.type}`] === 'true' ? 'false' : 'true';
        return {...habit, checked: !habit.checked};
      } else {
        return habit;
      }
    });
    setHabits(newHabits);
  }

  function handleDelete(id){
    setTimeout(() => {
    // mengreset localStorage
    localStorage.clear();
    // Membuat habit baru
    const nextHabits = habits.filter((habit) => habit.id !== id);
      nextHabits.map((habit, i) => {
          habit.id = i + 1;
          localStorage[`${i + 1}`] = habit.name;
          localStorage[`${habit.name}`] = habit.type;
          localStorage[`${habit.name}${habit.type}`] = habit.checked;
      });
      // mengubah data menjadi baru
      setHabits(nextHabits);
    }, 1000);
  }

  function handleClear(){
    localStorage.clear();
    setHabits([]);
  }

  function handleAdd(value){
    const newObj = {};
    newObj.id = localStorage.length / 3 + 1;
    newObj.name = value;
    newObj.checked = false;
    newObj.type = 'default';

    localStorage[`${newObj.id}`] = newObj.name;
    localStorage[`${newObj.name}`] = newObj.type;
    localStorage[`${newObj.name}${newObj.type}`] = newObj.checked;

    const nextHabits = [...habits, newObj];
    setHabits(nextHabits);
  }

  function handleType(type){
    const newHabits = [];

    if(type !== 'all'){
      setOnMenus(true);
    } else {
      setOnMenus(false);
    }

    for (let i=1; i<=localStorage.length / 3; i++){
      const newObj = {};
      newObj.id = i;
      newObj.name = localStorage[`${newObj.id}`];
      newObj.type = localStorage[`${newObj.name}`];
      newObj.checked = localStorage[`${newObj.name}${newObj.type}`] === 'true' ? true : false;
      newHabits.push(newObj);
  }
  setHabits(newHabits.filter((habit) => type === 'all' ? habit : habit.type === type));
  }

  function handleAddWType(value, type){
    console.log('ok');
  }

  return (
    <div id="app" className="font-roboto">

      {/* Awal NavBar */}
      <Navbar onType={handleType}/>
      {/* Akhir NavBar */}

      {/* Awal Header */}
        <Header>
          <Tracker habits={habits} />
        </Header>
      {/* Akhir Header */}

      {/* Awal Lists */}
        <Main onMenus={onMenus} habits={habits} onToggle={handleToggle} onDelete={handleDelete} onClear={handleClear} />
      {/* Akhir Lists */}

      {/* Awal Footer */}
      <Footer>
        <Input onAdd={handleAdd} onMenus={onMenus} />
      </Footer>
      {/* Akhir Footer */}

      {/* Awal plus button */}
      <Tambah onAddWType={handleAddWType} />
      {/* Akhir plus button */}

    </div>
  ); 
}


// awal function dasar
document.addEventListener('click', function(e){
  if(e.target.classList.contains('delete-button')){
    const habitItem = Array.from(document.querySelectorAll('.habit'));
    habitItem.map((item) => {
        if(e.target.parentNode.parentNode === item){ 
          item.classList.add('hilang');
          setTimeout(() => {
            item.classList.remove('hilang');
          }, 1000);
        }
    });
  }
});
document.addEventListener('click', function(e){
  if(e.target.classList.contains('hapus-modal')){
    const modalContainer = document.querySelector('.modal-container');
    modalContainer.style.display = 'none';
  }
});
// akhir function dasar