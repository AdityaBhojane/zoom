import { useState } from "react";
import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
    const [userName, setUserName] = useState('')
    return (
        <div className="h-screen flex flex-col">
            {/* Navbar */}
            <Navbar />

            {/* Content */}
            <div className="flex flex-col items-center justify-center flex-grow">
                <h1 className="text-3xl font-bold mb-8">Welcome to Zoom Clone</h1>
                <input type="text" placeholder="Enter your name / ID" value={userName} onChange={(e) => setUserName(e.target.value)} className="px-5 py-2 mb-5 bg-slate-600 rounded-xl"/>
                <div className="flex space-x-4">
                    <Button Style="create" label="Create Meeting" onClick={() => alert('Create Meeting')} />
                    <Button Style="blue" label="Join Meeting" onClick={() => alert('Join Meeting')} />
                </div>
            </div>
        </div>
    );
};

export default Home;
