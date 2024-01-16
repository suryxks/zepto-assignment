import styled from "styled-components";
import React, { FC, ReactNode } from "react";
import XCircleIcon from "@heroicons/react/24/solid/XCircleIcon";
interface Chip {
  avatar: ReactNode;
  name: string;
  email: string;
}
const ChipWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
export const Chip: FC<Chip> = ({ avatar, name }) => {
  return (
    <ChipWrapper>
      {avatar}
      <span>{name}</span>
      <XCircleIcon />
      <div>asdfa</div>
    </ChipWrapper>
  );
};
