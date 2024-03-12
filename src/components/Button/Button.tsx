import "./Button.css"
type ButtonProps = {
    type?: "button" | "submit" | "reset" | undefined,
    text: string,
    onClick: void,
};

export default function Button({ type = "button", text, onClick }: ButtonProps) {
    return (
        <>
            <button
                type={type}
                className="bg-[#95a78d] text-[#fff7f0] px-3 py-2 rounded-md w-fit"
                id="button"
                onClick={() => onClick}
            >
                {text}
            </button>
        </>
    );
}
