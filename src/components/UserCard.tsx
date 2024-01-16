import styled from "styled-components";
import { FC, ReactNode } from "react";
import { User } from "../utils/data";
interface UserCard {
  avatar: ReactNode;
  name: string;
  email: string;
  user: User;
  handleSelectUser: (user: User) => void;
}
const CardWrapper = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0.5rem;
  height: 1.5rem;
  margin: 0.5rem 0;
  & > li {
    list-style: none;
  }
  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }
`;
const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.3rem;
  width: 150px;
  & > li {
    list-style: none;
  }
`;

export const UserCard: FC<UserCard> = ({
  avatar,
  name,
  email,
  handleSelectUser,
  user,
}) => {
  return (
    <CardWrapper onClick={() => handleSelectUser(user)}>
      <UserWrapper>
        <li>{avatar}</li>
        <li>{name}</li>
      </UserWrapper>
      <li>{email}</li>
    </CardWrapper>
  );
};
