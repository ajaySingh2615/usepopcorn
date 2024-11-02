import React from "react";

export default function useLocalStorageState(initialState, key) {
  const [value, setValue] = React.useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  React.useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
