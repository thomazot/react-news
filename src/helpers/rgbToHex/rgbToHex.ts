export default function rgbToHex(rgb: string): string {
  const rgbSplit = rgb.match(
    /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
  );
  return rgbSplit && rgbSplit.length === 4
    ? `#${
        ("0" + parseInt(rgbSplit[1], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgbSplit[2], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgbSplit[3], 10).toString(16)).slice(-2)
      }`
    : "";
}
