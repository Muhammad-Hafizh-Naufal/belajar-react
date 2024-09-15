import CardProduct from "../components/Fragments/CardProduct";

export default function ProductsPage() {
  return (
    <>
      <div className="flex justify-center py-5">
        <CardProduct>
          <CardProduct.CardHeader alt="MALM" image="/images/MALM.webp" />
          <CardProduct.CardBody title=" Lemarai Estetik">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            quibusdam magnam optio. Laborum ex, impedit, quam veniam minus
            cupiditate praesentium voluptates eligendi minima mollitia ad
            aliquid nulla repellendus culpa suscipit?{" "}
          </CardProduct.CardBody>
          <CardProduct.CardFooter price="999.999" />
        </CardProduct>
      </div>
    </>
  );
}
