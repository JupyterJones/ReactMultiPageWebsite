import React from "react";
import "./video.css";
import YoutubeEmbed from "./YoutubeEmbed";

export default function App() {
  return (
    <div className="App">
      <h1>Youtube Embed</h1>
      <YoutubeEmbed embedId="9sALnwlha1Q" />
    </div>
  );
}