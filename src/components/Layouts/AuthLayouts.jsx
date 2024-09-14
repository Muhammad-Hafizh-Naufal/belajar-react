import { Link } from "react-router-dom";
export default function AuthLayout(props) {
  const { children, title, type } = props;
  return (
    <>
      <div className="flex gap-5 justify-center items-center h-screen">
        <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
          <p className="font-medium text-slate-500 mb-8">
            Wellcome. Please enter your details
          </p>
          {children}
          {componentsAuth(type)}
        </div>
      </div>
    </>
  );
}

// components khusus untuk auth
const componentsAuth = (type) => {
  if (type === "login") {
    return (
      <p className="text-slate-500 mt-4">
        Don't have an account{" "}
        <Link to="/register" className="text-blue-600 font-bold">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-slate-500 mt-4">
        Don't have an account{" "}
        <Link to="/login" className="text-blue-600 font-bold">
          Login
        </Link>
      </p>
    );
  }
};
