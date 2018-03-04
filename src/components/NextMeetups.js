import React from 'react';
class NextMeetups extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <h2>Meetups :</h2>
        <ul>
          {
            this.props.meetups.map((item,index)=><li key={index}>{item.title}</li>)
          }
        </ul>
        <button onClick={this.props.addMeetup} >Add new meetup</button>        
      </div>
    )
  }
}

export default NextMeetups;