import { Link } from "~/components";

export function NotFound() {
  return (
    <div className="flex flex-col px-6 py-8 max-w-screen-xl mx-auto">
      <h1 className="text-3xl mb-4">404 not found</h1>
      <p>
        The page you are looking for has either been moved, or it does not
        exist.
      </p>
      <p>
        Take me <Link href="/home">home</Link>.
      </p>
    </div>
  );
}
