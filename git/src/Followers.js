import React from 'react'
class Followers extends React.Component{




    render(){
        return(
            <div>
                { this.props.followers.map(follower =>{
                    return( <div key={follower.id}>
                        <img width='200px' src={follower.avatar_url} alt ={follower.login} />
                        <p>{follower.login}</p>
                    </div>)
                })}
            </div>
        )
    }
}
export default Followers
// {this.state.followers.map(follower=>{
//     return <p key={follower.id}>{follower.login}</p> 
//   })}