var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
    return (
        <div className="top-bar">
           <div className="top-bar-left">
            <ul className="menu">
                <li className="menu-text">React Weather App</li>
                <li><IndexLink to="/" activeClassName="active-link">Timer</IndexLink></li>
                <li><Link to="/" activeClassName="active-link">Countdown</Link></li>
            </ul>
           </div>
           <div className="top-bar-right">
               <ul className="menu">
                   <li className="menu-text">
                       Created by <a href="http://www.iwillbeawebdeveloper.co.uk" target="_blank">James Winfield</a>
                   </li>
               </ul>
           </div>
            
        </div>
    );
};

module.exports = Nav;