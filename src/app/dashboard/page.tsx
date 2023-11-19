import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/server";

export default function Dashboard() {
  const { } = getKindeServerSession()

  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
}
