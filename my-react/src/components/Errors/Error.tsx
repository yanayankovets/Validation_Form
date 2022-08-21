import React from "react";

type ErrorProps = {
  error: string;
};

export const Error = (props: ErrorProps) => {
  return <div style={{color: "#d11507", fontSize: "13px", marginBottom: "10px"}}>{props.error}</div>
};