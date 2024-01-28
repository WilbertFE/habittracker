/* eslint-disable react/prop-types */
export default function Footer({children}){

    return (
      <footer className="fixed bottom-0 left-0 right-0 bg-secondary border-t-4 border-dark/40">
          <div className="container">
            <div className="flex flex-wrap mx-4">
              {children}
            </div>
          </div>
      </footer>
    );
  }