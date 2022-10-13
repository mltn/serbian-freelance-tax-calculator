import { freelanceTaxCalc } from "../utils/taxAndContributions";

type Props = {
  input: number;
};

const Calculator = ({ input }: Props) => {
  const output = freelanceTaxCalc({ priliv: input, brojOpcije: 1 });
  return <pre>{JSON.stringify(output, null, 2)}</pre>;
};

export default Calculator;
