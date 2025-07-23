import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = false) {
  const ref = useRef();
  const justMounted = useRef(false); // Prevents immediate close on open
  useEffect(
    function () {
      justMounted.current = true; // Set to true on mount
      function handleClick(e) {
        if (justMounted.current) {
          justMounted.current = false;
          return;
        }
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }
      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );
  return ref;
}
