import Teams from "@/components/Teams";
import getTeamsList from "@/functions/get-teams-list";

export default function BusinessList () {
    const businessTeamsList = getTeamsList('商模組');

    const teamsList = businessTeamsList.map((teams) => {
        const { id, name, department, position_title, imageURL, linkURL } = teams;
        return <Teams key={id} name={name} department={department} position_title={position_title} imageURL={imageURL} linkURL={linkURL}/>
      });

    return (
        <>
        <section className="py-20">
            <div className="max-w-4xl mx-auto text-center mb-6">
                <h1 className="text-4xl font-bold text-gray-800">商模組成員</h1>
                <h4 className="text-gray-600 mt-3 px-4">我們的商模組負責專案功能的發想與規劃，並親自拜訪店家進行商業開發。我們還設計專案動畫，幫助更多人輕鬆了解我們的專案內容，提升影響力。</h4>
            </div>

            <div className="container mx-auto px-24 sm:px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {teamsList}
            </div>
        </section>

        </>
    )
}