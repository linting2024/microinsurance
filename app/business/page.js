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
        <section className="py-24">
            <div className="max-w-4xl mx-auto text-center mb-6">
                <h1 className="text-4xl font-bold text-gray-800">商模組成員</h1>
                <h3 className="text-gray-600 mt-3">負責商模規劃、商業開發、功能研究、網頁及動畫製作</h3>
            </div>

            <div className="container mx-auto px-24 sm:px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {teamsList}
            </div>
        </section>

        </>
    )
}