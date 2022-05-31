import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

   
    constructor() {
        super();


        this.state = {
            articles: [],

            loading: false
        }
    }


    async componentDidMount()
    {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=ac51ff43e25b4c6b826ce9d674685359";

        let data = await fetch(url);

        let parseData = await data.json()

        this.setState({articles:parseData.articles})

    }
    render() {
        return (
            <div className='container my-3'>
                <h2>DailyNews - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((elements) => {

                        return <div className="col-md-4" key={elements.url}>
                            <NewsItem  title={elements.title?elements.title:""} description={elements.description?elements.description:""} imageUrl={elements.urlToImage?elements.urlToImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3XD1Y9SFlbzkqRnw5ZyjYaqemU7gJHHJWyQ&usqp=CAU"} url={elements.url}></NewsItem>

                        </div>

                    })}



                </div>
            </div>
        )
    }
}

export default News