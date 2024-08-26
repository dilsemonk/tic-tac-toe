import React from 'react';

export default function Square({ value, onClick }) {
  return (
    <button
      className="square bg-white border-2 border-gray-500 w-20 h-20 flex items-center justify-center text-2xl font-bold"
      onClick={onClick}
    >
      {value}
    </button>
  );
}