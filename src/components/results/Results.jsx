/* eslint-disable */

export const Results = ({ num1, num2, sign, result, onReset }) => {
  return (
    <>
      <div className="screen">
        <div className="ac-container">
          <button className="btn btn-sm btn-secondary" onClick={onReset}>
            AC
          </button>
        </div>

        <div className="operation">
          {num1} {sign} {num2}
        </div>

        <div>
          {result !== null ? <div className="result">{result}</div> : null}
        </div>
      </div>
    </>
  );
};
