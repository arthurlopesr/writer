import { buttonVariants } from "@/app/components/button/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface HeroSectionProps {}
export function HeroSection(props: HeroSectionProps) {
  return (
    <>
      <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
        <p className="text-sm font-semibold text-gray-700">
          Writer is now public
        </p>
      </div>
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
        Chat with your <span className="text-blue-600">documents</span> in
        seconds.
      </h1>
      <p className="mt-6 max-w-prose text-zinc-700 sm:text-lg">
        Writer allows you to have conversations with any PDF document. Simply
        upload your file and start asking questions right away.
      </p>

      <Link
        href="/dashboard"
        target="_blankl"
        className={buttonVariants({
          size: "lg",
          className: "mt-5",
        })}
      >
        Get started
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </>
  );
}
