import { FilterOutline } from "react-ionicons";
import {useState} from "react";

interface FilterBtnProps {
    filter: "all" | "completed" | "uncompleted";
    setFilter: React.Dispatch<React.SetStateAction<"all" | "completed" | "uncompleted">>
}
const FilterBtn = ({ setFilter }: FilterBtnProps) => {
    const [showMenu, setShowMenu] = useState(false);
    
    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };

    const handleFilterChange = (newFilter:"all" | "completed" | "uncompleted") => {
        setFilter(newFilter);
        setShowMenu(false);
    }

    return <div className="relative inline-block">
        <button
        onClick={ handleMenuToggle }
        className="flex items-center bg-[#1e2329] rounded-md cursor-pointer py-3 px-3"
        >
            <FilterOutline color={"#fff"} />
        </button>
        {showMenu && (
            <div className="absolute mt-2 bg-white rounded-md shadow z-50">
                <span 
                onClick={() => handleFilterChange("all")} 
                className="flex items-center w-full p-2 text-[#333] cursor-pointer hover:bg-gray-200 rounded-t-md">
                    Todos
                </span>
                <span 
                onClick={() => handleFilterChange("completed")} 
                className="flex items-center w-full p-2 text-[#333] cursor-pointer hover:bg-gray-200">
                    Completos
                </span>
                <span 
                onClick={() => handleFilterChange("uncompleted")} 
                className="flex items-center w-full p-2 text-[#333] cursor-pointer hover:bg-gray-200 rounded-b-md">
                    Incompletos
                </span>
            </div>
        )}
    </div>
};


export default FilterBtn;