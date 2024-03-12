function Logo() {
    return (
        <div
            className="text-center py-4 relative top-28 left-0 right-0 ml-auto mr-auto w-[300px] z-50"
            style={{
                backgroundColor: '#f5d7e7',
                borderRadius: '8px',
                border: '2px solid black',
                boxShadow: '8px 8px #95a78d, 8px 8px 0px 2px black, -8px -8px #0a2716, -8px -8px 0px 2px black',
                zIndex: 100
            }}
        >
            <h1 className="font-bold text-3xl">
                course-rater
            </h1>
        </div>
    );
}

export default function CourseRater() {
    return (
        <div>
            <Logo/>
            <div>
                <div className="flex flex-row justify-between px-6 mt-[-65px]">
                    <div
                        className="w-[60px] h-[200px] mt-[50px] rounded-t-lg bg-[#95a78d] border-t-2 border-r-2 border-l-2 border-black"/>
                    <div
                        className="w-[60px] h-[250px] rounded-t-lg bg-[#95a78d] border-t-2 border-r-2 border-l-2 border-black"/>
                    <div
                        className="w-[60px] h-[170px] mt-[80px] rounded-t-lg bg-[#95a78d] border-t-2 border-r-2 border-l-2 border-black"/>
                    <div
                        className="w-[60px] h-[55px] mt-[195px] rounded-t-lg bg-[#95a78d] border-t-2 border-r-2 border-l-2 border-black"/>
                </div>
                <div className="w-[350px] h-[10px] rounded-lg bg-[#0a2716]"/>
            </div>
        </div>
    );
}
