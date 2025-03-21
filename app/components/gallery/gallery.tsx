"use client";
import { useData } from '@/app/data-provider';
import Image from 'next/image';
import Link from 'next/link';

export default function Gallery() {
    const images = useData();
    const photos = images?.photos || [];
    console.log(images);
    return (
        <>
            <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                <button type="button" className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All categories</button>
                <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Shoes</button>
                <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Bags</button>
                <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Electronics</button>
                <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Gaming</button>
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {photos.map((image: any) => (
                    <li key={image.id} style={{ position: "relative", height: '200px' }}  >
                        <Link href={`/photo/${image.id}`} scroll={false}>
                            <Image
                                className="rounded-lg h-auto max-w-full"
                                src={image.urls.full}
                                alt={image.alt_description}
                                quality={100}
                                fill
                                sizes="(max-width: 320x) 50vw, 33vh, (max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw, (min-width: 1200px) 50vw, 75vw,(min-width: 1400px) 50vw, 50vw"
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}