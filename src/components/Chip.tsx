import styled from "styled-components";
import { FC, ReactNode } from "react";
import { CloseFilled } from "@carbon/icons-react";
import { User } from "../utils/data";
interface Chip {
  avatar: ReactNode;
  name: string;
  email: string;
  handleRemoveUser: (user: User) => void;
  user: User;
}
const ChipWrapper = styled.ul`
  display: flex;
  gap: 8px;
  border: 2px solid red;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 0.5rem;
  border-radius: 5000px;
  & > li {
    list-style: none;
  }
`;
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
export const Chip: FC<Chip> = ({
  avatar,
  name,
  email,
  user,
  handleRemoveUser,
}) => {
  return (
    <ChipWrapper>
      <li>{avatar}</li>
      <li>{name}</li>
      <li>{email}</li>
      <Button onClick={() => handleRemoveUser(user)}>
        <CloseFilled />
      </Button>
    </ChipWrapper>
  );
};
