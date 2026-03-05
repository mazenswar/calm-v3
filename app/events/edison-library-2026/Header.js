import CustomLink from "@/app/Components/ui/CustomLink";
import Link from "next/link";

export default function Header({ upcoming = false }) {
	const eventStatus = upcoming ? "upcoming" : "past";
	return (
		<section className="block header">
			<div className="block__content container">
				<div className="header__details">
					<div className="event__title">
						<div className={"event__status " + eventStatus}>
							<p>{upcoming ? "Upcoming" : "Past"}</p>
						</div>
						<div className="text">
							<h1>Understanding Anxiety</h1>
							<i className="subtitle">A free community workshop</i>
						</div>
					</div>
					<div className="event__date item">
						<p>Friday, April 24, 2026 · 2:00 to 3:00 PM EST</p>
					</div>
					<div className="event__location item">
						<div className="line">
							<span className="span">📍</span>
							<CustomLink
								url="https://maps.app.goo.gl/92ZBHycdUsGFeKTw7"
								newWindow={true}
							>
								Edison Public Library, North Edison Temporary Branch
							</CustomLink>
						</div>
						<div className="line">
							<span>🔗</span>
							<CustomLink
								url={"https://edisonpubliclibrary.libnet.info/event/15807724"}
								newWindow="_blank"
							>
								View Library Listing
							</CustomLink>
						</div>
						<div className="calendar line">
							<span>🗓️</span>

							<CustomLink
								url="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Understanding+Anxiety+and+How+It+Works&dates=20260424T140000/20260424T150000&details=A+free+community+workshop+presented+by+CALM+Therapy.+More+details:+https://www.calmtherapy.center/events/edison-library-2026+https://edisonpubliclibrary.libnet.info/event/15807724&location=1907+Oak+Tree+Road+Suite+102+Edison+NJ+08820"
								newWindow={true}
							>
								Add to Calendar
							</CustomLink>
						</div>
					</div>

					<div className="event__footer item">
						<i>
							This event is free and open to the public. No registration
							required. Open to adults 18 and up.
						</i>
					</div>
				</div>
			</div>
		</section>
	);
}
