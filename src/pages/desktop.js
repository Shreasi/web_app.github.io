import SellingPointContainer from "../components/selling-point-container";
import Component from "../components/component";
import "./desktop.css";

const Desktop = () => {
  return (
    <div className="desktop">
      <div className="footer">
        <div className="background" />
        <div className="links">
          <div className="privacy-policy">Privacy Policy</div>
          <div className="privacy-policy">Terms of Service</div>
        </div>
        <div className="designed-by-ka">{`© 2024, Designed by k&a `}</div>
      </div>
      <div className="footer-links">
        <div className="navigation">
          <div className="product">Product</div>
          <div className="use-cases">Use Cases</div>
          <div className="use-cases">For Business</div>
          <div className="use-cases">Resources</div>
          <div className="use-cases">Pricing</div>
        </div>
        <div className="navigation">
          <div className="product">Downloads</div>
          <div className="use-cases">Desktop App</div>
          <div className="use-cases">Chrome Extension</div>
          <div className="use-cases">Safari Extension</div>
          <div className="use-cases">iOS App</div>
        </div>
        <div className="navigation">
          <div className="product">Resources</div>
          <div className="use-cases">Blog</div>
          <div className="use-cases">{`Help & Support`}</div>
          <div className="use-cases">Community</div>
          <div className="use-cases">Status</div>
        </div>
        <div className="navigation">
          <div className="product">Company</div>
          <div className="use-cases">About Us</div>
          <div className="use-cases">Careers</div>
          <div className="use-cases">Media Kit</div>
          <div className="use-cases">Sitemap</div>
        </div>
      </div>
      <div className="header">
        <div className="navigation4">
          <div className="work">Work</div>
          <div className="work">Expertise</div>
          <div className="work">About</div>
          <div className="work">Insight</div>
        </div>
      </div>
      <div className="navbar">
        <div className="navbar-child" />
        <div className="start-a-project">Start a project</div>
        <img className="envelope-icon" alt="" src="/envelope.svg" />
      </div>
      <img
        className="hp-desktop-gradiant-1-icon"
        alt=""
        src="/hpdesktopgradiant-1@2x.png"
      />
      <SellingPointContainer />
      <div className="social-proof">
        <div className="text">
          <p className="join-400">{`Join 400+ `}</p>
          <p className="companies-already-growing">companies already growing</p>
        </div>
      </div>
      <Component />
      <div className="logos">
        <div className="logos1">
          <div className="puma-logo-parent">
            <img className="puma-logo-icon" alt="" src="/pumalogo.svg" />
            <img className="whatsapp-icon" alt="" src="/whatsapp.svg" />
            <img
              className="google-2015-1-icon"
              alt=""
              src="/google2015-1.svg"
            />
            <img className="spotify-1-1-icon" alt="" src="/spotify1-1.svg" />
            <img className="microsoft-1-icon" alt="" src="/microsoft-1.svg" />
            <img
              className="fedex-express-6-1-icon"
              alt=""
              src="/fedexexpress6-1.svg"
            />
            <img className="airbnb-1-icon" alt="" src="/airbnb-1.svg" />
          </div>
          <div className="puma-logo-parent">
            <div className="new-youtube-logo">
              <img className="vector-icon" alt="" src="/vector.svg" />
              <img className="group-icon" alt="" src="/group.svg" />
            </div>
            <img className="walmart-1-icon" alt="" src="/walmart-1.svg" />
            <img className="binance-1-icon" alt="" src="/binance-1.svg" />
            <img className="slack-icon" alt="" src="/slack.svg" />
            <img className="canon-logo-icon" alt="" src="/canonlogo.svg" />
            <img className="spacex-icon" alt="" src="/spacex.svg" />
          </div>
        </div>
        <div className="overlay-left" />
        <div className="overlay-right" />
      </div>
      <img className="icon" alt="" src="/1111-1@2x.png" style={{ marginLeft: '20px' }} />

      <div className="we-are-creative-container">
        <p className="we-are">{`We are `}</p>
        <p className="creative-designers-insightful">
          <b className="creative-designers-insightful1">
            Creative Designers, Insightful Strategists, and Exceptional
             Engineers
          </b>
        </p>
      </div>
      <div className="the-organization-is">
        The organization is focused on foregrounding expertise in its services,
        staying updated on global trends, refining domain knowledge, and
        adapting to evolving content creation arenas to effectively serve client
        brands. 
        <iframe src="https://giphy.com/embed/mIvCfCG6xk1d2AmQSJ" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/kintermedia-media-kinter-mIvCfCG6xk1d2AmQSJ">via GIPHY</a></p>
      </div>
      <img className="desktop-child" alt="" src="/Vector 1.png" />
      <div className="layer-1-parent">
        <img className="layer-1-icon" alt="" src="/layer-1.svg" />
        <img className="layer-1-icon1" alt="" src="/layer-11.svg" />
        
        <b className="lets-unite-for">{`Let's unite for innovation `}</b>
        <div className="sliding-text-container">
          <p className="sliding-text">Rewriting the norms of corporate communication.</p>
          {/* <img
          className="psd226-1-icon"
          alt=""
          src="/Selling point.png"
        /> */}
          
        </div>
        <img
          className="psd226-1-icon"
          alt=""
          src="/Selling point.png"
        />

        {/* <img
          className="psd226-1-icon"
          alt=""
          src="/23126555-199-psd226-1@2x.png"
        /> */}
       


      </div>
    </div>
  );
};

export default Desktop;
