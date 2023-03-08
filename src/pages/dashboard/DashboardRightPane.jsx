import {React} from 'react'
import { Home } from 'react-feather';
import TableComponent from './components/TableComponent';

const DashboardRightPane = () => {
    return(
        <div className='rightPaneContainer'>
            <Home/>

            <div className='header'>
                <div>Orders</div>

                {/* <div style={{display:"flex", justifyContent:"space-around"}}>Orders</div> */}

                
                
            </div>
            
            
            <div className='tableContainer'>
                <TableComponent/>
            </div>




        </div>
    )
}



export default DashboardRightPane;