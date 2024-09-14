import InputFrom from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";

export default function FormLogin() {
  return (
    <>
      <form action="email">
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
        <Button classname="bg-blue-600 w-full">Login</Button>
      </form>
    </>
  );
}
