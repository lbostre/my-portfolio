import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHelmetSafety} from "@fortawesome/free-solid-svg-icons";

export default function Clime() {
    return (
        <div className="flex flex-col h-full w-full justify-center">
            <FontAwesomeIcon icon={faHelmetSafety} className="h-[110px]"/>
            <div className="flex flex-row gap-2 self-center">
                <FontAwesomeIcon icon={faHelmetSafety} className="h-[110px] text-[#f5d7e7]"/>
                <FontAwesomeIcon icon={faHelmetSafety} className="h-[110px] text-[#95a78d]"/>
            </div>
        </div>
    );
}
