import React from 'react';
import { connect } from 'react-redux';
import { setCookiePolicy, setCookies, setPolicyVisibility } from '../../redux/cookie-reducer';
import CookiesPolicy from './CookiesPolicy';
import Cookies from 'universal-cookie';

class CookiesPolicyContainer extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.setPolicyVisibility(true)
        }, 10000);
    }

    onAcceptPolicy  = () => {
        const cookies = new Cookies();
        cookies.set('notification', 'Accepted')
        this.props.setCookies(cookies);
    }

    onClosePolicy  = () => {
        this.props.setCookiePolicy(false);
    }

    render() {
        return <>
            {(this.props.isVisible)&&(this.props.cookies.get('notification') !== 'Accepted')&&(this.props.isCookiePolicy) ? 
            <CookiesPolicy isCookiePolicy={this.props.isCookiePolicy} 
                           setCookiePolicy={this.props.setCookiePolicy}
                           onClosePolicy={this.onClosePolicy}
                           onAcceptPolicy={this.onAcceptPolicy}/>
            :null}
        </>
        
    }
}

let mapStateToProps = (state) => {
    return {
        isCookiePolicy: state.cookieState.isCookiePolicy,
        cookies: state.cookieState.cookies,
        isVisible: state.cookieState.isVisible
    }
}

export default connect(mapStateToProps, { setCookiePolicy , setCookies, setPolicyVisibility })(CookiesPolicyContainer);