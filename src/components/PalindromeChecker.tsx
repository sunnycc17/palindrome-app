import { useState } from "react";

const PalindromeChecker: React.FC = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const checkPalindrome = () => {
    const trimmedText = text.trim();
    if (trimmedText.length === 0) {
      alert("Please input a value");
      return;
    }

    const filteredInput = trimmedText.toLowerCase().replace(/[^a-z0-9]/gi, "");
    const reversedInput = filteredInput.split("").reverse().join("");

    setResult(
      filteredInput === reversedInput
        ? `${trimmedText} is a palindrome.`
        : `${trimmedText} is not a palindrome.`
    );
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="container text-center bg-light-subtle p-4 rounded">
        <h1 className="text-danger">Palindrome Checker</h1>
        <p className="text-secondary">
          A palindrome is a word, phrase, or number that reads the same forward
          and backward, like <span className="fst-italic"> "bob"</span>.
        </p>

        {/* Input */}
        <input
          type="text"
          className="form-control my-3 focus-ring focus-ring-danger"
          placeholder="Enter a word..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyUp={() => setResult(null)} // Hide result on typing
        />

        {/* Button */}
        <button className="btn btn-danger " onClick={checkPalindrome}>
          Check Palindrome
        </button>

        {/* Result */}
        {result && <p className="mt-3 fw-semibold">{result}</p>}
      </div>
    </div>
  );
};

export default PalindromeChecker;
