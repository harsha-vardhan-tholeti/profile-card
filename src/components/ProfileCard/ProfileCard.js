import React from "react";
import profileImage from "../../images/profile-img.jpeg";

const skills = [
  { name: "HTML", color: "#DD4B25" },
  { name: "CSS", color: "#2862E9" },
  { name: "JavaScript", color: "#EFD81D" },
  { name: "SASS", color: "#C76494" },
  { name: "React", color: "#5ED3F3" },
  { name: "Redux", color: "#7248B6" },
  { name: "Tailwind CSS", color: "#36B7F0" },
  { name: "Node JS", color: "#629957" },
  { name: "Express JS", color: "#191A1B" },
  { name: "MongoDB", color: "#4CAB3D" },
];

function ProfileCard() {
  return (
    <>
      <div className="font-mono flex justify-center items-center h-screen">
        <div className="border-4 border-black w-1/3">
          <img className="h-[410px] w-[632px]" src={profileImage} alt="" />
          <div className="p-6 ">
            <h1 className="text-5xl font-bold mb-4">Harsha Vardhan</h1>
            <p>
              I'm a Full-stack web developer passionate about creating seamless
              and innovative web applications. Proficient in both front-end and
              back-end technologies, I focus on delivering user-friendly
              experiences.
            </p>
          </div>
          <div className="mb-4">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                style={{ background: `${skill.color}` }}
                className={"mr-4  rounded inline-block p-1 m-1 text-white"}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
