import React from "react";
import Image from "next/image";
import MainLogo from "@/public/images/mainLogo.avif";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="headerMain">
          <div className="headerLeft">
            <div className="headerLogo">
              <Image src={MainLogo} alt="logo" width={88} height={30} />
            </div>

            <div className="categoryBtn">
              <button>
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
            <button className="loginBtn">Giriş et</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
