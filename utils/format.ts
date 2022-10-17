export const formatNumber = (n: number) => {
  const formatter = new Intl.NumberFormat("sr", {
    style: "currency",
    currency: "RSD",
  });
  const formatted = formatter.format(n);
  return formatted.slice(0, -4);
};

export const formatPercent = (n: number, minimumFractionDigits: number = 0) => {
  const formatter = new Intl.NumberFormat("sr", {
    style: "percent",
    minimumFractionDigits: minimumFractionDigits,
    maximumFractionDigits: 2
  });
  return formatter.format(n);
};
