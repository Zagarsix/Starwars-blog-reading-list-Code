import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<>
		<div
			id="carouselExampleIndicators"
			className="carousel slide"
			data-bs-ride="carousel"
		>
			<div className="carousel-indicators">
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to={0}
					className="active"
					aria-current="true"
					aria-label="Slide 1"
				/>
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to={1}
					aria-label="Slide 2"
				/>
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to={2}
					aria-label="Slide 3"
				/>
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to={3}
					aria-label="Slide 4"
				/>
			</div>
			<div className="carousel-inner p-5 my-5" id="Carousel">
				<div className="carousel-item active p-2" id="DV">
					<img src="https://images4.alphacoders.com/814/81446.jpg" className="d-block w-100" alt="..." />
				</div>
				<div className="carousel-item p-2" id="DV">
					<img src="https://images3.alphacoders.com/114/11439.png" className="d-block w-100" alt="..." />
				</div>
				<div className="carousel-item p-2" id="DV">
					<img src="https://images2.alphacoders.com/191/19102.png" className="d-block w-100" alt="..." />
				</div>
				<div className="carousel-item p-2" id="DV">
					<img src="https://images3.alphacoders.com/556/556936.jpg" className="d-block w-100" alt="..." />
				</div>
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true" />
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true" />
				<span className="visually-hidden">Next</span>
			</button>
		</div>

	</>
);

