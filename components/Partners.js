export default function Partners({ shopURL, shopName, shopImageURL }) {

    return (
            <div className="flex space-x-10 justify-center">
                <a href={shopURL} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={shopImageURL} 
                    alt="partner"
                    className="transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-70 object-contain w-36 h-36" 
                  />
                  
                </a>              
            </div>
    );
}