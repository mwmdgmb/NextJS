import React , {Component} from 'react';
import PortfolioCardDetails from './PortfolioCardDetails'
import {  Card, CardHeader, CardBody, CardText, CardTitle } from 'reactstrap';


export default class PortfolioCard extends Component{
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		}
	}

	handleToggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	};
    render(){
        const {portfolio ,children } = this.props ;
		const {isOpen} = this.state ;
		return(
				<span onClick={this.handleToggle}>
				<PortfolioCardDetails toggle={this.handleToggle} portfolio={portfolio} isOpen={isOpen}/>
						<Card className="portfolio-card">
							<CardHeader className="portfolio-card-header">{portfolio.position}</CardHeader>
							<CardBody>
								<p className="portfolio-card-city"> {portfolio.location} </p>
								<CardTitle className="portfolio-card-title">{portfolio.company}</CardTitle>
								<CardText className="portfolio-card-text">{portfolio.description}</CardText>
								<div className="readMore" >
								</div>
							</CardBody>
							{children}
						</Card>
					</span>
        )
    }
}

