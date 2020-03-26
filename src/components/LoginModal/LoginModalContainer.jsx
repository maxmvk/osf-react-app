import React from 'react';
import { connect } from 'react-redux';
import { toogleIsLoginModal, toogleIsPasswordVisible } from '../../redux/header-reducer';
import LoginModal from './LoginModal';

class LoginModalContainer extends React.Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (e) => {
        if (e.keyCode === 27) {
            this.props.toogleIsLoginModal(false);
        }
    }

    render() {
        return <>
            {this.props.isLoginModal? 
            <LoginModal isLoginModal={this.props.isLoginModal} 
                        isPasswordVisible={this.props.isPasswordVisible} 
                        toogleIsLoginModal={this.props.toogleIsLoginModal}
                        toogleIsPasswordVisible={this.props.toogleIsPasswordVisible}/>
            :null}
        </>
        
    }
}

let mapStateToProps = (state) => {
    return {
        isLoginModal: state.headerState.isLoginModal,
        isPasswordVisible: state.headerState.isPasswordVisible
    }
}

export default connect(mapStateToProps, { toogleIsLoginModal, toogleIsPasswordVisible })(LoginModalContainer);