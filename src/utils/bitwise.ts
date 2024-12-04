export interface BitwiseResult {
  and: number;
  or: number;
  xor: number;
  not: number;
  leftShift: number;
  rightShift: number;
}

export function calculateBitwiseOperations(a: number, b: number, shiftAmount: number): BitwiseResult {
  return {
    and: a & b,
    or: a | b,
    xor: a ^ b,
    not: ~a,
    leftShift: a << shiftAmount,
    rightShift: a >> shiftAmount
  };
}

export function toBinary(num: number): string {
  return (num >>> 0).toString(2).padStart(32, '0');
}

export function toHex(num: number): string {
  return '0x' + (num >>> 0).toString(16).toUpperCase();
}