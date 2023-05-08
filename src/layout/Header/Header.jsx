import styles from './Header.css';

const Header = () => {
	return (
		<nav className={styles.nav}>
			<div className='container'>
				<div className="nav-wrapper">
					<a href="/" className="brand-logo">React Movies</a>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li><a href="https://github.com/">GitHub</a></li>
					</ul>
				</div>
			</div>
	  	</nav>
	);
}

export default Header;