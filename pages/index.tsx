import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
              <Image
                src="/hero-gradient.png"
                width={1390}
                height={1390}
                alt="Background gradient from red to blue"
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div>
          <div className={styles.heroAssetFrame}>
            <Image
              src="/home.png"
              width={860}
              height={540}
              alt="Hero asset, NFT marketplace"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  Aurora Estate Marketplace
                </span>
                <br />
              </h1>
              <h2>
                A fast ⚡, secure, and scalable real estate marketplace built on the Aurora blockchain.
              </h2>
              <br />
            </div>
            <div className="sketchfab-embed-wrapper">
              <iframe
                title="10 ALAMINE DEVELOPMENT HILL REAL ESTATE"
                frameBorder="0"
                allowFullScreen
                // mozallowfullscreen="true"
                // webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking
                execution-while-out-of-viewport
                execution-while-not-rendered
                web-share
                src="https://sketchfab.com/models/d08a4a1107544fffa85bb2025f7a7904/embed?autostart=1&ui_theme=dark"
                width="1600"
                height="900"
              ></iframe>
        </div>
          </div>
        </div>
        <div className="text-center mx-56">
            <p className={styles.heroSubtitle}>
                  Tokenize your property as an NFT and sell or rent it on our marketplace. Built on the Aurora blockchain for fast and low-cost transactions.
                </p>

                <div className={styles.heroCtaContainer}>
                  <Link className={styles.heroCta} href="/buy">
                    Get Started
                  </Link>
                  <Link
                    className={styles.secondaryCta}
                    href="https://github.com/legendarykamal/Aurora-Estate"
                    target="_blank"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
      </div>
    </div>
  );
};

export default Home;
