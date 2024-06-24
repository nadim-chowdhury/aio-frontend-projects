"use client";

import { useState } from "react";

const JokeGenerator = () => {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await response.json();
    setJoke(`${data.setup} - ${data.punchline}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Random Joke Generator</h1>
      <button
        onClick={fetchJoke}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Get a Joke
      </button>
      {joke && <p className="mt-4 text-xl">{joke}</p>}
    </div>
  );
};

export default JokeGenerator;
