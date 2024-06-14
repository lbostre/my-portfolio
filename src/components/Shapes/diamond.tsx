import "./shapes.css"
import Link from 'next/link';

type DiamondProps = {
    className?: string
}

export function Diamond({ className }: DiamondProps) {
    return (
        <Link href="/clime">
            <div className={`diamond ${className} hover:scale-[1.12]`}/>
        </Link>
    )
}