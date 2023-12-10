import Navbar from "./navbar";


const Header = () => {
  return (
    <div className="container">
    <header>
    <Navbar />
    
      <div className="row cta-part">
        <div className="col-lg col-md-8 col-sm-12">
            <h4 className="">Best Seller of the week</h4>
            <h1>Clue of The wooden Cotage</h1>
            <button className="cta-btn mt-4">Get Started</button>
        </div>
        <div className="col-lg-7 col-md-4">
          <img src="./reading.svg " className="d-none d-md-block pt-5 mockup" width="500" />
          
        </div>
        </div>

      <div className="supports pt-5">
        <div className="companies row">

          <div className="col">
            <img width="100" height="100" className="" src="https://img.icons8.com/ios-filled/500/android-os.png" alt="android-os"/>
          </div>

          <div className="col">
           <img width="100" height="100"  src="https://img.icons8.com/ios-filled/500/java-coffee-cup-logo.png" alt="java-coffee-cup-logo"/>
          </div>
          
          <div className="col">
           <img width="100" height="100" className="" src="https://img.icons8.com/ios-filled/100/google-logo.png" alt="google-logo"/>
          </div>

          
        
        </div>
      </div>

    </header>
    </div>
  );
};

export default Header;
