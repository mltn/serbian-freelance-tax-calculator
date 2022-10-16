import {CompareBarInput} from '../interfaces/compareBar'
import {formatPercent} from '../utils/format'

type Props = {
    input: CompareBarInput
}

const CompareBar = ({input}: Props) => {
    return (
        <div className="mb-2">
            <div className="w-100 flex justify-between">
                <span className="text-sm">{formatPercent(input.left.percentage)}</span>
                <span>{input.barLabel}</span>
                <span className="text-sm">{formatPercent(input.right.percentage)}</span>
            </div>
            <div className="w-full flex h-[12px]">
                <div className={`bg-blue-500 h-[12px]`} style={{width: 100 * input.left.percentage + "%"}}></div>
                <div className={`bg-red-500 h-[12px]`} style={{width: 100 * input.right.percentage + "%"}}></div>
            </div>
            <div className="w-100 flex justify-between lowercase">
                <span className="text-xs">{input.left.label}</span>
                <span className="text-xs">{input.right.label}</span>
            </div>
        </div>
    );
};

export default CompareBar;