import Image, { StaticImageData } from 'next/image';

type WebPhoneLayout = {
    image: StaticImageData;
    image2: StaticImageData;
    alt: string,
    alt2: string,
    padding?: boolean
}

export function WebPhoneLayout({ image, image2, alt, alt2, padding }: WebPhoneLayout) {
    return (
        <div className="relative w-full max-w-[1000px] self-center">
            <div
                className={`h-fit w-fit border-8 border-black rounded-3xl overflow-clip bg-white self-center mt-8 shadow-2xl ${padding ? "py-6" : ""}`}>
                <Image
                    src={image}
                    height={500}
                    width={800}
                    alt={alt}
                    className="h-fit rounded-lg"
                />
            </div>
            <div
                className="absolute bottom-[-20px] right-[-15px] h-fit w-fit border-[6px] border-black rounded-[38px] overflow-clip bg-white self-center mt-8 shadow-2xl flex justify-center items-center py-8">
                <div>
                    <div
                        className="h-6 w-20 bg-black absolute top-[7px] left-1/2 transform -translate-x-1/2 rounded-full"/>
                    <Image
                        src={image2!}
                        height={490}
                        width={255}
                        alt={alt2}
                        className="h-fit"
                    />
                </div>
            </div>
        </div>
    )
}