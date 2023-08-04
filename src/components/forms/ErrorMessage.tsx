import React from "react";

interface Props {
  msg: string;
}

const ErrorMessage = ({ msg }: Props) => {
  return (
    <div>
      <span className="text-sm text-red-600">{msg}</span>
    </div>
  );
};

export default ErrorMessage;
