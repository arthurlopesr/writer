import { db } from "@/database";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { Dashboard } from "../components/ui/dashboard/Dashboard";

export default async function PageDashboard() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);

  if (!user || !user.id) {
    redirect("/auth-callback?origin=dashboard");
  }

  const dbUser = await db.user.findFirst({
    where: {
      id: user.id,
    },
  })

  if (!dbUser) {
    redirect("/auth-callback?origin=dashboard");
  }

  return (
    <Dashboard />
  );
}
