import "../index.css";

export const About = () => {
    return (
        <div className="my-auto mx-auto justify-center flex flex-col">
            <h1 className="text-[min(4vh,32rem)] text-foreground mt-32 font-sans font-bold self-center">About Dattebayo</h1>

        <div className="mb-8 text-center">
            <h2 className="text-[min(3vh,1.75rem)] font-semibold mb-2 text-foreground">Our Mission</h2>
            <p className="text-gray-600">
                At <span className="text-blue-500">Dattebayo</span>, we're passionate about bringing the Naruto experience to fans old and new. Our mission is to provide a hub where Naruto enthusiasts can explore and celebrate their love for the series.
            </p>
        </div>

        <div className="mb-8 text-center">
            <h2 className="text-[min(3vh,1.75rem)] font-semibold mb-2 text-foreground">What Sets Us Apart</h2>
            <ul className="list-none pl-6 text-gray-600">
                <li>Responsive UI</li>
                <li>Amazing Community</li>
            </ul>
        </div>

        <div className="mb-8 text-center">
            <h2 className="text-[min(3vh,1.75rem)] font-semibold mb-2 text-foreground">Our Journey with Naruto</h2>
            <p className="text-gray-600">
                As I was thinking about what to work on, I decided to create a website about the greatest anime of all-time
            </p>
        </div>

        <div className="mb-8 text-center">
            <h2 className="text-[min(3vh,1.75rem)] font-semibold mb-2 text-foreground">Future Plans</h2>
            <p className="text-gray-600">
                <ul>
                    <li>
                        Events
                    </li>
                    <li>
                        Chat App
                    </li>
                    <li>
                        Clothing Items
                    </li>
                </ul>
            </p>
        </div>

        <div className="text-center">
            <p className="text-gray-600">Thank you for being part of our Naruto community at <span className="text-blue-500">Your Website Name</span>. Let's embark on this ninja journey together!</p>
        </div>


        </div>
    )
}