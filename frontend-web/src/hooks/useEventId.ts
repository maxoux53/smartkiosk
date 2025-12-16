import { useParams } from "react-router-dom";

export function useEventId(): number | undefined {
	const { eventId } = useParams();
	if (!eventId) return undefined;

	const parsed = Number(eventId);
	return Number.isFinite(parsed) ? parsed : undefined;
}

export function useRequiredEventId(): number {
	const eventId = useEventId();
	if (eventId === undefined) {
		throw new Error("Missing or invalid eventId route param");
	}
	return eventId;
}
