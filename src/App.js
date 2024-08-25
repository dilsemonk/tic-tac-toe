import React from 'react'
import Board from './Board';

export default function App(){
  return (
    <div class="flex flex-col justify-start items-center h-screen">
      <h1 class="text-3xl font-bold underline">Tic-Tac-Toe</h1>
      <Board/>
    </div>
  );
}