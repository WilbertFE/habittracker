/* eslint-disable react/prop-types */
export default function Item({habit, onToggle, onDelete}){
    return (
      <div className="habit w-full flex items-center p-4 my-2 bg-light rounded-lg shadow-sm">
        <input type="checkbox" onChange={() => onToggle(habit.id)} checked={habit.checked} className="block w-[20px] h-[20px] mr-4" />
        <h3 style={habit.checked ? {textDecoration: 'line-through'} : {}} className="text-lg text-dark flex-1 truncate">{habit.name}</h3>
        <button onClick={() => onDelete(habit.id)}><img src ="/habittracker/delete.png" alt="delete.png" className="delete-button" /></button>
      </div>
    );
  }