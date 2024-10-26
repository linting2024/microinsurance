export default function getTeamsList(group) {
    const teamsItemList = [
        {
            id: "商模-1",
            name: "張瑋玲",
            department: "國立中正大學",
            position_title: "金融科技碩士學位學程",
            imageURL: "/images/team/瑋玲.jpg",
            // linkURL: "https://mft.ccu.edu.tw/",
            group: "商模組"
        },
        {
            id: "商模-2",
            name: "洪湘怡",
            department: "國立中正大學",
            position_title: "金融科技碩士學位學程",
            imageURL: "/images/team/team.jpg",
            // linkURL: "https://mft.ccu.edu.tw/",
            group: "商模組"
        },
        {
            id: "商模-3",
            name: "許庭瑄",
            department: "國立中正大學",
            position_title: "金融科技碩士學位學程",
            imageURL: "/images/team/team.jpg",
            // linkURL: "https://mft.ccu.edu.tw/",
            group: "商模組"
        },
        {
            id: "商模-4",
            name: "楊彥葦",
            department: "國立中正大學",
            position_title: "財務金融系研究所",
            imageURL: "/images/team/彥葦.jpg",
            linkURL: "https://www.instagram.com/wiwi0702/",
            group: "商模組"
        },
        {
            id: "商模-5",
            name: "田皓宇",
            department: "國立中正大學",
            position_title: "財務金融學系",
            imageURL: "/images/team/田皓宇.jpeg",
            linkURL: "https://www.linkedin.com/in/Tomytien",
            group: "商模組"
        },
        {
            id: "商模-6",
            name: "鍾念欣",
            department: "國立中正大學",
            position_title: "財務金融學系",
            imageURL: "/images/team/念欣.jpg",
            linkURL: "https://www.instagram.com/cnh_nellie_/?igsh=MWJka2xnM2dqcXRmdA%3D%3D&utm_source=qr",
            group: "商模組"
        },
        {
            id: "商模-7",
            name: "余旻璟",
            department: "國立中正大學",
            position_title: "財務金融學系",
            imageURL: "/images/team/旻璟.jpg",
            linkURL: "https://www.instagram.com/mmm.yumg/?igsh=MWJsejJ5eDJ0a2VpbA%3D%3DFb%3Ahttps%3A%2F%2Fwww.facebook.com%2Fshare%2F1JvzssjR9ecBv6QQ%2F%3Fmibextid%3Dqi2OmgLinkedin%3Ahttps%3A%2F%2Fwww.linkedin.com%2Fin%2F%E6%97%BB%E7%92%9F-%E4%BD%99-352946294%2F",
            group: "商模組"
        },
        {
            id: "商模-8",
            name: "詹人樺",
            department: "國立中正大學",
            position_title: "政治學系",
            imageURL: "/images/team/人樺.PNG",
            linkURL: "https://www.linkedin.com/in/victoria-chan-990894321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            group: "商模組"
        },
        {
            id: "商模-9",
            name: "林怡廷",
            department: "國立中正大學",
            position_title: "金融科技碩士學位學程",
            imageURL: "/images/team/怡廷.jpg",
            linkURL: "https://www.facebook.com/tina.lin.92102",
            group: "商模組"
        },
        {
            id: "技術-1",
            name: "蔡佩璇",
            department: "國立中正大學",
            position_title: "金融科技碩士學位學程",
            imageURL: "/images/team/蔡佩璇.jpg",
            linkURL: "https://www.linkedin.com/in/pei-hsuan-tsai-22bb072a1",
            group: "技術組"
        },
        {
            id: "技術-2",
            name: "高子琪",
            department: "國立中正大學",
            position_title: "金融科技碩士學位學程",
            imageURL: "/images/team/高子琪.jpg",
            linkURL: "https://www.instagram.com/vickykao0629/?igsh=MXE1Y2RnNmM1a2E5aw%3D%3D",
            group: "技術組"
        },
        {
            id: "技術-3",
            name: "林培煦",
            department: "國立中正大學",
            position_title: "資訊管理學系",
            imageURL: "/images/team/林培煦.PNG",
            linkURL: "https://www.linkedin.com/in/%E5%9F%B9%E7%85%A6-%E6%9E%97-756963301/",
            group: "技術組"
        },
        {
            id: "技術-4",
            name: "陳聖旻",
            department: "國立中正大學",
            position_title: "資訊工程學系",
            imageURL: "/images/team/陳聖旻.jpeg",
            linkURL: "https://www.instagram.com/c.shengmin/profilecard/?igsh=anBlZnVvYW9oaWpz",
            group: "技術組"
        },
        {
            id: "技術-5",
            name: "張祐瑋",
            department: "國立中正大學",
            position_title: "資訊工程學系",
            imageURL: "/images/team/張祐瑋.jpg",
            linkURL: "https://www.instagram.com/youwei____/",
            group: "技術組"
        },        
        {
            id: "美宣-1",
            name: "姚采旻",
            department: "國立中正大學",
            position_title: "金融科技碩士學位學程",
            imageURL: "/images/team/姚采旻.jpg",
            linkURL: "https://www.instagram.com/christina_ycm/?igsh=MWNmZzhjeXJta3Jobw%3D%3D&utm_source=qr",
            group: "美宣組"
        },
        {
            id: "美宣-2",
            name: "余穎欣",
            department: "國立中正大學",
            position_title: "金融科技碩士學位學程",
            imageURL: "/images/team/穎欣.jpg",
            linkURL: "https://www.instagram.com/yuing29_/?igsh=MXU5ODUzemFmZm9hcw%3D%3D&utm_source=qr",
            group: "美宣組"
        },
        {
            id: "美宣-3",
            name: "林軒德",
            department: "國立中正大學",
            position_title: "金融科技碩士學位學程",
            imageURL: "/images/team/林軒德.jpeg",
            linkURL: "https://www.instagram.com/linxuande/?hl=en",
            group: "美宣組"
        },
        {
            id: "美宣-4",
            name: "洪湘怡",
            department: "國立中正大學",
            position_title: "金融科技碩士學位學程",
            imageURL: "/images/team/team.jpg",
            // linkURL: "https://mft.ccu.edu.tw/",
            group: "美宣組"
        },        
    ];

    if (group) {
        return teamsItemList.filter(item => item.group === group);
    }

    return teamsItemList;
}
