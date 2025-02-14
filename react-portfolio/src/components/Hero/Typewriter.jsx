import React, { useState, useEffect } from "react";

const Typewriter = ({ words, typingSpeed = 100, deletingSpeed = 50 }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0); // Index of current word
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting ? currentWord.substring(0, prev.length - 1) : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length); // Move to next word
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [text, isDeleting, index, words, typingSpeed, deletingSpeed]);

  return <h1 className="typewriter">{text}<span className="caret">|</span></h1>;
};

export default Typewriter;
