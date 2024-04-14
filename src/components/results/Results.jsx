/* eslint-disable */

export const Results = ({ num1, num2, sign, result, onReset }) => {
  return (
    <div class=" d-flex align-items-center">
      <div class="row w-100">
        <div class="col-12 col-sm-9 col-md-7 col-lg-5 mx-auto">
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
          <div className="ac-contain">
            <button className="btn btn-sm btn-dark" onClick={onReset}>
              AC
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
