import { RefObject, useEffect } from "react";

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: () => void,
) => {
  useEffect(() => {
    const eventHandler = (event: MouseEvent) => {
      if (!event.target || ref?.current?.contains(event.target as Node)) {
        return;
      }
      handler();
    };
    document.addEventListener("click", eventHandler);
    return () => document.removeEventListener("click", eventHandler);
  }, [handler]);
};
