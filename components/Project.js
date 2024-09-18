export default function Project({ linkURL, imageURL, project_title, contents }) {

    return (
        <div>
            <a href={linkURL} target="_blank" rel="noopener noreferrer" className="relative group">
            <img src={imageURL} alt={project_title} className="w-full h-36 sm:h-48 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105"/>
            <div className="absolute inset-0 m-2 bg-black bg-opacity-50 rounded-b-lg flex flex-col justify-center items-center text-center group-hover:opacity-70 transition-opacity duration-300 ease-in-out">
                <h3 className="text-white text-lg md:text-xl font-bold">{project_title}</h3>
                <p className="text-white text-sm md:text-base mt-2">{contents}</p>
            </div>
            </a>
        </div>
        
    );
}