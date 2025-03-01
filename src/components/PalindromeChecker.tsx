import { useEffect, useState } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

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
        ? `${trimmedText} is a palindrome.`
        : `${trimmedText} is not a palindrome.`
    );
  };

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can set a different duration here if needed
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="container col-md-6 text-center bg-light-subtle p-4 rounded"
        data-aos="fade-up" // AOS animation here
      >
        <h1 className="text-danger" data-aos="zoom-in">
          Palindrome Checker
        </h1>
        <p className="text-secondary" data-aos="fade-up">
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
          data-aos="fade-up"
        />

        {/* Button */}
        <button
          className="btn btn-danger"
          onClick={checkPalindrome}
          data-aos="fade-up"
        >
          Check Palindrome
        </button>

        {/* Result */}
        {result && (
          <p className="mt-3 fw-semibold" data-aos="fade-up">
            {result}
          </p>
        )}
      </div>
    </div>
  );
};

export default PalindromeChecker;
