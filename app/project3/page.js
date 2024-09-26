export default function News2Page () {
    return (
        <>
            <section className="py-24">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-800">鳳梨存摺</h1>
                    <h2 className="text-2xl text-gray-600 mt-4">簡單、安全且充滿獎勵的數字存摺</h2>
                </div>

                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <div className="mb-12">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">產品介紹</h2>
                        <p className="text-gray-700 leading-relaxed">
                            鳳梨存摺是互助平台內的一項重要功能，為使用者提供了一個方便且安全的鳳梨幣管理系統。透過鳳梨存摺，使用者可以輕鬆記錄每一次的交易與互惠值累積，確保社區中的每一份付出都獲得應有的回報，並享受豐富的獎勵機制，激勵持續參與。
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-800 my-8">服務流程圖</h3>
                        <img src="/images/服務流程圖-2.png" alt="project flowchart" className="h-full w-full object-cover"/>
                    </div>
                    
                    <h2 className="text-3xl font-semibold text-gray-800 my-6">核心功能</h2>

                    <div className="bg-white shadow-lg p-6 rounded-lg mb-12"> 
                        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">便捷的鳳梨幣兌換功能</h3>
                        <p className="text-gray-700 leading-relaxed">
                            使用者可通過鳳梨存摺輕鬆兌換鳳梨幣，並將其應用於社區合作店家的各類服務與產品，促進社區經濟循環，並提升使用者的生活便利性。
                        </p>
                        <p className="mt-4"></p>
                    </div>

                    <div className="bg-white shadow-lg p-6 rounded-lg mb-12"> 
                        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">自動記錄與透明追蹤</h3>
                        <p className="text-gray-700 leading-relaxed">
                            鳳梨存摺提供即時的交易記錄，無論是鳳梨幣的收入或支出，都能清晰顯示來源、方向和時間。這種透明度確保了每一筆互惠值的正確性，讓使用者隨時了解自己的貢獻與回報。
                        </p>
                        <p className="mt-4"></p>
                    </div>

                    <div className="bg-white shadow-lg p-6 rounded-lg mb-12"> 
                        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">區塊鏈技術保障安全</h3>
                        <p className="text-gray-700 leading-relaxed">
                            我們運用區塊鏈技術來保障數據的安全性，確保每一筆交易都具備不可篡改的特性。這不僅增強了使用者對數據安全的信任感，還保護了平台的運作透明度與穩定性。
                        </p>
                        <p className="mt-4"></p>
                    </div>

                    <div className="bg-white shadow-lg p-6 rounded-lg mb-12"> 
                        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">豐富的獎勵機制</h3>
                        <p className="text-gray-700 leading-relaxed">
                            為鼓勵使用者持續參與社區互助，時光互助站設立了專屬的獎勵機制。透過平台上的活動或里程碑，使用者能夠獲得額外的鳳梨幣獎勵，進一步提升互助的積極性與社區參與感。
                        </p>
                        <p className="mt-4"></p>
                    </div>
                    
                </div>
            </section>
            
        </>
    );
        
}