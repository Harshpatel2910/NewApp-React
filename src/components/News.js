import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles = [
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Jon Porter",
            "title": "Pixel Tablet could include support for third-party styluses",
            "description": "Google’s upcoming Pixel Tablet might support the cross-manufacturer USI (Universal Stylus Initiative) standard. It’s appeared in the USI’s list of certified products, meaning it could be used with third-party styluses.",
            "url": "https://www.theverge.com/2022/5/30/23147251/usi-universal-stylus-initiative-google-pixel-tablet",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/y9oGV4LGiIhOSnuHMtFXffQGLQM=/0x66:920x548/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23596627/image.png",
            "publishedAt": "2022-05-30T10:37:06Z",
            "content": "A mysterious Google tablet has appeared in the USIs certification database\r\nAn early image of Googles upcoming tablet, released earlier this month.\r\nImage: Google\r\nGoogles upcoming Pixel Tablet might… [+1577 chars]"
        },
        {
            "source": {
                "id": "ars-technica",
                "name": "Ars Technica"
            },
            "author": "Jeremy Reimer",
            "title": "Remembering Apple’s Newton, 30 years on",
            "description": "On its 30th anniversary, we look at the groundbreaking product's enduring legacy.",
            "url": "https://arstechnica.com/gadgets/2022/05/remembering-apples-newton-30-years-on/",
            "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2022/05/Screen-Shot-2022-05-26-at-3.30.13-PM-760x380.png",
            "publishedAt": "2022-05-30T11:35:04Z",
            "content": "1 with 1 posters participating\r\nThirty years ago, on May 29, 1992, Apple announced its most groundbreaking and revolutionary product yet, the Newton MessagePad. It was released to great fanfare a yea… [+3495 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "In the race against time to cut emissions, companies' supply chains are key - Reuters",
            "description": "The question of how the hundreds of companies that have set net-zero commitments are actually going to deliver on them has taken on greater urgency in the wake of the UK Met Office’s recent assessment that there is an even chance global temperatures will over…",
            "url": "https://www.reuters.com/business/sustainable-business/race-against-time-cut-emissions-companies-supply-chains-are-key-2022-05-30/",
            "urlToImage": "https://www.reuters.com/resizer/68spkKpLlxqECZr5d73QJelUUiw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RLL7BRBVPVNSTM6RUUF5X7GCFM.jpg",
            "publishedAt": "2022-05-30T11:16:00Z",
            "content": "May 26 - The question of how the hundreds of companies that have set net-zero commitments are actually going to deliver on them has taken on greater urgency in the wake of the UK Met Offices recent a… [+11783 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Tim Hardwick",
            "title": "Apple Fails in Bid to Dismiss Amended Cydia Creator's Antitrust Lawsuit",
            "description": "Apple has lost a bid to dismiss an antitrust lawsuit filed against it by Jay Freeman, creator of an alternative App Store known as Cydia for \"jailbroken\" iPhones and iPads. \n\n\n\n\n\nFreeman sued Apple in late 2020, alleging that Apple has an illegal monopoly ove…",
            "url": "https://www.macrumors.com/2022/05/30/judge-allows-cydia-lawsuit-against-apple/",
            "urlToImage": "https://images.macrumors.com/t/apia8xtdQ_bCjwxSU3cIKEsCz9E=/2500x/article-new/2020/12/cydia-vs-apple-feature.jpg",
            "publishedAt": "2022-05-30T09:46:17Z",
            "content": "Apple has lost a bid to dismiss an antitrust lawsuit filed against it by Jay Freeman, creator of an alternative App Store known as Cydia for \"jailbroken\" iPhones and iPads. \r\nFreeman sued Apple in la… [+2032 chars]"
        }
    ];
    constructor() {
        super();


        this.state = {
            articles: this.articles,

            loading: false
        }
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>DailyNew - Top Headlines</h2>
                <div className="row">

                    <div className="col-md-4">
                        <NewsItem title="MyTitle" description="desc" imageUrl="https://images.macrumors.com/t/apia8xtdQ_bCjwxSU3cIKEsCz9E=/2500x/article-new/2020/12/cydia-vs-apple-feature.jpg" newsUrl="TODO"></NewsItem>

                    </div>
                    <div className="col-md-4">
                        <NewsItem title="MyTitle" description="desc"></NewsItem>

                    </div>

                    <div className="col-md-4">
                        <NewsItem title="MyTitle" description="desc"></NewsItem>

                    </div>
                </div>
            </div>
        )
    }
}

export default News