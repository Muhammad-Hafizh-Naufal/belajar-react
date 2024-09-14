import AuthLayout from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";
export default function RegisterPage() {
  return (
    <>
      <AuthLayout title="Register">
        <FormRegister />
        <p className="text-slate-500 mt-4">
          Already have an account? {/**/}
          <Link to="/login" className="text-blue-600 font-bold">
            Login
          </Link>
        </p>
      </AuthLayout>
    </>
  );
}
