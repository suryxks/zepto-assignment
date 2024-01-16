import {
  ChangeEventHandler,
  useRef,
  useState,
  forwardRef,
  ElementRef,
} from "react";
import styled from "styled-components";
import { User } from "../utils/data";
import { UserCard } from "./UserCard";
import { Avatar } from "./Avatar";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

const Input = styled.input`
  width: auto;
  border: none;
  outline: none;
  height: 2rem;
  font-size: 1.5rem;
  min-width: 300px;
`;
const InputDropdownWrapper = styled.div`
  padding: 0.5rem;
`;
const DropDownWrapper = styled.div`
  position: absolute;
  background-color: white;
`;
interface InputDropDown {
  inputValue: string;
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
  users: User[];
  handleSelectUser: (user: User) => void;
}
type Ref = ElementRef<"input">;
export const InputDropDown = forwardRef<Ref, InputDropDown>(
  ({ inputValue, handleInputChange, users, handleSelectUser }, ref) => {
    const [open, setOpen] = useState<boolean>(true);
    const dropDownRef = useRef(null);
    useOnClickOutside(dropDownRef, () => setOpen(false));
    return (
      <InputDropdownWrapper ref={dropDownRef}>
        <Input
          type="text"
          autoFocus
          onFocus={() => {
            setOpen(true);
          }}
          value={inputValue}
          onChange={handleInputChange}
          ref={ref}
        />
        {open && (
          <DropDownWrapper>
            {users.length > 0 ? (
              users.map((user) => {
                const { imageUrl, name, id, email } = user;
                return (
                  <UserCard
                    key={id}
                    avatar={<Avatar src={imageUrl} alt={name} />}
                    name={name}
                    email={email}
                    user={user}
                    handleSelectUser={handleSelectUser}
                  />
                );
              })
            ) : (
              <div>No data</div>
            )}
          </DropDownWrapper>
        )}
      </InputDropdownWrapper>
    );
  },
);
// const InputSelect = forwardRef<Ref & InputDropDown>(InputDropDown);
