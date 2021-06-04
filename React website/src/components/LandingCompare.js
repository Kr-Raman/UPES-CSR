import React, {Component} from 'react';
import compareImg from './images/what.png'
import './LandingCompare.css'
import InfoCards from './InfoCards.js'

class ComparePage extends Component {

	state = {
		cards: [
			{
				id: 1,
				title: "Our Aim",
				description: "We aim to establish long -term relationships with the society by enabling the socio-economically weaker sections and giving them a better chance at having a brighter future.",
				buttonText: "Read More",
				buttonUrl: "/",
			},
			{
				id: 2,
				title: "Our Vision",
				description: "We intend to give back tenfold by conducting events that help forge a stronger bond between us and the rest of the world by enabling the socio-economically weaker sections.",
				buttonText: "Read More",
				buttonUrl: "/",
			},
		]
	}

	render(){
		return(
<div>
<br/><br/><br/><br/>

			<div id="compare">
				
				<div className="comapare_container">
					<h1 className="heroTitle">What <span id="nine-eye">UPES-CSR</span> do</h1>
					<div className="compare_content">
						<div className="leftContainer">
							<img className="compareImg" alt="compare and buy" src={compareImg}/>
						</div>
						<div className="rightContainer">
							<div className="cards">
								<InfoCards cards={this.state.cards}/>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>

		);
	}
}

export default ComparePage;
