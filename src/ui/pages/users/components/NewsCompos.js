import React from 'react';

import styles from '../news.module.css';

const Image = ({ img }) => (
    <object
        type="image/jpg"
        alt="news placeholder"
        className={styles.img + ' pure-img'}
        data={img}
        aria-label="News placeholder"
    >
        News Image placeholder
    </object>
);

class Image2 extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.fallback = () => {
            if (this.props.fallbackSrc) {
                this.setState({ failed: true });
            }
        };
    }

    render() {
        if (this.state.failed || !this.props.img) {
            return (
                <img
                    src={this.props.fallbackSrc}
                    className={styles.img}
                    alt="News placeholder"
                />
            );
        } else {
            return (
                <img
                    src={this.props.img}
                    onError={this.fallback}
                    className={styles.img}
                    alt="News placeholder"
                />
            );
        }
    }
}

export const ImageWrapper = item => (
    <Image2 {...item} fallbackSrc={'./placeholder.png'} />
);

// const Title = ({ title, link }) => <div className={styles.title}>
//     <a href={link} className={styles.link}>
//         {title}
//     </a>
// </div>

const Title = ({ title, link }) => (
    <a
        href={link}
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
    >
        {title}
    </a>
);

export const NewsWrapper = ({ title, link }) => {
    return (
        <>
            <div className={styles.newsWrapper}>
                <div>
                    <Title title={title} link={link} />
                </div>
                <div className={styles.pubDate + ' ' + styles.newsWrapper}>
                    {new Date().toISOString()}
                </div>
            </div>
        </>
    );
};

const NewsCard = ({ item, saverMode }) => {
    // console.log(item)
    return (
        <article
            key={item.guid}
            className={'pure-u-1  pure-u-md-1-2 ' + styles.newsCard}
        >
            <div className={'pure-g'}>
                <div className={'pure-u-1-3'}>
                    {saverMode ? null : <ImageWrapper {...item} />}
                </div>
                <div className={'pure-u-2-3'}>
                    <NewsWrapper {...item} />
                </div>
            </div>
        </article>
    );
};

export const NewsView = ({ data, saverMode }) => {
    // console.log(data)

    return (
        <div className={styles.newsView}>
            <div className="pure-g">
                {data.news.map((item, idx) => (
                    <NewsCard
                        item={item}
                        saverMode={saverMode}
                        key={item.guid}
                    />
                ))}
            </div>
        </div>
    );
}; //NewsView
