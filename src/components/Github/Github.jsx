import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/sachin-bi")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

const data = useLoaderData();

  return (
    <div className="bg-gray-600 p-4 text-white font-mono text-3xl">
      Github followers: {data.followers}
      <img
        className="text-center"
        src={data.avatar_url}
        alt="Git Pic"
        width={300}
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/sachin-bi");
  return res.json();
};
