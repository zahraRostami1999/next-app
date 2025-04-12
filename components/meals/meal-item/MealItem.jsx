import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function MealItem({ title, slug, image, summary, creator }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 duration-300 w-full">
            <div className="relative w-full h-48">
                <Image src={image} alt={title} layout="fill" objectFit="cover" />
            </div>
            <div className="p-4 flex flex-col gap-2">
                <h2 className="text-xl font-bold text-gray-800">{title}</h2>
                <p className="text-gray-600 text-sm">{summary}</p>
                <p className="text-gray-500 text-xs">Created by: <span className="font-medium">{creator}</span></p>
            </div>
            <div className='text-neutral-900 p-4'>
            <Link href={`/meals/${slug}`} className='bg-orange-400 px-3 py-2 rounded'>View Details</Link>
            </div>
        </div>
    );
}

export default MealItem;