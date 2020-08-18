import React from 'react';
import { Button } from 'semantic-ui-react'
import  EventDashboard from '../../features/events/EventDashboard/EventDashboard'
import NavBar from '../../features/nav/NavBar/NavBar'

function App() {
    return (
      <div>
        <NavBar/>
          <Container className="main">
            
            <EventDashboard/>
        </Container>
      </div>
    );
  }
  
  export default App;