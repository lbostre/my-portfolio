import "./shapes.css"
import Link from 'next/link';

type DiamondNarrowProps = {
    className?: string
}

export function DiamondNarrow({ className }: DiamondNarrowProps) {
    return (
        <Link href="/jumpseat">
            <div className={`diamond-narrow ${className} hover:scale-[1.12]`}/>
        </Link>
    )
}