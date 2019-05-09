import React from 'react'
import { Component } from 'react'

import {AboutTitle, MyPicture, AboutMeDescription} from './Util'
import MyOwnPic from '../res/myOwnImg.png'

class About extends Component {

    render() {
        return (
            <div>
              {/*title*/}
              <AboutTitle><em>About Me</em></AboutTitle>
              {/*picture*/}
              <MyPicture src={MyOwnPic}/>
              {/*Description*/}
              <AboutMeDescription>
                blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla
              </AboutMeDescription>
              {/*links*/}
              {/*git*/}
              {/*linkdin*/}
              {/*Medium*/}
            </div>
        );
    }

}

export default About