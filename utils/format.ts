export const formatNumber = (n: number, showCurrency: boolean = false) => {
  const formatter = new Intl.NumberFormat("sr", {
    style: "currency",
    currency: "RSD",
  });
  const formatted = formatter.format(n);
  if (showCurrency) {
    return formatted;
  } else {
    return formatted.slice(0, -4);
  }
};

export const formatPercent = (n: number) => {
  return (n * 100).toFixed(2) + "%";
};
