import "./shapes.css";
import Link from "next/link";

type SquareProps = {
    className?: string;
};

export function Square({ className }: SquareProps) {
    return (
        <Link href="/tcc">
            <div
                className={`square ${className} cursor-pointer hover:scale-[1.12]`}
            />
        </Link>
    );
}
