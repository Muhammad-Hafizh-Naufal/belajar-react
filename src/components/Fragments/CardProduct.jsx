import Button from "../Elements/Button/Index";
const CardProduct = (props) => {
  const { children } = props;
  return (
    <>
      <div className="w-full max-w-sm bg-slate-100 border border-gray-200 rounded-lg shadow">
        {children}
      </div>
    </>
  );
};

const CardHeader = (props) => {
  const { alt, image } = props;
  return (
    <>
      <a href="">
        <img src={image} alt={alt} className="p-8 rounded-t-lg" />
      </a>
    </>
  );
};

const CardBody = (props) => {
  const { title, children } = props;
  return (
    <>
      <div className="px-5 pb-5">
        <a href="">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900">
            {title}
          </h5>
        </a>
        <p className="text-gray-700 text-s">{children}</p>
      </div>
    </>
  );
};

const CardFooter = (props) => {
  const { price = "0" } = props;
  return (
    <>
      <div className="flex items-center justify-between py-5 pb-5">
        <span className="text-xl font-bold text-gray-900">Rp.{price}</span>
        <Button className="bg-slate-600">Masukan Keranjang</Button>
      </div>
    </>
  );
};

CardProduct.CardHeader = CardHeader;
CardProduct.CardBody = CardBody;
CardProduct.CardFooter = CardFooter;

export default CardProduct;
