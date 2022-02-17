import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.footerAlign}>
        <div className={styles.footer}>
          <div className={styles.row}>

            <div className={styles.column}>
              {/* <h3>Pet Care</h3> */}
              <Image
                alt="this is a image"
                src="https://preview.colorlib.com/theme/thepetcare/assets/img/logo/xlogo2_footer.png.pagespeed.ic.2Fh043loGz.webp"
                height={50}
                width={200}
              />
              <p>
                Seddo eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Conse ctetur pisicin elit, sed do eiusmod tempor.
              </p>
            </div>

            <div className={styles.columnMid}>
              <ul>
                <h3>Navigation</h3>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className={styles.columnMid}>
              <ul>
                <h3>Services</h3>
                <li>Pet Care</li>
                <li>Pet Treatment</li>
                <li>Pet Trainingl</li>
                <li>Hygienic Care</li>
              </ul>
            </div>
            <div className={styles.column}>
              <ul>
                <h3>Subscribe newsletter</h3>
                <li>Subscribe our newsletter to get updates</li>
                <li>about our services and offers.</li>
                <input 
                  placeholder="Eanter your Email Address"
                  type="inputFild"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.footerCopyright}>
          <p>
            Copyright ©2022 All rights reserved | This template is made with by  <samp style={{color:"red",height:"100px",width:"100px"}}>	&hearts;</samp>
            Colorlib
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
