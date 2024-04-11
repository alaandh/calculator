import { useState } from "react";
import { Results, Button } from "./components";

export const App = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sign, setSign] = useState("");
  const [result, setResult] = useState(null);

  const calculate = (num1, num2, sign) => {
    let result;
    switch (sign) {
      case "+":
        result = parseFloat(num1) + parseFloat(num2);
        break;

      case "-":
        result = num1 - num2;
        break;

      case "×":
        result = num1 * num2;
        break;

      case "÷":
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          console.log("Error: División por cero");
          return null;
        }
        break;

      default:
        console.log("Operador no reconocido");
        return null;
    }
    return result;
  };

  const handleCalculate = () => {
    const calculatedResult = calculate(num1, num2, sign);
    setResult(calculatedResult);
  };

  const handleButtonClick = (value) => {
    if (["+", "-", "×", "÷"].includes(value)) {
      setSign(value);
    } else if (value === "=") {
      handleCalculate();
    } else if (value === "⭠") {
      setNum1(num1.slice(0, -1));
    } else {
      if (!sign) {
        setNum1(num1 + value);
      } else {
        setNum2(num2 + value);
      }
    }
  };

  return (
    <>
      <Results num1={num1} num2={num2} sign={sign} result={result} />
      <Button onButtonClick={handleButtonClick} />
    </>
  );
};
