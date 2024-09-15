import InputFrom from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";

export default function FormLogin() {
  const handeleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
  };

  return (
    <>
      <form onSubmit={handeleLogin}>
        <div className="mb-6">
          <InputFrom
            label="Email"
            type="email"
            placeholder="example.com"
            name="email"
          />
        </div>

        <div className="mb-6">
          <InputFrom
            label="Password"
            type="password"
            placeholder="********"
            name="password"
          />
        </div>
        <Button classname="bg-blue-600 w-full" type="submit">
          Login
        </Button>
      </form>
    </>
  );
}
