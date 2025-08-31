import { PlusIcon } from "../icons/Plus";

export function Card(){
    return <div className="p-4 bg-white shadow-md rounded-lg  border border-gray-100 max-w-96 ">
        <div className="flex justify-between ">
             <div className="flex text-lg"> 
                <PlusIcon />
                Project Ideas
             </div>
             <div className="flex">
                <PlusIcon />
                <PlusIcon />
             </div>
        </div>
    </div>
}