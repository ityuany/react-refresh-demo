import React from "react";
import { Modal } from "antd";

// console.log(x.a.v);
export default function Hello() {
  const [state, setState] = React.useState(111);
  return (
    <div>
      <h1>223332dddddww</h1>
      <h2>{state + "12"}</h2>
      <Modal visible={true} title="xxx-1010101-aaaa">
        <p style={{ color: "green", fontSize: 18 }}>xxxxex</p>
        <h1>xx{state}</h1>
        <h1>xx{state}</h1>
        <h1>xx{state}</h1>
        <h1>xx{state}</h1>
      </Modal>
    </div>
  );
}
