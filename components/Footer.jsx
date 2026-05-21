import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const socialLinks = [
  { icon: <FaFacebookF />, href: "#" },
  { icon: <FaTwitter />, href: "#" },
  { icon: <FaLinkedinIn />, href: "#" },
  { icon: <FaInstagram />, href: "#" },
  { icon: <FaYoutube />, href: "#" },
];

const appStores = [
  {
    id: 1,
    badge: "/icons/appstore.avif",
    alt: "App Store",
  },
  {
    id: 2,
    badge: "/icons/playstore.avif",
    alt: "Google Play",
  },
  {
    id: 3,
    badge: "/icons/appgallery.png",
    alt: "AppGallery",
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerTop">
          <div className="footerLeft">
            <div className="loqo">
              <img src="/images/mainLogo.avif" alt="logo" />
            </div>
            <div className="social">
              <p>Bizi İzləyin</p>
              <ul className="socialList">
                {socialLinks.map((item, i) => (
                  <li key={i}>
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footerRight">
            <p className="downloadTitle">Mobil Tətbiqi Yüklə</p>
            <div className="storeList">
              {appStores.map((store) => (
                <div key={store.id} className="storeCard">
                  <Image
                    src={store.badge}
                    alt={store.alt}
                    width={200}
                    height={30}
                    className="storeBadge"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footerBottom">
          <p>
            Copyright © 2007 – 2026 Müqayisə.az. Bütün hüquqlar qorunur.{" "}
            <a href="#">İstifadəçi Şərtləri</a>ni oxumuş və qəbul etmiş
            sayılırsınız.
          </p>
        </div>
      </div>
    </footer>
  );
}
