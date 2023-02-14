import React, { useEffect, useState } from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Added from "./components/Added";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  console.log(cart);
  const handleCount = (el) => {
    let index = cart.findIndex((ele) => el.id == ele.id);
    if (index == -1) {
      setCount(count + 1);
      el.count = 1;
      setCart((prev) => [...prev, el]);
    } else {
      let arr = [...cart];
      arr[index].count += 1;
      setCart(arr);
    }
  };
  // const handleChange = (el, d) => {
  //   // const ind = cart.indexOf(el);
  //   // const arr = cart;
  //   // arr[ind].amount += d;
  //   // if (arr[ind].amount === 0) arr[ind].amount = 1;
  //   // setCart([...arr]);
  // };

  const removeAdd = (id) => {
    const arr = cart.filter((el) => el.id !== id);
    setCart(arr);
    setCount(count - 1);
  };
  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);
  return (
    <BrowserRouter>
      <Navbar setShow={setShow} count={count} size={cart.length} />
      <Routes>
        <Route
          path="/"
          element={
            <Cart count={count} setCount={setCount} handleCount={handleCount} />
          }
        ></Route>
        <Route
          path="/added"
          element={
            <Added
              cart={cart}
              setCart={setCart}
              // handleChange={handleChange}
              removeAdd={removeAdd}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
