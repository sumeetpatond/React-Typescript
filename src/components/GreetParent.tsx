import React from "react";

type GreetParentProps = {
  children: React.ReactNode;
};

const GreetParent = function (props: GreetParentProps) {
  return (
    <>
      <div>GreetParent-start</div>
      <div>{props.children}</div>
      <div>GreetParent-end</div>
    </>
  );
};

export default GreetParent;
