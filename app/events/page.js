import Link from "next/link";
import React from "react";
import "./events__style.scss";
import CustomLink from "../Components/ui/CustomLink";

function EventCard({
	name,
	location,
	date,
	time,
	detailsLink,
	upcoming = false,
}) {
	const eventStatus = upcoming ? "upcoming" : "past";
	return (
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
			{/* CustomLink({ url, children, classN, newWindow, ariaLabel })  */}
			<CustomLink classN="more__details" url={detailsLink}>
				{" "}
				More info
			</CustomLink>
		</div>
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
						/>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Events;
