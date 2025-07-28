export function formatNumber(value: number | string): string {
  const num = typeof value === "string" ? parseFloat(value) : value;
  if (isNaN(num)) {
    return "0";
  }
  return num.toLocaleString("en-US");
}

export function formatSocialCount(value: number | string): string {
  const num = typeof value === "string" ? parseFloat(value) : value;

  if (isNaN(num)) {
    return "0";
  }

  if (num < 1000) {
    return num.toString();
  }

  if (num < 10000) {
    return num.toLocaleString("en-US");
  }

  if (num < 1000000) {
    const k = num / 1000;
    return k % 1 === 0 ? `${k}k` : `${k.toFixed(1)}k`;
  }

  if (num < 1000000000) {
    const m = num / 1000000;
    return m % 1 === 0 ? `${m}M` : `${m.toFixed(1)}M`;
  }

  const b = num / 1000000000;
  return b % 1 === 0 ? `${b}B` : `${b.toFixed(1)}B`;
}
