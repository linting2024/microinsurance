export default function getTeamsList(group) {
    const teamsItemList = [
        {
            id: "商模-1",
            name: "張瑋玲",
            department: "國立中正大學",
            position_title: "金融科技碩士學位學程",
            imageURL: "/images/st1_1.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "商模組"
        },
        {
            id: "商模-2",
            name: "名字",
            department: "國立中正大學",
            position_title: "系所",
            imageURL: "/images/teams2.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "商模組"
        },
        {
            id: "商模-3",
            name: "名字",
            department: "國立中正大學",
            position_title: "系所",
            imageURL: "/images/teams3.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "商模組"
        },
        {
            id: "商模-4",
            name: "名字",
            department: "國立中正大學",
            position_title: "系所",
            imageURL: "/images/teams4.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "商模組"
        },
        {
            id: "商模-5",
            name: "田皓宇",
            department: "國立中正大學",
            position_title: "財務金融學系",
            imageURL: "/images/teams5.jpg",
            linkURL: "https://www.linkedin.com/in/Tomytien",
            group: "商模組"
        },
        {
            id: "商模-6",
            name: "楊彥葦",
            department: "國立中正大學",
            position_title: "財務金融系研究所",
            imageURL: "/images/teams1.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "商模組"
        },
        {
            id: "商模-7",
            name: "鍾念欣",
            department: "國立中正大學",
            position_title: "財務金融學系",
            imageURL: "/images/teams2.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "商模組"
        },
        {
            id: "商模-8",
            name: "名字",
            department: "國立中正大學",
            position_title: "系所",
            imageURL: "/images/teams4.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "商模組"
        },
        {
            id: "商模-9",
            name: "名字",
            department: "國立中正大學",
            position_title: "系所",
            imageURL: "/images/teams4.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "商模組"
        },
        {
            id: "商模-10",
            name: "名字",
            department: "國立中正大學",
            position_title: "系所",
            imageURL: "/images/teams4.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "商模組"
        },
        {
            id: "技術-1",
            name: "蔡佩璇",
            department: "國立中正大學",
            position_title: "金融科技碩士學位學程",
            imageURL: "/images/st2_1.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "技術組"
        },
        {
            id: "技術-2",
            name: "高子琪",
            department: "國立中正大學",
            position_title: "金融科技碩士學位學程",
            imageURL: "/images/teams2.jpg",
            linkURL: "https://www.instagram.com/vickykao0629/?igsh=MXE1Y2RnNmM1a2E5aw%3D%3D",
            group: "技術組"
        },
        {
            id: "技術-3",
            name: "名字",
            department: "國立中正大學",
            position_title: "系所",
            imageURL: "/images/teams3.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "技術組"
        },
        {
            id: "技術-4",
            name: "名字",
            department: "國立中正大學",
            position_title: "系所",
            imageURL: "/images/teams4.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "技術組"
        },        
        {
            id: "技術-5",
            name: "林培煦",
            department: "國立中正大學",
            position_title: "資訊管理學系",
            imageURL: "/images/teams5.jpg",
            linkURL: "https://www.linkedin.com/in/%E5%9F%B9%E7%85%A6-%E6%9E%97-756963301/",
            group: "技術組"
        },
        {
            id: "美宣-1",
            name: "名字",
            department: "國立中正大學",
            position_title: "系所",
            imageURL: "/images/st3_1.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "美宣組"
        },
        {
            id: "美宣-2",
            name: "余穎欣",
            department: "國立中正大學",
            position_title: "金融科技碩士學位學程",
            imageURL: "/images/teams2.jpg",
            linkURL: "https://www.instagram.com/yuing29_/?igsh=MXU5ODUzemFmZm9hcw%3D%3D&utm_source=qr",
            group: "美宣組"
        },
        {
            id: "美宣-3",
            name: "名字",
            department: "國立中正大學",
            position_title: "系所",
            imageURL: "/images/teams3.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "美宣組"
        },
        {
            id: "美宣-4",
            name: "名字",
            department: "國立中正大學",
            position_title: "系所",
            imageURL: "/images/teams4.jpg",
            linkURL: "https://mft.ccu.edu.tw/",
            group: "美宣組"
        },        
        {
            id: "美宣-5",
            name: "名字",
            department: "國立中正大學",
            position_title: "系所",
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
