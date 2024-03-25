import { useState } from "react";
export default function Section() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="section">
        <div style={{display:"flex",justifyContent:'space-between'}}>
          <div>
            <i
              onClick={() => {
                setCount(count - 1);
              }}
              className={count <= 0 ? "" : "fa-solid fa-minus"}
            ></i>
          </div>
          <div className="result">
            <div className="number">{count}</div>
          </div>
          <div>
            <i
              onClick={() => {
                setCount(count + 1);
              }}
              className={count >= 10 ? "" : "fa-solid fa-plus"}
            ></i>
          </div>
        </div>

        <div
          className="mot"
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </div>
      </div>
    </>
  );
}
