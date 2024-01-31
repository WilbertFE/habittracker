/* eslint-disable react/prop-types */
export default function Item({habit, onToggle, onDelete, onMenus}){
    const textColor = habit.type === 'sport' ? '#fcd34d' : habit.type === 'study' ? '#bef264' : habit.type === 'work' ? '#fca5a5' : '#0f172a';

    return ( 
      <div className="habit w-full bg-light flex items-center p-4 my-2 rounded-lg shadow-sm">
        <input type="checkbox" onChange={onMenus === false ? () => onToggle(habit.id) : {}} checked={habit.checked} className="block w-[20px] h-[20px] mr-4 cursor-pointer" />
        <div className="flex-1 flex flex-col">
          <h3 style={habit.checked ? {textDecoration: 'line-through', color: textColor} : {color: textColor}} className="text-lg text-dark truncate">{habit.name}</h3>
        </div>
        <button onClick={onMenus === false ? () => onDelete(habit.id) : {}}><img src ="/habittracker/delete.png" alt="delete.png" className="delete-button" /></button>
      </div>
    );
  }