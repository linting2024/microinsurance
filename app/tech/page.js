import Teams from "@/components/Teams";
import getTeamsList from "@/functions/get-teams-list";

export default function BusinessList () {
    const techTeamsList = getTeamsList('技術組');

    const teamsList = techTeamsList.map((teams) => {
        const { id, name, department, position_title, imageURL, linkURL } = teams;
        return <Teams key={id} name={name} department={department} position_title={position_title} imageURL={imageURL} linkURL={linkURL}/>
      });

    return (
        <>
        <section className="py-20">
            <div className="max-w-4xl mx-auto text-center mb-6">
                <h1 className="text-4xl font-bold text-gray-800">技術組成員</h1>
                <h4 className="text-gray-600 mt-3 px-4">我們的專案技術組肩負多項核心任務，涵蓋從專案的軟體開發到落地執行的整體過程。技術組不僅負責根據需求進行軟體的設計與開發，確保系統具備高效性與可靠性，還專注於介面UX設計，打造直觀、友好的使用者體驗。</h4>
            </div>

            <div className="container mx-auto px-24 sm:px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {teamsList}
            </div>
        </section>

        </>
    )
}