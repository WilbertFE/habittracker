/* eslint-disable react/prop-types */
import { useState } from "react";
import Sort from './Sort';
import Item from './Item';
import Clear from './Clear';

export default function Main({habits, onToggle, onDelete, onClear, onMenus}){
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
                <Item onMenus={onMenus} key={habit.id} habit={habit} onToggle={onToggle} onDelete={onDelete} />
              ))}
              <Clear onClear={onClear} habits={habits} onMenus={onMenus} />
              <h1 className="text-center my-4 text-white" style={onMenus === false ? {display: 'none'} : {display: 'block'}}>Jika ingin menghapus, menceklis, menambah kebiasaan, balik ke menu <strong>Semua</strong></h1>
            </div>
           </div>
      </main>
    );
  }