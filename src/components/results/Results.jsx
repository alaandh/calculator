/* eslint-disable */

export const Results = ({ num1, num2, sign, result, onReset }) => {
  return (
    <>
      <input
        type="text"
        className="screen"
        value={`${num1} ${sign} ${num2}`}
        readOnly
      />

      <input
        type="text"
        className="result"
        value={result !== null ? result : ""}
        readOnly
      />

      <div className="ac-container">
        <button className="btn btn-sm btn-dark" onClick={onReset}>
          AC
        </button>
      </div>
    </>
  );
};
