import React, { useState } from "react";
import TextArea from "./TextArea";
import Stats from "./Stats";
import { MAX_FB_LIMIT, MAX_INSTA_LIMIT } from "../lib/constants";

export default function Container() {
  const [text, setText] = useState("");

  const stats = {
    chars: text.length,
    words: text.split(/\w+/).length - 1,
    insta: MAX_INSTA_LIMIT - text.length,
    fb: MAX_FB_LIMIT - text.length,
  };

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
