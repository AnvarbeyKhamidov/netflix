import React from 'react';

function Footer(props) {
    return (
        <>
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col 16 s12">
                            <div className="footer-copyright">
                                <div className="container">
                                    © {new Date().getFullYear()} 0{new Date().getMonth()} {new Date().getDate()} Copyright Text
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;