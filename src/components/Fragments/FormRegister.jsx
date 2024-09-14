import InputFrom from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";

export default function FormRegister() {
  return (
    <>
      <form action="">
        <div className="mb-6">
          <InputFrom
            label="Fullname"
            type="text"
            placeholder="Insert your name"
            name="fullname"
          />
        </div>

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

        <div className="mb-6">
          <InputFrom
            label="Confirm Password"
            type="password"
            placeholder="********"
            name="confirmpassword"
          />
        </div>

        <Button classname="bg-blue-600 w-full">Register</Button>
      </form>
    </>
  );
}
