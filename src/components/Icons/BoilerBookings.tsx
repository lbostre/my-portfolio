import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlane} from "@fortawesome/free-solid-svg-icons";

export default function BoilerBookings() {
    return (
        <div className="flex h-full w-full justify-center">
            <FontAwesomeIcon icon={faPlane} rotation={270} className="h-[100px] absolute text-[#f5d7e7] mr-[130px] mt-[10px]"/>
            <FontAwesomeIcon icon={faPlane} rotation={270} className="h-[200px] absolute z-10 self-center"/>
            <FontAwesomeIcon icon={faPlane} rotation={270} className="h-[100px] relative text-[#95a78d] self-end ml-[150px]"/>
        </div>
    );
}
