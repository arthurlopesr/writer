import { Step } from "@/app/components/step/Step";
import Image from "next/image";

export function FeatureSection() {
  return (
    <>
      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
              Comece a conversar em minutos
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Conversar com seus arquivos PDF nunca foi tão fácil com o Writer.
            </p>
          </div>
        </div>

        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <Step
            sequencer={1}
            title="Crie uma conta"
            description="Crie uma conta gratuita em menos de 30 segundos"
            proPlan
          />
          <Step
            sequencer={2}
            title="Carregue um arquivo PDF"
            description="Processaremos seu arquivo e o tornaremos conversável em segundos"
          />
          <Step
            sequencer={3}
            title="Comece a conversar"
            description="Comece a fazer perguntas ao seu PDF e obtenha respostas imediatamente"
          />
        </ol>

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src="/file-upload-preview.jpg"
                alt="uploading preview"
                width={1419}
                height={732}
                quality={100}
                className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
