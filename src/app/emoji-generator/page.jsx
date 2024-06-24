"use client";

import { useState } from "react";

const emojis = ["😀", "😂", "🤣", "😍", "😎", "😭", "😡", "👻", "💀", "🤖"];

const EmojiGenerator = () => {
  const [emoji, setEmoji] = useState("😀");

  const generateEmoji = () => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    setEmoji(randomEmoji);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-9xl mb-4">{emoji}</div>
      <button
        onClick={generateEmoji}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
      >
        Generate Emoji
      </button>
    </div>
  );
};

export default EmojiGenerator;
