import { getAllUpdates} from "@/lib/updates"

const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};

export default function HomePage() {
    const updates = getAllUpdates(3);
    return (
       /*<div className="bg-[url(/hoa_entry_sign.jpg)] bg-fixed bg-top bg-contain"> */
    <div>
        <div className="p-5">
            <h1 className="text-4xl gap-x-4">Welcome to Belmont Park Home Owner&apos;s Association</h1>
        </div>
        <div className="px-10">
                <img className="float-right max-w-1/3" src='/entry_sign.jpg' alt='entry sign picture'/>
                <p>The Belmont Park subdivision was first established in 1984, with much of the neighborhood
                being developed between 1984-1991. Today we enjoy an established neighborhood with large,
                mature trees, and well-maintained homes and yards. Belmont Park  neighbors take pride in
                keeping their homes and yards looking nice, helping their neighbors,  and abiding by the
                CC&Rs. You will find a sense of community here with  annual events, such as annual Yard
                Landscaping Awards, annual Neighborhood Garage Sale, annual National Night Out celebration
                and Christmas light contest! We strive to keep Belmont Park one of the most desirable
                neighborhoods in Boise and have recently updated the landscaping on our front entrance
                and added an HOA website.
                </p>
                <p>Do you have great ideas for the neighborhood or want to get involved? We would love to hear
                from you and invite you to participate as a Board member of the homeowner’s association.
                Email us at <a href="mailto:bphoa.boise@gmail.com">BPHOA.Boise@gmail.com</a>
                </p>
        </div>
        <div className="p-5">
            <h1 className="text-2xl gap-x-4">Most recent updates</h1>
        </div>
        <div className="px-10">
            <ul>
            {updates.map((update) => (
                <li key={update._meta.path}>
                <a href={`/updates/${update._meta.path}`}>
                    <p>
                        <b className="text-semi">{update.title} - </b>
                        <i> {new Date(update.publishedAt).toLocaleString("en-US", dateOptions)}</i>
                    </p>
                </a>
                </li>
            ))}
            </ul>
        </div>
    </div>
    )
}