<<<<<<< HEAD
import React from "react";
import { Grid } from "semantic-ui-react";
import { Switch, Route, Redirect } from "react-router-dom";
import SettingsNav from "./SettingsNav";
import BasicPage from "./BasicPage";
import AboutPage from "./AboutPage";
import PhotosPage from "./PhotosPage";
import Accountpage from "./Accountpage";

const SettingsDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from="/settings" to="settings/basic" />
          <Route path="/settings/basic" component={BasicPage} />
          <Route path="/settings/about" component={AboutPage} />
          <Route path="/settings/photos" component={PhotosPage} />
          <Route path="/settings/account" component={Accountpage} />
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingsNav />
      </Grid.Column>
    </Grid>
  );
};
=======
import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Switch, Route, Redirect } from 'react-router-dom'
import SettingsNav from './SettingsNav'
import BasicPage from './BasicPage'
import AboutPage from './AboutPage'
import PhotosPage from './PhotosPage'


const SettingsDashboard = () => {
    return (
        <Grid>
            <Grid.Column width={12}>
                <Switch>
                    <Redirect exact from ='/settings' to='settings/basic'/>
                    <Route path='/settings/basic' component={BasicPage}/>
                    <Route path='/settings/about' component={AboutPage}/>
                    <Route path='/settings/photos' component={PhotosPage}/>
                    <Route path='/settings/account' component={AboutPage}/>
                </Switch>
            </Grid.Column>
            <Grid.Column width={4}>
                <SettingsNav/>
            </Grid.Column>
        </Grid>
    )
}
>>>>>>> master

export default SettingsDashboard;
