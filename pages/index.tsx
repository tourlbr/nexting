import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
	{
		id: "m1",
		title: "A first Meetup",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/View_of_Gent_from_St._Michel%27s_Bridge.jpg/532px-View_of_Gent_from_St._Michel%27s_Bridge.jpg",
		address: "Korenmarkt 6, 9000 Ghent",
		description: "This is a first meetup"
	},
	{
		id: "m2",
		title: "A Second Meetup",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/View_of_Gent_from_St._Michel%27s_Bridge.jpg/532px-View_of_Gent_from_St._Michel%27s_Bridge.jpg",
		address: "Korenmarkt 6, 9000 Ghent",
		description: "This is a second meetup"
	},
	{
		id: "m3",
		title: "A third Meetup",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/View_of_Gent_from_St._Michel%27s_Bridge.jpg/532px-View_of_Gent_from_St._Michel%27s_Bridge.jpg",
		address: "Korenmarkt 6, 9000 Ghent",
		description: "This is a third meetup"
	}
];

export default function HomePage() {
	return (
		<MeetupList meetups={DUMMY_MEETUPS} />
	)
}