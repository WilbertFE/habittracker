/* eslint-disable react/prop-types */
import { useState } from "react";
import Header from "./components/Header";
import Tracker from "./components/Tracker";
import Main from "./components/Main";
import Footer from './components/Footer';
import Input from "./components/Input";

// data default
let defaultHabits = [
  {
    id: Date.now() + 1,
    name: 'Olahraga',
    checked: true
  },
  {
    id: Date.now() + 2,
    name: 'Belajar',
    checked: false
  },
  {
    id: Date.now() + 3,
    name: 'Ngoding',
    checked: false
  }
];

// jika localStorage ada isinyaa
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
    localStorage.clear();
    const newHabits = habits.map((habit, i) => {
      localStorage[`${i + 1}`] = habit.name;
      localStorage[`${habit.name}`] = habit.checked;

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
    setTimeout(() => {
    // mengreset localStorage
    localStorage.clear();
    // Membuat habit baru
    const nextHabits = habits.filter((habit) => habit.id !== id);
      nextHabits.map((habit, i) => {
          habit.id = i + 1;
          localStorage[`${i + 1}`] = habit.name;
          localStorage[`${habit.name}`] = habit.checked;
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

      {/* Awal NavBar */}
      <nav className="fixed right-0 left-0 bg-secondary shadow-sm">
        <div className="container">
          <div className="flex mx-4">
            <div className="w-1/2 py-5">
              <h1 className="text-light font-bold text-2xl">Habit Tracker</h1>
            </div>
            <div className="w-1/2 relative">
              <div className="flex items-center justify-end cursor-pointer">
                <h3 className="text-light text-lg mr-2">Menu</h3>
                <span className="text-light text-xl relative -top-2">&#x2304;</span>
              </div>
              <div className="flex flex-wrap min-w-[250px] p-4 bg-white absolute top-14 rounded-lg shadow-md">
                <div className="w-full flex items-center my-4 bg-slate-100 rounded-lg">
                  <img src="/habittracker/public/default.png" alt="default.png" className="block w-8 h-8 mr-2" />
                  <h3 className="text-dark text-lg">Default</h3>
                </div>
                <div className="w-full flex items-center my-4 rounded-lg">
                  <img src="/habittracker/public/hobbies.png" alt="default.png" className="block w-8 h-8 mr-2" />
                  <h3 className="text-dark text-lg">Hobi</h3>
                </div>
                <div className="w-full flex items-center my-4 rounded-lg">
                  <img src="/habittracker/public/going-to-work.png" alt="default.png" className="block w-8 h-8 mr-2" />
                  <h3 className="text-dark text-lg">Pekerjaan</h3>
                </div>
                <div className="w-full flex items-center my-4 rounded-lg">
                  <img src="/habittracker/public/library.png" alt="default.png" className="block w-8 h-8 mr-2" />
                  <h3 className="text-dark text-lg">Belajar</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Akhir NavBar */}

      {/* Awal Header */}
        <Header>
          <Tracker habits={habits} />
        </Header>
      {/* Akhir Header */}

      {/* Awal Lists */}
        <Main habits={habits} onToggle={handleToggle} onDelete={handleDelete} onClear={handleClear} />
      {/* Akhir Lists */}

      {/* Awal Footer */}
      <Footer>
        <Input onAdd={handleAdd} />
      </Footer>
      {/* Akhir Footer */}

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


// akhir function dasar