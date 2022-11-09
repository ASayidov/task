import { useRef } from "react";

export function Input() {
  const inputRef = useRef(null);
  const showNumber = (sym) => {
    inputRef.current.value += sym;
  };

  const clear = (f) => {
    inputRef.current.value = f;
  };

  return (
    <>
      <input type="text" className="item top" placeholder="0" ref={inputRef} />
      <button className="item for-hover" onClick={() => showNumber("7")}>
        7
      </button>
      <button className="item for-hover" onClick={() => showNumber("8")}>
        8
      </button>
      <button className="item for-hover" onClick={() => showNumber("9")}>
        9
      </button>
      <button
        class="item button-ac for-hover"
        id="clear"
        onClick={() => clear("")}
      >
        clear
      </button>
    </>
  );
}
