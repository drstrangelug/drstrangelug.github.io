import { Link } from "react-router-dom";

const About = () => (
  <>
    <h2>About</h2>
    <p>
      Welcome to my UFO 1999 website. This is a novelisation of a series that
      was never made - series two of{" "}
      <a
        href="https://en.wikipedia.org/wiki/UFO_(British_TV_series)"
        target="_blank"
        rel="noreferrer"
      >
        UFO by Gerry Anderson
      </a>
      .
    </p>

    <h2>Where to start</h2>
    <p>
      Right now if you just want to read then go to{" "}
      <Link to="/chapters">chapters</Link>. Geeks is the best one to start with,
      it's my best so far.
    </p>

    <h2>Why?</h2>
    <p>
      I first watched both UFO and Space: 1999 in the 1970s as a child. In the
      1980s and 1990s it was shown on various other channels and I discovered it
      again.
    </p>
  </>
);

export default About;
