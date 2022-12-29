import {React} from 'react'
import { Activity, Home, Anchor, Star, ShoppingCart, User, Settings  } from 'react-feather'

const DashboardLeftPane = () => {
    return(
        <div className='leftPaneContainer'>
            <h2 style={{marginTop:20}}>Dashboard</h2>
            <div style={options}>
                <div>
                  <Activity />
                </div>
                <div style={leftPaneOptions}>
                    Overview
                </div> 
            </div>

            <div style={options}>
                <div>
                  <Home />
                </div>
                <div style={leftPaneOptions}>
                    Notifications
                </div> 
            </div>

            <div style={options}>
                <div>
                  <Anchor />
                </div>
                <div style={leftPaneOptions}>
                    Analytics
                </div> 
            </div>

            <div style={options}>
                <div>
                  <Star />
                </div>
                <div style={leftPaneOptions}>
                    Saved reports
                </div> 
            </div>

            <div style={options}>
                <div>
                  <ShoppingCart />
                </div>
                <div style={leftPaneOptions}>
                    Orders
                </div> 
            </div>

            <div style={options}>
                <div>
                  <User />
                </div>
                <div style={leftPaneOptions}>
                    User reports
                </div> 
            </div>

            <div style={options}>
                <div>
                  <Settings />
                </div>
                <div style={leftPaneOptions}>
                    Manage notifications
                </div> 
            </div>
           




        </div>
    )
}

const options = {marginTop:15, display:"flex"}
const leftPaneOptions = {marginLeft:8}

export default DashboardLeftPane;