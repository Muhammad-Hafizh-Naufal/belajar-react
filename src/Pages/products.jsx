import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button/Index";
import { useState } from "react";

// Dummy Data
const products = [
  {
    id: 1,
    name: "Lemarai Estetik",
    alt: "MALM",
    price: 999999,
    image: "/images/MALM.webp",
    description: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            quibusdam magnam optio. Laborum ex, impedit, quam veniam minus
            cupiditate praesentium voluptates eligendi minima mollitia ad
            aliquid nulla repellendus culpa suscipit?`,
  },

  {
    id: 2,
    name: "MITTPLAN",
    alt: "MITTPLAN",
    price: 1999999,
    image:
      "https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/851/1285100_PE933189_S4.webp",
    description: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            quibusdam magnam optio. Laborum ex, impedit, quam veniam minus
            cupiditate praesentium voluptates eligendi minima mollitia ad
            aliquid nulla repellendus culpa suscipit?`,
  },
  {
    id: 3,
    name: "KALLAX ",
    alt: "MALM",
    price: 1199000,
    image:
      "https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/275/1327543_PE944490_S4.webp",
    description: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            quibusdam magnam optio. Laborum ex, impedit, quam veniam minus
            cupiditate praesentium voluptates eligendi minima mollitia ad
            aliquid nulla repellendus culpa suscipit?`,
  },
];

const email = localStorage.getItem("email");

export default function ProductsPage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    const itemInCart = cart.find((item) => item.id === id);
    if (itemInCart) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <>
      <div className="flex items-center justify-end px-5 bg-yellow-800 h-20 text-xl font-bold  ">
        {email}
        <Button
          classname="bg-yellow-900 mx-5 text-white"
          type="click"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
      <div className="flex justify-center gap-5 py-5 ">
        <div className="w-4/6 flex flex-wrap gap-5 ">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.CardHeader alt={product.alt} image={product.image} />
              <CardProduct.CardBody name={product.name}>
                {product.description}
              </CardProduct.CardBody>
              <CardProduct.CardFooter
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6 text-sm font-bold text-blue-400">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="table-auto text-left border-separate border-spacing-x-5">
            <thead>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      Rp{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp{" "}
                      {(product.price * item.qty).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
