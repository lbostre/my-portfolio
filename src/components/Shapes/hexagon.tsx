import "./shapes.css"
import Link from 'next/link';

type HexagonProps = {
    className?: string
}

export function Hexagon({ className }: HexagonProps) {
    return (
        <Link href="/evh">
            <div className={`hexagon ${className} hover:scale-[1.12] hover:rotate-90 transition`}/>
        </Link>
    )
}