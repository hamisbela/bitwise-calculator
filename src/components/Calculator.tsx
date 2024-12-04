import React, { useState } from 'react';
import { Binary, Hash } from 'lucide-react';
import { calculateBitwiseOperations, toBinary, toHex } from '../utils/bitwise';

export default function Calculator() {
  const [inputs, setInputs] = useState({
    firstNumber: '',
    secondNumber: '',
    shiftAmount: '1'
  });

  const [result, setResult] = useState<null | ReturnType<typeof calculateBitwiseOperations>>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const a = parseInt(inputs.firstNumber);
    const b = parseInt(inputs.secondNumber);
    const shift = parseInt(inputs.shiftAmount);
    const results = calculateBitwiseOperations(a, b, shift);
    setResult(results);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-center mb-6">
        <Binary className="h-8 w-8 text-blue-600 mr-2" />
        <h1 className="text-2xl font-bold text-gray-900">Bitwise Calculator</h1>
      </div>

      <div className="bg-blue-50 p-4 rounded-md mb-6">
        <div className="flex items-center mb-2">
          <Hash className="h-5 w-5 text-blue-600 mr-2" />
          <h2 className="text-lg font-semibold text-blue-800">Bitwise Operations</h2>
        </div>
        <p className="text-blue-700">
          Perform common bitwise operations including AND, OR, XOR, NOT, and bit shifts.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Number (A)
          </label>
          <input
            type="number"
            value={inputs.firstNumber}
            onChange={(e) => setInputs({ ...inputs, firstNumber: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
            placeholder="Enter first number"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Second Number (B)
          </label>
          <input
            type="number"
            value={inputs.secondNumber}
            onChange={(e) => setInputs({ ...inputs, secondNumber: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
            placeholder="Enter second number"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Shift Amount
          </label>
          <input
            type="number"
            value={inputs.shiftAmount}
            onChange={(e) => setInputs({ ...inputs, shiftAmount: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
            min="0"
            max="31"
            placeholder="Enter shift amount (0-31)"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Calculate
        </button>
      </form>

      {result && (
        <div className="mt-6 space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Results</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium text-gray-700 mb-2">A &amp; B (AND)</h3>
              <p className="font-mono text-sm">{result.and}</p>
              <p className="font-mono text-sm text-gray-500">{toBinary(result.and)}</p>
              <p className="font-mono text-sm text-gray-500">{toHex(result.and)}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium text-gray-700 mb-2">A | B (OR)</h3>
              <p className="font-mono text-sm">{result.or}</p>
              <p className="font-mono text-sm text-gray-500">{toBinary(result.or)}</p>
              <p className="font-mono text-sm text-gray-500">{toHex(result.or)}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium text-gray-700 mb-2">A ^ B (XOR)</h3>
              <p className="font-mono text-sm">{result.xor}</p>
              <p className="font-mono text-sm text-gray-500">{toBinary(result.xor)}</p>
              <p className="font-mono text-sm text-gray-500">{toHex(result.xor)}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium text-gray-700 mb-2">~A (NOT)</h3>
              <p className="font-mono text-sm">{result.not}</p>
              <p className="font-mono text-sm text-gray-500">{toBinary(result.not)}</p>
              <p className="font-mono text-sm text-gray-500">{toHex(result.not)}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium text-gray-700 mb-2">A &lt;&lt; shift (Left Shift)</h3>
              <p className="font-mono text-sm">{result.leftShift}</p>
              <p className="font-mono text-sm text-gray-500">{toBinary(result.leftShift)}</p>
              <p className="font-mono text-sm text-gray-500">{toHex(result.leftShift)}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium text-gray-700 mb-2">A &gt;&gt; shift (Right Shift)</h3>
              <p className="font-mono text-sm">{result.rightShift}</p>
              <p className="font-mono text-sm text-gray-500">{toBinary(result.rightShift)}</p>
              <p className="font-mono text-sm text-gray-500">{toHex(result.rightShift)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}