import { useRef } from "react";

export function Input() {
  const inputRef = useRef(null);
  const buttonRef = useRef(null);
  const showNumber = (sym) => {
    inputRef.current.value += sym;
  };

  let clear = (d) => {
    inputRef.current.value = d;
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
  const btns = [
    {
      class: "item button-ac for-hover",
      id: "clear",
      text: "clear",
      onClick: () => clear(""),
    },
    {
      class: "item button-ac for-hover",
      id: "clear",
      text: "BS",
      onClick: () => uchirish(""),
    },
    {
      class: "item symbol",
      id: "clear",
      text: "/",
      onClick: () => amallar("/"),
    },
    {
      class: "item symbol",
      id: "clear",
      text: "*",
      onClick: () => amallar("*"),
    },
    {
      class: "item for-hover",
      id: "clear",
      text: "7",
      onClick: () => showNumber("7"),
    },
    {
      class: "item for-hover",
      id: "clear",
      text: "8",
      onClick: () => showNumber("8"),
    },
    {
      class: "item  for-hover",
      id: "clear",
      text: "9",
      onClick: () => showNumber("9"),
    },
    {
      class: "item symbol",
      id: "clear",
      text: "-",
      onClick: () => amallar("-"),
    },
    {
      class: "item  for-hover",
      id: "clear",
      text: "4",
      onClick: () => showNumber("4"),
    },
    {
      class: "item  for-hover",
      id: "clear",
      text: "5",
      onClick: () => showNumber("5"),
    },
    {
      class: "item  for-hover",
      id: "clear",
      text: "6",
      onClick: () => showNumber("6"),
    },
    {
      class: "item  symbol",
      id: "clear",
      text: "+",
      onClick: () => amallar("+"),
    },
    {
      class: "item  for-hover",
      id: "clear",
      text: "1",
      onClick: () => showNumber("1"),
    },
    {
      class: "item  for-hover",
      id: "clear",
      text: "2",
      onClick: () => showNumber("2"),
    },
    {
      class: "item  for-hover",
      id: "clear",
      text: "3",
      onClick: () => showNumber("3"),
    },
    {
      class: "item button-ra test",
      id: "clear",
      text: "=",
      onClick: () => calculate("="),
    },
    {
      class: "item  button-zero for-hover",
      id: "clear",
      text: "0",
      onClick: showNumber("0"),
    },
    {
      class: "item symbol",
      id: "clear",
      text: ".",
      onClick: amallar("."),
    },
  ];

  return (
    <>
      <input type="text" className="item top" placeholder="0" ref={inputRef} />
      {btns.map((btn) => (
        <button className={btn.class} onClick={btn.onClick}>
          {btn.text}
        </button>
      ))}
    </>
  );
}
