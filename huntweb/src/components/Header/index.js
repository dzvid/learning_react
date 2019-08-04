import React from 'react';

import "./styles.css";

//Stateless components: create components in react using only functions
//normally used when the component doesnt keep a state

const Header = () => (
    <header id="main-header">JSHUNT</header>
);

export default Header;


// Another way to implement this component
// class Header extends Component {
//     render(){
//         return (
//             <h1>Hello</h1>
//         );
//     }
// }