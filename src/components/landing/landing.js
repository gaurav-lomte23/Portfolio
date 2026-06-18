import Image from 'next/image';
import React, { useContext } from 'react';
import {
    FaFacebook,
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
    FaGlobe
} from 'react-icons/fa';
import Typed from 'react-typed';
import { ThemeContext } from '../../contexts/theme-context';
import { headerData } from '../../data/header-data';
import { socialsData } from '../../data/socials-data';
import styles from '../../styles/landing.module.css';
import Link from '../link';

function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);
    const isLight = theme.type === 'light';

    const landingStyle = isLight ? {
        background: 'radial-gradient(circle at top, rgba(200, 146, 46, 0.14) 0%, transparent 35%), linear-gradient(135deg, #f9f4ea 0%, #ece4d5 48%, #d9cab0 100%)',
    } : {
        background: 'radial-gradient(circle at top, rgba(224, 177, 90, 0.16) 0%, transparent 35%), linear-gradient(135deg, #08071c 0%, #11113a 38%, #2a204d 68%, #0c0b26 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 15s ease infinite',
    };

    const containerLeftStyle = isLight ? {
        background: 'linear-gradient(135deg, rgba(255,255,255,0.88) 0%, rgba(248,240,224,0.92) 100%)',
    } : { 
        background: 'linear-gradient(135deg, rgba(17, 16, 45, 0.74) 0%, rgba(33, 29, 71, 0.74) 32%, rgba(72, 52, 104, 0.7) 64%, rgba(24, 21, 58, 0.78) 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 15s ease infinite',
    };

    const containerRightStyle = isLight ? {
        background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(247,239,224,0.95) 100%)',
    } : {
        background: 'linear-gradient(135deg, rgba(18, 17, 49, 0.72) 0%, rgba(33, 29, 71, 0.72) 28%, rgba(100, 73, 132, 0.66) 56%, rgba(20, 18, 56, 0.78) 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 15s ease infinite',
    };

    const textColor = isLight ? '#1D2430' : '#F4EFE6';
    const descriptionOpacity = isLight ? 0.85 : 0.95;

    return (
        <div className={styles.landing} style={landingStyle}>
            <div className={styles.landingContainer}>
                <div
                    className={styles.landingContainerLeft}
                    style={containerLeftStyle}
                >
                    <div className={styles.lclContent}>
                        {socialsData.linkedIn && (
                            <a
                                href={socialsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className={styles.landingSocial}
                                    style={{ color: theme.primary }}
                                    aria-label='LinkedIn'
                                />
                            </a>
                        )}
                        {socialsData.github && (
                            <a
                                href={socialsData.github}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className={styles.landingSocial}
                                    style={{ color: theme.primary }}
                                    aria-label='GitHub'
                                />
                            </a>
                        )}
                        {socialsData.github2 && (
                            <a
                                href={socialsData.github2}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className={styles.landingSocial}
                                    style={{ color: theme.primary }}
                                    aria-label='GitHub 2'
                                />
                            </a>
                        )}
                        {socialsData.twitter && (
                            <a
                                href={socialsData.twitter}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaTwitter
                                    className={styles.landingSocial}
                                    style={{ color: theme.primary }}
                                    aria-label='Twitter'
                                />
                            </a>
                        )}
                        {socialsData.youtube && (
                            <a
                                href={socialsData.youtube}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaYoutube
                                    className={styles.landingSocial}
                                    style={{ color: theme.primary }}
                                    aria-label='YouTube'
                                />
                            </a>
                        )}
                        {socialsData.website && (
                            <a
                                href={socialsData.website}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGlobe
                                    className={styles.landingSocial}
                                    style={{ color: theme.primary }}
                                    aria-label='Website'
                                />
                            </a>
                        )}
                        {socialsData.facebook && (
                            <a
                                href={socialsData.facebook}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaFacebook
                                    className={styles.landingSocial}
                                    style={{ color: theme.primary }}
                                    aria-label='facebook'
                                />
                            </a>
                        )}
                    </div>
                </div>
                <Image
                    src={headerData.image}
                    alt=''
                    width={350}
                    height={350}
                    className={styles.landingImg}
                    priority
                    style={{
                        opacity: `${drawerOpen ? '0' : '1'}`,
                        borderColor: theme.primary,
                    }}
                />
                <div
                    className={styles.landingContainerRight}
                    style={containerRightStyle}
                >
                    <div
                        className={styles.lcrContent}
                        style={{ color: textColor }}
                    >
                        {/* <h6 style={{ color: theme.primary }}>{headerData.title}</h6> */}
                        <h1 style={{ color: textColor, fontWeight: '700' }}>{headerData.name}</h1>
                        <Typed
                            strings={[
                                'Backend Developer',
                                'Frontend Developer',
                                'Fullstack Developer']}
                            typeSpeed={40}
                            backSpeed={50}
                            className={styles.typedHeader}
                            style={{ color: theme.primary, fontSize: '20px', fontWeight: '600' }}
                            loop
                        />
                        <p style={{ color: textColor, opacity: descriptionOpacity, fontWeight: '500' }}>{headerData.desciption}</p>

                        <div className={styles.lcrButtonContainer}>
                            {headerData.resumePdf && (
                                <a
                                    href={headerData.resumePdf}
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <button
                                        style={{
                                            color: theme.primary,
                                            borderColor: theme.primary,
                                            backgroundColor: 'transparent',
                                        }}
                                        className="sm:w-[180px] 
                                        rounded-[30px] no-underline w-36 text-base 
                                        font-medium h-12 border-[3px]
                                        transition duration-100 ease-out 
                                        hover:bg-[#a87419] hover:text-white
                                         hover:border-[#a87419] "
                                    >
                                        Download CV
                                    </button>
                                </a>
                            )}
                            <Link
                                href='/#contacts'
                            >
                                <button 
                                    style={{
                                        backgroundColor: theme.primary,
                                        color: 'white',
                                        borderColor: theme.primary,
                                    }}
                                    className="sm:w-[180px]
                                    rounded-[30px] no-underline	
                                    w-36 text-base font-medium h-12 border-[3px]
                                     transition duration-100 
                                     ease-out hover:bg-[#a87419] hover:border-[#a87419] hidden sm:block "
                                >
                                    Contact
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Landing;
