import appletvlogo from "../../assets/images/icons/apple-tv-logo.png";
import servantlogo from "../../assets/images/icons/servant-logo.png";

function Fifthsection() {
  return (
<section className="fifth-heghlight-wrapper"> 
			<div className="left-side-wrapper">
				<div className="top-logo-wrapper">
					<div className="logo-wrapper">
						<img src={appletvlogo}/>
					</div>
				</div>

				<div className="tvshow-logo-wraper">
					<img src={servantlogo}/>
				</div>

				<div className="watch-more-wrapper">
					<a href="#">Watch the trailer</a>
				</div>
			</div>
			<div className="right-side-wrapper">
				<div className="top-logo-wrapper">
					<div className="logo-wrapper">
						AirPods Pro
					</div>
				</div>

				<div className="description-wraper">
					Magic like you’ve never heard.
				</div>

				<div className="links-wrapper">
					<ul>
						<li><a href="">Learn more</a></li>
						<li><a href="">Buy</a></li>
					</ul> 
				</div>
			</div>	
		</section>  )
}

export default Fifthsection