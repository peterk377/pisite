//Player
"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function Page(props) {
  const [isClient, setIsClient] = useState(false);
  const video = "srcapp\videoContain\newVideo.mp4"; // Corrected video path

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <body>
      <div>
        <h1>Player</h1>
        <h1>Test Playing the video</h1>
        <h2>AlertID:</h2>
        {isClient && (
          <ReactPlayer url={video} width={750} height={500} controls={true} />
        )}
      </div>
      <div>
        <h3>Details:</h3>
        <h4>Date:</h4>
        <h4>size:</h4>
      </div>
      <div>
        {/* When click download a file */}
        <button>Download</button>

        {/* When delete it will pop pu deleted and refersh to main alerts */}
        <button>Delete</button>
      </div>
    </body>
  );
}
