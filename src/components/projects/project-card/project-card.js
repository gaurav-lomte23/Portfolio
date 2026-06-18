import Image from 'next/image';
import React, { useState } from 'react';
import { FaExternalLinkAlt, FaInfoCircle, FaPlay, FaTimes } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import placeholder from '../../../assets/png/placeholder.png';
import styles from '../../../styles/singleProject.module.css';

function SingleProject({ id, name, desc, demo, image, theme }) {
    const [showContactPopup, setShowContactPopup] = useState(false);

    const openDemo = () => {
        if (demo) {
            window.open(demo, '_blank', 'noopener,noreferrer');
        }
    };

    const handleKeyDown = (event) => {
        if (demo && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault();
            openDemo();
        }
    };

    const toggleContactPopup = (event) => {
        event.stopPropagation();
        setShowContactPopup((current) => !current);
    };

    return (
        <Fade bottom>
            <div
                key={id}
                className={styles.singleProject}
                style={{
                    backgroundColor: theme.quaternary,
                    '--project-text': theme.tertiary,
                }}
                role={demo ? 'link' : undefined}
                tabIndex={demo ? 0 : undefined}
                onClick={openDemo}
                onKeyDown={handleKeyDown}
            >
                <div className={styles.projectContent}>
                    <div className={styles.projectHeading}>
                        <h2
                            id={name.replace(' ', '-').toLowerCase()}
                            style={{ color: theme.tertiary }}
                        >
                            {name}
                        </h2>
                    </div>

                    <div className={styles.projectArtwork}>
                        <div className={styles.projectArtworkRing} />
                        <div className={styles.projectArtworkGlow} />
                        <Image
                            src={image ? image : placeholder}
                            alt={name}
                            className={styles.projectImage}
                            sizes="(max-width: 600px) 100vw, (max-width: 992px) 50vw, 33vw"
                            quality={65}
                        />
                        <div className={styles.projectHoverOverlay} aria-hidden="true">
                            <div
                                className={styles.projectHoverCard}
                                style={{
                                    color: theme.tertiary,
                                }}
                            >
                                <span className={styles.projectHoverLabel}>Project story</span>
                                <p className={styles.projectDesc}>{desc}</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.projectShowcaseBtn}>
                        {demo && (
                            <a
                                href={demo}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(event) => event.stopPropagation()}
                                className="flex items-center justify-center gap-2 min-w-[108px] h-[40px] px-4 rounded-[999px] border-2 border-[#EFF3F4] hover:border-[#15202B] text-[#EFF3F4] hover:text-[#C8922E] transition hover:scale-[1.04]"
                                aria-label={`Open demo for ${name}`}
                            >
                                <FaPlay className="text-[1rem] transition" aria-hidden="true" />
                                <span className={styles.buttonLabel}>Demo</span>
                            </a>
                        )}
                        <button
                            type="button"
                            onClick={toggleContactPopup}
                            className="flex items-center justify-center gap-2 min-w-[118px] h-[40px] px-4 rounded-[999px] border-2 border-[#EFF3F4] hover:border-[#15202B] text-[#EFF3F4] hover:text-[#C8922E] transition hover:scale-[1.04]"
                            aria-label={`Open contact popup for ${name}`}
                        >
                            <FaInfoCircle
                                className="text-[1rem] transition"
                                aria-label="Details"
                            />
                            <span className={styles.buttonLabel}>Details</span>
                        </button>
                    </div>
                </div>

                {showContactPopup && (
                    <div
                        className={styles.contactOverlay}
                        onClick={() => setShowContactPopup(false)}
                        role="presentation"
                    >
                        <div
                            className={styles.contactModal}
                            onClick={(event) => event.stopPropagation()}
                            role="dialog"
                            aria-modal="true"
                            aria-label="Contact me popup"
                        >
                            <button
                                type="button"
                                className={styles.contactClose}
                                onClick={() => setShowContactPopup(false)}
                                aria-label="Close contact popup"
                            >
                                <FaTimes />
                            </button>
                            <p className={styles.contactTitle}>Want details of this project?</p>
                            <a href="/#contacts" onClick={() => setShowContactPopup(false)}>
                                <FaExternalLinkAlt />
                                Go to Contacts
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </Fade>
    );
}

export default SingleProject;
