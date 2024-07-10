"use client";

import Image, { StaticImageData } from 'next/image';

import "./ImageDisplay.css"
import 'mac-scrollbar/dist/mac-scrollbar.css';
import { MacScrollbar } from 'mac-scrollbar';

type ImageDisplayProps = {
    image: StaticImageData;
    alt: string;
    description: string;
    className?: string;
}

export function ImageDisplay({ image, alt, description, className }: ImageDisplayProps) {
    return (
        <div className="section">
            <div
                className={`relative sm:h-[600px] sm:w-[960px] w-full h-[225px] border-2 sm:border-4 border-black sm:rounded-3xl rounded-xl overflow-hidden`}>
                <MacScrollbar className={`h-[600px] w-full overflow-y-auto ${className}`}>
                    <Image
                        src={image}
                        height={image.height}
                        width={image.width}
                        alt={alt}
                        className="w-full object-cover"
                    />
                </MacScrollbar>
            </div>
            <p className="bg-transparent mt-1 ml-1 max-w-[960px] sm:text-md text-sm">{description}</p>
        </div>
    );
}
