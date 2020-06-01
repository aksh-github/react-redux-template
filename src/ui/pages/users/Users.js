import React from 'react';
// import propTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import withHoc from '../../utils/hoc';

import { NewsView, ImageWrapper, NewsWrapper } from './components/NewsCompos';
import Navbar from './components/Navbar';

import styles from './news.module.css';

class Users extends React.Component {
    state = {
        saverMode: false,
        news: [
            {
                guid: 'edd89e34-395d-457c-bd2d-499fc8055d35',
                title:
                    'New Hampshire primary live updates: Voting starts in nation’s first primary',
                link:
                    'https://www.washingtonpost.com/politics/2020/02/11/new-hampshire-primary-live-updates/',
                img:
                    'https://www.washingtonpost.com/resizer/XqMLNyOtHHCweguz4pDFvVxCOLE=/1440x0/smart/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HOVFICSMPEI6VFT34B2NGAWH2Q.jpg',
                pubDate: '2020-02-11T14:36:00+00:00',
                tags: null,
                source: 'latest'
            },
            {
                guid: '4bf3c637-4f70-4cd8-abe1-eb7123b0b471',
                title:
                    'T-Mobile and Sprint just got approval from a federal judge for a merger - Business Insider',
                link:
                    'http://www.businessinsider.com/t-mobile-sprint-merger-approved-by-us-judge-2020-2',
                img:
                    'https://i.insider.com/5e42b6783b62b7397b0d2468?width=1200&format=jpeg',
                pubDate: '2020-02-11T14:22:44Z',
                tags: null,
                source: 'latest'
            },
            {
                guid: '6eecddf4-8356-49c6-9328-a8a13c94a426',
                title:
                    'Andrew Yang staffers furious over layoffs, chaotic campaign culture - Business Insider',
                link:
                    'http://www.businessinsider.com/andrew-yang-staffers-furious-over-layoffs-chaotic-campaign-culture-2020-2',
                img:
                    'https://i.insider.com/5e42b1ba3b62b7358943a935?width=1200&format=jpeg',
                pubDate: '2020-02-11T14:05:00Z',
                tags: null,
                source: 'latest'
            },
            {
                guid: '7423d680-56e4-4038-99e1-c61de0da6dac',
                title:
                    "Inside the world's largest all-glass, underwater restaurant - Business Insider",
                link:
                    'http://www.businessinsider.com/maldives-biggest-underwater-restaurant-undersea-photo-price-food-review-2020-2',
                img:
                    'https://i.insider.com/5e20eba162fa81793365f072?width=1200&format=jpeg',
                pubDate: '2020-02-11T14:02:00Z',
                tags: null,
                source: 'latest'
            },
            {
                guid: '4f4a9ab6-cc75-4a0d-adcf-617822af972c',
                title:
                    'Police officer in Arkansas placed on leave after putting student in chokehold',
                link:
                    'https://www.nbcnews.com/news/us-news/police-officer-arkansas-placed-leave-after-putting-student-chokehold-n1134596',
                img:
                    'https://media4.s-nbcnews.com/j/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.nbcnews-fp-1200-630.png',
                pubDate: '2020-02-11T13:51:00+00:00',
                tags: null,
                source: 'latest'
            },
            {
                guid: 'dc1590c7-9457-4a3d-be28-19d0394f1af7',
                title:
                    'A new warrant reveals how Apple detects child pornography and works with law enforcement - Business Insider',
                link:
                    'http://www.businessinsider.com/apple-child-abuse-hashing-warrant-2020-2',
                img:
                    'https://i.insider.com/5e429e022dae5c2d685168f3?width=1200&format=jpeg',
                pubDate: '2020-02-11T13:32:14Z',
                tags: null,
                source: 'latest'
            },
            {
                guid: '95dcaf92-0724-442a-8211-0b8497b57738',
                title:
                    'How to get into the UC Berkeley Haas School of Business - Business Insider',
                link:
                    'http://www.businessinsider.com/how-to-get-into-uc-berkeley-haas-school-of-business',
                img:
                    'https://i.insider.com/5e3852005bc79c73547032d2?width=1200&format=jpeg',
                pubDate: '2020-02-11T13:30:00Z',
                tags: null,
                source: 'latest'
            },
            {
                guid: '6c8447d3-31c0-403a-85b7-080e01edda10',
                title:
                    'Profile of new WeWork CEO Sandeep Mathrani - Business Insider',
                link:
                    'http://www.businessinsider.com/profile-of-new-wework-ceo-sandeep-mathrani-2020-2',
                img:
                    'https://i.insider.com/5e41e58b2dae5c68f57bdce3?width=1200&format=jpeg',
                pubDate: '2020-02-11T13:21:43Z',
                tags: null,
                source: 'latest'
            },
            {
                guid: 'edfd72f2-9657-4619-bb3f-95cb2114811c',
                title:
                    'Fortune 500 execs share the biggest workplace diversity trends - Business Insider',
                link:
                    'http://www.businessinsider.com/execs-fortune-500-companies-talk-biggest-diversity-inclusion-trends',
                img:
                    'https://i.insider.com/5e38596c5bc79c7cf41335c3?width=1200&format=jpeg',
                pubDate: '2020-02-11T13:05:00Z',
                tags: null,
                source: 'latest'
            },
            {
                guid: '4cb208dc-bcde-4681-820f-51eb9f5b5d35',
                title:
                    'Coronavirus updates: Death toll tops 1,000 in China as nations race to contain outbreak',
                link:
                    'https://www.nbcnews.com/news/world/coronavirus-updates-death-toll-tops-1-000-china-nations-race-n1134576',
                img:
                    'https://media3.s-nbcnews.com/j/newscms/2020_07/3225196/200211-wuhan-coronavirus-mc-951_95336f72c1085b1e65c81384c65d8ea6.nbcnews-fp-1200-630.JPG',
                pubDate: '2020-02-11T12:49:00+00:00',
                tags: null,
                source: 'latest'
            },
            {
                guid: '028eec33-e834-40e6-a9fd-80e76d24de63',
                title:
                    'Wuhan coronavirus could infect 60% of the world, leading expert says - Business Insider',
                link:
                    'http://www.businessinsider.com/coronavirus-could-infect-60-percent-of-world-unchecked-gabriel-leung-2020-2',
                img:
                    'https://i.insider.com/5e429b5c3b62b72a805ea9f2?width=1200&format=jpeg',
                pubDate: '2020-02-11T12:22:13Z',
                tags: null,
                source: 'latest'
            },
            {
                guid: '9600b422-16c4-4811-8946-60dc560b8725',
                title:
                    'Trump compares migrants to snakes, fawns over Ivanka at NH rally - Business Insider',
                link:
                    'http://www.businessinsider.com/trump-new-hampshire-rally-migrants-snakes-ivanka-beautiful-2020-2',
                img:
                    'https://i.insider.com/5e42897b3b62b7227a5e4cf3?width=1200&format=jpeg',
                pubDate: '2020-02-11T12:03:28Z',
                tags: null,
                source: 'latest'
            },
            {
                guid: '9e41f9f0-236a-450e-8f58-571bf95a966f',
                title:
                    'A US evacuee with coronavirus was mistakenly released from hospital - Business Insider',
                link:
                    'http://www.businessinsider.com/a-us-evacuee-with-coronavirus-was-mistakenly-released-from-hospital-2020-2',
                img:
                    'https://i.insider.com/5e4275f53b62b71ac00d35a2?width=1200&format=jpeg',
                pubDate: '2020-02-11T11:05:01Z',
                tags: null,
                source: 'latest'
            },
            {
                guid: 'bec5b37e-e0ba-4eef-9dbc-4aa460aea54a',
                title: 'Philippines Says It Will End U.S. Security Agreement',
                link:
                    'https://www.npr.org/2020/02/11/804751958/philippines-says-it-will-end-u-s-security-agreement',
                img:
                    'https://media.npr.org/assets/img/2020/02/11/ap_19101198017396_wide-af413900b7e440a6ceccc23d783fb0abd8d7b57f.jpg?s=1400',
                pubDate: '2020-02-11T10:34:00+00:00',
                tags: null,
                source: 'latest'
            },
            {
                guid: 'f93ae6e1-ccb5-4573-8d1a-e9390b5b7a5d',
                title:
                    'Coronavirus Could Spread Through Pipes in Buildings, Officials Fear',
                link:
                    'https://www.newsweek.com/coronavirus-could-spread-through-pipes-buildings-officials-fear-1486646',
                img:
                    'https://d.newsweek.com/en/full/1566451/coronavirus-hong-kong-cheung-hong-estatetsing-yi-hong-mei-house.jpg',
                pubDate: '2020-02-11T09:41:22+00:00',
                tags: null,
                source: 'latest'
            },
            {
                guid: '9dd2ca63-23e2-4836-bb08-c35293112c94',
                title:
                    'Midnight vote tradition lives on in New Hampshire mountain hamlet',
                link:
                    'https://www.reuters.com/article/us-usa-election-new-hampshire-dixville-n-idUSKBN2050HR',
                img:
                    'https://s3.reutersmedia.net/resources/r/?m=02&d=20200211&t=2&i=1488722502&w=1200&r=LYNXMPEG1A0HO',
                pubDate: '2020-02-11T06:09:00+00:00',
                tags: null,
                source: 'latest'
            },
            {
                guid: '57eacf09-8467-4fdc-9a1d-94f73ce45f7c',
                title:
                    'Bloomberg tops in tiny New Hampshire town that votes first in primary',
                link:
                    'https://nypost.com/2020/02/11/bloomberg-tops-in-tiny-new-hampshire-town-that-votes-first-in-primary/',
                img:
                    'https://thenypost.files.wordpress.com/2020/02/ballots.jpg?quality=90&strip=all&w=1200',
                pubDate: '2020-02-11T05:42:00+00:00',
                tags: null,
                source: 'latest'
            },
            {
                guid: '96762694-c56a-4768-b585-f29a33ff59b9',
                title:
                    'Maryland school district investigating after Nazi flag seen hanging in high school window',
                link:
                    'https://www.nbcnews.com/news/us-news/maryland-school-district-investigating-after-nazi-flag-seen-hanging-high-n1134566',
                img:
                    'https://media2.s-nbcnews.com/j/newscms/2020_07/3225091/200210-thomas-johnson-high-school-google-ac-1006p_8598348dac0e4768d9a0964cfb68f7d9.nbcnews-fp-1200-630.jpg',
                pubDate: '2020-02-11T03:45:00+00:00',
                tags: null,
                source: 'latest'
            },
            {
                guid: 'dab442e2-fcdf-401b-9fe4-093de605dcc6',
                title:
                    "Republican Senate Budget Committee chair won't hold hearing on Trump budget",
                link:
                    'https://www.politico.com/news/2020/02/10/senate-committee-enzi-hearing-trump-budget-113650',
                img:
                    'https://static.politico.com/36/01/9e39e09a44e39d72d1bbd078d936/20200210-mike-enzi-gty-773.jpg',
                pubDate: '2020-02-11T01:08:00+00:00',
                tags: null,
                source: 'latest'
            },
            {
                guid: 'af016e0a-71e7-4942-bb12-ba18e5741e15',
                title:
                    'U.S. Charges Four Chinese Military Hackers With Massive Equifax Breach | NBC Nightly News',
                link: 'https://www.youtube.com/watch?v=eBja21zJm-o',
                img: 'https://i.ytimg.com/vi/eBja21zJm-o/maxresdefault.jpg',
                pubDate: '2020-02-11T01:07:25+00:00',
                tags: null,
                source: 'latest'
            }
        ]
    };

    NewsView2(data, saverMode) {
        return (
            <div className={styles.container + ' ' + styles.newsView}>
                {data.map((item, idx) => (
                    <article
                        className={styles.box + ' ' + styles.newsCard}
                        key={item.guid}
                    >
                        <div>
                            {saverMode ? null : <ImageWrapper {...item} />}
                        </div>
                        <div>
                            <NewsWrapper {...item} />
                        </div>
                        <div>&amp;</div>
                    </article>
                ))}
            </div>
        );
    }

    render() {
        return (
            <div>
                <h2>Users</h2>
                <header>
                    <Navbar />
                </header>
                <hr />
                {this.NewsView2(this.state.news, this.state.saverMode)}
                {
                    // in NewsView articles are appearing in new line cause
                    // .newsCard margin prop changed to padding
                    // <NewsView
                    //     data={{
                    //         news: this.state.news
                    //     }}
                    //     saverMode={this.state.saverMode}
                    // />
                }
            </div>
        );
    }
}

export default withHoc(null, null)(withRouter(Users));
