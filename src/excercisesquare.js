import React from 'react';
import PropTypes, { element, nominalTypeHack } from 'prop-types';
import './Square.css';

//const getTitle = () => 'Funtion title';

export default class Square extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            currentColor: this.props.initialColor,
            isHidden: this.props.initialIsHidden,
        };
    }

    setCurrentColor(currentColor){
        this.setState({
            currentColor,
        });
    }

    toggleIsHidden (){
        this.setState((currentState) => {
            return {
                isHidden: !currentState.isHidden,
            }
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
            display: this.state.isHidden ? 'none' : 'block',
        };
        return(
            <div className="SquareContainer">
                <div style={style} className="Square" />
                    <div className="SquareControls">
                        <input ref={(element)=>{textInput = element;}} type="text" placeholder="color..." />
                        <button onClick={() => {this.setCurrentColor(textInput.value) }}>Ok</button>
                        <button onClick={()=>this.toggleIsHidden()}>{this.state.isHidden ? 'Show' : 'Hide'}</button>
                    </div>
                    <div className="clear" />
                </div>
                
          
        );
        //{ this.props.showTitle && <strong>TITLE</strong> } you can use this command if you want to use boolean
    }
}

Square.propTypes = {
    initialColor: PropTypes.string,
    size: PropTypes.number.isRequired,
    initialIsHidden: PropTypes.bool,
};

Square.defaultProps = {
    initialColor:'grey',
    initialIsHidden: false,
};