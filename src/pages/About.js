import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/initial.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import CV from '../assets/images/Rachit Yadav.pdf';
const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Rachit Yadav</span>
              </p>
              <h2 className="about__heading"> Full stack developer</h2>
              <div className="about__info">
                <PText>
                Experienced full-stack developer with a strong background in fintech software, specializing in React and Ruby on Rails. Proficient in Git for version control and adept at deploying scalable systems with optimized code on AWS. Demonstrated success in contributing to the growth of a startup through technical expertise and commitment to building efficient solutions.
                </PText>
              </div>
              <a href= {CV} download="Rachit_Yadav_CV.pdf">
              <Button btnText="Download CV" />
              </a>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['Gaurav Memorial International school, Kanpur']}
              />
              <AboutInfoItem 
                title="Collage"
                items={['Galgoatia collage of enginnering and technology, Noida']}
              />
             
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'React JS', 'Redux' ]}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Ruby']}
              />
              <AboutInfoItem
                title="Framework"
                items={['Ruby on Rails']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2022-2024"
                items={['Software Engineer at Setlmint']}
              />
 
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
