import { useEffect } from "react";

export const useOnClickOutside = (ref, handler: () => void) => {
  useEffect(() => {
    const eventHandler = (event) => {
      if (!event.target || ref.current.contains(event.target)) {
        return;
      }
      handler();
    };
    document.addEventListener("click", eventHandler);
    return () => document.removeEventListener("click", eventHandler);
  }, [handler]);
};
