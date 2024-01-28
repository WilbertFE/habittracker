/* eslint-disable react/prop-types */
export default function Sort({setSortBy, habits}){
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