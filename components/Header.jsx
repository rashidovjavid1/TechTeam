"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MainLogo from "@/public/images/mainLogo.avif";
import { categories } from "@/app/constants/Categories";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setIsDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.setAttribute(
      "data-theme",
      next ? "dark" : "light",
    );
    localStorage.setItem("theme", next ? "dark" : "light");
  };

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
            <button
              className="themeToggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
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
