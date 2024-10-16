/* External dependencies */
import React from "react";

export default function Button({ onClick, text }) {
  return (
    <button
      className=" rounded-md py-3 px-6 bg-black text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
