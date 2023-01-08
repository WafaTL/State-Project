import { Component } from 'react';
import Profile from './components/Profile';
import image from './components/image.jpg';
import './App.css';
class App extends Component {
 
    state = {
      person:{
         fullName:'Wafa TLILI',
      bio:'engineer' , 
      profession:'developer',
      imgSrc: image
    },
      show: false,
     

};


toggleVisibility = () => {
  this.setState({ show: !this.state.show });
};


render(){
  const {person,show}=this.state
  const {fullName,bio,profession,imgSrc}=person
    return (
   
<>


<button className="visibility-btn"onClick={this.toggleVisibility}>
          {show ? 'Hide Profile' : 'Show Profile'}
          </button>
          {show && <Profile fullName={fullName}
                      bio={bio}
                    profession={profession}
                     imgSrc={imgSrc}
/>}
          </>
   );
  }
}

export default App;
