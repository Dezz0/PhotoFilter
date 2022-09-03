import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { initialStateStyles } from "../defaultValue";
import { options } from "../slice/optionsSlice";
import "../styles/image.css";

export default function Image() {
  const [styles, setStyles] = useState(initialStateStyles);
  const allOptions = useSelector(options);
  const option = allOptions.filter((option) => option.hidden === false);
  const id = option[0].id;
  const value = option[0].value;

  useEffect(() => {
    setStyles({ ...styles, [id]: value });
  }, [id, value]);

  return (
    <div className="image">
      <img
        src="https://funart.pro/uploads/posts/2021-03/1617078360_9-p-oboi-peizazh-rassvet-9.jpg"
        alt="редактируемое фото"
        className="editable-photo"
        style={{
          filter: ` 
          blur(${styles.blur}px) 
          brightness(${styles.brightness})
          contrast(${styles.contrast})
          grayscale(${styles.grayscale})
          hue-rotate(${styles["hue-rotate"]}deg)
          invert(${styles.invert})
          opacity(${styles.opacity})
          saturate(${styles.saturate})
          sepia(${styles.sepia})
          `
        }}
      />
    </div>
  );
}
