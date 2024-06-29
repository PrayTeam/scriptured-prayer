import { Container, Link } from "~/components";

export function NotFound() {
  return (
    <Container className="flex flex-col">
      <h1 className="text-3xl mb-4">404 not found</h1>
      <p className="mb-4">
        The page you are looking for has either been moved, or it does not
        exist.
      </p>
      <p className="mb-4">
        Take me to the <Link href="/dashboard">dashboard</Link>.
      </p>
    </Container>
  );
}
