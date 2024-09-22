import { useState, useEffect } from "react";

function ColorGenerator() {
  useEffect(() => {
    document.title = "Color Generator";
  });

  const [color, setColor] = useState("#000000");
  const [opacity, setOpacity] = useState(1);

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleOpacityChange = (e) => {
    const opacityValue = Number(e.target.value);
    setOpacity(opacityValue);
  };

  const getOpacityPercentage = () => {
    return Math.round(opacity * 100);
  };

  const getRGBColor = () => {
    const red = parseInt(color.slice(1, 3), 16);
    const green = parseInt(color.slice(3, 5), 16);
    const blue = parseInt(color.slice(5, 7), 16);
    return `rgb(${red}, ${green}, ${blue})`;
  };

  const getCSSCode = () => {
    // return `rgba(${getRGBColor()}, ${getOpacityPercentage()})`;
    const cssCode = `
    background-color: ${color};
    opacity: ${opacity};`;

    return cssCode.trim();
  };

  const handleReset = () => {
    setColor("#000000");
    setOpacity(1);
  };

  return (
    <div className="color-generator">
      <h1>Color Generator</h1>
      <input type="color" value={color} onChange={handleColorChange} />
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={opacity}
        onChange={handleOpacityChange}
      />
      {color && (
        <div
          className="color-box"
          style={{ backgroundColor: color, opacity: opacity }}
        ></div>
      )}
      {color && (
        <div className="color-info">
          <p>RGB: {getRGBColor()}</p>
          <p>Hex: {color}</p>
          <p>Opacity: {getOpacityPercentage()}%</p>
          <p>CSS Code: {getCSSCode()}</p>
        </div>
      )}

      <br />

      <button className="reset-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default ColorGenerator;
