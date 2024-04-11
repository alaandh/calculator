/* eslint-disable */

export const Results = ({ num1, num2, sign, result }) => {
  return (
    <>
      <div
        className="d-grid justify-content-center align-items-center
        bg-secondary text-white rounded p-5 mb-4"
      >
        <div>
          {num1} {sign} {num2}
        </div>
        {result !== null && <div>{result}</div>}
      </div>
    </>
  );
};
