import Painpoint from "./Painpoint";
import getPainpointList from "@/functions/get-painpoint-list";

export default function About({  }) {
    const painpointItemList = getPainpointList();

    const painpointList = painpointItemList.map((painpoint) => {
      const { id, title, content, imageURL } = painpoint;
      return <Painpoint key={id} title={title} content={content} imageURL={imageURL} />
    });

    return (

        <section id="about" className="py-4 px-5 scroll-mt-12">
        <h2 className="text-center pt-2">關於我們</h2>
        
        <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto mt-8 space-y-6 md:space-y-0 md:space-x-8">
          <div className="md:w-1/3 h-80">
            <img src="/images/QRcode.jpg" alt="About Us" className="h-full w-full object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"/>
          </div>

          <div className="w-full md:w-2/3">
            <div className="h-full rounded-lg shadow-lg p-8 transform transition-transform duration-300 ease-in-out hover:scale-105">
              <h3 className="text-indigo-500 text-2xl font-semibold text-center mb-4">團隊簡介</h3>
              <p className="text-center leading-relaxed">
                我們是一個致力於推動金融普惠的創新團隊，專注於服務外籍移工的金融需求。隨著全球外籍移工數量不斷增加，他們面臨傳統金融服務難以有效滿足的挑戰，如高昂的匯款手續費、缺乏負擔得起的保險選擇及難以取得小額貸款等。我們透過整合支付、保險與借貸服務，創建一站式數位平台，提供包括小額數位匯款、微型保險及小額貸款在內的多元解決方案，運用AI風險評估等技術，減少操作成本並提升便利性。
              </p>
              <p className="text-center text-red-500 font-semibold mt-8">
                「我們的目標是降低外籍移工的金融障礙，提供公平、透明且個性化的服務，讓他們能夠實現經濟自由與穩定，同時促進社會的和諧與永續發展。」
              </p>
            </div>
          </div>

        </div>        

        {/* <div className="max-w-3xl mx-auto leading-relaxed mt-12">
          <div className="rounded-lg shadow-lg p-8 transform transition-transform duration-300 ease-in-out hover:scale-105">
            <h3 className="text-center pb-6">專案時間軸</h3>
            <div className="flex justify-center items-center">
              <img src="/images/timeline.jpg" alt="timeline" className=""/>
            </div>
          </div>
        </div> */}

        <div>
          <h3 className="text-center p-8">痛點說明</h3>
          <div className="container mx-auto px-10 sm:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {painpointList}
          </div>
        </div>
      </section>

        
    );
}