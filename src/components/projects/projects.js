import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import { projectsData } from '../../data/projects-data';
import styles from '../../styles/projects.module.css';
import SingleProject from './project-card/project-card';

function Projects() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            {projectsData.length > 0 && (
                <div className={styles.projects} id="projects" style={{ backgroundColor: theme.secondary }}>
                    <div className={styles.projectsHeader}>
                        <p className={styles.projectsEyebrow} style={{ color: theme.tertiary }}>
                            Portfolio showcase
                        </p>
                        <h1 style={{ color: theme.primary }}>Client Projects</h1>
                        <p className={styles.projectsSubtext} style={{ color: theme.tertiary }}>
                            Major client builds, product launches, and polished digital experiences.
                        </p>
                    </div>
                    <div className={styles.projectsBody}>
                        <div className={styles.projectsBodyContainer}>
                            {projectsData.map(project => (
                                <SingleProject
                                    theme={theme}
                                key={project.id}
                                id={project.id}
                                name={project.projectName}
                                desc={project.projectDesc}
                                demo={project.demo}
                                image={project.image}
                            />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Projects;
