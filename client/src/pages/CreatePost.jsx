import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import newPost from "../assets/img/new post.png";

const CreatePost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [contributors, setContributors] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [techStacks, setTechStacks] = useState("");
  const [file, setFile] = useState(null);

  const headings = [
    {
      id: "title",
      type: "text",
      value: `${title}`,
      name: "Title",
      htmlFor: "title",
      onChange: (e) => {
        setTitle(e.target.value);
        console.log("title changed", e.target.value);
      },
    },
    {
      id: "contributors",
      type: "number",
      value: `${contributors}`,
      name: "Contributors",
      htmlFor: "contributors",
      onChange: (e) => {
        setContributors(e.target.value);
        console.log("title changed", e.target.value);
      },
    },
    {
      id: "startDate",
      type: "date",
      value: `${startDate}`,
      name: "Start Date",
      htmlFor: "start date",
      onChange: (e) => {
        setStartDate(e.target.value);
        console.log("title changed", e.target.value);
      },
    },
    {
      id: "endDate",
      type: "date",
      value: `${endDate}`,
      name: "End Date",
      htmlFor: "end date",
      onChange: (e) => {
        setEndDate(e.target.value);
        console.log("title changed", e.target.value);
      },
    },
  ];

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    // formData.append("categories", categories);
    formData.append("contributors", contributors);
    formData.append("startDate", startDate);
    formData.append("endDate", endDate);
    formData.append("techStacks", techStacks);
    formData.append("body", description);
    console.log(formData); // Do something with the new post data, e.g. send it to a server

    fetch("http://localhost:5000/createPost", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate("/post");
        // Do something with the response data
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // setTitle("");
    setTitle("");
    setTechStacks([]);
    setContributors("");
    setStartDate("");
    setEndDate("");
    setDescription("");
    // setTechStacks("");
  };
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  const handleNewSkillChange = (e) => {
    setNewSkill(e.target.value);
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills((prevSkills) => [...prevSkills, newSkill]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skill) => {
    setSkills((prevSkills) => prevSkills.filter((s) => s !== skill));
  };
  return (
    <div className="flex flex-col w-[100vw] items-center h-full z-10 justify-center pt-15 ">
      <img src={newPost} alt="New Post" srcset="" width={125} height={125} />
      <form className="flex flex-row items-center" onSubmit={handleSubmit}>
        <div className="flex flex-col pr-5">
          {headings.map(({ id, type, value, name, htmlFor, onChange }) => (
            <div key={id} className="mb-4">
              <label
                className="text-gray-600 font-semibold mb-1 mr-4"
                htmlFor={htmlFor}
              >
                {name}
              </label>
              <input
                type={type}
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                className="border rounded-md p-2"
                required
              />
            </div>
          ))}
          <div>
            <label className="text-gray-600 font-semibold mb-1 mr-4" htmlFor="techStack">Tech Stack</label>
            <div className="flex flex-col">
              <div className="w-[350px] max-w-[450] flex flex-row flex-wrap">
              {skills.map((skill) => (
                <div className="border-2 rounded border-stone-400" key={skill}>
                  {skill}
                  <button
                    className="p-1 mx-2"
                    type="button"
                    onClick={() => handleRemoveSkill(skill)}
                  >
                    X
                  </button>
                </div>
              ))}
              </div>
              <div>
                <input
                  className="border rounded-md p-2"
                  type="text"
                  id="newSkill"
                  name="newSkill"
                  value={newSkill}
                  onChange={handleNewSkillChange}
                />
                <button className="text-gray-600 font-semibold mb-1 mr-4" type="button" onClick={handleAddSkill}>
                  Add Skill
                </button>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="text-gray-600 font-semibold mb-1" htmlFor="file">
              File
            </label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileChange}
              className="border rounded-md p-2"
              required
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
        <div className="flex flex-col mb-4">
          <label
            className="text-gray-600 font-semibold mb-1"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            rows="12"
            cols="75"
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded-md p-2"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
        >
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
