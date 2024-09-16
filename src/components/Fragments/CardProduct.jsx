import Button from "../Elements/Button/Index";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-slate-100 border border-gray-200 rounded-lg shadow ">
      {children}
    </div>
  );
};

const CardHeader = (props) => {
  const { alt, image } = props;
  return (
    <a href="">
      <img src={image} alt={alt} className="w-full rounded-t-lg" />
    </a>
  );
};

const CardBody = (props) => {
  const { name, children } = props;
  return (
    <div className="px-5 py-4">
      <h5 className="text-xl font-bold mb-2">{name}</h5>
      <p className="text-gray-700 text-base">{children}</p>
    </div>
  );
};

const CardFooter = (props) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="flex items-center justify-between py-5 px-6">
      <span className="text-xl font-bold text-gray-900">
        Rp{" "}
        {price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}
      </span>
      <Button classname="bg-amber-500" onClick={() => handleAddToCart(id)}>
        Masukan Keranjang
      </Button>
    </div>
  );
};

CardProduct.CardHeader = CardHeader;
CardProduct.CardBody = CardBody;
CardProduct.CardFooter = CardFooter;

export default CardProduct;
