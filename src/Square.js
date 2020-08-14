import React from 'react';
import PropTypes, { element } from 'prop-types';
import './Square.css';

//const getTitle = () => 'Funtion title';

export default class Square extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            currentColor: this.props.initialColor,
        };
    }

    setCurrentColor(currentColor){
        this.setState({
            currentColor,
        });
    }
    render(){
        //const theTitle = 'Variable Title';
        //const theTitle = <strong>Bold Title</strong>;
        //const elements = [
        //    <p>a</p>,
        //    <p>b</p>,
        //    <p>c</p>,
        //]

        let textInput;
        const size = `${this.props.size}px`; 
        const style = {
            width: size,
            height: size,
            backgroundColor: this.state.currentColor,
        };
        return(
            <div style={style} className="Square">
                <div className="SquareControls">
                    <input ref={(element)=>{textInput = element;}} type="text" placeholder="color..." />
                    <button onClick={() => {this.setCurrentColor(textInput.value) }}>Ok</button>
                </div>
            </div>
            
        );
        //{ this.props.showTitle && <strong>TITLE</strong> } you can use this command if you want to use boolean
    }
}

Square.propTypes = {
    initialColor: PropTypes.string,
    size: PropTypes.number.isRequired,
};

Square.defaultProps = {
    initialColor:'grey'
};