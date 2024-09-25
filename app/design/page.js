import Teams from "@/components/Teams";
import getTeamsList from "@/functions/get-teams-list";

export default function BusinessList () {
    const designTeamsList = getTeamsList('美宣組');

    const teamsList = designTeamsList.map((teams) => {
        const { id, name, department, position_title, imageURL, linkURL } = teams;
        return <Teams key={id} name={name} department={department} position_title={position_title} imageURL={imageURL} linkURL={linkURL}/>
      });

    return (
        <>
        <section className="py-20">
            <div className="max-w-4xl mx-auto text-center mb-6">
                <h1 className="text-4xl font-bold text-gray-800">美宣組成員</h1>
                <h4 className="text-gray-600 mt-3 px-4">我們的美宣組專注於展場設計，致力於打造易於閱讀與理解的內容展示，並設計精美的周邊海報，期望提升我們的品牌知名度，讓更多人關注與參與。</h4>
            </div>

            <div className="container mx-auto px-24 sm:px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {teamsList}
            </div>
        </section>

        </>
    )
}