import News from "@/components/News";
import Professor from "@/components/Professor";
import Teams from "@/components/Teams";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import AutoCarousel from '../components/AutoCarousel';

import getNewslList from "@/functions/get-news-list";
import getProfessorList from "@/functions/get-professor-list";
import getTeamsList from "@/functions/get-teams-list";
import getPartnersList from "@/functions/get-partners-list";
import getProjectlList from "@/functions/get-project-list";

export default function Home() {

  const newsItemList = getNewslList();
  const professorItemList = getProfessorList();
  const teamsItemList = getTeamsList();
  const partnersItemList = getPartnersList();
  const projectItemList = getProjectlList();

  const newsList = newsItemList.map((news) => {
    const { id, news_title, date, contents, imageURL, linkURL } = news;
    return <News key={id} news_title={news_title} date={date} contents={contents} imageURL={imageURL} linkURL={linkURL}/>
  });

  const professorList = professorItemList.map((professor) => {
    const { id, name, department, position_title, imageURL, linkURL } = professor;
    return <Professor key={id} name={name} department={department} position_title={position_title} imageURL={imageURL} linkURL={linkURL}/>
  });

  const teamsList = teamsItemList.map((teams) => {
    const { id, name, department, position_title, imageURL, linkURL } = teams;
    return <Teams key={id} name={name} department={department} position_title={position_title} imageURL={imageURL} linkURL={linkURL}/>
  });

  const partnersList = partnersItemList.map((partners) => {
    const { id, shopURL, shopName, shopImageURL } = partners;
    return <Partners key={id} shopURL={shopURL} shopName={shopName} shopImageURL={shopImageURL}/>
  });

  const projectList = projectItemList.map((project) => {
    const { id, linkURL, imageURL, project_title, contents } = project;
    return <Project key={id} linkURL={linkURL} imageURL={imageURL} project_title={project_title} contents={contents}/>
  });


  return (
    <>
      <div className="h-auto pt-4">
        <AutoCarousel />
      </div>

      {/* *****************影片***************** */}
      <section id="animation" className="min-h-screen flex flex-col items-center justify-center">
          <h2 className="text-center pt-4">鳳梨幣宣傳影片</h2>
          {/* <p className="pt-3 font-bold">影片介紹</p> */}
          <div className="flex justify-center relative w-full max-w-7xl mx-auto mt-8 aspect-w-16 aspect-h-9">
            <iframe 
              width="840" 
              height="472" 
              src="https://www.youtube.com/embed/81zP8toMjMY?si=Jnx-Z4dxO68wfacT" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
          </div>
      </section>

      {/* *****************最新消息***************** */}
      <section id="news" className="p-6 min-h-screen scroll-mt-12">
        <h2 className="text-center pb-10">最新消息</h2>
        <div className="container mx-auto flex justify-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 max-w-xl">
          {newsList}
        </div>
      </section>
      
      {/* *****************關於我們******************* */}
      <About/>

      {/* *****************服務內容******************* */}
      <section id="service" className="p-2 min-h-screen scroll-mt-12">
        <h2 className="text-center pb-2">服務內容</h2>

        <div className="px-2 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
          {projectList}
        </div>
      </section>
    
      {/* *****************團隊介紹******************* */}
      <section id="teams" className="py-8 scroll-mt-12 ">
        <div>
          <h2 className="text-center">團隊介紹</h2>
          <h3 className="text-center pb-4 hover:text-neutral-400">指導教授</h3>
        </div>
        <div className="container mx-auto px-10 sm:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {professorList}
        </div>
         
        <h3 className="text-center py-6 hover:text-neutral-400">專案參與者</h3> 

        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
          <a href="/business" target="_blank" rel="noopener noreferrer" className="bg-sky-400 text-white font-bold rounded-full h-20 w-40 flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-sky-300">
            商模組
          </a>
          <a href="/tech" target="_blank" rel="noopener noreferrer" className="bg-sky-400 text-white font-bold rounded-full h-20 w-40 flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-sky-300">
            技術組
          </a>
          <a href="/design" target="_blank" rel="noopener noreferrer" className="bg-sky-400 text-white font-bold rounded-full h-20 w-40 flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-sky-300">
            美宣組
          </a>
        </div>
      </section>

      {/* *****************合作夥伴******************* */}

      <section id="partners" className="p-8 min-h-screen scroll-mt-12">
        <h2 className="text-center pb-6">合作夥伴</h2>
            
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 flex justify-center space-x-6">
          {partnersList}
        </div>

        <h2 className="text-center pt-6">合作單位</h2>
        <div className="flex justify-center space-x-6">
            <a href="https://mft.ccu.edu.tw/" target="_blank" rel="noopener noreferrer">
              <img src="/images/fintech.jpg" alt="fintech" className="mb-4 w-80 h-56 object-contain overflow-hidden hover:opacity-80 hover:scale-105 transform transition-all ease-in-out cursor-pointer"/>
            </a>
            <a href="https://www.facebook.com/ccuftc/" target="_blank" rel="noopener noreferrer">
              <img src="/images/fintechClub.jpg" alt="fintechClub" className="mt-6 mb-4 w-48 h-48 object-contain overflow-hidden hover:opacity-80 hover:scale-105 transform transition-all ease-in-out cursor-pointer"/>
            </a>
        </div>
        </section>
      
      {/* *****************聯絡我們******************* */}
      <Contact/>     

    </>
  );
  
}


