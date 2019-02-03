import Axios from 'axios';
import React from 'react';
import VisionDataList from '../components/VisionDataList';
import ImageList from '../components/ImageList';

class Vision extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            face: '',
            label: ''
        };
    }

    componentDidUpdate(prevProps) {
        const req =
        {
            "requests":[
              {
                "image":{
                  "source":{
                    "imageUri": this.props.currentPic
                  }
                },
                "features":[
                  {
                    "type":"LABEL_DETECTION",
                    "maxResults":1
                  },
                  {
                      "type": "FACE_DETECTION",
                      "maxResults":1
                  }
                ]
              }
            ]
          }
        if(this.props.currentPic !== prevProps.currentPic) {
            this.setState({face: null, label: null})
            const response = Axios.post('https://vision.googleapis.com/v1/images:annotate?key=GOOGLE_KEY', req).then((data) => {
                
                const { responses } = data.data
                this.setState({
                    face: responses[0].faceAnnotations[0],
                    label: responses[0].labelAnnotations[0]})
                console.log(this.state.label);
            })
        }
    }

    componentDidMount(){
        const { currentPic } = this.props;
        const req =
    {
        "requests":[
          {
            "image":{
              "source":{
                "imageUri": currentPic
              }
            },
            "features":[
              {
                "type":"LABEL_DETECTION",
                "maxResults":1
              },
              {
                  "type": "FACE_DETECTION",
                  "maxResults":1
              }
            ]
          }
        ]
      }

        const response = Axios.post('https://vision.googleapis.com/v1/images:annotate?key=GOOGLE_KEY', req).then((data) => {
        console.log('data fetched!')
        const { responses } = data.data
        this.setState({
            face: responses[0].faceAnnotations[0],
            label: responses[0].labelAnnotations[0]})
        console.log(this.state.label);
    })
    }
render(){
    const { currentPic, images, updateSelectedPic } = this.props;

    if(this.state.face && this.state.label) {
        return(
            <div>
                <VisionDataList faceData={this.state.face} picUrl={currentPic} labelData={this.state.label} key=''/>
                <ImageList pics={images}  updatePicture={updateSelectedPic}/>
            </div>
        );
    }
    return (
        <div className="ui segment">
            <h1>Loading...</h1>
        </div>
    )
}
}

export default Vision;