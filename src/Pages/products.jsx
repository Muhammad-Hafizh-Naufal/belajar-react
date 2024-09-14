import CardProduct from "../components/Fragments/CardProduct";

export default function ProductsPage() {
  return (
    <>
      <div className="flex justify-center py-5">
        <CardProduct.CardHeader image="images/MALM.webp" alt="Lemari">
          {" "}
        </CardProduct.CardHeader>
        <CardProduct.CardBody title="Lemari Minimalis">
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
          distinctio velit sed facere nobis soluta eaque, numquam explicabo
          tempore dolor fugiat sint molestias, quidem deleniti iste itaque aut
          incidunt qui!
        </CardProduct.CardBody>

        <CardProduct.CardFooter price="200.000" />
      </div>
    </>
  );
}
