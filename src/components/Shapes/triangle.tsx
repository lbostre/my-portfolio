import "./shapes.css"
import Link from 'next/link';

type TriangleProps = {
    className?: string
}

export function Triangle({ className }: TriangleProps) {
    return (
        <Link href="/course-rater">
            <div className={`triangle ${className} hover:scale-[1.12]`}/>
        </Link>
    )
}