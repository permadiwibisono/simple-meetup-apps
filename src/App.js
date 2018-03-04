import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MeetupInfo from './components/MeetupInfo';
import NextMeetups from './components/NextMeetups';

const data = {
  meetupInfo:{
    name: 'JakartJS',
    photoURL:'',
    location:'Jakarta',
    about:'This is meetup for javascript ninjas.'
  },
  members:[
    {name:'adib',email:'adib@gmail.com'},
    {name:'budi',email:'budi@gmail.com'},
    {name:'wati',email:'wati@gmail.com'},
  ],
  organizers:[
    {name:'adib',email:'adib@gmail.com'},
    {name:'budi',email:'budi@gmail.com'}
  ],
  meetups:[
    {
      title:'JakartaJS Workshop',
      desc:'Workshop FronEnd and BackEnd',
      status:'next',
      date: new Date(),
      location: 'Hactive8'
    },
    {
      title:'JakartaJS Meetup',
      desc:'Meetup with Kudo',
      status:'next',
      date: new Date(),
      location: 'Kudo radio dalam'
    }
  ]
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = data
    this.handleAddMeetup = this.handleAddMeetup.bind(this)
  }

  handleAddMeetup(){
    this.setState({meetups: this.state.meetups.concat({title:'New meetup was here'})})
  }
  
  render() {
    return (
      <div>
        <Navbar/>
        <MeetupInfo info ={this.state.meetupInfo}/>
        <NextMeetups meetups={this.state.meetups} addMeetup={this.handleAddMeetup}/>
      </div>
    );
  }
}

export default App;
