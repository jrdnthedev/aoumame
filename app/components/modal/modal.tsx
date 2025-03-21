"use client";
import { useData } from "@/app/data-provider";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";

export default function Modal() {
    const router = useRouter();
    const images = useData();
    const photos = images?.photos || [];
    const params = useParams<{ id: string }>();

    const image = photos.find((photo: any) => photo.id === params.id);
    function handleClose() {
        router.back();
    }
    return (
        <>
            <div id="photo-modal" tabIndex={-1} className="overflow-y-auto overflow-x-hidden flex fixed h-screen z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {image.alt_description}
                            </h3>
                            <button onClick={handleClose} type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <Image src={image.urls.full} alt={image.alt_description} height={300} width={200} />
                    </div>
                </div>
            </div>
            <div className="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"></div>
        </>
    )
}