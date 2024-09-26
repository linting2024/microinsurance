export default function News2Page () {
    return (
        <>
            <section className="py-24">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-800">時光互助站</h1>
                    <h2 className="text-2xl text-gray-600 mt-4">打造屬於你的社區互助平台</h2>
                </div>

                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <div className="mb-12">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">產品介紹</h2>
                        <p className="text-gray-700 leading-relaxed">
                            時光互助站是一個全新的社區互助平台，將居民的需求與資源無縫連結。我們讓每位使用者都可以通過提供或接受幫助，獲得回報與互惠值，實現互惠共贏的良性循環。無論是急需協助，還是想發揮專長幫助他人，時光互助站都是你參與社區的最佳選擇。
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-800 my-8">服務流程圖</h3>
                        <img src="/images/服務流程圖.png" alt="project flowchart" className="h-full w-full object-cover"/>
                    </div>
                    
                    <h2 className="text-3xl font-semibold text-gray-800 my-6">核心特點</h2>

                    <div className="bg-white shadow-lg p-6 rounded-lg mb-12"> 
                        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">權利與互惠值機制</h3>
                        <p className="text-gray-700 leading-relaxed">
                            每次幫助他人時，你將根據所提供的服務與行駛的距離，獲得對應的鳳梨幣，例如每5公里等於0.5個PtoP鳳梨幣。這些鳳梨幣可以在合作店家中兌換商品或享受現金折扣，讓你的幫助實現更高價值。此外，幫助他人後，還可以免費獲得一次相同里程的服務機會，讓你有機會發佈與之前幫助他人時相同里程的需求，推動更多的社區互動。
                            除此之外，每週系統會給予五公里的免費互惠值，讓所有使用者在社區內享有更多參與與交換的權益。這個機制讓每一次互助都更具意義，並且為社區的成員提供了更多選擇與自由。
                        </p>
                        <p className="mt-4"></p>
                    </div>

                    <div className="bg-white shadow-lg p-6 rounded-lg mb-12"> 
                        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">多樣化的便捷服務</h3>
                        <p className="text-gray-700 leading-relaxed">
                            我們的服務範圍涵蓋廣泛，從社區順風車、日常外帶到取貨等，時光互助站讓你的生活變得更加簡單與高效。無論你有任何需求，社區的成員隨時準備提供幫助。
                        </p>
                        <p className="mt-4"></p>
                    </div>

                    <div className="bg-white shadow-lg p-6 rounded-lg mb-12"> 
                        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">促進社區連結</h3>
                        <p className="text-gray-700 leading-relaxed">
                            我們不僅提供實際的服務，更讓人與人之間建立深厚的連結。透過互助機制，時光互助站為每個使用者帶來更多的社交互動與信任，讓你感受到前所未有的社區凝聚力。
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