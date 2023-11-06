import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { EnterIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { buttonVariants } from "../ui/button/Button";
import { MaxWidthWrapper } from "../ui/maxWidthWrapper/MaxWidthWrapper";

export function Navbar() {
  return (
    <>
      <nav className="sticky h-14 inset-x-0 top-0 z-50 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
        <MaxWidthWrapper>
          <div className="flex h-14 items-center justify-between border-b border-zinc-200">
            <Link href="/" className="flex z-40 font-semibold">
              <span>writer.</span>
            </Link>

            {/* mobile navbar*/}
            <div className="hidden items-center space-x-4 sm:flex">
              <>
                <Link
                  href="/pricing"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Preços
                </Link>
                <LoginLink
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Entrar
                </LoginLink>
                <RegisterLink
                  className={buttonVariants({
                    size: "sm",
                  })}
                >
                  Cadastre <EnterIcon className="ml-1.5 h-5 w-5" />
                </RegisterLink>
              </>
            </div>
          </div>
        </MaxWidthWrapper>
      </nav>
    </>
  );
}
