import { useState, useEffect } from "react";

export default function Index() {
  // Initial state
  const [person] = useState({
    fullName: "John Doe",
    bio: "A passionate software developer.",
    imgSrc: "https://t4.ftcdn.net/jpg/06/08/55/73/360_F_608557356_ELcD2pwQO9pduTRL30umabzgJoQn5fnd.jpg",
    profession: "Software Developer",
  });
  const [shows, setShows] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  // Start the timer on component mount
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Toggle show state
  const toggleShow = () => setShows(!shows);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Profile</h1>
        <button
          onClick={toggleShow}
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
        >
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div className="mt-6 text-center">
            <img
              src={person.imgSrc}
              alt={person.fullName}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold">{person.fullName}</h2>
            <p className="text-gray-600 mt-2">{person.bio}</p>
            <p className="text-gray-500 mt-2">Profession: {person.profession}</p>
          </div>
        )}

        <div className="mt-6 text-center text-gray-700">
          <p>Time since component mounted: {timeElapsed} seconds</p>
        </div>
      </div>
    </div>
  );
}
