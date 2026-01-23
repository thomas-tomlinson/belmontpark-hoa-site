import Link from 'next/link'

export default function NewsLetter() {
    const newsLetterLocation = 'https://r2.belmontparkhoa.net/newsletters/';
    const newsletters = [
        {name: 'Fall 2025', filename: '2025_fall.pdf'},
        {name: 'Spring 2025', filename: '2025_spring.pdf'},
        {name: 'Winter 2024', filename: '2024_winter.pdf'},
        {name: 'Summer 2024', filename: '2024_summer.pdf'},
    ]
    return (
        <div className="p-5 text-4xl">
            <ol className="list-disc list-inside">
                {newsletters.map((item, index) => (
                    <li key={index}>
                        <Link
                            key={index}
                            href={newsLetterLocation + item.filename}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ol>
        </div>
    )
}