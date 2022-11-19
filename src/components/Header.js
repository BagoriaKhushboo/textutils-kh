 import './common.css';
 import PropTypes  from "prop-types";
function Header(props){
    return(<>
<div className="head">
   <header>
    <h1>{props.title}</h1> <span>{props.abouttext}</span>
   </header>

</div>
  
    
    </>);
}
Header.propTypes={title:PropTypes.string,
    abouttext:PropTypes.string

}
Header.defaultProps = {
 title: 'Textutils',
 abouttext:'Do some magic with text'
  };

export default Header;