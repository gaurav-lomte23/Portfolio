import React from 'react';
import Image from 'next/image';
import placeholder from '../../../assets/png/placeholder.png';
import styles from '../../../styles/singleBlog.module.css';
import { timeConverter } from '../../../utils/time-converter';

function SingleBlog({ theme, title, desc, date, image, url, id }) {
    return (
        <a
            className={styles.singleBlog}
            key={id}
            href={url}
            target="_blank"
            rel="noreferrer"
            style={{ backgroundColor: theme.quaternary }}
        >
            <div
                className={styles.singleBlogImage}
                style={{ backgroundColor: theme.secondary }}
            >
                <Image
                    src={image ? image : placeholder}
                    alt={title}
                    fill
                    sizes="(max-width: 992px) 100vw, 360px"
                    quality={60}
                    className={styles.singleBlogImageImg}
                />
            </div>
            <div className={styles.singleBlogBody}>
                <p style={{ color: theme.primary }}>{timeConverter(date)}</p>
                <h3 style={{ color: theme.tertiary }}>{title}</h3>
                <h6 style={{ color: theme.tertiary }}>{desc}</h6>
            </div>
        </a>
    )
}

export default SingleBlog
