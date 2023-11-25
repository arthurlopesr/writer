import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";

export default function AuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const origin = searchParams.get("origin");

  const { data, isLoading } = trpc.authCallback.useQuery(undefined, {
    onSuccess: ({ success }) => {
      if (success) {
        router.replace(origin ? `${origin}` : '/dashboard');
      }
    },
  })

  return (
    <>
      <h1>Auth Callback</h1>
    </>
  );
}
