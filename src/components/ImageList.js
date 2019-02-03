import React from 'react';
import Vision from '../apis/Vision';

class ImageList extends React.Component{
    constructor(props){
        super(props);  
        
    }

    renderPicList = () =>{
        const { updatePicture } = this.props;
        return this.props.pics.map((pic) =>{
            return <img src={`${pic.urls.regular}`} alt='none' key={pic.id} onClick={() => updatePicture(pic.urls.regular)} />
        })
    }

    render(){
        return(
            <div>
                {this.renderPicList()}
            </div>
        );
    }
}

// const ImageList = ({pics}) =>{

//     const onEventClick = (Event) =>{
//         return <Vision picture={}/>
//     }
    
//     const renderPicList = () => {
//      return pics.map((pic) =>{
//         return <img src={`${pic.urls.regular}`} onClick={onEventClick}/>
//     })
// }

//     return(
//     <div>
//         {renderPicList()}
//     </div>
//     );
// }
export default ImageList;