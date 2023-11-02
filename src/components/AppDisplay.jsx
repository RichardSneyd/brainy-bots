import PropTypes from 'prop-types';

const AppDisplay = ({imgSrc, webUrl, androidUrl, chromeUrl, windowsUrl, children }) => {
    return (
        <article className="py-5">
            {/* <hr />
            <br /> */}
            <div className="row">
                <div className="col-md-6">
                   {children}
                    <div className='d-flex'>
                        {webUrl && <a href={webUrl} className="btn btn-outline-primary mr-2 btn-lg" target='_blank' rel='noopener noreferrer'>
                            <i className="fa fa-globe"></i> Web
                        </a>}
                        {androidUrl && <a href={androidUrl} className="btn btn-outline-success mr-2 btn-lg" target='_blank' rel='noopener noreferrer'>
                            <i className="fa fa-android"></i> Android
                        </a>}
                        {chromeUrl && <a href={chromeUrl} className="btn btn-outline-dark mr-2 btn-lg" target='_blank' rel='noopener noreferrer'>
                            <i className="fa fa-chrome"></i> Chrome
                        </a>}
                        {windowsUrl && <a href={windowsUrl} className="btn btn-outline-info btn-lg" target='_blank' rel='noopener noreferrer'>
                            <i className="fa fa-windows"></i> Windows
                        </a>}
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={imgSrc} alt="App Display" className="img-fluid rounded smaller-on-mobile" width="auto" />
                </div>
            </div>
        </article>
    );
};

AppDisplay.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    webUrl: PropTypes.any,
    androidUrl: PropTypes.any,
    chromeUrl: PropTypes.any,
    windowsUrl: PropTypes.any,
    children: PropTypes.any
};

export default AppDisplay;
