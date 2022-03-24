import React from "react";
import { useEffect } from "react/cjs/react.production.min";
import { useRecoilState } from "recoil";

export function localStorageHook() {
  const [cart, setCart] = useRecoilState(cartState);
  // cart => []

  function save(value) {
    const stringifiedValue = JSON.stringify(value);

    localStorage.setItem("name", stringifiedValue);
  }

  function load(name) {
    const data = localStorage.getItem(name);
    const parsedData = JSON.parse(data);
    return parsedData;
  }

  /*    useEffect(() => {
        if (!cart.length > 0) {
            load("cart");
        }
    }) []*/

  return { save, load };
}
