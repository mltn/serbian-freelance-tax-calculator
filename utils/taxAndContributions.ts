import { ftruncate } from "fs";
import {
  OptionNumber,
  ContributionBreakdown,
  TaxationConstants,
  TaxCalculationInput,
  TaxCalculationOutput,
} from "../interfaces/taxAndContribution";

export const freelanceTaxConstants: TaxationConstants = {
  opcija1: {
    normiraniTrosak: 0.34,
    besteretniIznos: 21712,
    poreskaStopa: 0.1,
  },
  opcija2: {
    normiraniTrosak: 0,
    besteretniIznos: 32000,
    poreskaStopa: 0.2,
  },
  pio: {
    naTeretPoslodavca: 0.1,
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
  brojOpcije: OptionNumber
): ContributionBreakdown => {
  let osnovicaZaDoprinos = Math.min(osnovica, ftc.maxDoprinosi);
  if (brojOpcije === 1) {
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
    naTeretPoslodavca: osnovicaZaDoprinos * ftc.pio.naTeretPoslodavca,
    naTeretZaposlenog: osnovicaZaDoprinos * ftc.pio.naTeretZaposlenog,
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
  const pio = getPensionContributionBreakdown(osnovica, brojOpcije);
  const pioUkupno = pio.naTeretPoslodavca + pio.naTeretZaposlenog;
  const zdravstveno = getHealthContributionBreakdown(osnovica);
  const zdravstvenoUkupno =
    zdravstveno.naTeretPoslodavca + zdravstveno.naTeretZaposlenog;
  const porez = osnovica * izabranaOpcija.poreskaStopa;
  const poreziDoprinosiUkupno = porez + zdravstvenoUkupno + pioUkupno;
  const poreziDoprinosiProcenat = (100 * poreziDoprinosiUkupno) / priliv;
  const neto = priliv - poreziDoprinosiUkupno;
  const netoProcenat = (100 * neto) / priliv;
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
