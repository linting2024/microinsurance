'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="w-full h-15 bg-slate-700 flex justify-between items-center px-2 fixed top-0 left-0 z-[999]">
          {/* 將 Logo 與文本包在一起 */}
          <div className="flex items-center space-x-2">
            <img src="/images/logo.jpg" alt="Logo" className="h-12 w-12" />
            
            <div className="md:hidden"> {/* 在行動版顯示 */}
              <a href="/">
                <span className="text-lg text-white">移保通</span>
                <h6 className="text-xs md:text-sm text-white">E-Bao-Tone</h6>
              </a>
            </div>

            <div className="hidden md:block"> {/* 在桌面版顯示 */}
              <a href="/" className="text-lg hover:text-slate-200 flex-wrap">
              移保通
                <h6 className="text-xs md:text-sm">E-Bao-Tone</h6>
              </a>
            </div>
          </div>

          {/* 選單按鈕（行動版） */}
          <button className="md:hidden" onClick={toggleMenu}>
            <FaBars className="text-white h-6 w-6" />
          </button>

          {/* 桌面版導航 */}
          <div className="hidden md:flex space-x-2">
            <a href="/" className="hover:text-sky-300">首頁</a>
            {/* <a href="/#news" className="hover:text-sky-300">最新消息</a> */}
            <a href="/#about" className="hover:text-sky-300">關於我們</a>
            <a href="/#service" className="hover:text-sky-300">服務內容</a>
            <a href="/#teams" className="hover:text-sky-300">團隊介紹</a>
            <a href="/#partners" className="hover:text-sky-300">合作夥伴</a>
            <a href="/#contact" className="hover:text-sky-300">聯絡我們</a>
          </div>

          {/* 行動版選單展開 */}
          {isOpen && (
            <div className="absolute top-14 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-4 md:hidden">
              <a href="/" className="hover:text-sky-300" onClick={toggleMenu}>首頁</a>
              {/* <a href="/#news" className="hover:text-sky-300" onClick={toggleMenu}>最新消息</a> */}
              <a href="/#about" className="hover:text-sky-300" onClick={toggleMenu}>關於我們</a>
              <a href="/#service" className="hover:text-sky-300" onClick={toggleMenu}>服務內容</a>
              <a href="/#teams" className="hover:text-sky-300" onClick={toggleMenu}>團隊介紹</a>
              <a href="/#partners" className="hover:text-sky-300" onClick={toggleMenu}>合作夥伴</a>
              <a href="/#contact" className="hover:text-sky-300" onClick={toggleMenu}>聯絡我們</a>
            </div>
          )}
        </nav>

        {/* 主內容 */}
        {children}

        {/* 頁腳 */}
        <footer className="text-center mt-12">
          <p>
            CopyRight &copy; 2024 E-Bao-Tone All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}


