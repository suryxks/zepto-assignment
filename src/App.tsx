import {
  useState,
  useEffect,
  ChangeEvent,
  ChangeEventHandler,
  useCallback,
  useRef,
  ElementRef,
} from "react";
import { User, data } from "./utils/data";

import { Chip } from "./components/Chip";
import { Avatar } from "./components/Avatar";
import { getData } from "./utils/getData";
import styled from "styled-components";
import { InputDropDown } from "./components/InputDropdown";
const ChipContainer = styled.ul`
  border-bottom: 4px solid palevioletred;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: auto;
  & > li {
    list-style: none;
  }
  &:focus {
    border: 4px solid palevioletred;
  }
`;
function App() {
  const [users, setUsers] = useState<User[]>(data);
  const [inputValue, setInputValue] = useState<string>("");
  const [selected, setSelected] = useState<User[]>([]);
  const inputRef = useRef<ElementRef<"input">>(null);
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    [],
  );
  const handleSelectUser = useCallback((user: User) => {
    setInputValue("");
    setSelected((prev) => [...prev, user]);
    inputRef.current?.focus();
  }, []);
  const handleRemoveUser = useCallback((user: User) => {
    setSelected((prev) => prev.filter((entry) => entry.id !== user.id));
    inputRef.current?.focus();
  }, []);
  useEffect(() => {
    let isStale = false;
    const fetchData = async (inputValue: string) => {
      try {
        const data = await getData(inputValue);
        return setUsers(
          data.filter((user) => {
            return !selected.find((selected) => selected.id === user.id);
          }),
        );
      } catch (error) {
        console.error(error);
      }
    };
    if (!isStale) {
      fetchData(inputValue);
    }

    return () => {
      isStale = true;
    };
  }, [inputValue, selected]);
  return (
    <>
      <ChipContainer>
        {selected.map((user) => {
          const { id, name, email, imageUrl } = user;
          return (
            <Chip
              key={id}
              email={email}
              name={name}
              avatar={<Avatar src={imageUrl} alt={name} />}
              handleRemoveUser={handleRemoveUser}
              user={user}
            />
          );
        })}
        <InputDropDown
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          users={users}
          handleSelectUser={handleSelectUser}
          ref={inputRef}
        />
      </ChipContainer>
    </>
  );
}

export default App;
