export default function Painpoint({ title, content, imageURL }) {

    return (
        <div className="shadow-lg rounded-md overflow-hidden hover:opacity-80 hover:scale-105 transform transition-all duration-300 ease-in-out">
            <img src={imageURL} alt={title} className="w-full h-64 object-cover" />
            <div className="px-3 py-2 text-center">
                <h3 className="text-indigo-600 md:text-blue-800">{title}</h3>
                <p className="text-slate-500 text-sm mt-2 mb-4">{content}</p>
            </div>
        </div>
        
    );
}