import { data } from "./data";
import { User } from "./data";
export async function getData(name: string): Promise<User[]> {
  if (!name) {
    return new Promise((resolve) => {
      resolve(data);
    });
  } else {
    return new Promise((resolve) => {
      const filteredData = data.filter((user) => {
        return user.name
          .replace(" ", "")
          .toLowerCase()
          .includes(name.replace(" ", "").toLocaleLowerCase());
      });
      resolve(filteredData);
    });
  }
}
