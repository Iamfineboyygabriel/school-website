import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StudentSideBar from "../../../dashboard/layout/studentlayout/StudentSideBar";
import ReactLoading from "react-loading";

const Video = () => {
  const { classGrade, term, subject, topic } = useParams();
  const [videoUrl, setVideoUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Call API to fetch video content for the selected topic
    // Replace 'fetchVideoContent' with actual API call
    const fetchVideoContent = async () => {
      try {
        // Simulating API call with timeout
        setTimeout(() => {
          // Replace 'videoUrlFromApi' with actual video URL from API response
          const videoUrlFromApi = "https://example.com/video.mp4";
          setVideoUrl(videoUrlFromApi);
          setIsLoading(false);
        }, 2000); // Simulating 2 seconds delay
      } catch (error) {
        console.error("Error fetching video content:", error);
        setIsLoading(false);
      }
    };

    fetchVideoContent();
  }, [classGrade, term, subject, topic]);

  return (
    <StudentSideBar>
      {isLoading ? (
        <div style={{ textAlign: "center" }}>
          <ReactLoading type="spin" color="#064e3b" />
          <p>Loading video...</p>
        </div>
      ) : (
        <div>
          {videoUrl ? (
            <video controls>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <p>Video not found for the selected topic.</p>
          )}
        </div>
      )}
    </StudentSideBar>
  );
};

export default Video;
