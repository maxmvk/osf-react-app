import React from 'react';
import { connect } from 'react-redux';
import { toogleIsContactOpen, toogleIsCategoriestOpen, toogleIsAboutOpen } from '../../redux/footer-reducer';
import Footer from './Footer';

class FooterContainer extends React.Component {

    render() {
        return (
        <Footer isContactOpen={this.props.isContactOpen} 
                isCategoriestOpen={this.props.isCategoriestOpen} 
                isAboutOpen={this.props.isAboutOpen} 
                toogleIsContactOpen={this.props.toogleIsContactOpen}
                toogleIsCategoriestOpen={this.props.toogleIsCategoriestOpen}
                toogleIsAboutOpen={this.props.toogleIsAboutOpen}/>
        )
        
    }
}

let mapStateToProps = (state) => {
    return {
        isContactOpen: state.footerState.isContactOpen,
        isCategoriestOpen: state.footerState.isCategoriestOpen,
        isAboutOpen: state.footerState.isAboutOpen,
    }
}

export default connect(mapStateToProps, { toogleIsContactOpen, toogleIsCategoriestOpen, toogleIsAboutOpen })(FooterContainer);