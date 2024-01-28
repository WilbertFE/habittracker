/* eslint-disable react/prop-types */
import Title from './Title';

export default function Header({children}){

    return (
      <header className="pt-12">
           <div className="container">
            <div className="flex flex-wrap mx-4">
              <Title />
              {children}
            </div>
           </div>
      </header>
    );
  }