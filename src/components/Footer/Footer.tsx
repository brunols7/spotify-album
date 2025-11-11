import '../../styles/Footer.css'
import footerLogo from '../../assets/footer-logo.png';

export function Footer(){

    return (
        <div className="footer-ctn">
            <img src={footerLogo} alt="Spotify Logo"/>
            <div className="owner">
                <p><b>Design by:</b> <a href='https://www.linkedin.com/in/marividal' target='_blank'>Mariana Vidal</a></p>
                <p><b>Developed by:</b> <a href='https://www.linkedin.com/in/brunols7' target='_blank'>Bruno Leonardo</a></p>
            </div>
            <p>© 2025 Spotify AB</p>
        </div>
    );
}