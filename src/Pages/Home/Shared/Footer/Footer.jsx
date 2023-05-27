import logo from '../../../../assets/cap.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
  <div>
    <img src={logo} alt="" />
    <p>Mamon<span>Shop</span>.<br/>Providing reliable food since 2022</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Home</a> 
    <a className="link link-hover">Blog</a> 
    <a className="link link-hover">Food Items</a> 
    
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
  
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    
  </div>
</footer>
        </div>
    );
};

export default Footer;