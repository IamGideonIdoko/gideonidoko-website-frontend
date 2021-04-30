import styles from '../../styles/Home.module.css';

const SectionFour = () => {
	return (
		<div className={styles.sectionFour} id="#services">
			<div className="container-max-1248px">
				<div className={styles.sectionFourWrapper}>

					<h3 className={styles.servicesHead}>Services -</h3>
						<div className={styles.servicesWrapper}>
							<ul>
								<li>
									<div><span></span></div>
									<div>
										<h5>Web Design/Development</h5>
										<p>I design, integrate and maintain software solutions like websites, web apps, portals, PWAs, APIs etc.</p>
									</div>
								</li>
								<li>
									<div><span></span></div>
									<div>
										<h5>User Friendly Products</h5>
										<p>I build products that are easy to use, highly user-centered and deliver value to your business.</p>
									</div>
								</li>
								<li>
									<div><span></span></div>
									<div>
										<h5>Website Review</h5>
										<p>I ensure a product is in its best performance by reviewing for potential issues and making improvements that could fix it.</p>
									</div>
								</li>
								<li>
									<div><span></span></div>
									<div>
										<h5>Ongoing Support</h5>
										<p>I cater the technical maintenance (backup, code & tools upgrade) and supports that deal with content editing and design reorganization.</p>
									</div>
								</li>
								<li>
									<div><span></span></div>
									<div>
										<h5>Tailored Development</h5>
										<p>I brief about your goals as this enables me build products that really reflect your business and its personality.</p>
									</div>
								</li>
								<li>
									<div><span></span></div>
									<div>
										<h5>Rigorous Testing</h5>
										<p>I deal with all possible combinations of good testing approaches so that flaws can be found and removed from the system.</p>
									</div>
								</li>
							</ul>
							<div className={styles.coderImgWrapper}><img src="/assets/img/freelancer.svg" alt="coder illustration" draggable="false" /></div>
						</div>
				</div>
			</div>
						
		</div>
	);

}


export default SectionFour;