import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails(props) {
	const { meetupData } = props;

	return (
		<MeetupDetail
			image={meetupData.image}
			title={meetupData.title}
			address={meetupData.address}
			description={meetupData.description}
		/>
	)
}

export async function getStaticPaths() {
	return {
		fallback: false,
		paths: [
			{
				params: {
					meetupId: "m1"
				}
			},
			{
				params: {
					meetupId: "m2"
				}
			},
			{
				params: {
					meetupId: "m3"
				}
			}
		]
	}
}

export async function getStaticProps(context) {
	const { params } = context;
	const meetupId = params.meetupId;

	return {
		props: {
			meetupData: {
				id: meetupId,
				image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/View_of_Gent_from_St._Michel%27s_Bridge.jpg/532px-View_of_Gent_from_St._Michel%27s_Bridge.jpg",
				title: "First Meetup",
				address: "Some Street 6, Some City",
				description: "This is a first meetup",
			}
		}
	}
}