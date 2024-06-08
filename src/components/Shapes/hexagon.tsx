import "./shapes.css"

type HexagonProps = {
    className?: string
}

export function Hexagon({className}: HexagonProps) {
    return(
        <div className={`hexagon ${className}`}/>
    )
}