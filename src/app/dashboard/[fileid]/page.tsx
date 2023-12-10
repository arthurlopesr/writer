import { ChatWrapper } from "@/app/components/chat/ChatWrapper";
import { PdfRender } from "@/app/components/pdf/PdfRender";
import { db } from "@/database";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/server";
import { notFound, redirect } from "next/navigation";

type FilePageProps = {
  params: {
    fileid: string;
  }
}

const FilePage = async ({ params }: FilePageProps) => {
  const { fileid } = params;
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.id) redirect(`/auth-callback?origin=dashboard/${fileid}`)

  const file = await db.file.findFirst({
    where: {
      id: fileid,
      userId: user.id
    }
  })

  if (!file) notFound();

  return (
    <div className="flex-1 justify-between flex flex-col h-[calc(100vh-3.5rem)]">
      <div className="mx-auto w-full max-w-8xl grow lg:flex xl:px-2">

        {/* left side */}
        <div className="flex-1 xl:flex">
          <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
            <PdfRender />
          </div>
        </div>

        {/* right side */}
        <div className="shrink-0 flex-[0.75] border-t border-gray-200 lg:w-96 lg:border-l lg:border-t-0">
          <ChatWrapper />
        </div>
      </div>
    </div>
  );
}

export default FilePage;
