import { useRef } from "react";

// let symbols = document.getElementById("symbol");

export function Input() {
  const inputRef = useRef(null);
  const showNumber = (sym) => {
    inputRef.current.value += sym;
  };

  const clear = (del) => {
    inputRef.current.value = del;
  };

  const amallar = (symb) => {
    inputRef.current.value += symb;

    // for (let i = 0; i < 5; i++) {
    //   symbols[i].disabled = false;
    //   symbols[i].classList.remove("for-hover");
    // }
  };

  const calculate = () => {
    if (inputRef.current.value !== "") {
      inputRef.current.value = eval(inputRef.current.value);
    }
  };

  const uchirish = () => {
    inputRef.current.value = inputRef.current.value.slice(
      0,
      inputRef.current.value.length - 1
    );
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
      <button
        class="item button-ac for-hover"
        id="bs"
        onClick={() => uchirish("")}
      >
        BS
      </button>
      <button class="item symbol" onClick={() => amallar("/")}>
        /
      </button>
      <button class="item symbol" onClick={() => amallar("*")}>
        x
      </button>
      <button class="item for-hover" onClick={() => showNumber("7")}>
        7
      </button>
      <button class="item for-hover" onClick={() => showNumber("8")}>
        8
      </button>
      <button class="item for-hover" onClick={() => showNumber("9")}>
        9
      </button>
      <button class="item symbol" onClick={() => amallar("-")}>
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
      <button class="item symbol" onClick={() => amallar("+")}>
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
        <button class="item button-ra" onClick={() => calculate()}>
          =
        </button>
      </div>
      <button
        class="item button-zero for-hover"
        onClick={() => showNumber("0")}
      >
        0
      </button>
      <button class="item symbol" onClick={() => amallar(".")}>
        .
      </button>
    </>
  );
}
