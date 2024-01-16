import { FC, ReactNode } from "react";
import { styled } from "styled-components";
interface IconButton {
  Icon: ReactNode;
}

const Button = styled.button`
  border: none;
  background-color: white;
  padding: 0;
  margin: 0;
  height: 1rem;
  &:hover {
    cursor: pointer;
  }
`;
export const IconButton: FC<IconButton> = ({ Icon }) => {
  return <Button>{Icon}</Button>;
};
