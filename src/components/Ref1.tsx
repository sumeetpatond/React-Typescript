import { useRef, useEffect } from "react";
const Ref1 = function () {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return <input ref={inputRef} />;
};

export default Ref1;
