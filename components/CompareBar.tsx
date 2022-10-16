import {CompareBarInput} from '../interfaces/compareBar'
import {formatPercent} from '../utils/format'

type Props = {
    input: CompareBarInput
}

const CompareBar = ({input}: Props) => {
    console.log(input.left.total.toFixed(0), input.right.total.toFixed(0))
    return (
        <div className="mb-2">
            <div className="w-100 flex justify-between">
                <span className="text-sm">{formatPercent(input.left.percentage)}</span>
                <span>{input.barLabel}</span>
                <span className="text-sm">{formatPercent(input.right.percentage)}</span>
            </div>
            <div className="w-100 h-[12px] flex">
                <div className={`bg-blue-500`} style={{flexGrow: input.left.total.toFixed(0)}}></div>
                <div className={`bg-red-500`} style={{flexGrow: input.right.total.toFixed(0)}}></div>
            </div>
            <div className="w-100 flex justify-between lowercase">
                <span className="text-xs">{input.left.label}</span>
                <span className="text-xs">{input.right.label}</span>
            </div>
        </div>
    );
};

export default CompareBar;