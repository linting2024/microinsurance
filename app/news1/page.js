export default function News1Page () {
    return (
        <>
            <div className="bg-white p-6 pt-20">
            {/* Header Section */}
            <div className="bg-white p-6 rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4">微型個人傷害保險</h1>
                <p className="text-gray-600">保費便宜，輕鬆享有意外保障</p>
                <div className="flex space-x-4 mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">商品 DM</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">商品條款</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">分享</button>
                </div>
            </div>

            {/* Details Section */}
            <div className="bg-white mt-6 p-6 rounded shadow-md space-y-6">
                {/* 承保年齡 */}
                <div>
                    <h2 className="text-xl font-semibold">承保年齡</h2>
                    <p className="text-gray-600">18歲~64歲 (最高續保年齡為64歲)</p>
                </div>

                {/* 繳費年期 */}
                <div>
                    <h2 className="text-xl font-semibold">繳費年期</h2>
                    <p className="text-gray-600">1年期</p>
                </div>

                {/* 繳費方式 */}
                {/* <div>
                    <h2 className="text-xl font-semibold">繳費方式</h2>
                    <p className="text-gray-600">限年繳，每年TWD2,400，續保TWD2,200</p>
                </div> */}

                <div>
                <h2 className="text-xl font-semibold">繳費方式</h2>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>限年繳</li>
                        <li>首年保費： TWD 2,000／年</li>
                        <li>續保保費： TWD 1,800／年</li>
                        <p className="text-gray-600">(與附約同時投保)</p>
                    </ul>
                </div>

                {/* 保額限制 */}
                <div>
                    <h2 className="text-xl font-semibold">保額限制</h2>
                    <p className="text-gray-600">50萬 (與同業微型傷害保險累計不可以超過50萬)</p>
                </div>

                {/* 給付項目 */}
                <div>
                    <h2 className="text-xl font-semibold">給付項目</h2>
                    <p className="text-gray-600">意外身故/完全失能</p>
                </div>

                {/* 給付特色 */}
                <div>
                <h2 className="text-xl font-semibold">給付特色</h2>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>照顧外籍移工</li>
                        <li>保費便宜，輕鬆享有意外保障</li>
                    </ul>
                </div>

                {/* 要被保人資格限制 */}
                <div>
                    <h2 className="text-xl font-semibold">要被保人資格限制</h2>
                    <p className="text-gray-600">
                        要被保人可為不同人，且限外籍移工，另須提供身分證明相關文件。
                    </p>
                </div>

                {/* 注意事項 */}
                <div>
                    <h2 className="text-xl font-semibold">注意事項</h2>
                    <p className="text-gray-600">
                        ※本頁面僅為摘要說明，詳細內容請以保單條款為準。
                    </p>
                    <p className="text-gray-600">
                        ※本保險為不分紅保險單，不參加紅利分配，並無紅利給付項目。
                    </p>
                </div>
            </div>
        </div>
        </>
    );
        
        
    
}