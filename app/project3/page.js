export default function News2Page () {
    return (
        <>
            <section className="py-24">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-800">鳳梨存摺</h1>
                    <h2 className="text-2xl text-gray-600 mt-4">瞭解Token流向，實現透明化金流</h2>
                </div>

                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <div className="mb-12">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">產品介紹</h2>
                        <p className="text-gray-700 leading-relaxed">
                            鳳梨存摺介紹
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-800 my-8">服務流程圖</h3>
                        <img src="/images/服務流程圖-2.png" alt="project flowchart" className="h-full w-full object-cover"/>
                    </div>
                    
                    <h2 className="text-3xl font-semibold text-gray-800 my-6">核心特點</h2>

                    <div className="bg-white shadow-lg p-6 rounded-lg mb-12"> 
                        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">核心特點1</h3>
                        <p className="text-gray-700 leading-relaxed">
                            核心特點內容
                        </p>
                        <p className="mt-4"></p>
                    </div>

                    <div className="bg-white shadow-lg p-6 rounded-lg mb-12"> 
                        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">核心特點2</h3>
                        <p className="text-gray-700 leading-relaxed">
                            核心特點內容
                        </p>
                        <p className="mt-4"></p>
                    </div>

                    <div className="bg-white shadow-lg p-6 rounded-lg mb-12"> 
                        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">核心特點3</h3>
                        <p className="text-gray-700 leading-relaxed">
                            核心特點內容
                        </p>
                        <p className="mt-4"></p>
                    </div>
                    
                    <div className="bg-white shadow-lg p-6 rounded-lg mb-12"> 
                        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">為什麼選擇我們？</h3>
                        <p className="text-gray-700 leading-relaxed">
                            在這個資訊化的時代，時光互助站不僅是便利生活的工具，更是一個讓你參與社區、提升自我價值的全新平台。透過我們，你可以輕鬆融入當地社區，並享受到來自他人的幫助與支持，讓生活充滿溫暖與關懷。
                        </p>
                        <p className="mt-4"></p>
                    </div>

                    <div className="p-6">
                        <h3 className="text-2xl font-semibold text-indigo-500 mb-4">加入我們，讓每一份互助創造更多價值！</h3>
                    </div>
                </div>
            </section>
            
        </>
    );
        
}