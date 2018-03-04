import React from 'react';
export default class MeetupInfo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: "JakartaJS Workshop"
    }
  }
  render(){
    const { info } = this.props;

    return(
      <div>
        <h1>{ info.name.toUpperCase() }</h1>
      </div>
    )
  }
}