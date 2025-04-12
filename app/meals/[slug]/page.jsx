import { getMeal } from "@/lib/meals";
import Image from "next/image";

function mealsPage({ params }) {
  const meal = getMeal(params.slug);
  meal.instructions = meal.instructions.trim().replace(/\n/g, '<br />');
  return (
    <div className="mx-10 my-10 flex flex-col gap-10 justify-center">
      <header className="flex justify-center text-neutral-800">
        <div className="w-1/3 py-10 flex justify-center">
          <Image src={meal.image} width={400} height={300} className="rounded" />
        </div>
        <div className="w-1/2 flex justify-start items-center px-10">
          <div className="h-1/2 flex items-center flex-wrap">
            <div className="text-4xl font-bold w-full text-yellow-400">{meal.title}</div>
            <div className="text-xl w-full text-white">{meal.creator}</div>
            <div className="text-xl w-full text-white">{meal.summary}</div>
          </div>
        </div>
      </header>
      <main className="w-full flex justify-center">
        <div className="w-2/3 bg-neutral-200 px-10 py-10 rounded text-neutral-900 text-lg">
        <p dangerouslySetInnerHTML={{
          __html: meal.instructions
          }}></p>
          
        </div>
      </main>
    </div>
  )
}

export default mealsPage;
