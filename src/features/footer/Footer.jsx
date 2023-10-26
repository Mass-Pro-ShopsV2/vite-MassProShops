import React from "react";
import { Link } from 'react-router-dom';
import '../../footer.css'

const Footer = (props) => {

    return (
        <div className="footer">
            <div className="footerColumn">
                <Link to='/contacts'>
                    <h4>Contacts</h4>
                </Link>
            </div>
        </div>
    )
}

export default Footer;