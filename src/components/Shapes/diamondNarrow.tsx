import "./shapes.css"

type DiamondNarrowProps = {
    className?: string
}

export function DiamondNarrow({className}: DiamondNarrowProps) {
        return(
            <div className={`diamond-narrow ${className}`}/>
        )
}