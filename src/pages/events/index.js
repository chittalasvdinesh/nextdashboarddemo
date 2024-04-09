import { useRouter } from "next/router";
import { useState } from "react";

const Events = ({ eventData }) => {
    console.log(eventData);
    const [mainData,setMainData]=useState()
    const [events, setEvents] = useState(eventData);
    const router = useRouter()

    const fetchSportsEvents = async (val) => {
        const response = await fetch(`http://localhost:4000/events?category=${val}`);
        const data = await response.json();
        setEvents(data);
        router.push('/events?category=sports', undefined, { shallow: true })
    };
    const category = [];
    console.log(category)
    events.map((ele) => {
        const filteredCategory = category.find((val) => val === ele.category)
        console.log(filteredCategory)
        if (filteredCategory === undefined) {
            category.push(ele.category)
        }

    })

    console.log(category)


    return <>
        <h1>Events</h1>

        {category.map((val) => {
            return <div>
                <button onClick={() => fetchSportsEvents(val)}>{val} Events</button>
            </div>
        })}
        {
            events.map((event) => {
                return <div key={event.id}>
                    <h2>
                        {event.id} {event.title} {event.date} | {event.category}
                    </h2>
                    <p>{event.description}</p>
                    <hr />
                </div>
            })
        }
    </>
};

export default Events;



export async function getServerSideProps(context) {
    const { query } = context;
    const { category } = query;
    const queryString = category || ""
    const response = await fetch(`http://localhost:4000/events?categoty=sports}`);
    const data = await response.json();
    return {
        props: { eventData: data }
    }
}