import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Library from './components/Library';
import Login from './components/Login';
import Register from './components/Register';
import Playlist from './components/Playlist';

/* settings */
import EditSettings from './components/EditSettings';
import ChangePassword from './components/ChangePassword';
import ChangeUsername from './components/ChangeUsername';
import EditPersonalInfo from './components/EditPersonalInfo';
import EditProfile from './components/EditProfile';
import EditGenres from './components/EditGenres';

import UserDetailsProvider from './UserDetailsProvider';

import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <UserDetailsProvider>
    	<Routes>
    		<Route path="/" element={<App />} />
    		<Route path="/login" element={<Login />} />
    		<Route path="/settings/changepassword" element={<ChangePassword />} />
    		<Route path="/settings/changeusername" element={<ChangeUsername />} />
    		<Route path="/settings/editpersonalinfo" element={<EditPersonalInfo />} />
    		<Route path="/settings/editprofile" element={<EditProfile />} />
    		<Route path="/settings/editgenres" element={<EditGenres />} />
    		<Route path="/settings" element={<EditSettings />} />
    		<Route path="/playlist" element={<Playlist />} />
    		<Route path="/register" element={<Register />} />
    		<Route path="/profile" element={<Profile />} />
    		<Route path="/library" element={<Library />} />
    	</Routes>
      </UserDetailsProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById("root")
);