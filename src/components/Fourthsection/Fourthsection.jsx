import watch from "../../assets/images/icons/watch-series5-logo.png";
import applecardlogo from "../../assets/images/icons/apple-card-logo.png";


function Fourthsection() {
  return (
<section className="fourth-heghlight-wrapper">
			<div className="left-side-wrapper">
				<div className="top-logo-wrapper">
					<div className="logo-wrapper">
						<img src={watch}/>
					</div>
				</div>
				<div className="description-wraper">
					With the new Always-On Retina display.<br />
					You’ve never seen a watch like this.
				</div>
				<div className="links-wrapper">
					<ul>
						<li><a href="">Learn more</a></li>
						<li><a href="">Buy</a></li>
					</ul> 
				</div>
			</div>
			<div className="right-side-wrapper">
				<div className="top-logo-wrapper">
					<div className="logo-wrapper">
						<img src={applecardlogo}/>
					</div>
				</div>
				<div className="description-wraper">
					Get 3% Daily Cash on purchases from Apple using Apple Card.
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

export default Fourthsection