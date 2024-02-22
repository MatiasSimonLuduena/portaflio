import './home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-top">
        <h1>Matias Simon Ludueña</h1>
        <div className="home-top_line"></div>
        <span>Full stack MERN developer.</span>
      </div>
      <div className="home-main">
        <p>
          My name is Matias Ludueña, I&apos;m a full stack developer. I master
          both the frontend and the backend using the MERN (MongoDB, ExpressJS,
          ReactJS and NodeJS) technologies. I was born in Argentina, I am
          currently 22 years old and I have been making web applications since I
          was 19 years.
          <br />
          <br />
          I have developed many types of websites from landing pages to web platforms and I know how to correctly handle various types of development technologies from Redux on the frontend to JsonWebTokens on the backend.
        </p>
      </div>
    </div>
  );
};

export default Home;
