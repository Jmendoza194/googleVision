import React from 'react';

class VisionDataList extends React.Component{
   constructor(props){
       super(props);
       console.log('VisionDataList',this.props.faceData)
   }

   renderHeaders() {
       const { faceData } = this.props;
       const faceKeys = Object.keys(faceData);
       return faceKeys.map((emotion) => {
        if(typeof faceData[emotion] === 'string') {
            if(faceData[emotion]==='VERY_UNLIKELY'){
                    return <h5>{`${emotion}: Not Possible`}</h5>
            }
            else {
                return <h5>{`${emotion}: Possible`}</h5>
            }   
            } 
            
       });
   }

    render(){
        const { picUrl } = this.props;
        return (
            <div className="ui card">
                <div className="image">
                    <img src={picUrl} alt='none'/>
                </div>
                <div className="content">
                    <h1 className="header">Name</h1>
                    <div className="description">
                    <h3>Face Expression Analysis</h3>
                    <br/>
                    {this.renderHeaders()}
                    </div>
                </div>
            </div>
            );  
    }
}

export default VisionDataList;