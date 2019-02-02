import React from 'react';
import vision from '../apis/googleVision';
import Pic from './Pic.jpg';
import Axios from 'axios';


const req =
    {
        "requests":[
          {
            "image":{
              "source":{
                "imageUri":
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/CarsonWentz11.jpg/220px-CarsonWentz11.jpg"
              }
            },
            "features":[
              {
                "type":"LABEL_DETECTION",
                "maxResults":1
              }
            ]
          }
        ]
      }

Axios.post('https://vision.googleapis.com/v1/images:annotate?key=', req).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error);
})  

const App = () =>{
    console.log(req)
return <div>App</div>;
}


export default App;