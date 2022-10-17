export type TaxationOption = {
    normiraniTrosak: number
    besteretniIznos: number
    poreskaStopa: number
    koristiSeMinDoprinosiZaPio: boolean
}

export type ContributionBreakdown = {
    naTeretPoslodavca: number
    naTeretZaposlenog: number
}

export type TaxationConstants = {
    opcija1: TaxationOption
    opcija2: TaxationOption
    maxDoprinosi: number
    minDoprinosi: number
    pio: ContributionBreakdown
    zdravstveno: ContributionBreakdown
}

export type OptionNumber = 1 | 2

export type TaxCalculationInput = {
    priliv: number
    brojOpcije: OptionNumber
}

export type TaxCalculationOutput = {
    priliv: number
    normiraniTrosakUkupno: number
    osnovica: number
    pio: ContributionBreakdown
    pioUkupno: number
    zdravstveno: ContributionBreakdown
    zdravstvenoUkupno: number
    porez: number
    poreziDoprinosiUkupno: number
    poreziDoprinosiProcenat: number
    neto: number
    netoProcenat: number
}

export type Formatter = (val: number) => string

export type LabelWithDescription = {
    label: string
    description: string
    format: Formatter
}