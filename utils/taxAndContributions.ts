import {
  ContributionBreakdown,
  TaxationConstants,
  TaxCalculationInput,
  TaxCalculationOutput,
  TaxationOption,
} from "../interfaces/taxAndContribution";

export const freelanceTaxConstants: TaxationConstants = {
  opcija1: {
    normiraniTrosak: 0,
    besteretniIznos: 32000,
    poreskaStopa: 0.2,
    koristiSeMinDoprinosiZaPio: false,
  },
  opcija2: {
    normiraniTrosak: 0.34,
    besteretniIznos: 19300,
    poreskaStopa: 0.1,
    koristiSeMinDoprinosiZaPio: true,
  },
  pio: {
    naTeretPoslodavca: 0.11,
    naTeretZaposlenog: 0.14,
  },
  zdravstveno: {
    naTeretPoslodavca: 0.0515,
    naTeretZaposlenog: 0.0515,
  },
  maxDoprinosi: 441140,
  minDoprinosi: 30880,
};
const ftc = freelanceTaxConstants;

const getPensionContributionBreakdown = (
  osnovica: number,
  opcija: TaxationOption
): ContributionBreakdown => {
  let osnovicaZaDoprinos = Math.min(osnovica, ftc.maxDoprinosi);
  if (opcija.koristiSeMinDoprinosiZaPio) {
    osnovicaZaDoprinos = Math.max(osnovicaZaDoprinos, ftc.minDoprinosi);
  }
  return {
    naTeretPoslodavca: osnovicaZaDoprinos * ftc.pio.naTeretPoslodavca,
    naTeretZaposlenog: osnovicaZaDoprinos * ftc.pio.naTeretZaposlenog,
  };
};
const getHealthContributionBreakdown = (
  osnovica: number
): ContributionBreakdown => {
  let osnovicaZaDoprinos = Math.min(osnovica, ftc.maxDoprinosi);
  return {
    naTeretPoslodavca: osnovicaZaDoprinos * ftc.zdravstveno.naTeretPoslodavca,
    naTeretZaposlenog: osnovicaZaDoprinos * ftc.zdravstveno.naTeretZaposlenog,
  };
};

export const freelanceTaxCalc = ({
  priliv,
  brojOpcije,
}: TaxCalculationInput): TaxCalculationOutput => {
  const ftc = freelanceTaxConstants;
  const izabranaOpcija = brojOpcije === 1 ? ftc.opcija1 : ftc.opcija2;
  const normiraniTrosakUkupno = priliv * izabranaOpcija.normiraniTrosak;
  const besteretni = izabranaOpcija.besteretniIznos;
  const osnovica = Math.max(0, priliv - besteretni - normiraniTrosakUkupno);
  const pio = getPensionContributionBreakdown(osnovica, izabranaOpcija);
  const pioUkupno = pio.naTeretPoslodavca + pio.naTeretZaposlenog;
  const zdravstveno = getHealthContributionBreakdown(osnovica);
  const zdravstvenoUkupno =
    zdravstveno.naTeretPoslodavca + zdravstveno.naTeretZaposlenog;
  const porez = osnovica * izabranaOpcija.poreskaStopa;
  const poreziDoprinosiUkupno = porez + zdravstvenoUkupno + pioUkupno;
  const poreziDoprinosiProcenat = poreziDoprinosiUkupno / priliv;
  const neto = priliv - poreziDoprinosiUkupno;
  const netoProcenat = neto / priliv;
  const output: TaxCalculationOutput = {
    priliv,
    normiraniTrosakUkupno,
    osnovica,
    pio,
    pioUkupno,
    zdravstveno,
    zdravstvenoUkupno,
    porez,
    poreziDoprinosiUkupno,
    poreziDoprinosiProcenat,
    neto,
    netoProcenat,
  };
  return output;
};
