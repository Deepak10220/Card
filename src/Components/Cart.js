import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Cart = ({ products, setproducts, setQuantity, quantity }) => {
  console.log(products);

  const [total, settotal] = useState(0);


  function increase(id) {
    let tempproducts = products;
    tempproducts.map((product, index) => {
      if (product.id === id) {
        product.quantity += 1;
        settotal(total + product.price);
      }
      return product;
    });
    console.log("increase", tempproducts);
    setproducts([...tempproducts]);
    setQuantity((prev) => prev + 1);
  }

  function decrease(id) {
    let tempProducts = [...products];
    tempProducts.map((product, index) => {
      if (product.id === id && product.quantity > 1) {
        product.quantity -= 1;
        settotal(total - product.price);
      }
      return product;
    });
    console.log("increase", tempProducts);
    setproducts([...tempProducts]);
    setQuantity((prev) => prev - 1);
  }
  function removeproduct(id) {
    let tempProducts = [...products];
    let removedProduct;
    tempProducts = tempProducts.filter((product) => {
      if (product.id === id) {
        removedProduct = product;
        return false;
      }
      return true;
    });

    setproducts(tempProducts);


    let newTotal = tempProducts.reduce((acc, curr) => {
      return acc + curr.quantity * curr.price;
    }, 0);
    settotal(newTotal);
    let newQuantity = quantity - removedProduct.quantity;
    setQuantity(newQuantity);
  }

  return (
    <div className="maincontainer">
      {products.length <= 0 && <p>is Currently empty</p>}

      {products.map((prod, index) => {
        return (
          <div key={index} className="container">
            <div className="insidecontent">
              <div className="content">
                <div>
                  <img src={prod.img} alt="" width="100px" height="100px" />
                </div>
                <div>

                <h4>{prod.name}</h4>

                <p>price:{prod.price}</p>
                <button
                  onClick={() => {
                      removeproduct(prod.id);
                    }}
                    >
                  Remove
                </button>
                    </div>
              </div>
              <div>
                <button
                  onClick={() => {
                    increase(prod.id);
                  }}
                >
                  <IoIosArrowUp />
                </button>
                <p>{prod.quantity}</p>
                <button
                  onClick={() => {
                    decrease(prod.id);
                  }}
                >
                  <IoIosArrowDown />
                </button>
              </div>
            </div>
          </div>
        );
      })}

      <div>
        <div>
          <p>Total:{total}</p>
        </div>
        {products.length > 0 && (
          <button
            onClick={() => {
              setproducts([]);
              settotal(0);
              setQuantity(0);
            }}
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
