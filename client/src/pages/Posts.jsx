import React, { useState } from "react";
import developerImage from "../assets/img/developerImage1.png";

const Posts = () => {
  const [data, setData] = useState([
    {
      title: "CollabHub",
      contributors: "2",
      startDate: "01330320",
      endDate: "23432354",
      techStakes: "Mern Stack",
    },
    {
      title: "CollabHub",
      contributors: "2",
      startDate: "01330320",
      endDate: "23432354",
      techStakes: "Mern Stack",
    },
    {
      title: "CollabHub",
      contributors: "2",
      startDate: "01330320",
      endDate: "23432354",
      techStacks: "Mern Stack",
    },
    {
      title: "CollabHub",
      contributors: "2",
      startDate: "01330320",
      endDate: "23432354",
      techStacks: "Mern Stack",
    },
    {
      title: "CollabHub",
      contributors: "2",
      startDate: "01330320",
      endDate: "23432354",
      techStacks: "Mern Stack",
    },
    {
      title: "CollabHub",
      contributors: "2",
      startDate: "01330320",
      endDate: "23432354",
      techStacks: "Mern Stack",
    },
    {
      title: "CollabHub",
      contributors: "2",
      startDate: "01330320",
      endDate: "23432354",
      techStacks: "Mern Stack",
    },
    {
      title: "CollabHub",
      contributors: "2",
      startDate: "01330320",
      endDate: "23432354",
      techStacks: "Mern Stack",
    },
  ]);

  //   useEffect(() => {
  //     const token = localStorage.getItem("jwt");
  //     if (!token) {
  //       navigate("./signup");
  //     }

  //     // Fetching all posts
  //     fetch("http://localhost:5000/allposts", {
  //       headers: {
  //         Authorization: "Bearer " + localStorage.getItem("jwt"),
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((result) => {
  //         console.log(result);
  //         setData(result);
  //       })
  //       .catch((err) => console.log(err));
  //   }, []);

  return (
    <div className="w-full flex flex-row flex-wrap p-0 mx-0 justify-center items-center mt-[60px]">
      {data.map((posts) => {
        console.log(posts.body);
        return (
          <div className="flex flex-col items-center justify-center border-neutral-950 border-2 my-3 mx-3">
            <img
              src={developerImage}
              alt=""
              srcset=""
              width={250}
              height={250}
            />

            <div className="w-[25vw] flex flex-col justify-center m-5">
              
              {/* card content */}
              <div className="m-1 text-3xl justify-center text-center">
                <p>{posts.title}</p>
              </div>

              {/* add Comment */}
                <div className="m-1 flex flex-wrap font-semibold cursor-pointer">
                  {/* <p>TechStack</p> */}
                  <p >
                    TechStack  : {posts.techStacks}
                  </p>
                </div>

                <div className="m-1 flex font-semibold cursor-pointer">
                  <p>Collabrators  :</p>
                  {/* <p style={{ fontWeight: "bold", cursor: "pointer" }}>
                    Collaborators: {posts.collaborators}
                  </p> */}
              </div>
              <div className="m-1 flex flex-row cursor-pointer font-semibold justify-between px-0">
                <p>
                  Start  : {posts.startDate.slice(0, 10)}
                </p>
                <p>
                  End  : {posts.endDate.slice(0, 10)}
                </p>
              </div>
              <div className="m-1 w-full flex flex-row justify-between px-3">
                <p>Likes</p>
                {/* <p>{posts.likes.length} Likes</p> */}
                

                <div className="w-[50%] flex-row-reverse items-center">
                  <p>Like *</p>
                  {/* {posts.likes.includes(
                    JSON.parse(localStorage.getItem("user"))._id
                  ) ? (
                    <span
                      className="material-symbols-outlined material-symbols-outlined-red"
                      onClick={() => {
                        unlikePost(posts._id);
                      }}
                    >
                      favorite
                    </span>
                  ) : (
                    <span
                      className="material-symbols-outlined"
                      onClick={() => {
                        likePost(posts._id);
                      }}
                    >
                      favorite
                    </span>
                  )} */}
                </div>

                <div className="flex flex-row">
                  {/* <img
                    src={posts.postedBy.Photo ? posts.postedBy.Photo : picLink}
                    alt=""
                  /> */}
                  <h5>
                    Name
                    {/* <Link
                      className="idname"
                    //   to={`/profile/${posts.postedBy._id}`}
                    >
                      {posts.postedBy.name}
                    </Link> */}
                  </h5>
                </div>
                
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
