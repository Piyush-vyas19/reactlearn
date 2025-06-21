// components/ProfileCard.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Card(props) {
console.log(props.userdetails.linkedin)
  return (

    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10 border border-gray-200">
      <div className="flex flex-col items-center text-center">
        <img
          className="w-24 h-24 rounded-full shadow-md"
          src="https://via.placeholder.com/150"
          alt="Your Profile"
        />
        <h2 className="mt-4 text-xl font-semibold text-gray-800">{props.name}</h2>
        <p className="text-sm text-gray-500 mt-1">CSE Student | Web Developer | Tech Enthusiast</p>
        <p className="mt-3 text-gray-600 text-sm">
          Passionate about solving real-world problems using tech. Skilled in React, MERN stack, and building scalable projects.
        </p>
        <div className="flex gap-4 mt-4 text-gray-600">
          <a href={props.userdetails.linkedin} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-black" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-blue-600" />
          </a>
          <a href="mailto:youremail@example.com">
            <FaEnvelope className="text-xl hover:text-red-500" />
          </a>
          
        </div>
      </div>
    </div>
  );
}
