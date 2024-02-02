/* eslint-disable react/prop-types */
import { useState } from "react";
import Header from "./components/Header";
import Tracker from "./components/Tracker";
import Main from "./components/Main";
import Footer from './components/Footer';
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import Tambah from "./components/Tambah";

let trackedHabit = [];

// jika localStorage ada isinyaa
if(localStorage.getItem('allHabit')){
  const allHabit = JSON.parse(localStorage.getItem('allHabit'));
  trackedHabit = allHabit;
}
 
export default function App() {
  const [habits, setHabits] = useState(trackedHabit);
  const [stayOn, setStayOn] = useState('all');

 
  function handleToggle(id){
    // mengfilter Array dari localStorage
    const allHabit = JSON.parse(localStorage.getItem('allHabit'));
    const mapArr = allHabit.map((habit) => habit.id === id ? {...habit, checked: !habit.checked} : habit);
    // menimpa localStorage
    localStorage.allHabit = JSON.stringify(mapArr);
    // mengubah nilai state
    setHabits(mapArr);
    setStayOn('all');
  }

  function handleDelete(id){
    setTimeout(() => {
      // mengambil data
      const allHabit = JSON.parse(localStorage.getItem('allHabit'));
      // mengfilter
      const filteredArr = allHabit.filter((habit) => habit.id !== id);
      // menimpa localStorage
      localStorage.allHabit = JSON.stringify(filteredArr);
      // menimpa state habits
      setHabits(filteredArr);
    }, 1000);
  }

  function handleClear(){
    localStorage.clear();
    setHabits([]);
  }

  function handleAdd(value){
    // membuat data kebiasaan baru
    const newObj = {};
    newObj.id = Date.now();
    newObj.name = value;
    newObj.checked = false;
    newObj.type = 'default';

    // menambil data dari localStorage
    const allHabit = JSON.parse(localStorage.getItem('allHabit') ? localStorage.getItem('allHabit') : '[]');
    allHabit.push(newObj);

    // menimpa data localStorage
    localStorage.allHabit = JSON.stringify(allHabit);

    // mengubah nilai state
    setHabits([...habits, newObj]);
  }

  function handleType(type){
    // mengambil data
    const allHabit = JSON.parse(localStorage.getItem('allHabit') ? localStorage.getItem('allHabit') : '[]');
    let newArr;
    // switch
    if (type === 'all'){
      newArr = allHabit;
      setHabits(newArr);
    } else {
      newArr = allHabit.filter((habit) =>  habit.type === type);
      setHabits(newArr);
    }
  }

  function handleAddWType(value, type){
    // membuat objek habit baru
    const newObj = {};
    newObj.id = Date.now();
    newObj.name = value;
    newObj.type = type;
    newObj.checked = false;
    // mengambil data
    const allHabit = JSON.parse(localStorage.getItem('allHabit') ? localStorage.getItem('allHabit') : '[]');
    const newHabits = [...allHabit, newObj];
    // menimpa localStorage
    localStorage.allHabit = JSON.stringify(newHabits);
    // menimpa state habits
    setHabits(newHabits);
  }

  return (
    <div id="app" className="font-roboto">

      {/* Awal NavBar */}
      <Navbar onType={handleType} stayOn={stayOn} setStayOn={setStayOn}/>
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