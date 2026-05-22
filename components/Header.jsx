"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MainLogo from "@/public/images/mainLogo.avif";
import { categories } from "@/app/constants/Categories";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <header>
      <div className="container">
        <div className="headerMain">
          <div className="headerLeft">
            <div className="headerLogo">
              <a href="/">
                <Image src={MainLogo} alt="logo" width={88} height={30} />
              </a>
            </div>
            <div className="categoryBtn">
              <button onClick={() => setIsOpen(!isOpen)}>
                <span>Kategoriler</span>
              </button>
            </div>
          </div>
          <div className="headerMid">
            <div className="searchBox">
              <input
                type="text"
                placeholder="Nəyi ən ucuza almaq istəyirsən?"
              />
              <button className="searchBtn">Axtar</button>
            </div>
          </div>
          <div className="headerRight">
            <Link href="/auth">
              <button className="loginBtn">Giriş et</button>
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <>
          <div className="categoryOverlay" onClick={() => setIsOpen(false)} />
          <div className="categoryDropdown">
            <div className="categoryLeft">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className={`categoryItem ${activeCategory.id === cat.id ? "active" : ""}`}
                  onMouseEnter={() => setActiveCategory(cat)}
                >
                  <span className="categoryIcon">{cat.icon}</span>
                  <span>{cat.name}</span>
                  {cat.subcategories && (
                    <span className="categoryArrow">›</span>
                  )}
                </div>
              ))}
            </div>
            <div className="categoryRight">
              <p className="categoryRightTitle">{activeCategory.name}</p>
              <ul className="subcategoryList">
                {activeCategory.subcategories?.map((sub, index) => (
                  <li key={index}>
                    <Link href={sub.href} onClick={() => setIsOpen(false)}>
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
              {activeCategory.popular?.length > 0 && (
                <div className="popularSection">
                  <p>Populyar Kateqoriyalar</p>
                  <div className="popularTags">
                    {activeCategory.popular.map((tag, index) => (
                      <Link
                        key={index}
                        href={tag.href}
                        onClick={() => setIsOpen(false)}
                      >
                        {tag.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
