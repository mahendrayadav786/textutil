import React, { Component } from 'react'

import NewsItem from './NewsItem'


export default class News extends Component {
   
 constructor(){

super();


this.state = {

articles: [],
loading : true


}


 }
 



 async componentDidMount(){

let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=e684c8cd563c4ed0a212dac7f22dc105";

let data = await fetch(url)

let parsedData = await data.json();


console.log(parsedData);

this.setState({articles:parsedData.articles});

 }

 
    render() {
    return (

<div className="container my-3" >

<div className="row">

{this.state.articles.map((element)=>{

return <div className="col-md-4"   key ={element.url}>

<NewsItem    title = {element.title?element.title:""} description = {element.description?element.description:""} imageUrl = {element.urlToImage?element.urlToImage:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202305/axiom_2-sixteen_nine.jpg?VersionId=YvwakZeKyfp4.MhuGLrdDsBivZl7aruV"} newsUrl={element.url}/>


</div>

})}

</div>

</div>
   
    )
  }
}