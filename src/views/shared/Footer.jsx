// Importing Smart Beach Logo Graphic.
import smartbeachLogo from '../../images/smart-beach-logo.png';

function Footer() {
 
    return (
        // Start of Footer.
        <footer>
            {/* Start of Footer Navigation */}
            <nav>
                {/* Start of Logo & Primary Navigation Links Container */}
                <div className="footer-top">

                    {/* Navigation Logo (Left) */}
                    <a href="/"><img src={smartbeachLogo} width="180" className="navbar-brand logo" alt="Smart Beach Logo Graphic" /></a>

                    {/* Start of Footer Primary Navigation Links */}
                    <ul className="navbar-nav">              
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/dashboard">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/beach-info">Beach Info</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                    {/* End of Footer Primary Navigation Links */} 
                    
                </div>
                {/* End of Logo & Primary Navigation Links Container */}

                {/* Copy Right & Social Links Container */}
                <div className="footer-bottom">
                    
                    <p><small>&copy; 2024 Smart Beach. All rights reserved.</small></p>
                    
                    {/* Start of Footer Social Links */}
                    <div className="social-links-container">

                        {/* Facebook Link */}
                        <a className="nav-link" href="#" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#000" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                        </a>

                        {/* Twitter Link */}
                        <a className="nav-link" href="#" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#000" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                        </a>

                        {/* Instagram Link */}
                        <a className="nav-link" href="#" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                        </a>

                    </div>
                    {/* End of Footer Social Links */}

                </div>
            </nav>
            {/* End of Footer Navigation */}
        </footer>
        // End of Footer.
    );
  
}

export default Footer;
