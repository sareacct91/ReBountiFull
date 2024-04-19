import { useEffect, useState } from "react";
import "./test.css";

export default function RangeSliderTest(props) {
  const [rangeValue, setRangeValue] = useState(0);
  const [elem, setElem] = useState();

  useEffect(() => {

    if (elem) {
      console.log(elem.value);
    }
    if (elem) {
      elem.parentNode.style.setProperty("--value", elem.value);
      elem.parentNode.style.setProperty(
        "--text-value",
        JSON.stringify((+elem.value).toLocaleString()),
      );
      console.log(elem.parentNode);
    }
  }, [elem, rangeValue])

  const ATB = {
    MIN: 0,
    MAX: 100,
    STEP: 1,
  };

  const style = {
    ["--min"]: ATB.MIN,
    ["--max"]: ATB.MAX,
    ["--step"]: ATB.STEP,
    ["--value"]: rangeValue,
    ["--text-value"]: rangeValue,
    ["--prefix"]: "$",
  };

  // console.log(style);

  function handleInput(e) {
    // console.log(e);
    setElem(e.target);
    setRangeValue(e.target.value);

  }

  return (
    <>
      <div className="range-slider grad" style={style}>
        <input
          type="range"
          min={ATB.MIN}
          max={ATB.MAX}
          step={ATB.STEP}
          value={rangeValue}
          onChange={handleInput}
        />
        <output />
        <div className="range-slider__progress" />
      </div>
    </>
  );
}
