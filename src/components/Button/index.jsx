import React from "react";

import { ButtonConatiner } from "./styles";

const Button = ({ title, variant = "primary", onClick }) => {
  return (
    <ButtonConatiner variant={variant} onClick={onClick}>
      {title}
    </ButtonConatiner>
  );
};

export { Button };
