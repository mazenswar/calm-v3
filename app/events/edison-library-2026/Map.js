export default function Map() {
	return (
		<section className="block map">
			<div className="block__content container">
				<h2>Directions</h2>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.585867262968!2d-74.36430052353555!3d40.5728217461235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b700ff655555%3A0x2bc54b4df10ebac6!2s1907%20Oak%20Tree%20Rd%20%23102%2C%20Edison%2C%20NJ%2008820!5e0!3m2!1sen!2sus!4v1772650813661!5m2!1sen!2sus"
					width="80%"
					height="450"
					style={{ border: "0" }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</section>
	);
}
