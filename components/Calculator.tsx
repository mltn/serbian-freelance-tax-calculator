import { freelanceTaxCalc } from "../utils/taxAndContributions";

type Props = {
  input: number;
};

const Calculator = ({ input }: Props) => {
  const output1 = freelanceTaxCalc({ priliv: input, brojOpcije: 1 });
  const output2 = freelanceTaxCalc({ priliv: input, brojOpcije: 2 });
  return <div className="">
    <label>Opcija 1:</label>
    <pre className="max-w-[300px]">{JSON.stringify(output1, null, 2)}</pre>

    <label>Opcija 2:</label>
    <pre className="max-w-[300px]">{JSON.stringify(output2, null, 2)}</pre>
    </div>;
};

export default Calculator;
