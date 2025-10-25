

interface parallaxprops {
    image: string;
    title: string;
    description: string
}

const Parallax: React.FC<parallaxprops> = ({ image, title, description }) => {
    return (
        <div
            className="relative h-[70vh] bg-fixed bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-center px-6">
                <div className=" flex flex-col gap-4 md:gap-10 text-white w-[95%] md:w-[70%]">
                    <h1 className="text-2xl lg:text-5xl font-bold mb-4">{title}</h1>
                    <p className="text-base lg:text-xl">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Parallax;