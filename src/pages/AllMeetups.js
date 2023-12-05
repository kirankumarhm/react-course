
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {

    const DUMMY_DATA = [
        {
            "id": 1,
            "title": "Sunny Beach Resort",
            "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Slide_Mountain_Catskills.jpg",
            "address": "123 Oceanfront Avenue, Paradise City",
            "description": "Experience the breathtaking beauty of the coast at Sunny Beach Resort. A perfect destination for sun-seekers and relaxation enthusiasts."
          },
          {
            "id": 2,
            "title": "Mountain Vista Lodge",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/1024px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
            "address": "456 Scenic Drive, Serene Valley",
            "description": "Nestled amidst the majestic mountains, Mountain Vista Lodge offers stunning views and tranquility. A haven for nature lovers."
          },
          {
            "id": 3,
            "title": "Urban Retreat Apartments",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ortler_Ascent_-_South_Tyrol.jpg/800px-Ortler_Ascent_-_South_Tyrol.jpg",
            "address": "789 City Center Street, Metropolis",
            "description": "Discover modern comfort at Urban Retreat Apartments. Enjoy city living at its finest with convenience and style."
          }
    ];

    
    return (<section>
        <h1>All Meetup Page</h1>
{/* 
        <ul>
            {DUMMY_DATA.map( (meetup) => {
                return <li key={meetup.id}>{meetup.title}</li>
            })} 
        </ul> */}
        <MeetupList meetups={DUMMY_DATA} />
        </section>);
}

export default AllMeetupsPage;