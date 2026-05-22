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

        <div className="socialButtons">
          <button className="socialBtn googleBtn">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908C16.658 14.017 17.64 11.71 17.64 9.2z"
                fill="#4285F4"
              />
              <path
                d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"
                fill="#34A853"
              />
              <path
                d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                fill="#FBBC05"
              />
              <path
                d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z"
                fill="#EA4335"
              />
            </svg>
            Google ilə daxil ol
          </button>
          <button className="socialBtn facebookBtn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
              <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
            </svg>
            Facebook ilə daxil ol
          </button>
        </div>

        <div className="authDivider">
          <span>və ya</span>
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
