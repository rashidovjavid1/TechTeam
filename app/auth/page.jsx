"use client";
import "./auth.scss";
import { useState } from "react";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <main className="authPage">
      <div className="authCard">
        <div className="authLogo">
          <span>Xoş gəldiniz</span>
          <p>
            {activeTab === "login"
              ? "Hesabınıza daxil olun"
              : "Yeni hesab yaradın"}
          </p>
        </div>

        <div className="authTabs">
          <button
            className={activeTab === "login" ? "active" : ""}
            onClick={() => setActiveTab("login")}
          >
            Giriş et
          </button>
          <button
            className={activeTab === "register" ? "active" : ""}
            onClick={() => setActiveTab("register")}
          >
            Qeydiyyat
          </button>
        </div>

        {activeTab === "login" ? (
          <div className="authForm">
            <div className="formField">
              <label>E-poçt</label>
              <input type="email" placeholder="mail@example.com" />
            </div>
            <div className="formField">
              <label>Şifrə</label>
              <input type="password" placeholder="••••••••" />
            </div>
            <a className="forgotLink">Şifrəni unutdum?</a>
            <button className="submitBtn">Daxil ol</button>
            <div className="authDivider">
              <span>və ya</span>
            </div>
            <p className="switchText">
              Hesabınız yoxdur?{" "}
              <span onClick={() => setActiveTab("register")}>
                Qeydiyyatdan keç
              </span>
            </p>
          </div>
        ) : (
          <div className="authForm">
            <div className="formField">
              <label>Ad Soyad</label>
              <input type="text" placeholder="Ad Soyad" />
            </div>
            <div className="formField">
              <label>E-poçt</label>
              <input type="email" placeholder="mail@example.com" />
            </div>
            <div className="formField">
              <label>Şifrə</label>
              <input type="password" placeholder="••••••••" />
            </div>
            <div className="formField">
              <label>Şifrəni təkrar daxil edin</label>
              <input type="password" placeholder="••••••••" />
            </div>
            <button className="submitBtn">Qeydiyyatdan keç</button>
            <div className="authDivider">
              <span>və ya</span>
            </div>
            <p className="switchText">
              Hesabınız var?{" "}
              <span onClick={() => setActiveTab("login")}>Daxil olun</span>
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default AuthPage;
