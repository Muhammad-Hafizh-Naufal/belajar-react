import { Link } from "react-router-dom";
import AuthLayout from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
export default function LoginPage() {
  return (
    <>
      <AuthLayout title="Login">
        <FormLogin />
        <p className="text-slate-500 mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 font-bold">
            Register
          </Link>
        </p>
      </AuthLayout>
    </>
  );
}
