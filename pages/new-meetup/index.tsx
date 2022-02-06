import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/MeetupForm";

export default function NewMeetupPage() {
	const router = useRouter();

	async function addMeetupHandler (enteredMeetupData) {
		const response = await fetch("/api/new-meetup", {
			method: "POST",
			body: JSON.stringify(enteredMeetupData),
			headers: {
				"Content-Type": "application/json"
			}
		});

		const data = await response.json();
		console.log(data);

		router.replace("/");
	}

	return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}