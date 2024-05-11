import { useState } from 'preact/hooks';

export default function Greeting({messages}) {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    const [greeting, setGreetings] = useState(messages[0]);

    return (
        <div>
            <h1>{greeting}! Thank you for visiting!</h1>
            <button onClick={() => setGreetings(randomMessage)}>New Greeting</button>
        </div>
    );
}