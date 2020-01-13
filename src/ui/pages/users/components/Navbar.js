import React from 'react';
import { connect } from 'react-redux';

import styles from './navbar.module.css';

class Navbar extends React.Component {
    state = {
        mobNavMenuExpanded: true,
        userDropListExpanded: false
    };

    showUserDropList = () => {
        // console.log('show list');
        this.setState({
            userDropListExpanded: !this.state.userDropListExpanded
        });
    };

    renderLogoHam = () => {
        return (
            <div className={styles.logoHam}>
                <span
                    className={styles.navbarToggle}
                    id="js-navbar-toggle"
                    onClick={() => {
                        this.setState({
                            mobNavMenuExpanded: !this.state.mobNavMenuExpanded
                        });
                    }}
                >
                    =
                </span>
                <a href="#" className={styles.logo}>
                    logo
                </a>
                {/* {this.renderUserSection2()} */}
            </div>
        );
    };

    renderLinks = () => {
        return (
            <ul
                className={
                    styles.mainNav +
                    ' ' +
                    (this.state.mobNavMenuExpanded ? styles.active : '')
                }
                id="js-menu"
            >
                <li>
                    <a href="#" className={styles.navLinks}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className={styles.navLinks}>
                        Products
                    </a>
                </li>
                <li>
                    <a href="#" className={styles.navLinks}>
                        About Us
                    </a>
                </li>
                <li>
                    <a href="#" className={styles.navLinks}>
                        Contact Us
                    </a>
                </li>
            </ul>
        );
    };

    renderUserSection2 = () => {
        const name = this.props.user.name || '',
            email = this.props.user.userName || '';
        const nameArr = name.split(' ');

        const initials =
            nameArr[0].charAt(0) + (nameArr[1] ? nameArr[1].charAt(0) : '');

        const noop = e => {
            e.preventDefault();
        };

        const logout = e => {
            e.preventDefault();
        };

        return (
            <div
                className={
                    styles.mainNav +
                    ' ' +
                    (this.state.mobNavMenuExpanded
                        ? styles.active
                        : styles.active)
                }
            >
                <span
                    className={styles.logo + ' ' + styles.userInitials}
                    onClick={this.showUserDropList}
                >
                    {initials}
                </span>
                {this.state.userDropListExpanded ? (
                    <ul className={styles.userDropList} aria-label="submenu">
                        <li>
                            <a href="#" onClick={noop}>
                                You are signed in as {name} {email}
                            </a>
                        </li>
                        <li className={styles.divider}></li>
                        <li>
                            <a href="#" onClick={logout}>
                                {' '}
                                Logout
                            </a>
                        </li>
                    </ul>
                ) : null}
            </div>
        );
    };

    render() {
        console.log(this.state.mobNavMenuExpanded);

        return (
            <nav
                className={styles.navbar}
                role="navigation"
                // style={{
                //     display: this.state.mobNavMenuExpanded ? 'flex' : 'none'
                // }}
            >
                <div>{this.renderLogoHam()}</div>

                <div>{this.renderLinks()}</div>

                <div>{this.renderUserSection2()}</div>
            </nav>
        );
    }
}

// export default Navbar;

const mapStateToProps = state => {
    // console.log(state);

    // const userResp = state.user ? state.user.aadResponse : {};

    // const user = userResp ? userResp.account : null;

    return {
        user: {
            name: 'Akshay',
            userName: 'a.b@c.com'
        }
    };
};

export default connect(mapStateToProps)(Navbar);
