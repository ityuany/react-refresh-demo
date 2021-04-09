import React from "react";
import { Modal } from "antd";

export default class extends React.Component {
  render() {
    return (
      <div>
        <h1>xxxx</h1>
        <Modal visible={true} title="xxx-1010101-aaaa">
          <p style={{ color: "green", fontSize: 18 }}>1212</p>
        </Modal>
      </div>
    );
  }
}
