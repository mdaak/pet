import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
    const layoutStyle = {
        display:'flex',
        justifyContent :'center',
    }
    const layoutChild ={
        width:'100%',

    }
    return (
        <div  style={layoutStyle} >
            <div  style={layoutChild} >
                <NavBar />
                {children}
                <Footer />
            </div>
        </div>

    );
};
export default Layout;