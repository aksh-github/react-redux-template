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
                guid: 'cde85faa-ab5b-4314-b372-ea2473b19ee8',
                title:
                    'US economy misses forecasts, adds just 145,000 jobs in December',
                link:
                    'https://markets.businessinsider.com/news/stocks/december-jobs-report-us-economy-145000-jobs-added-unemployment-rate-2020-1-1028809219',
                img:
                    'https://images.markets.businessinsider.com/image/5cdeaf05021b4c0679206d89-2400/2018-09-27t211623z1107338238rc1ba4212330rtrmadp3ford-motor-plant.jpg',
                pubDate: '2020-01-10T14:39:05Z',
                tags: null,
                source: 'latest'
            },
            {
                guid: '616a1ef3-4479-478d-a5cd-08c3281f5af5',
                title:
                    'A triple threat storm could bring tornadoes, snow and flooding to much of the US this weekend',
                link:
                    'https://www.cnn.com/2020/01/10/weather/triple-threat-storm-friday-wxc/index.html',
                img:
                    'https://cdn.cnn.com/cnnnext/dam/assets/200108145735-weather-storm-precipitation-friday-20200108-super-tease.jpg',
                pubDate: '2020-01-10T14:24:00+00:00',
                tags: null,
                source: 'latest'
            },
            {
                guid: '0858ccf8-0158-40e5-bb66-a2df67b131af',
                title:
                    'Panera plans to slash meat from half of its menu in response to climate change - Business Insider',
                link:
                    'http://www.businessinsider.com/panera-to-make-half-of-menu-plant-based-climate-change-2020-1',
                img:
                    'https://image.businessinsider.com/5d0a95a2e3ecba31f01509b5?width=1200&format=jpeg',
                pubDate: '2020-01-10T14:11:01Z',
                tags: null,
                source: 'latest'
            },
            {
                guid: '032b45b9-0287-4380-a95c-383d0a6b8565',
                title:
                    'Iraq PM tells US to start preparing for a troop withdrawal - Business Insider',
                link:
                    'http://www.businessinsider.com/iraq-pm-tells-america-withdraw-troops-2020-1',
                img:
                    'https://image.businessinsider.com/5e18831324fe1240b51faab2?width=1200&format=jpeg',
                pubDate: '2020-01-10T14:10:40Z',
                tags: null,
                source: 'latest'
            },
            {
                guid: '23f4fd9e-bb11-4dbe-87d5-1ed8d206a62f',
                title:
                    'MacDill Air Force Base in Tampa, Florida on brief lockdown after report of armed suspect today',
                link:
                    'https://www.cbsnews.com/news/macdill-air-force-base-on-lockdown-tampa-reports-of-active-shooter-today-live-updates-2020-01-10/',
                img:
                    'https://cbsnews2.cbsistatic.com/hub/i/r/2019/12/03/79589b2c-fb50-4255-871d-e2b4dca33cc0/thumbnail/1200x630/14df4bcf23dda5f7dd892f9b10640831/crawford-mil-housing-macdill-afb-ext-eve-20191203-fd-frame-228.jpg',
                pubDate: '2020-01-10T13:29:00+00:00',
                tags: null,
                source: 'latest'
            },
            {
                guid: '11f334d9-cf4c-4904-a6b7-da40fa588d51',
                title:
                    'Microsoft contractors in China listened to Skype recordings with low cybersecurity - Business Insider',
                link:
                    'http://www.businessinsider.com/microsoft-contractors-listened-to-recordings-with-minimal-security-2020-1',
                img:
                    'https://image.businessinsider.com/5e186a3af442313b946ce822?width=1200&format=jpeg',
                pubDate: '2020-01-10T12:48:34Z',
                tags: null,
                source: 'latest'
            },
            {
                guid: 'd3ed043d-316e-4092-86ca-b7232e0914e0',
                title:
                    'Ukraine Iran plane crash: Victims identities, stories revealed - Business Insider',
                link:
                    'http://www.businessinsider.com/ukraine-iran-plane-crash-victims-identities-revealed-2020-1',
                img:
                    'https://image.businessinsider.com/5e1717b524fe1217407bf405?width=1200&format=jpeg',
                pubDate: '2020-01-10T12:41:00Z',
                tags: null,
                source: 'latest'
            },
            {
                guid: 'd03dd408-25ac-483d-a7e3-ab79b5e533cf',
                title:
                    'Ukraine Iran crash: Panic, bad training may have led to missile attack - Business Insider',
                link:
                    'http://www.businessinsider.com/ukraine-iran-crash-panic-bad-training-may-led-missile-attack-2020-1',
                img:
                    'https://image.businessinsider.com/5e18593424fe1233e972efa2?width=1200&format=jpeg',
                pubDate: '2020-01-10T12:11:06Z',
                tags: null,
                source: 'latest'
            },
            {
                guid: '75f82578-56d4-4252-8568-10ae79a46c67',
                title:
                    "'Too much wealth is in too few hands' â Michael Bloomberg slams Trump's tax cuts as a gift to the rich",
                link:
                    'https://markets.businessinsider.com/news/stocks/michael-bloomberg-slams-donald-trump-tax-cuts-economic-record-2020-1-1028808714',
                img:
                    'https://images.markets.businessinsider.com/image/5e184f1bf4423134b46969e3-1350/screen-shot-2020-01-10-at-101546-am-2.png',
                pubDate: '2020-01-10T11:36:06Z',
                tags: null,
                source: 'latest'
            },
            {
                guid: '151dac3a-4323-4ae9-9414-06ad652e6ae3',
                title:
                    "Enormous 'Megafire' In Australia Engulfs 1.5 Million Acres",
                link:
                    'https://www.npr.org/2020/01/10/795169417/enormous-mega-fire-in-australia-engulfs-1-5-million-acres',
                img:
                    'https://media.npr.org/assets/img/2020/01/10/rts2xu0s_wide-a0bfb42ea8e96a3bf91a5db42bd6be0c8b982ac1.jpg?s=1400',
                pubDate: '2020-01-10T11:33:00+00:00',
                tags: null,
                source: 'latest'
            },
            {
                guid: '6e231698-d9fa-4f33-8853-0facb444877b',
                title:
                    'A Teenager’s Breakthrough Gene Therapy for Sickle Cell Disease',
                link:
                    'https://www.nytimes.com/2020/01/10/the-weekly/sickle-cell-dna-reset.html',
                img:
                    'https://static01.nyt.com/images/2020/01/12/universal/12theweekly-myblood-promo/12theweekly-myblood-promo-facebookJumbo-v2.jpg',
                pubDate: '2020-01-10T11:20:22Z',
                tags: null,
                source: 'latest'
            },
            {
                guid: 'ca4cef9d-3aa1-4654-b03e-c3aa1a9c6380',
                title:
                    'Democrats brace for round two of impeachment witness fight | TheHill',
                link:
                    'https://thehill.com/homenews/senate/477633-democrats-brace-for-round-two-of-impeachment-witness-fight',
                img:
                    'https://thehill.com/sites/default/files/mcconnellmitch_schumercharles_010320gn3_lead_0.jpg',
                pubDate: '2020-01-10T11:00:51+00:00',
                tags: null,
                source: 'latest'
            },
            {
                guid: 'd862adeb-4082-4ded-b077-aa5ede730167',
                title:
                    "Graham, Paul rift deepens over Trump's war powers | TheHill",
                link:
                    'https://thehill.com/homenews/senate/477625-graham-paul-rift-deepens-over-trumps-war-powers',
                img:
                    'https://thehill.com/sites/default/files/grahamlindsey_paulrand_gn1.jpg',
                pubDate: '2020-01-10T11:00:48+00:00',
                tags: null,
                source: 'latest'
            },
            {
                guid: 'd43a84f8-6af5-46f6-84a3-358dd6d16cc5',
                title: 'Iraqi PM tells US to start working on troop withdrawal',
                link:
                    'https://www.cnbc.com/2020/01/10/iraqi-pm-tells-us-to-decide-the-mechanism-for-troop-withdrawal.html',
                img:
                    'https://image.cnbcfm.com/api/v1/image/106330601-1578666048765iraq.jpg?v=1578666118',
                pubDate: '2020-01-10T10:54:00+00:00',
                tags: null,
                source: 'latest'
            },
            {
                guid: '983abaf9-14e7-45ee-801b-ad8d09d06bd9',
                title:
                    'She Was a Star of New York Real Estate, but Her Life Story Was a Lie',
                link:
                    'https://www.nytimes.com/2020/01/10/nyregion/faith-hope-consolo.html',
                img:
                    'https://static01.nyt.com/images/2020/01/12/nyregion/12FAITH/10FAITH-facebookJumbo.jpg',
                pubDate: '2020-01-10T10:00:24Z',
                tags: null,
                source: 'latest'
            },
            {
                guid: '60e6d628-3ce2-438f-b149-875bfcc65a41',
                title:
                    'U.S. Added 145,000 Jobs in December; Unemployment at 3.5%',
                link:
                    'https://www.nytimes.com/2020/01/10/business/economy/december-jobs-report.html',
                img:
                    'https://static01.nyt.com/images/2020/01/10/business/10jobs1/10jobs1-facebookJumbo.jpg',
                pubDate: '2020-01-10T10:00:22Z',
                tags: null,
                source: 'latest'
            },
            {
                guid: '2610c83f-470e-4cb9-a8ed-f980b563d33e',
                title:
                    'These are the 15 European fintech startups VCs think will blow up in 2020 - Business Insider',
                link:
                    'http://www.businessinsider.com/15-european-fintech-startups-vc-think-will-blow-up-2020-1',
                img:
                    'https://image.businessinsider.com/5c8143042628980b4e7b1da5?width=1200&format=jpeg',
                pubDate: '2020-01-10T09:23:50Z',
                tags: null,
                source: 'latest'
            },
            {
                guid: '9794e278-cd95-4658-af36-efcd4bb706fc',
                title:
                    'Live Updates: Ukraine Presses Allies for Evidence on Iran Plane Crash',
                link:
                    'https://www.nytimes.com/2020/01/10/world/middleeast/iran-ukraine-plane-crash.html',
                img:
                    'https://static01.nyt.com/images/2020/01/10/world/10iran-crash02/10iran-crash02-facebookJumbo.jpg',
                pubDate: '2020-01-10T08:41:35Z',
                tags: null,
                source: 'latest'
            },
            {
                guid: 'cd4369ab-4b1c-4e0b-9dfd-d1ba0c8bda2b',
                title:
                    "Authorities are looking for a bank robber they call the 'Bad Wig Bandit'",
                link:
                    'https://www.cnn.com/2020/01/10/us/bad-wig-bandit-robbery-nc-trnd/index.html',
                img:
                    'https://cdn.cnn.com/cnnnext/dam/assets/200110015314-bad-wig-bandit-robbery-nc-trnd-super-tease.jpg',
                pubDate: '2020-01-10T08:09:00+00:00',
                tags: null,
                source: 'latest'
            },
            {
                guid: 'ae2745d9-13a8-4196-af63-b19c34117331',
                title:
                    '‘Chaos Is the Point’: Russian Hackers and Trolls Grow Stealthier in 2020',
                link:
                    'https://www.nytimes.com/2020/01/10/us/politics/russia-hacking-disinformation-election.html',
                img:
                    'https://static01.nyt.com/images/2019/12/22/multimedia/22dc-CYBERELECT-01/22dc-CYBERELECT-01-facebookJumbo.jpg',
                pubDate: '2020-01-10T08:00:09Z',
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
