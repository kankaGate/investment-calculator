import { useState } from "react";
import Header from "./components/Header";
import FormInput from "./components/FormInput";
import Result from "./components/Result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValid = userInput.duration > 0;

  function handleChange(inputIdentifier, newData) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: +newData,
      };
    });
  }

  return (
    <>
      <Header />;
      <FormInput userInput={userInput} handleUserInput={handleChange} />
      {!isValid && <p className="center">Please enter a valid duration.</p>}
      {isValid && <Result userInput={userInput} />}
    </>
  );
}

export default App;
