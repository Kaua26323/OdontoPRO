import getSession from "@/lib/getSession";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getSession();

  if (!session) {
    redirect("/");
  }

  console.log(session);

  return (
    <div>
      <h1>Dashboard Page</h1>
    </div>
  );
}
