import { Container } from '@material-ui/core';
import React, { useContext, useEffect, useRef, useState } from 'react';
import experience from '../../assets/lottie/development.json';
import { ThemeContext } from '../../contexts/theme-context';
import { experienceData } from '../../data/experience-data';
import styles from '../../styles/experience.module.css';
import AnimationLottie from '../animation';
import ExperienceCard from './experience-card';

function Experience() {

    const { theme } = useContext(ThemeContext);
    const sectionRef = useRef(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const section = sectionRef.current;

            if (!section) {
                return;
            }

            const rect = section.getBoundingClientRect();
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            const total = rect.height - viewportHeight * 0.25;
            const current = Math.min(Math.max(viewportHeight * 0.25 - rect.top, 0), total > 0 ? total : 1);
            const nextProgress = Math.min(Math.max((current / (total > 0 ? total : 1)) * 100, 0), 100);
            setProgress(nextProgress);
        };

        updateProgress();
        window.addEventListener('scroll', updateProgress, { passive: true });
        window.addEventListener('resize', updateProgress);

        return () => {
            window.removeEventListener('scroll', updateProgress);
            window.removeEventListener('resize', updateProgress);
        };
    }, []);

    return (
        <div style={{ backgroundColor: theme.secondary }}>
            <Container className={styles.experience} id="experience" ref={sectionRef}>
                <div
                    className={styles.experienceHeader}
                    style={{ color: theme.primary }}
                >
                    <p style={{ color: theme.tertiary }}>Journey timeline</p>
                    <h1>Experience</h1>
                </div>
                <div className={styles.experienceBody}>
                    <div className={styles.experienceImage}>
                        <AnimationLottie animationPath={experience} />
                    </div>
                    <div
                        className={styles.experienceTimeline}
                        style={{ '--timeline-progress': `${progress}%` }}
                    >
                        <div className={styles.timelineRail} aria-hidden="true">
                            <span
                                className={styles.timelineProgress}
                                style={{ height: `${progress}%` }}
                            />
                        </div>
                        {experienceData.map(exp => (
                            <ExperienceCard
                                key={exp.id}
                                id={exp.id}
                                jobtitle={exp.jobtitle}
                                company={exp.company}
                                startYear={exp.startYear}
                                endYear={exp.endYear}
                                link={exp.link}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Experience
