import { useEffect, useState } from "react";

export default function RangeSlider({ MAX, value, setValue }) {
  const [sliderStyle, setSliderStyle] = useState({
    background: `linear-gradient(to right,
      blue 0%,
      green 50%,
      orange 100%,
      white 100%, white 100%)`,
  });

  useEffect(() => {
    if (value) {
      const max = MAX; 
      const percentage = ((value / max) * 100).toFixed(2);
      const updatedStyle = {
        background: `linear-gradient(to right,
          blue 0%,
          green ${percentage / 2}%,
          orange ${percentage}%,
          white ${percentage}%, white 100%)`,
      };
      // console.log(updatedStyle)
      setSliderStyle({ ...updatedStyle });
    }
  }, [value])

  return (
    <input
      className="w-full"
      type="range"
      min="0"
      max={MAX}
      onChange={(e) => setValue(e.target.value)}
      value={value}
      style={sliderStyle}
    />
  )
}
