import { getAllCalevents, type Calevent } from '@/lib/calevents';

export default function CaleventPage() {
  const calevents = getAllCalevents();
  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  return (
    <div className="p-5">
      <h1 className="font-semibold text-4xl mb-8 tracking-tighter">Calendar</h1>
      <div className="space-y-8">
        {calevents.map((calevent) => (
          <article key={calevent._meta.path}>
            <h2 className="text-2xl font-bold">
              {calevent.year}
            </h2>
             <div dangerouslySetInnerHTML={{__html: calevent.html}} />
          </article>
        ))}
      </div>
    </div>
  );
}

/*
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
*/