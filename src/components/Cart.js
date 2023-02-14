import { Products } from "../components/Data";
import { useState } from "react";

function Cart({ handleCount }) {
  const [change, setChange] = useState("Add to Cart");
  function clicked() {
    setChange("Added to Cart");
  }

  return (
    <div className=" grid grid-cols-3 gap-5 bg-yellow-500 pl-20 pt-5">
      {Products.map((el) => {
        return (
          <div className=" h-[400px] w-[300px] bg-white p-2 border-solid border-2 border-black">
            <div>
              <img className=" h-[200px] w-full" src={el.thumbnail} />
            </div>
            <div>
              {/* <h1>brand:{el.brand}</h1> */}
              <h2 className="text-2xl font-bold">{el.title}</h2>
              {/* <p>{el.description}</p> */}
              {/* <p>{el.discountPercentage}%</p>
              <p>{el.rating}</p> */}
              <p>In Stock-{el.stock}</p>
              <p>{el.category}</p>
              <p className="font-bold"> price -{el.price}$</p>
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    handleCount(el);
                    clicked();
                  }}
                  className="bg-black text-white p-2 rounded-lg hover:bg-red-600 active:translate-y-2"
                >
                  {change}
                </button>
              </div>
            </div>

            {/* <p>{el.}</p> */}
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
