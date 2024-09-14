export default function Teams({ name, department, position_title, imageURL, linkURL }) {

    return (
        <div className="shadow-lg rounded-md overflow-hidden hover:opacity-80 hover:scale-105 transform transition-all duration-300 ease-in-out">
            <a href={linkURL} target="_blank" rel="noopener noreferrer">
                <img src={imageURL} alt={name} className="w-full h-56 object-cover" />
            </a>
            <div className="px-3 py-2 md:text-center">
                <h3 className="text-indigo-600 md:text-blue-800">{name}</h3>
                <p className="text-slate-500 text-sm mt-2 whitespace-nowrap">{department}</p>
                <p className="text-slate-500 text-sm mt-2">{position_title}</p>
            </div>
        </div>
        
    );
}