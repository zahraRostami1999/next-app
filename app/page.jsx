import SlideShow from "@/components/slideShow/SlideShow";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="">
        <div className="flex justify-between my-20 mx-10 w-3/4">
          <div className="w-1/3 h-80">
            <SlideShow />
          </div>
          <div className="w-1/2">
            <div className="text-3xl font-semibold text-yellow-500">
              NEXTLEVEL FOOD FOR NEXTLEVEL FOODIES
            </div>
            <div className="text-xl py-5">
              Tase & share food from all over the world.
            </div>
            <div className="flex justify-between w-3/5 text-base">
              <div className="text-amber-400">
                <Link href="/community">Join the Community</Link>
              </div>
              <div className="bg-orange-400 px-5 py-1 rounded">
              <Link href="/meals">Explore Meals</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="flex justify-center">
        <div className="w-1/2 text-center">
          <div className="my-10">
            <h1 className="text-3xl my-3">How it works?</h1>
            <p className="text-lg">NextLevel Food is a platform for foodies to share their favorite recipes with the world. It's a place to discover new dishes, and to connect with other food lovers.NextLevel Food is a place to discover new dishes, and to connect with other food lovers.</p>
          </div>
          <div className="my-10">
            <h1 className="text-3xl my-3">Why NextLevel Food?</h1>
            <p className="text-lg">NextLevel Food is a platform for foodies to share their favorite recipes with the world. It's a place to discover new dishes, and to connect with other food lovers.</p>
            <p className="text-lg">NextLevel Food is a place to discover new dishes, and to connect with other food lovers.</p>
          </div>
        </div>
      </main>
    </>
  );
}
