export default function Button(props) {
  const {
    classname = "bg-black",
    children = "Button",
    onClick = "button",
    type = "button",
  } = props;

  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`${classname} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
      >
        {children}
      </button>
    </>
  );
}
