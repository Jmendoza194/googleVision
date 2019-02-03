import React from 'react';
import Vision from '../apis/Vision';
import Unsplash from '../apis/Unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';



class App extends React.Component{
    constructor(props) {
        super(props);
        this.updateSelectedPic = this.updateSelectedPic.bind(this);
    }
state={ images: [], selectedPic: "https://blog-media-1.unidays.world/blog/posts/hero/9e6f5301-7532-4338-8e16-e022ce37451c" };

onSearchSubmit = async(term) =>{
    const response = await Unsplash.get('/search/photos',{
        params:{
            query:term
        }
    });
    this.setState({images:response.data.results});
}

updateSelectedPic(url) {
    console.log('picture clicked')
    this.setState({
        selectedPic: url
    })
}

render(){
    
    return(
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            <Vision updateSelectedPic={this.updateSelectedPic} currentPic={this.state.selectedPic} images={this.state.images}/>
        </div>
        );
    }
}


export default App;