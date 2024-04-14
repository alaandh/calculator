import { useState } from "react";
import { Results, Button } from "./components";

export const App = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sign, setSign] = useState("");
  // Future feacture
  // const [extraSign, setExtraSign] = useState("");
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
    // Calculate the result
    if (value === "=") {
      handleCalculate();
      // Removes a character
    } else if (value === "⭠" && result === null) {
      num2
        ? setNum2(num2.slice(0, -1) || "")
        : sign
        ? setSign("")
        : setNum1(num1.slice(0, -1) || "");
      // Checks if the value is an operator or a number and assigns it accordingly
    } else if (result === null) {
      if (["+", "-", "×", "÷"].includes(value)) {
        setSign(value);
      } else if (!sign && num1.length < 18) {
        setNum1(num1 + value);
      } else if (sign && num2.length < 18) {
        setNum2(num2 + value);
      }
    }
  };

  const reset = () => {
    setNum1("");
    setNum2("");
    setSign("");
    setResult(null);
  };

  return (
    <>
      <div className="container">
        <Results
          num1={num1}
          num2={num2}
          sign={sign}
          result={result}
          onReset={reset}
        />

        <Button onButtonClick={handleButtonClick} />
      </div>
    </>
  );
};
