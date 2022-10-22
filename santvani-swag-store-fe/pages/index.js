import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import StoreContext from "../context/store-context";
import MedusaLogo from "../public/logo.PNG";
import mid from "../public/mid.png";
import BakeryBanner from "../public/back2.png";
import promise from "../public/promise.png";
import ChocolateSplash from "../public/chocolatesplash.PNG";
import backg from "../public/back.jpg";
import field from "../public/fieldSvg.svg";
import styles from "../styles/landing-page.module.css";
import store from "../styles/store.module.css";
import footer from "../styles/footer.module.css";
import { createClient } from "../utils/client";
import { formatPrices } from "../utils/prices";

export default function Home({ products }) {
	const { cart } = useContext(StoreContext);

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<div className={styles.hero}>
					<div className={styles.title}>
						<h1 style={{ margin: 0 }}>Santvani Swag Store</h1>
						{/* <h1 style={{ margin: 0 }}>+</h1>
            <h1 style={{ margin: 0 }}>Next.js starter</h1> */}
					</div>
					<div className={styles.links}>
						<p style={{ fontWeight: "bold", color: "white" }}>
							Your all-in one swag platform. Shop, store, and ship
							the highest quality swag around the world with the
							click of a button.
						</p>
					</div>
				</div>
				<div className={styles.canvas}>
					<div
						className={styles.hero}
						style={{ position: "absolute", zIndex: "100" }}>
						<div
							className={styles.title}
							style={{ width: "100px" }}>
							<h1 style={{ margin: 0 }}>Swag Distribution</h1>
						</div>
						<div
							className={styles.links}
							style={{
								width: "400px",
								justifyContent: "start",
								alignItems: "start",
								textAlign: "start",
							}}>
							<p style={{ fontWeight: "bold", color: "white" }}>
								Send swag to one location or to thousands of
								locations at once!
							</p>
						</div>
						<div className={styles.mid}>
							<Image
								src={mid}
								alt="field"
								layout="responsive"></Image>
						</div>
					</div>
					<Image
						src={BakeryBanner}
						alt="field"
						layout="responsive"></Image>
				</div>
				<section id="storeSection" className={store.container}>
					<h1 className={store.title}>
						Warning{" "}
						<span className={store.title_inner}>Swag Alert</span>{" "}
					</h1>
					<div className={styles.canvas}>
						<Image
							src={promise}
							alt="field"
							layout="responsive"></Image>
					</div>
					<div className={store.products}>
						<div className={store.grid}>
							{products &&
								products.map((p) => {
									return (
										<div key={p.id} className={store.card}>
											<Link
												href={{
													pathname: `/product/[id]`,
													query: { id: p.id },
												}}
												passHref>
												<a target="_blank">
													<div
														className={
															store.imgHolder
														}>
														<Image
															src={p.thumbnail}
															alt="thumbnail"
															width={300}
															height={
																230
															}></Image>
													</div>
													<br></br>
													<br></br>
													<br></br>
													<h2>{p.title}</h2>

													<p>{p.description}</p>
													<p
														style={{
															color: "#8a4af3",
														}}>
														{formatPrices(
															cart,
															p.variants[0],
														)}
													</p>
												</a>
											</Link>
										</div>
									);
								})}
						</div>
					</div>
				</section>
			</main>
			<footer className={footer.container}>
				<div className={footer.main}>
					<div className={footer.listA}>
						<Link href="/">
							<a style={{ width: "125px" }}>
								<Image
									src={MedusaLogo}
									height="90px"
									width="100%"
									borderRadius="50%"
									alt="logo"
								/>
							</a>
						</Link>
					</div>
					<div className={footer.listA}>
						<h4>Guidelines</h4>
						<li>
							<Link href="https://docs.medusajs.com/tutorial/set-up-your-development-environment/">
								<a target="_blank">Documentation</a>
							</Link>
						</li>
					</div>
					<div className={footer.listA}>
						<h4>Community</h4>
						<li>
							<Link href="https://www.linkedin.com/in/">
								<a target="_blank">Linkedin</a>
							</Link>
						</li>
					</div>
					<div className={footer.listA}>
						<h4>More</h4>
						<li>
							<Link href="https://medusajs.com/">
								<a target="_blank">Medusa Home</a>
							</Link>
						</li>
						<li>
							<Link href="https://github.com/">
								<a target="_blank">GitHub Repo</a>
							</Link>
						</li>
						<li>
							<Link href="https://medusajs.com/contact-us/">
								<a target="_blank">Contact us</a>
							</Link>
						</li>
					</div>
				</div>
			</footer>
		</div>
	);
}

export const getStaticProps = async () => {
	const client = createClient();
	const { products } = await client.products.list();

	return {
		props: {
			products,
		},
	};
};
