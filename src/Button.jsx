import { useRef } from "react";
import { Input } from "./Input";

export function Button() {
  const buttonRef = useRef();
  const inputRef = useRef();

  return (
    <>
      <button>Test button</button>
    </>
  );
}
