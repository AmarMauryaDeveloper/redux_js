import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./features/counter/counterSlice";

function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center transform transition-all hover:scale-105">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 tracking-wide">
          Redux Counter
        </h1>

        <div className="bg-indigo-50 rounded-xl py-4 mb-6">
          <p className="text-xl font-semibold text-gray-700">
            Count: <span className="text-indigo-600 text-2xl">{count}</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => dispatch(increment())}
            className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white px-6 py-2 rounded-xl shadow-md hover:from-indigo-600 hover:to-indigo-800 transition transform hover:-translate-y-1"
          >
            +
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-2 rounded-xl shadow-md hover:from-red-600 hover:to-red-800 transition transform hover:-translate-y-1"
          >
            -
          </button>
        </div>

        <button
          onClick={() => dispatch(reset())}
          className="bg-gray-200 text-gray-800 px-8 py-2 rounded-xl shadow-sm hover:bg-gray-300 transition mb-6"
        >
          Reset
        </button>

        <div className="flex flex-col gap-4">
          <input
            type="number"
            value={amount}
            placeholder="Enter Amount"
            onChange={(e) => setAmount(Number(e.target.value))}
            className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={() => dispatch(incrementByAmount(Number(amount)))}
            className="bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-2 rounded-xl shadow-md hover:from-green-600 hover:to-green-800 transition transform hover:-translate-y-1"
          >
            Increment By Amount
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
