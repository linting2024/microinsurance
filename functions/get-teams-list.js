export default function getTeamsList(group) {
    const teamsItemList = [
        {
            id: "商模-1",
            name: "名字",
            department: "學系",
            position_title: "負責部門",
            imageURL: "/images/teams1.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "商模組"
        },
        {
            id: "商模-2",
            name: "名字",
            department: "學系",
            position_title: "負責部門",
            imageURL: "/images/teams2.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "商模組"
        },
        {
            id: "商模-3",
            name: "名字",
            department: "學系",
            position_title: "負責部門",
            imageURL: "/images/teams3.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "商模組"
        },
        {
            id: "商模-4",
            name: "名字",
            department: "學系",
            position_title: "負責部門",
            imageURL: "/images/teams4.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "商模組"
        },
        {
            id: "商模-5",
            name: "名字",
            department: "學系",
            position_title: "負責部門",
            imageURL: "/images/teams5.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "商模組"
        },
        {
            id: "商模-6",
            name: "名字",
            department: "學系",
            position_title: "負責部門",
            imageURL: "/images/teams1.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "商模組"
        },
        {
            id: "商模-7",
            name: "名字",
            department: "學系",
            position_title: "負責部門",
            imageURL: "/images/teams2.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "商模組"
        },
        {
            id: "技術-1",
            name: "名字",
            department: "學系",
            position_title: "負責部門",
            imageURL: "/images/teams1.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "技術組"
        },
        {
            id: "技術-2",
            name: "名字",
            department: "學系",
            position_title: "負責部門",
            imageURL: "/images/teams2.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "技術組"
        },
        {
            id: "技術-3",
            name: "名字",
            department: "學系",
            position_title: "負責部門",
            imageURL: "/images/teams3.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "技術組"
        },
        {
            id: "技術-4",
            name: "名字",
            department: "學系",
            position_title: "負責部門",
            imageURL: "/images/teams4.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "技術組"
        },        
        {
            id: "技術-5",
            name: "名字",
            department: "學系",
            position_title: "負責部門",
            imageURL: "/images/teams5.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "技術組"
        },
        {
            id: "美宣-1",
            name: "名字",
            department: "學系",
            position_title: "負責部門",
            imageURL: "/images/teams1.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "美宣組"
        },
        {
            id: "美宣-2",
            name: "名字",
            department: "學系",
            position_title: "負責部門",
            imageURL: "/images/teams2.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "美宣組"
        },
        {
            id: "美宣-3",
            name: "名字",
            department: "學系",
            position_title: "負責部門",
            imageURL: "/images/teams3.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "美宣組"
        },
        {
            id: "美宣-4",
            name: "名字",
            department: "學系",
            position_title: "負責部門",
            imageURL: "/images/teams4.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "美宣組"
        },        
        {
            id: "美宣-5",
            name: "名字",
            department: "學系",
            position_title: "負責部門",
            imageURL: "/images/teams5.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "美宣組"
        },
        
    ];

    if (group) {
        return teamsItemList.filter(item => item.group === group);
    }

    return teamsItemList;
}
