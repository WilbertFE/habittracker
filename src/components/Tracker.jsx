/* eslint-disable react/prop-types */
export default function Tracker({habits}){
    const totalLength = habits.length;
    const checkedLength = habits.filter((habit) => habit.checked).length;
    const trackerValue = `${Math.round((checkedLength / totalLength) * 100)}%`;
  
    return (
      <div className="w-full py-4">
        <h1 className="text-center text-light text-xl bg-dark/70 p-2 rounded-lg">Kebiasaan Selesai: <strong>{totalLength > 0 ? trackerValue : 'Kebiasaan kosong'}</strong></h1>
      </div>
    );
  }