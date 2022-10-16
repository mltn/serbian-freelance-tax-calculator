import { OptionNumber } from "../interfaces/taxAndContribution";
import {
  freelanceTaxCalc,
  freelanceTaxConstants as ftc,
} from "../utils/taxAndContributions";
import CalculatorDetails from "./CalculatorDetails";
import TaxCalculationCompareBar from "./TaxCalculationCompareBar";

type Props = {
  input: number;
  optionNumber: OptionNumber;
};

const Calculator = ({ input, optionNumber }: Props) => {
  if (isNaN(input) || input <= 0) {
    return <></>;
  }
  const output = freelanceTaxCalc({ priliv: input, brojOpcije: optionNumber });
  return (
    <div className="p-4 m-2 rounded-md min-w-[275px] max-w-[900px] bg-gray-100">
      <TaxCalculationCompareBar
        taxCalculationOutput={output}
        optionNumber={optionNumber}
      />
      <CalculatorDetails data={output} optionNumber={optionNumber} />
    </div>
  );
};

export default Calculator;
