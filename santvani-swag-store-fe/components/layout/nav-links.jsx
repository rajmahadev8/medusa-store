import Link from "next/link";
import React from "react";
import styles from "../../styles/nav-bar.module.css";

const NavLinks = () => {
	return (
		<div className={styles.navlink}>
			<Link href="#">
				<a className={styles.navBtn} target="_blank" rel="noreferrer">
					Cameras
				</a>
			</Link>
			<Link href="#">
				<a className={styles.navBtn} target="_blank" rel="noreferrer">
					Canon
				</a>
			</Link>
			<Link href="#">
				<a className={styles.navBtn} target="_blank" rel="noreferrer">
					About Us
				</a>
			</Link>
		</div>
	);
};

export default NavLinks;
