import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );
    return (
        <div className= "sidebar">
            <div className="sidebar__top">
                <img src="background.jfif" alt=""/>
                <Avatar className="sidebar__avatar" />
                <h2>Meet Shah</h2>
                <h4>meetjshah977@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2124</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2012</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('software')}
                {recentItem('development')}
                {recentItem('fullstack')}
            </div>
        </div>
    )
}

export default Sidebar
