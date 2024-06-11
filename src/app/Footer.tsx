// Icons
import { MdHexagon } from 'react-icons/md';


export default function Footer() {
    return (
        <footer className="bg-white text-black">
            <div className="container px-20 flex flex-col">
                <div className="text-4xl font-bold mb-6 flex flex-row items-center gap-3 mt-8">
                    <MdHexagon className="text-[#F5E579]" size={40}/>Contact
                </div>

                <div className="flex flex-col sm:flex-row gap-x-12 gap-y-4 mb-14 text-lg font-semibold ml-14">
                    <h5>LinkedIn</h5>
                    <h5>GitHub</h5>
                    <h5>Email</h5>
                    <h5>Resume</h5>
                </div>
            </div>
        </footer>
    )
}
