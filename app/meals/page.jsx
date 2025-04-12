import MealsGride from "@/components/meals/meals-gride/MealsGride";
import Link from "next/link";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function FetchingMeals() {
  const meals = await getMeals();
  return <MealsGride meals={meals} />
}

export default function mealsListPage() {
  return (
    <div className="mx-10 my-20">
      <header className="flex flex-col items-between gap-5">
        <h1 className="text-3xl font-bold">Delicious meals, created <span className="text-yellow-500">by you</span></h1>
        <p className="text-lg">Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
        <Link href="/meals/share" className="py-2 bg-orange-400 w-1/6 rounded font-bold text-center">Share Your Favorite Recipe</Link>
      </header>
      <main className="my-20">
        <Suspense fallback={<div className='text-2xl text-yellow-400 flex justify-center my-10'>Loading Meals....</div>}>
          <FetchingMeals />
        </Suspense>
      </main>
    </div>
  )
}

