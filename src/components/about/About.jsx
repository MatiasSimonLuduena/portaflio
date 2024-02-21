import './about.css';

const skillsFront = [
  { name: 'ReactJS', image: 'svg/react.svg' },
  { name: 'SASS', image: 'svg/sass.svg' },
  { name: 'Redux', image: 'svg/redux.svg' },
];

const skillsBack = [
  { name: 'NodeJS', image: 'svg/nodejs.svg' },
  { name: 'MongoDB', image: 'svg/mongodb.svg' },
  { name: 'Firebase', image: 'svg/firebase.svg' },
];

const skillsLangs = [
  { name: 'Javascript', image: 'svg/javascript.svg' },
  { name: 'HTML', image: 'svg/html.svg' },
  { name: 'CSS', image: 'svg/css.svg' },
  { name: 'Git', image: 'svg/git.svg' },
];

const About = () => {
  return (
    <div className="about">
      <h3>About me and my jobs</h3>
      <div className='about-container'>
        <div className="about-me">
          <span>About me</span>
          <p>
            I started programming 3 years ago learning on my own and doing
            personal projects. I took several online courses and developed several
            web applications using the technologies learned. It took me more than
            a year to feel ready to start developing my first project, which was a
            real failure. It was a web application so that neighborhood businesses
            could sell drinks online and send them to the customer&apos;s home.
            <br />
            <br />
            By doing one project after another, failure after failure, now I can
            proudly say that I am able to develop successfully, and I demonstrate
            it to you in the &apos;projects&apos; section and in my GitHub
            repository, any web project that is proposed to me, both projects
            simple as well as the most complex.
            <br />
            <br />I can develop both landing pages and web applications, as you
            can see in the projects section. I work both on the frontend side
            using ReactJS and on the Backend side using NodeJS and MongoDB for the
            database.
          </p>
        </div>
        <div className="about-skills">
          <span>My skills</span>
          <div className="list-skills">
            <h6>Languages</h6>
            {skillsLangs.map((item, i) => (
              <img key={i} alt={item.name} src={item.image} />
            ))}
            <h6>Frontend</h6>
            {skillsFront.map((item, i) => (
              <img key={i} alt={item.name} src={item.image} />
            ))}
            <h6>Backend</h6>
            {skillsBack.map((item, i) => (
              <img key={i} alt={item.name} src={item.image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
