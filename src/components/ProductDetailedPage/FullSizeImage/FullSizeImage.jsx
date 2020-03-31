import React from 'react';
import styles from './FullSizeImage.module.scss';
import { connect } from 'react-redux';
import { toogleIsFullSizeImg } from '../../../redux/carousel-reducer';
import preview1 from '../../../assets/images/PG.10216885.JJ169XX.PZ.jpg'
import preview2 from '../../../assets/images/PG.10216885.JJ169XX.BZ.jpg'
import preview3 from '../../../assets/images/PG.10216885.JJ8UTXX.BZ.jpg'
import preview4 from '../../../assets/images/PG.10216885.JJ8UTXX.PZ.jpg'

class FullSizeImage extends React.Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (e) => {
        if (e.keyCode === 27) {
            this.props.toogleIsFullSizeImg(false);
        }
    }

    render() {
        let previews = [preview1, preview2, preview3, preview4];

        return <>
            {this.props.isFullSizeImg? 
            <div>
                <div className={styles.modalWrap}>
                    {previews.map((p, index) => {
                        return this.props.currentPreview === (index+1) ?
                        <img src={p}/>
                        : null
                    })}
                </div>
                <div onClick={() => { this.props.toogleIsFullSizeImg(false) }} className={styles.overlay}></div>
            </div>
            :null}
        </>
        
    }
}

let mapStateToProps = (state) => {
    return {
        isFullSizeImg: state.carouselState.isFullSizeImg,
        currentPreview: state.carouselState.currentPreview,
    }
}

export default connect(mapStateToProps, { toogleIsFullSizeImg })(FullSizeImage);
