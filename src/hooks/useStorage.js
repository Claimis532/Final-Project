import { useState, useEffect } from "react";

export const useStorage = (key, defaultValue) => {
const [state, setState] = useState(() => {
      if (defaultValue === undefined) {
        defaultValue = "";
      }

      let value = JSON.parse(window.localStorage.getItem(key)) || defaultValue;

      return value;
  });


useEffect(() =>{
window.localStorage.setItem(key, JSON.stringify(state))
}, [state])


  return [state, setState];
}

export default useStorage;