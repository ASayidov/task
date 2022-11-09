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
      <button
        class="item button-ac for-hover"
        id="clear"
        onClick={() => clear("")}
      >
        Clear
      </button>
      <button class="item button-ac for-hover" id="bs">
        BS
      </button>
      <button class="item symbol" disabled onclick="amallar('/')">
        /
      </button>
      <button class="item symbol" disabled onclick="amallar('*')">
        x
      </button>
      <button class="item for-hover" onClick={() => showNumber("7")}>
        7
      </button>
      <button class="item for-hover" oonClick={() => showNumber("8")}>
        8
      </button>
      <button class="item for-hover" onClick={() => showNumber("9")}>
        9
      </button>
      <button class="item symbol" disabled onclick="amallar('-')">
        -
      </button>
      <button class="item for-hover" onClick={() => showNumber("4")}>
        4
      </button>
      <button class="item for-hover" onClick={() => showNumber("5")}>
        5
      </button>
      <button class="item for-hover" onClick={() => showNumber("6")}>
        6
      </button>
      <button class="item symbol" disabled onclick="amallar('+')">
        +
      </button>
      <button class="item for-hover" onClick={() => showNumber("1")}>
        1
      </button>
      <button class="item for-hover" onClick={() => showNumber("2")}>
        2
      </button>
      <button class="item for-hover" onClick={() => showNumber("3")}>
        3
      </button>
      <div class="test">
        <button class="item button-ra" onclick="calculate()">
          =
        </button>
      </div>
      <button
        class="item button-zero for-hover"
        onClick={() => showNumber("0")}
      >
        0
      </button>
      <button class="item symbol" disabled onclick="amallar('.')">
        .
      </button>
    </>
  );
}
