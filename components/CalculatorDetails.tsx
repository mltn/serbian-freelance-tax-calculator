import {
  OptionNumber,
  TaxCalculationOutput,
} from "../interfaces/taxAndContribution";
import { freelanceTaxConstants as ftc } from "../utils/taxAndContributions";
import { formatNumber, formatPercent } from "../utils/format";

type Props = {
  data: TaxCalculationOutput;
  optionNumber: OptionNumber;
};

const CalculatorDetails = ({ data, optionNumber }: Props) => {
  const option = optionNumber === 1 ? ftc.opcija1 : ftc.opcija2;
  return (
    <div className="text-sm">
      <div className="flex flex-wrap justify-between">
        <label>Besteretni iznos:&nbsp;</label>
        <span className="">{formatNumber(option.besteretniIznos)}</span>
      </div>
      <div className="flex flex-wrap justify-between">
        <label>
          Normirani trošak ({formatPercent(option.normiraniTrosak)}):&nbsp;
        </label>
        <span>{formatNumber(data.normiraniTrosakUkupno)}</span>
      </div>
      <div className="flex flex-wrap justify-between">
        <label className="font-bold">Osnovica:&nbsp;</label>
        <span className="font-bold mb-2">{formatNumber(data.osnovica)}</span>
      </div>
      <div className="flex flex-wrap justify-between">
        <label>PIO:&nbsp;</label>
        <span>{formatNumber(data.pioUkupno)}</span>
      </div>
      <div className="flex flex-wrap justify-between">
        <label>Zdravstveno:&nbsp;</label>
        <span>{formatNumber(data.zdravstvenoUkupno)}</span>
      </div>
      <div className="flex flex-wrap justify-between">
        <label>Porez:&nbsp;</label>
        <span>{formatNumber(data.porez)}</span>
      </div>
      <div className="flex flex-wrap justify-between">
        <label className="font-bold">Porez i doprinosi:&nbsp;</label>
        <span className="font-bold">
          {formatNumber(data.poreziDoprinosiUkupno)}
        </span>
      </div>
      <div className="flex flex-wrap justify-between text-xs">
        <label className="font-bold">%:&nbsp;</label>
        <span className="font-bold mb-2">
          {formatPercent(data.poreziDoprinosiProcenat, 2)}
        </span>
      </div>
      <div className="flex flex-wrap justify-between">
        <label className="font-bold">Neto:&nbsp;</label>
        <span className="font-bold">{formatNumber(data.neto)}</span>
      </div>
      <div className="flex flex-wrap justify-between text-xs">
        <label className="font-bold">%:</label>
        <span className="font-bold">{formatPercent(data.netoProcenat, 2)}</span>
      </div>
    </div>
  );
};

export default CalculatorDetails;
