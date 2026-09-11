export const destinations = [
  {
    name: "Goa",
    country: "India",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",
    budget: "₹8,000 - ₹15,000",
    style: "Adventure",
    description:
      "Relax on beautiful beaches, explore forts and enjoy Goan food.",
  },
  {
    name: "Manali",
    country: "India",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",
    budget: "₹7,000 - ₹14,000",
    style: "Adventure",
    description:
      "Explore mountains, scenic valleys and exciting outdoor activities.",
  },
  {
    name: "Paris",
    country: "France",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80",
    budget: "₹30,000 - ₹60,000",
    style: "Culture",
    description:
      "Discover iconic landmarks, museums, cafés and beautiful streets.",
  },
  {
    name: "Tokyo",
    country: "Japan",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1000&q=80",
    budget: "₹35,000 - ₹70,000",
    style: "Culture",
    description:
      "Experience modern city life, traditional culture and amazing food.",
  },
];

const dailyActivities = [
  [
    {
      title: "Explore the City",
      time: "9:00 AM",
      description:
        "Start your trip by exploring popular areas and getting familiar with the destination.",
      cost: 500,
    },
    {
      title: "Visit a Top Attraction",
      time: "11:30 AM",
      description:
        "Visit one of the most popular attractions and experience the highlights of the destination.",
      cost: 800,
    },
    {
      title: "Local Lunch",
      time: "1:30 PM",
      description:
        "Enjoy a local meal and try some popular regional dishes.",
      cost: 600,
    },
    {
      title: "Discover Hidden Gems",
      time: "3:30 PM",
      description:
        "Explore a less crowded location and discover something unique about the destination.",
      cost: 400,
    },
    {
      title: "Sunset Experience",
      time: "6:00 PM",
      description:
        "Relax and enjoy a beautiful sunset at a recommended scenic location.",
      cost: 300,
    },
    {
      title: "Local Dinner",
      time: "8:00 PM",
      description:
        "End the day with a delicious local dinner.",
      cost: 700,
    },
  ],

  [
    {
      title: "Morning Adventure",
      time: "8:00 AM",
      description:
        "Start the day with an exciting outdoor experience and enjoy the morning atmosphere.",
      cost: 700,
    },
    {
      title: "Scenic Sightseeing",
      time: "10:30 AM",
      description:
        "Visit a scenic location and capture memorable views of the destination.",
      cost: 600,
    },
    {
      title: "Traditional Lunch",
      time: "1:00 PM",
      description:
        "Try a traditional local lunch and discover regional flavors.",
      cost: 700,
    },
    {
      title: "Cultural Experience",
      time: "3:00 PM",
      description:
        "Experience the local culture, traditions and history of the destination.",
      cost: 500,
    },
    {
      title: "Shopping & Souvenirs",
      time: "5:30 PM",
      description:
        "Explore local markets and pick up souvenirs to remember your trip.",
      cost: 800,
    },
    {
      title: "Dinner by the City",
      time: "8:00 PM",
      description:
        "Enjoy dinner at a popular local restaurant.",
      cost: 700,
    },
  ],

  [
    {
      title: "Nature Walk",
      time: "8:30 AM",
      description:
        "Enjoy a peaceful morning walk and discover the natural beauty around you.",
      cost: 300,
    },
    {
      title: "Must-See Landmark",
      time: "10:30 AM",
      description:
        "Explore another famous landmark and learn more about the destination.",
      cost: 900,
    },
    {
      title: "Local Food Experience",
      time: "1:00 PM",
      description:
        "Taste popular local dishes and enjoy an authentic food experience.",
      cost: 800,
    },
    {
      title: "Relax & Explore",
      time: "3:30 PM",
      description:
        "Spend the afternoon exploring at your own pace and discovering hidden spots.",
      cost: 400,
    },
    {
      title: "Sunset Viewpoint",
      time: "6:00 PM",
      description:
        "Visit a scenic viewpoint and enjoy the sunset.",
      cost: 300,
    },
    {
      title: "Farewell Dinner",
      time: "8:00 PM",
      description:
        "Finish your trip with a memorable dinner featuring local cuisine.",
      cost: 900,
    },
  ],

  [
    {
      title: "Early Morning Exploration",
      time: "8:00 AM",
      description:
        "Begin the day by exploring a peaceful part of the destination.",
      cost: 400,
    },
    {
      title: "Local Landmark",
      time: "10:30 AM",
      description:
        "Visit an important local landmark and discover its history.",
      cost: 700,
    },
    {
      title: "Lunch Break",
      time: "1:00 PM",
      description:
        "Take a break and enjoy a delicious local meal.",
      cost: 600,
    },
    {
      title: "Adventure Activity",
      time: "3:00 PM",
      description:
        "Try a fun activity suited to your travel style.",
      cost: 1000,
    },
    {
      title: "Evening Walk",
      time: "6:00 PM",
      description:
        "Take an evening walk through a popular area.",
      cost: 300,
    },
    {
      title: "Local Dinner",
      time: "8:00 PM",
      description:
        "Enjoy a final local dinner and relax after a day of exploring.",
      cost: 700,
    },
  ],
];

export function createItinerary(destination, days) {
  const numberOfDays = Number(days);

  return Array.from({ length: numberOfDays }, (_, index) => {
    const activities =
      dailyActivities[index % dailyActivities.length];

    return {
      day: index + 1,

      title: `Day ${index + 1} — Explore ${destination}`,

      activities: activities.map((activity) => ({
        ...activity,
        location: destination,
      })),
    };
  });
}