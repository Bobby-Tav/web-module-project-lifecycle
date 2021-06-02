import axios from 'axios';
import React from 'react'
import './App.css';


class App extends React.Component{
  state = {
    data:{},
    followers:[]
  }
  componentDidMount(){
    axios
    .get('https://api.github.com/users/bobby-tav')
    .then(res =>{
      console.log('My data',res.data)
      this.setState({data:res.data})
    })
    .catch(err =>{
      console.log("Got an Error",err)
    })
  }
  componentDidUpdate(prevState){
    console.log(prevState)
    console.log(this.state)
    console.log('followers',this.state.followers)
    if(prevState.data !== this.state.data){
      if(this.state.followers.length === 0){ 
        axios
        .get('https://api.github.com/users/Bobby-Tav/followers')
        .then(res=>{
          this.setState({followers:res.data})
          console.log('MyData',this.state.followers)
        })
        .catch(err =>{
          console.log("Got an error",err)
        })
      }
    }
  }

  render(){
    return(
      <div>
        <div>
        <h1>My Git Card</h1>
        <p>{this.state.data.login}</p>
        <img src = {this.state.data.avatar_url} alt='Robert'/>
        <p>{this.state.data.name}</p>
        <p>{this.state.data.location}</p>
        <p>{this.state.data.followers}</p>
        {this.state.followers.map(follower=>{
          return <p key={follower.id}>{follower.login}</p> 
        })}
        </div>

      </div>
    )
  }
}

export default App;
