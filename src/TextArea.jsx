import React, { useState } from "react";
import Warning from "./Warning";

export default function TextArea() {
  const [text, setText] = useState("");
  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      newText = newText.replace("<script>", "");
      setErrors("No Script Tag allowed");
    } else if (newText.includes("@")) {
      newText = newText.replace("@", "");
      setErrors("No @ character allowed");
    } else {
      setErrors("");
    }

    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={(e) => handleChange(e)}
        placeholder="Enter Your Text"
        spellCheck={false}
      />
      {errors && <Warning message={errors} />}
    </div>
  );
}
