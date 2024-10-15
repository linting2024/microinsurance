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
        <h2 className="text-center pt-8">關於我們</h2>
        
        <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto mt-8 space-y-6 md:space-y-0 md:space-x-8">
          <div className="md:w-1/3 h-80">
            <img src="/images/image6.jpg" alt="About Us" className="h-full w-full object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"/>
          </div>

          <div className="w-full md:w-2/3">
            <div className="h-full rounded-lg shadow-lg p-8 transform transition-transform duration-300 ease-in-out hover:scale-105">
              <h3 className="text-indigo-500 text-2xl font-semibold text-center mb-4">公司簡介</h3>
              <p className="text-center leading-relaxed">
                我們是一家致力於建立互助社區的創新科技公司，透過開發多元化的互助平台，
                以「鳳梨幣」為核心連結各項服務，解決嘉義地區高昂服務成本、高齡人口、
                世代隔閡及年輕人專案起步困難等問題，透過 app 上的各項功能，包括時光互助站、
                打貓專案網、元氣加油站等，讓社區成員獲得幫助的同時，也能創造額外的價值，
                並將幫助他人的回報回饋在社區上。
              </p>
              <p className="text-center text-red-500 font-semibold mt-8">
                「我們的目標是打造一個互助、學習、健康的智慧社區環境，讓每個人都能在其中獲得幫助、
                貢獻自己的力量，並擁有更美好的生活。」
              </p>
            </div>
          </div>

        </div>        

        <div className="max-w-3xl mx-auto leading-relaxed mt-12">
          <div className="rounded-lg shadow-lg p-8 transform transition-transform duration-300 ease-in-out hover:scale-105">
            <h3 className="text-center pb-6">專案時間軸</h3>
            <div className="flex justify-center items-center">
              <img src="/images/timeline.jpg" alt="timeline" className=""/>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-center p-8">痛點說明</h3>
          <div className="container mx-auto px-10 sm:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {painpointList}
          </div>
        </div>
      </section>

        
    );
}