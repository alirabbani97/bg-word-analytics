import React, { useState } from "react";
import TextArea from "./TextArea";
import Stats from "./Stats";

export default function Container() {
  const [text, setText] = useState("");

  const stats = {
    chars: text.length,
    words: text.split(/\w+/).length - 1,
    insta: 280 - text.length,
    fb: 2200 - text.length,
  };

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
