import { http, HttpResponse } from "msw";
import { destinations, createItinerary } from "../data/travelData";

export const handlers = [
  http.post("/api/itinerary", async ({ request }) => {
    const body = await request.json();

    const {
      destination,
      days,
      budget,
      style,
    } = body;

    // Validate request
    if (!destination || !days || !budget || !style) {
      return HttpResponse.json(
        {
          message: "Please provide all trip details.",
        },
        {
          status: 400,
        }
      );
    }

    const destinationText = destination.trim();

    // Find destination from our data
    const matchedDestination = destinations.find(
      (item) =>
        item.name.toLowerCase() ===
        destinationText.toLowerCase()
    );

    const destinationName =
      matchedDestination?.name ||
      destinationText.charAt(0).toUpperCase() +
        destinationText.slice(1);

    const country =
      matchedDestination?.country || "India";

    const image =
      matchedDestination?.image ||
      destinations[0].image;

    const description =
      matchedDestination?.description ||
      `A personalized ${days}-day trip to ${destinationName}, planned around your ${style.toLowerCase()} travel style.`;

    const itinerary = createItinerary(
      destinationName,
      days
    );

    return HttpResponse.json({
      id: Date.now(),

      destination: destinationName,

      country,

      days: Number(days),

      budget: Number(budget),

      style,

      image,

      description,

      itinerary,
    });
  }),
];