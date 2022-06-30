// Конвертирует строку (число в локальном формате) в целое число
const convertStringToNumber: Function = (str: string, digits: number = 0): number | null => {
  const num = Number(str.replace(/\s/g, ''));
  if (Number.isNaN(num)) return null;

  const d = Math.pow(10, digits);
  return Math.trunc(num * d) / d;
};

// Конвертирует число в строку (число в локальном формате)
const convertNumberToString: Function = (num: number, digits: number = 0): string => {
  if (!num) return '';

  if (digits <= 0) return Math.trunc(num).toLocaleString();

  const d = Math.pow(10, digits);
  return (Math.trunc(num * d) / d).toLocaleString();
};

export {
  convertStringToNumber,
  convertNumberToString,
}
