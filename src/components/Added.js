import React, { useEffect } from "react";
import { useState } from "react";

function Added({ cart, setCart, removeAdd }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const handleQuantity = (operation, index) => {
    let arr = [...cart];
    if (operation == "add") {
      arr[index].count += 1;
      setCart(arr);
    } else {
      if (arr[index].count !== 0) {
        arr[index].count -= 1;
        setCart(arr);
      }
    }
  };

  useEffect(() => {
    let totalPrice = cart.reduce((ini, curr) => {
      ini = ini + curr.count * curr.price;
      return ini;
    }, 0);
    setTotalPrice(totalPrice);
  }, [cart]);
  console.log("totalPrice", totalPrice);

  return (
    <article>
      {cart?.map((el, i) => (
        <div>
          <div
            className="flex justify-start gap-10 items-center bg-yellow-500 border-solid border-2 border-white"
            key={el.i}
          >
            <div>
              <img className="h-[100px] w-[100px]" src={el.thumbnail} alt="" />
            </div>
            <div>
              <p>{el.title}</p>
              <p> price-{el.price}$</p>
            </div>
            <div>
              <button
                onClick={() => handleQuantity("add", i)}
                className=" bg-gray-700 text-white text-2xl  border-solid border-2 pl-2 pr-2 border-gray-400"
              >
                +
              </button>
              <span className="p-5">{el.count}</span>
              <button
                onClick={() => {
                  handleQuantity("minus", i);
                }}
                className=" bg-gray-700 border-solid  text-white text-2xl border-2  pl-3 pr-3 border-gray-400"
              >
                -
              </button>
            </div>
            <div>
              <p className="text-center">
                quantity <br /> {el.count}
              </p>
            </div>
            <div>
              total <br />
              {el.count * el.price}
            </div>
            <div>
              <button
                className="bg-gray-500 border-solid border-2 border-gray-100"
                onClick={() => removeAdd(el.id)}
              >
                remove
              </button>
            </div>
          </div>
        </div>
      ))}
      <div>
        <div>{`total price ${totalPrice}`}</div>
      </div>
    </article>
  );
}

export default Added;
