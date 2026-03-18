import Link from "next/link";
import React from "react";
import "./events__style.scss";
import CustomLink from "../Components/ui/CustomLink";
import Logos from "./edison-library-2026/Logos";

function EventCard({
	name,
	location,
	date,
	time,
	detailsLink,
	upcoming = false,
	logos = null,
}) {
	const eventStatus = upcoming ? "upcoming" : "past";

	return (
		<Link className="more__details" href={detailsLink}>
			<div className="event__card">
				<div className="event__title">
					<h3 className="event__name">{name}</h3>
					<div className={"event__status " + eventStatus}>
						<p>{upcoming ? "Upcoming" : "Past"}</p>
					</div>
				</div>
				<div className="event__location event__line">
					<span className="span">📍</span>{" "}
					<p className="event__location__text">{location}</p>
				</div>

				<div className="event__date event__line">
					<span className="span">🗓️</span>
					<p className="event__date__text">{date}</p>
				</div>

				<div className="event__time event__line">
					<span className="span">🕒</span>{" "}
					<p className="event__time__text">{time}</p>
				</div>
				{logos}
			</div>
		</Link>
	);
}

function Events() {
	return (
		<main id="events__page">
			<section className="block">
				<div className="block__content container">
					<h1 className="center-title">Events</h1>
					<div className="events__container">
						<EventCard
							name={"Understanding Anxiety"}
							location={"Edison Public Library, North Edison Temporary Branch"}
							date={"Friday, April, 24th, 2026"}
							time={"2pm EST"}
							detailsLink={"/events/edison-library-2026"}
							upcoming={true}
							logos={<Logos />}
						/>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Events;
