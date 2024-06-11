import "./shapes.css"

type DiamondProps = {
    className?: string
}

export function Diamond({className}: DiamondProps) {
    return(
        <div className={`diamond ${className}`}/>
    )
}