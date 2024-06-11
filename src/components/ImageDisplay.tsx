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
                className={`relative h-[600px] w-[960px] border-4 border-black rounded-3xl overflow-hidden`}>
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
            <p className="bg-transparent mt-1 ml-1">{description}</p>
        </div>
    );
}
