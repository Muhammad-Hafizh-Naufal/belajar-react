import CardProduct from "../components/Fragments/CardProduct";

// Dummy Data
const product = [
  {
    id: 1,
    name: "Lemarai Estetik",
    alt: "MALM",
    price: "Rp 999.999",
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
    price: "Rp 1.999.999",
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
    price: "Rp 1.199.000",
    image:
      "https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/275/1327543_PE944490_S4.webp",
    description: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            quibusdam magnam optio. Laborum ex, impedit, quam veniam minus
            cupiditate praesentium voluptates eligendi minima mollitia ad
            aliquid nulla repellendus culpa suscipit?`,
  },
];

export default function ProductsPage() {
  return (
    <>
      <div className="flex justify-center flex-wrap gap-5 py-5 ">
        {product.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.CardHeader alt={product.alt} image={product.image} />
            <CardProduct.CardBody name={product.name}>
              {product.description}
            </CardProduct.CardBody>
            <CardProduct.CardFooter price={product.price} />
          </CardProduct>
        ))}
      </div>
    </>
  );
}
