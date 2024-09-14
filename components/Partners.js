export default function Partners({ shopURL, shopName }) {

    return (
            <div className="flex space-x-6 justify-center bg-white text-black font-semibold">
                <a href={shopURL} target="_blank" rel="noopener noreferrer">
                  <button className="py-4 px-10 rounded-md shadow-md hover:bg-gray-100 transition">
                      {shopName}
                  </button>
                </a>              
            </div>
    );
}