export default function News({ news_title, date, contents, imageURL, linkURL }) {

    return (

            <div className="shadow-lg rounded overflow-hidden flex h-auto hover:opacity-80 hover:scale-105 transform transition-all duration-300 ease-in-out">
                <img src={imageURL} alt={news_title} className="w-32 h-full sm:w-40 object-cover" />
                
                <div className="px-3 py-4 justify-center">
                    <a href={linkURL} target="_blank" rel="noopener noreferrer">    
                        <h2 className="">{news_title}</h2>
                    </a>
                    {/* <h5 className="text-gray-600">{date}</h5> */}
                    <p className="py-2 text-md font-bold">{contents}</p>
                </div>
            </div>
    );
}