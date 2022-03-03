import React from "react";
import { Spin } from "antd";

const Loader = () => {
  return (
    <div
      className="example"
      style={{
        marginLeft:'10px'
      }}
    >
      <Spin
        style={{
          textAlign: "center",
          color:'white',
        }}
        size="small"
      />
    </div>
  );
};

export default Loader;


