import { Link } from "react-router-dom";

const ChapterSection = ({
  title,
  children,
  prev,
  next,
  back = "/chapters",
}) => (
  <>
    <div className="chapter-nav">
      {prev && <Link to={prev}>Previous</Link>}
      {next && <Link to={next}>Next</Link>}
      {back && <Link to={back}>Back to Chapters</Link>}
    </div>

    <h2>{title}</h2>
    {children}

    <div className="chapter-nav">
      {prev && <Link to={prev}>Previous</Link>}
      {next && <Link to={next}>Next</Link>}
      {back && <Link to={back}>Back to Chapters</Link>}
    </div>
  </>
);

export default ChapterSection;
