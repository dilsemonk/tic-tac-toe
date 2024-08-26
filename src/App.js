import React from 'react'
import Board from './Board';

export default function App() {
  return (
    <div class="flex flex-col justify-center items-center h-screen font-serif">
      <h1 class="text-5xl font-bold underline pb-6">Tic-Tac-Toe</h1>
      <Board />
    </div>
  );
}