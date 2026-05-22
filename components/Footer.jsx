import Image from "next/image";

import { footerMobileIcons } from "@/app/constants/FooterMobileIcons";
import Link from "next/link";
import { socialLinks } from "@/app/constants/SocialLinks";

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
              {footerMobileIcons.map((store) => (
                <div key={store.id} className="storeCard">
                  <Link href="">
                    <Image
                      src={store.badge}
                      alt={store.alt}
                      width={500}
                      height={100}
                      className="storeBadge"
                    />
                  </Link>
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
