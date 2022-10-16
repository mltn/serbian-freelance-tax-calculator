import {TaxCalculationOutput, OptionNumber} from '../interfaces/taxAndContribution'
import {CompareBarInput} from '../interfaces/compareBar'
import CompareBar from './CompareBar'

type Props = {
    taxCalculationOutput: TaxCalculationOutput
    optionNumber: OptionNumber
}

const TaxCalculationCompareBar = ({taxCalculationOutput, optionNumber}: Props) => {
    const compareBarInput: CompareBarInput = {
        barLabel: `Opcija ${optionNumber}`,
        barTotal: taxCalculationOutput.priliv,
        left: {
            label: "Neto",
            total: taxCalculationOutput.neto,
            percentage: taxCalculationOutput.netoProcenat
        },
        right: {
            label: "Porezi i doprinosi",
            total: taxCalculationOutput.poreziDoprinosiUkupno,
            percentage: taxCalculationOutput.poreziDoprinosiProcenat
        }
    };
    return (
        <CompareBar input={compareBarInput}/>
    );
};

export default TaxCalculationCompareBar;