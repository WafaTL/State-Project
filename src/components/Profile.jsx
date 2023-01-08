import React, { Component } from 'react';

class Profile extends Component {

state={
    timer:0,
}

componentDidMount = () => {
    console.log('run componentDidMount ');

    this.interval = setInterval(() => {
 this.setState({ timer: this.state.timer + 1 });
    }, 1000);}


render(){
const {fullName,bio,profession,imgSrc}=this.props
        return(
<div className='container'>          
<h1>{fullName}</h1>
<h3>{profession}</h3>
<p>{bio}</p>
<img src={imgSrc} alt='profile'/>
<h1>{this.state.timer}</h1>
</div>
) }

}
export default Profile