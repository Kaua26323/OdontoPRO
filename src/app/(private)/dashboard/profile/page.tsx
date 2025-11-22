import getSession from "@/lib/getSession";
import { redirect } from "next/navigation";
import { getUserInfo } from "./_data-acess/get-info-user";
import { ProfileContent } from "./_components/profileContent";

export default async function Profile() {
  const session = await getSession();

  if (!session) {
    redirect("/");
  }

  const user = await getUserInfo({ userId: session.user.id });

  if (!user) {
    redirect("/");
  }

  console.log(user);

  return <ProfileContent />;
}
