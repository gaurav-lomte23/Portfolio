import Image from 'next/image';
import React, { useContext } from 'react';
import {
    FaFacebook, FaGithub, FaLinkedinIn, FaMediumM,
    FaStackOverflow, FaTwitter
} from 'react-icons/fa';
import { FiAtSign, FiPhone, FiMail } from 'react-icons/fi';
import { MdCheckCircle } from 'react-icons/md';
import { ThemeContext } from '../../contexts/theme-context';
import { contactsData } from '../../data/contacts-data';
import { socialsData } from '../../data/socials-data';
import styles from '../../styles/contacts.module.css';

function Contacts() {
    const { theme } = useContext(ThemeContext);

    const handleQuickContact = () => {
        window.open(`mailto:${contactsData.email}?subject=Let's Connect&body=Hi Gaurav,%0A%0AI'd like to discuss...`, '_blank');
    };

    return (
        <div
            className={styles.contacts}
            id='contacts'
            style={{ backgroundColor: theme.secondary }}
        >
            <div className={styles.contactsContainer}>
                <h1 style={{ color: theme.primary }}>Contacts</h1>
                <div className={styles.contactsBody}>
                    <div className={styles.contactsForm}>
                        {/* Main Contact Me Button */}
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <button
                                onClick={handleQuickContact}
                                style={{
                                    backgroundColor: theme.primary,
                                    color: '#ffffff',
                                    padding: '14px 40px',
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    border: 'none',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: `0 4px 15px ${theme.primary}40`,
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-3px)';
                                    e.target.style.boxShadow = `0 6px 20px ${theme.primary}60`;
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = `0 4px 15px ${theme.primary}40`;
                                }}
                                className="hover:scale-105"
                            >
                                <FiMail style={{ marginRight: '8px', display: 'inline' }} />
                                Contact Me via Email
                            </button>
                            <p style={{ 
                                color: theme.tertiary, 
                                marginTop: '1rem', 
                                fontSize: '14px',
                                opacity: 0.7
                            }}>
                                Opens your default email client
                            </p>
                        </div>
                    </div>

                    <div className={styles.contactsDetails}>
                        <a
                            href={`mailto:${contactsData.email}`}
                            className={styles.personalDetails}
                        >
                            <div className="w-[45px] h-[45px] 
                            rounded-[50%] flex items-center 
                            justify-center text-2xl transition 
                            ease-in-out text-[#15202B] bg-[#8B98A5]
                             hover:bg-[#C8922E] hover:scale-[1.1] 
                             shrink delay-200"
                            >
                                <FiAtSign />
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.email}
                            </p>
                        </a>
                        <a
                            href={`tel:${contactsData.phone}`}
                            className={styles.personalDetails}
                        >
                            <div className="w-[45px] h-[45px] 
                            rounded-[50%] flex items-center 
                            justify-center text-2xl transition 
                            ease-in-out text-[#15202B] bg-[#8B98A5]
                             hover:bg-[#C8922E] hover:scale-[1.1] 
                             shrink delay-200"
                            >
                                <FiPhone />
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.phone}
                            </p>
                        </a>
                        <div className={styles.personalDetails}>
                            <div className="w-[45px] h-[45px]
                             rounded-[50%] flex items-center 
                             justify-center text-2xl transition 
                             ease-in-out text-[#15202B] bg-[#8B98A5]
                              hover:bg-[#C8922E] hover:scale-[1.1]
                               shrink delay-200"
                            >
                                <MdCheckCircle />
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.status}
                            </p>
                        </div>

                        <div className={styles.socialmediaIcons}>
                            {socialsData.twitter && (
                                <a
                                    href={socialsData.twitter}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={`${styles.socialIcon} ${styles.twitterIcon}`}
                                >
                                    <FaTwitter aria-label='Twitter' />
                                </a>
                            )}
                            {socialsData.github && (
                                <a
                                    href={socialsData.github}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={`${styles.socialIcon} ${styles.githubIcon}`}
                                >
                                    <FaGithub aria-label='GitHub' />
                                </a>
                            )}
                            {socialsData.linkedIn && (
                                <a
                                    href={socialsData.linkedIn}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={`${styles.socialIcon} ${styles.linkedinIcon}`}
                                >
                                    <FaLinkedinIn aria-label='LinkedIn' />
                                </a>
                            )}

                            {socialsData.medium && (
                                <a
                                    href={socialsData.medium}
                                    target='_blank'
                                    rel='noreferrer'
                                    className="w-[45px] h-[45px] rounded-[50%] flex 
                                    items-center justify-center text-xl transition 
                                    ease-in-out text-[#15202B] bg-[#8B98A5] 
                                    hover:bg-[#C8922E]"
                                >
                                    <FaMediumM aria-label='Medium' />
                                </a>
                            )}



                            {socialsData.stackOverflow && (
                                <a
                                    href={socialsData.stackOverflow}
                                    target='_blank'
                                    rel='noreferrer'
                                    className="w-[45px] h-[45px] rounded-[50%] flex 
                                    items-center justify-center text-xl transition 
                                    ease-in-out text-[#15202B] bg-[#8B98A5] 
                                    hover:bg-[#C8922E]"
                                >
                                    <FaStackOverflow aria-label='Stack Overflow' />
                                </a>
                            )}
                            {socialsData.facebook && (
                                <a
                                    href={socialsData.facebook}
                                    target='_blank'
                                    rel='noreferrer'
                                    className="w-[45px] h-[45px] rounded-[50%] flex
                                     items-center justify-center text-xl transition
                                      ease-in-out text-[#15202B] bg-[#8B98A5]
                                       hover:bg-[#C8922E]"
                                >
                                    <FaFacebook aria-label='facebook' />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Image
                src={theme.contactsimg}
                alt='contacts'
                className={styles.contactsImg}
            />
        </div>
    );
}

export default Contacts;
