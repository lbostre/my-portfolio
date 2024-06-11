import "./shapes.css"

type SquareProps = {
    className?: string
}

export function Square({className}: SquareProps) {
    return(
        <div className={`square ${className}`}/>
    )
}