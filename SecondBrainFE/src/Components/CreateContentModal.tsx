import { CrossIcon } from "../icons/CrossIcon";

export function CreateContentModal({open, onClose}) {
    return <div>
        {open && <div className="top-0 left-0 h-screen w-screen fixed bg-gray-200 opacity-50 flex justify-center items-center">
           <div className="bg-white p-2 rounded-lg shadow-lg opacity-100">
            <div className=" flex justify-end">
                 fkwej fjefiei 
                <CrossIcon />
            </div>
            <div>
                
            </div>
            </div> 
        </div> }
    </div>
}