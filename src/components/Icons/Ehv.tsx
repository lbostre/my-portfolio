import Image from 'next/image'
import globe from "../../../public/globe.png"

export default function Ehv() {
    return (
        <div className="flex h-full w-full justify-center">
            <Image
                src={globe}
                width={340}
                height={340}
                alt="Globe"
            />
        </div>
    );
}
