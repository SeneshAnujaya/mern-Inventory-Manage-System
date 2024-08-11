import React from 'react'

type UserSetting = {
    label: string;
    value: string | boolean;
    type: "text" | "toggle";
}

const mockSetttings: UserSetting[] = [
    { label: "Username", value: "john_doe", type: "text"},
    { label: "Email", value: "john.doe@gmail.com", type: "text"},
    { label: "Notification", value: true , type: "toggle"},    
    { label: "Notification", value: true , type: "toggle"} ,   
    { label: "Dark Mode", value: false , type: "toggle"},
    { label: "Language", value: "English" , type: "text"},


];

const Settings = () => {
  return (
    <div>Settings</div>
  )
}

export default Settings