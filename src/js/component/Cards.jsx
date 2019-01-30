import React from "react";
import PropTypes from "prop-types";

const Cards = props => {
	return (
		<div className="row mx-5 justify-content-between">
			<div className="col ml-5 pl-4">
				<img src="http://placehold.jp/250x175.png" />
				<div className="card-body text-center">
					<h5 className="card-title text-center">Card title</h5>
					<p className="card-text text-center mb-4">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Sapiente esse necessitatibus neque.
					</p>
				</div>
				<div className="card-footer text-muted text-center">
					<a href="#" className="btn btn-primary text-center">
						Find out More!
					</a>
				</div>
			</div>
			<div className="col mr-1">
				<img src="http://placehold.jp/250x175.png" />
				<div className="card-body text-center">
					<h5 className="card-titletext-center">Card title</h5>
					<p className="card-text text-center  mb-1">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Explicabo magni sapiente, tempore debitis beatae
						culpa natus architecto.
					</p>
				</div>
				<div className="card-footer text-muted text-center">
					<a href="#" className="btn btn-primary">
						Find out More!
					</a>
				</div>
			</div>
			<div className="col mr-1">
				<img src="http://placehold.jp/250x175.png" />
				<div className="card-body">
					<h5 className="card-title text-center">Card title </h5>
					<p className="card-text text-center mb-4">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Sapiente esse necessitatibus neque.
					</p>
				</div>
				<div className="card-footer text-muted text-center">
					<a href="#" className="btn btn-primary">
						Find out More!
					</a>
				</div>
			</div>
			<div className="col mr-2 pr-5">
				<img src="http://placehold.jp/250x175.png" />
				<div className="card-body text-center">
					<h5 className="card-title text-center">Card title</h5>
					<p className="card-text text-center">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Explicabo magni sapiente, tempore debitis beatae
						culpa natus architecto.
					</p>
				</div>
				<div className="card-footer text-muted text-center">
					<a href="#" className="btn btn-primary">
						Find out More!
					</a>
				</div>
			</div>
		</div>
	);
};

Cards.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string
};

export default Cards;
