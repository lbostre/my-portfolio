import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode, faDisplay} from "@fortawesome/free-solid-svg-icons";

export default function Dko() {
    return (
        <div className="flex h-full w-full justify-center">
            <FontAwesomeIcon icon={faDisplay} className="h-[200px] absolute z-10 self-center"/>
            <div className="flex flex-col relative h-[130px] w-[200px] top-[20px] bg-[#f5d7e7] justify-center items-center pt-3">
                <FontAwesomeIcon icon={faCode} className="h-[80px] z-[10]"/>
                <FontAwesomeIcon icon={faCode} className="absolute h-[80px] ml-3 text-[#95a78d]"/>
            </div>
        </div>
    );
}
