import Link from "next/link";

export default function Page({ params }: { params: { role: string } }) {
  const possibleRoles = ["admin", "editor", "recorder", "translator"];
  if (possibleRoles.includes(params.role)) {
    return (
      <div>
        <h1>Dashboard {params.role}</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Oops something went wrong</h1>
        <Link href="/dashboard" passHref>
          Go back to dashboard
        </Link>
      </div>
    );
  }
}
