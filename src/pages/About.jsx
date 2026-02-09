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

    <h2>About time....</h2>
    <p>
      Ok, so in the original UFO a lot of things were supposed to be around in
      the 1980s but never happened. We never started driving on the right side
      of the road. And things happened in real life that UFO couldn't forsee,
      like the space shuttle.
    </p>
    <p>
      What I have done is 'retrofitted the past' into UFO. It's never going to
      be perfect but I do it only to serve the story. As Michael York said in
      "The Spy Who Shagged Me": I wouldn't pay too much attention to that, just
      enjoy the ride.
    </p>

    <h2>Copyrights</h2>
    <p>
      All characters, concepts, settings, and other copyrighted material
      originating from the television series UFO remain the property of their
      respective rights holders.
    </p>

    <p>
      This creative work along with all my original characters, stories, concepts, and
      other original material presented on this site are my original works and
      are the intellectual property of the Paul Loveridge
    </p>

    <p>
      This is an unofficial, non-commercial fan work. No affiliation with or
      endorsement by the original rights holders is claimed or implied.
    </p>
  </>
);

export default About;
