import React from 'react';
import { Binary, Code, Cpu, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center mb-6">
            <Binary className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600">Welcome to Bitwise Calculator, your trusted resource for binary operations and digital logic calculations.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
              <div className="flex flex-col items-center text-center p-4">
                <Code className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-600">To simplify bitwise operations for developers, students, and computer science enthusiasts.</p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <Cpu className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <p className="text-gray-600">Precision, efficiency, and user-friendly tools for the programming community.</p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Commitment</h3>
                <p className="text-gray-600">Providing reliable and accurate bitwise calculations for all your programming needs.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Why Choose Our Calculator</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Comprehensive bitwise operation support</li>
              <li>Binary and hexadecimal representations</li>
              <li>Intuitive user interface</li>
              <li>Mobile-friendly design</li>
              <li>Free and accessible to everyone</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Our Expertise</h2>
            <p className="text-gray-600">Our team combines deep knowledge of computer science fundamentals with software development expertise to deliver accurate and reliable bitwise calculations. We understand the importance of bit manipulation in modern programming and aim to provide tools that make these operations more accessible.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Understanding Bitwise Operations</h2>
            <p className="text-gray-600">Bitwise operations are fundamental to computer programming, allowing direct manipulation of individual bits within binary numbers. These operations are crucial in various applications, from low-level system programming to optimization techniques in high-level applications.</p>
          </div>
        </div>
      </div>
    </div>
  );
}