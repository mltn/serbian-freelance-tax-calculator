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
    <div className="p-4 m-4 rounded-md max-w-[900px] bg-gray-100">
      <TaxCalculationCompareBar
        taxCalculationOutput={output}
        optionNumber={optionNumber}
      />
      {/* <pre className="">{JSON.stringify(output, null, 2)}</pre> */}
      <CalculatorDetails data={output} optionNumber={optionNumber} />
    </div>
  );
};

export default Calculator;
