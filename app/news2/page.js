import AutoCarouselNews from '@/components/AutoCarouselNews';

export default function News2Page () {
    return (
        <>
            <section className="pt-24">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-800">專案管理</h1>
                    <h2 className="text-2xl text-gray-600 mt-4">你知道怎麼樣管理好一個專案嗎？</h2>
                    <p className="text-gray-500 mt-4">2024年8月16日</p>
                </div>

                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <div className="mb-12">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                            如何做好專案管理，五大秘訣不藏私公開。
                        </h2>

                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">1.清晰的目標設定</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            我們會首先明確界定產品或服務的範疇，讓每位成員都能理解專案的核心目標，並且精確鎖定目標客群和合作商家，以確保產品與服務能夠滿足市場需求，同時透過甘特圖進行時程規劃，確保各個階段按時推進，達成預期成果。
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">2.有效的溝通</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            我們透過DAO組織架構，創造一個開放且包容的環境，鼓勵團隊成員積極分享想法，促進創新，同時確保每個問題都能被尊重並深入討論，以維持團隊內部的高效溝通與協作。
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">3.風險管理</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            我們會針對專案中可能出現的風險進行詳細分析，特別關注商品合規性風險，透過沙盒合作來應對潛在挑戰，並且為防範洗錢與套利行為，我們建立了嚴格的規範與操作流程，確保交易的公平性，同時採用區塊鏈技術保障用戶個人資料安全，降低數據洩露風險。
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">4.資源管理</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            在人力資源分配上，我們根據每位成員的性格、能力和興趣進行分組，讓他們發揮各自的專長，並根據專案內容進一步細化任務，強調團隊間的分工合作以提升工作效率；同時在財務資源管理上，我們精心規劃預算，避免不必要的支出，確保資金能有效支持專案順利推進。
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">5.靈活性與適應性</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            在專案執行過程中，我們強調靈活性，透過良好的溝通深入了解各小組的需求和挑戰，並根據實際情況提出替代方案以應對變化，同時在與第三方合作時，我們能根據合作夥伴的需求靈活調整專案目標和內容，提供客製化的合作方案，確保合作順利推進。
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-6">學會了嗎，趕緊試用看看吧！</p>
                        
                        {/* <img src="/images/news_2.jpg" alt="project management" className="h-full w-full object-cover"/> */}
                        
                        <h2 className="pt-8 font-semibold text-gray-800 mb-6">甘苦談——</h2>
                        <div className="pt-2">
                            <AutoCarouselNews />
                        </div>
                    </div>                            
                </div>
                
            </section>
        </>
    );
        
        
    
}