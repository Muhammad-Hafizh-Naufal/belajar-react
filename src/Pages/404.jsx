import { useRouteError } from "react-router-dom";

export default function NotFoundPage() {
  const err = useRouteError();
  return (
    <>
      <div className="flex gap-5 justify-center items-center h-screen flex-col">
        <h1 className="text-3xl font-bold">Oops!</h1>
        <p>Sorry, an unexpected error has occured</p>
        <p>{err.statusText || err.message}</p>
      </div>
    </>
  );
}
