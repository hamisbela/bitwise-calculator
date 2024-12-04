import React from 'react';
import { Binary, Code, Cpu, BookOpen, Target, HelpCircle } from 'lucide-react';

export default function SeoContent() {
  return (
    <div className="mt-16">
      <div className="bg-gradient-to-b from-blue-50 to-white rounded-xl p-8 shadow-lg">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Complete Guide to Bitwise Operations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Binary className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">Bitwise Calculator</h3>
            </div>
            <p className="text-gray-600">Our bitwise calculator helps developers and students perform binary operations with ease and precision.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Code className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">Binary Operations</h3>
            </div>
            <p className="text-gray-600">Perform AND, OR, XOR, NOT operations and bit shifts with our comprehensive bitwise calculator.</p>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <div className="flex items-center mb-4">
              <Target className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Understanding Bitwise Operations</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">Bitwise operations are fundamental to low-level programming, working directly with individual bits in binary numbers.</p>
              <p className="text-gray-600">Our bitwise calculator simplifies complex binary calculations for programming and computer science applications.</p>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Common Bitwise Operations</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">AND (&):</span>
                  Sets each bit to 1 if both bits are 1
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">OR (|):</span>
                  Sets each bit to 1 if at least one of the bits is 1
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">XOR (^):</span>
                  Sets each bit to 1 if exactly one of the bits is 1
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">NOT (~):</span>
                  Inverts all the bits
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Use Our Bitwise Calculator?</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Instant bitwise operation results</li>
            <li>Binary and hexadecimal representations</li>
            <li>Support for all common bitwise operations</li>
            <li>Free online tool for developers</li>
            <li>Mobile-friendly interface</li>
          </ul>
        </div>
      </div>
    </div>
  );
}