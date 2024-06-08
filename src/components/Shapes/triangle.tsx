import "./shapes.css"

type TriangleProps = {
    className?: string
}

export function Triangle({className}: TriangleProps) {
    return(
        <div className={`triangle ${className}`}/>
    )
}