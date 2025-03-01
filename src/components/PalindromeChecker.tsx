import { useState } from "react";

const PalindromeChecker: React.FC = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const checkPalindrome = () => {
    const trimmedText = text.trim();
    if (!trimmedText) {
      alert("Please input a value");
      return;
    }

    const filteredInput = trimmedText.toLowerCase().replace(/[^a-z0-9]/gi, "");
    const reversedInput = filteredInput.split("").reverse().join("");

    setResult(
      filteredInput === reversedInput
        ? ` ${trimmedText} is a palindrome.`
        : ` ${trimmedText} is not a palindrome.`
    );
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="container text-center bg-white p-4 rounded shadow col-11 col-sm-8 col-md-6">
        <h1 className="text-danger">Palindrome Checker</h1>
        <p className="text-secondary">
          A palindrome reads the same forward and backward, like{" "}
          <span className="fst-italic">"bob"</span>.
        </p>

        {/* Input Field */}
        <input
          type="text"
          className="form-control my-3 border-danger focus-ring focus-ring-danger"
          placeholder="Enter a word..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyUp={() => setResult(null)} // Hide result on typing
        />

        {/* Check Button */}
        <button className="btn btn-danger" onClick={checkPalindrome}>
          Check Palindrome
        </button>

        {/* Result Display */}
        {result && <p className="mt-3 fw-semibold">{result}</p>}
      </div>
    </div>
  );
};

export default PalindromeChecker;
