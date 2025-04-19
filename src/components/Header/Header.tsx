import { FC } from "react";
import { Link } from "react-router";

const Header: FC = () => {
  return (
    <header className="sticky w-[calc(100%-2.5rem)] max-w-[1426px] top-2 mx-auto border-2 
      border-solid border-black rounded-3xl shadow-[4px_4px_#000]">
      <div className="flex justify-between items-center py-4 px-12 h-full">        
      </div>
    </header>
  );
};

export default Header;
