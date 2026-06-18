import Image from 'next/image';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Fade from 'react-reveal/Fade';
import expBlue from '../../assets/svg/experience/expBlue.svg';
import expGreen from '../../assets/svg/experience/expGreen.svg';
import expOrange from '../../assets/svg/experience/expOrange.svg';
import expPink from '../../assets/svg/experience/expPink.svg';
import expPurple from '../../assets/svg/experience/expPurple.svg';
import expYellow from '../../assets/svg/experience/expYellow.svg';
import { ThemeContext } from '../../contexts/theme-context';
import styles from '../../styles/experience.module.css';

const experienceBadgeMap = {
    1: expBlue,
    2: expPurple,
    3: expYellow,
    4: expPink,
    5: expOrange,
};


function ExperienceCard({ id, company, jobtitle, startYear, endYear, link }) {

    const { theme } = useContext(ThemeContext);
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const badgeIcon = experienceBadgeMap[id] || expGreen;

    useEffect(() => {
        const node = cardRef.current;

        if (!node) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.35 }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);



    return (
        <Fade bottom>
            <div
                ref={cardRef}
                key={id}
                className={`${styles.experienceCard} ${isVisible ? styles.experienceCardVisible : ''}`}
                style={{ backgroundColor: theme.quaternary }}
            >
                <div className={styles.timelineDot} style={{ backgroundColor: theme.primary }} aria-hidden="true" />
                <div className={styles.expcardImg}>
                    <Image src={badgeIcon} alt="" />
                </div>
                <div className={styles.experienceDetails}>
                    <h6 style={{ color: theme.primary }}>{startYear}-{endYear}</h6>
                    <h4 style={{ color: theme.tertiary }}>{jobtitle}</h4>
                    {link ? (
                        <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: theme.tertiary, textDecoration: 'none' }}>
                            <h5 style={{ color: theme.tertiary, cursor: 'pointer', textDecoration: 'underline' }}>{company}</h5>
                        </a>
                    ) : (
                        <h5 style={{ color: theme.tertiary }}>{company}</h5>
                    )}
                </div>
            </div>
        </Fade>
    )
}

export default ExperienceCard
