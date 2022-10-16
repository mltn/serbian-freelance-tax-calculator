export type CompareBarSideInput = {
    label: string
    total: number
    percentage: number
}

export type CompareBarInput = {
    barLabel: string
    barTotal: number
    left: CompareBarSideInput
    right: CompareBarSideInput
}