import CalendarData from '@/app/calendar/cal-data.md';

function CustomH1({ children }) {
    return(
        <h1 className="text-4xl my-2">{children}</h1>
    );
}

const overrideComponents = {
    h1: CustomH1,

}

export default function Calendar() {
    return (
    <div>
        <div className="p-5">
            <h1 className="text-4xl gap-x-4">Event Calendar</h1>
        </div>
        <div className="p-5">
            <CalendarData components={overrideComponents}/>
        </div>
    </div>
    )
}