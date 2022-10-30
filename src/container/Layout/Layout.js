import React from "react";
import { Route, Routes} from "react-router-dom";



class Layout extends React.Component{
    render() {
        return (
                <Routes>
                    <Route  path='/'
                            element={<div> <h1>Here</h1></div>}/>
                </Routes>
        );
    }
}

export default Layout;