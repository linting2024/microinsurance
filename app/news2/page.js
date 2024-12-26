import AutoCarouselNews from '@/components/AutoCarouselNews';

export default function News2Page () {
    return (
        <>
            <div className="bg-white p-6 pt-20">
            {/* Header Section */}
            <div className="bg-white p-6 rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4">微型個人傷害醫療保險附約</h1>
                <p className="text-gray-600">意外醫療實支實付，提供完善照護</p>
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
                        <li>TWD 400／年</li>
                        <p className="text-gray-600">(與主約同時投保，首年與續保價格相同)</p>
                    </ul>
                </div>

                {/* 保額限制 */}
                <div>
                    <h2 className="text-xl font-semibold">保額限制</h2>
                    <p className="text-gray-600">3萬 (業界通算累計不可超過3萬元)</p>
                </div>

                {/* 給付項目 */}
                <div>
                    <h2 className="text-xl font-semibold">給付項目</h2>
                    <p className="text-gray-600">住院/手術/普通門診/急診/骨折/燒燙傷/自費藥物 (補助健保給付以外，NGO保戶例外。)</p>
                </div>

                {/* 給付特色 */}
                <div>
                <h2 className="text-xl font-semibold">給付特色</h2>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>照顧外籍移工</li>
                        <li>意外醫療實支實付，提供完善照護</li>
                    </ul>
                </div>

                {/* 要被保人資格限制 */}
                <div>
                    <h2 className="text-xl font-semibold">要被保人資格限制</h2>
                    <p className="text-gray-600">
                        受益人/要保人為NGO，被保人為NGO自行保留的名單。
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