import React from "react";

import { ButtonConatiner } from "./styles";
import{IButton} from './types'

const Button = ({ title, variant = "primary", onClick }: IButton) => {
  return (
    <ButtonConatiner variant={variant} onClick={onClick}>
      {title}
    </ButtonConatiner>
  );
};

export { Button };
