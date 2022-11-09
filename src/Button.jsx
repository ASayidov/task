import { useRef } from "react";
import { Input } from "./Input";

export function Button() {
  const buttonRef = useRef();
  const inputRef = useRef();

  const clear = (f) => {
    inputRef.current.value = f;
  };

  return (
    <>
      <button>Test button</button>
    </>
  );
}
