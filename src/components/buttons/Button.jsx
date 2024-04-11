/* eslint-disable */

export const Button = ({ onButtonClick }) => {
  const buttonsValues = [
    ["7", "8", "9", "÷"],
    ["4", "5", "6", "×"],
    ["1", "2", "3", "+"],
    ["⭠", "0", "=", "-"],
  ];

  const ButtonRow = ({ values }) => (
    <div className="row justify-content-center">
      {values.map((value, index) => (
        <div key={index} className="col-12 col-md-3">
          <button
            className="btn btn-outline-dark btn-lg"
            onClick={() => onButtonClick(value)}
          >
            {value}
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <div className="d-grid gap-2">
      {buttonsValues.map((values, index) => (
        <ButtonRow key={index} values={values} />
      ))}
    </div>
  );
};
