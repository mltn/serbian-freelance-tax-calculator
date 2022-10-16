import React,{ ReactNode } from "react"

type Props = {
    children?: ReactNode
}

const CalculatorDetailsRow = ({children}: Props) => {
    return (<div className="flex flex-wrap justify-between">
        {children}
    </div>)
};

export default CalculatorDetailsRow;