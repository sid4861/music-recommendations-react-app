import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const pop = [
    {
      Levitating:
        "[https://open.spotify.com/track/463CkQjx2Zk1yXoBuierM9?si=fl1XJLCCT5eRMu7xu1vy1Q&context=spotify%3Auser%3Aspotify%3Aplaylist%3A37i9dQZF1DXcBWIGoYBM5M](https://open.spotify.com/track/463CkQjx2Zk1yXoBuierM9?si=fl1XJLCCT5eRMu7xu1vy1Q&context=spotify%3Auser%3Aspotify%3Aplaylist%3A37i9dQZF1DXcBWIGoYBM5M)"
    },
    {
      positions:
        "https://open.spotify.com/track/7igeByaBM0MgGsgXtNxDJ7?si=ZIWgYn8MRzOSEMTf-61YeA&context=spotify%3Auser%3Aspotify%3Aplaylist%3A37i9dQZF1DXcBWIGoYBM5M"
    },
    {
      willow:
        "https://open.spotify.com/track/0lx2cLdOt3piJbcaXIV74f?si=msY6J8HSRBOKmih9OfFQeQ&context=spotify%3Auser%3Aspotify%3Aplaylist%3A37i9dQZF1DXcBWIGoYBM5M"
    }
  ];

  const hiphop = [
    {
      "Face of my city":
        "https://open.spotify.com/track/6MDdceLYec4AxohmorE4vH?si=YUcUWNIESZuA7j581P-0tw&context=spotify%3Auser%3Aspotify%3Aplaylist%3A37i9dQZF1DWY4xHQp97fN6"
    },
    {
      Whoopty:
        "[https://open.spotify.com/track/1RSzyxqtIO4yX3EyiV4zT5?si=9AUDX36BQESohvgo7H-YXw&context=spotify%3Auser%3Aspotify%3Aplaylist%3A37i9dQZF1DWY4xHQp97fN6](https://open.spotify.com/track/1RSzyxqtIO4yX3EyiV4zT5?si=9AUDX36BQESohvgo7H-YXw&context=spotify%3Auser%3Aspotify%3Aplaylist%3A37i9dQZF1DWY4xHQp97fN6)"
    },
    {
      Runnin:
        "[https://open.spotify.com/track/1RSzyxqtIO4yX3EyiV4zT5?si=9AUDX36BQESohvgo7H-YXw&context=spotify%3Auser%3Aspotify%3Aplaylist%3A37i9dQZF1DWY4xHQp97fN6](https://open.spotify.com/track/1RSzyxqtIO4yX3EyiV4zT5?si=9AUDX36BQESohvgo7H-YXw&context=spotify%3Auser%3Aspotify%3Aplaylist%3A37i9dQZF1DWY4xHQp97fN6)"
    }
  ];

  const rock = [
    {
      "Back in black":
        "https://open.spotify.com/track/08mG3Y1vljYA6bvDt4Wqkj?si=ZZsEqeuhSDi0XyLRIkilYQ"
    },
    {
      "Come Together":
        "https://open.spotify.com/track/2EqlS6tkEnglzr7tkKAAYD?si=xKpRwWwcTSSIJ8b1IRykpA"
    },
    {
      "Sweet Emotion":
        "https://open.spotify.com/track/24NwBd5vZ2CK8VOQVnqdxr?si=tSPGefKESL2FqbGWfFj5aQ"
    }
  ];

  const [listToDisplay, setListToDisplay] = useState([]);

  function popClickHandler() {
    setListToDisplay([...pop]);
  }

  function hiphopClickHandler() {
    setListToDisplay([...hiphop]);
  }

  function rockClickHandler() {
    setListToDisplay([...rock]);
  }

  return (
    <div className="App">
      <h1> 🎧 My music recommendations</h1>
      <p style={{ color: "#1dd05d" }}>Select genres below to view songs</p>
      <hr />
      <ul>
        <li onClick={popClickHandler} style={{ cursor: "pointer" }}>
          Pop
        </li>
        <li onClick={rockClickHandler} style={{ cursor: "pointer" }}>
          Rock
        </li>
        <li onClick={hiphopClickHandler} style={{ cursor: "pointer" }}>
          Hip Hop
        </li>
      </ul>
      <ul className="songList">
        {listToDisplay.map((song) => (
          <li className="song" key={Object.keys(song)[0]}>
            {Object.keys(song)[0]}
            <a
              href={song[Object.keys(song)[0]]}
              style={{
                display: "block",
                textDecoration: "none",
                marginTop: "0.5rem"
              }}
            >
              Listen on Spotify
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
