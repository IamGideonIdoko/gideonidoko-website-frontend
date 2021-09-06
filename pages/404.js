import React, { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Custom404.module.css';
import { NextSeo } from 'next-seo';

const Custom404 = () => {
	return (
		<Fragment>
			<NextSeo noindex={true} nofollow={true} />
			<Head>
				<title>Page Not Found : ( </title>
			</Head>
			<main className={`padding-top-10rem ${styles.custom404Main}`}>
				<div className="container-max-1248px">
				<div className={styles.custom404Container}>
					<div className={styles.custom404ContainerChild}>
						<div className={styles.custom404ImageWrap}>
							<img src="/assets/img/404.svg" alt="404" />
						</div>
						<h1>404 - Page Not Found &nbsp;&nbsp;: (</h1>
						<p><small>Well, this is awkward, the page you were trying to view does not exist.</small></p>
						<div className={styles.custom404ExitLinks}>
							<span><Link href="/"><a>Go Home</a></Link></span>
							<span><Link href="/blog"><a>Go To Blog</a></Link></span>
						</div>
					</div>
				</div>
					

				</div>
			</main>
		</Fragment>
	)
}


export default Custom404;