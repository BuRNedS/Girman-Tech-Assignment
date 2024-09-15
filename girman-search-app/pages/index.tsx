import Image from "next/image";
import styles from "../styles/home.module.css"
import Searchbar from "@/components/search";
import Link from "next/link";

export default function Home() {
    return (
        <div className={styles.homescreen}>
      			{/* <img className={styles.bgImageIcon} alt="" src="bg.png" /> */}
            <Image className={styles.bgImageIcon} src="/bg.png" alt="" width={2115} height={2115}/>
      			<div className={styles.header}>
        				<div className={styles.logo}>
          					<Link href='/'><img className={styles.imageIcon} alt="" src="image.png" /></Link>
          					<div className={styles.text}>
            						<b className={styles.girman}>Girman</b>
            						<div className={styles.technologies}>TECHNOLOGIES</div>
          					</div>
        				</div>
        				<div className={styles.logo1}>
          					<div className={styles.girmanTechnologies}>
            						<span className={styles.girman1}>Girman</span>
            						<span className={styles.technologies1}> Technologies</span>
          					</div>
          					<div className={styles.girman2}>Girman</div>
        				</div>
        				<div className={styles.buttons}>
          					<Link href='/'><b className={styles.home}>SEARCH</b></Link>
          					<Link href='https://www.girmantech.com/'><div className={styles.service}>WEBSITE</div></Link>
          					<Link href='https://www.linkedin.com/company/girmantech/'><div className={styles.service}>LINKEDIN</div></Link>
          					<Link href='mailto:careers@girmantech.com'><div className={styles.service}>CONTACT</div></Link>
        				</div>
      			</div>
      			<div className={styles.colouredV1WhiteParent}>
        				<div className={styles.colouredV1White}>
          					<img className={styles.colouredV1WhiteChild} alt="" src="Group 1.svg" />
          					<div className={styles.colouredV1WhiteInner}>
            						<div className={styles.girmanWrapper}>
              							<img className={styles.girmanIcon} alt="" src="Girman.svg" />
            						</div>
          					</div>
        				</div>
        				<div className={styles.wrapper}>
          					<img className={styles.magnifyingGlassIcon} alt="" src="magnifying-glass.svg" />
          					<div className={styles.wrapper1}>
            						<div className={styles.text1}>
              							<Searchbar />
            						</div>
          					</div>
        				</div>
      			</div>
    		</div>
  );
}
