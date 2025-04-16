import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="fixed top-0 z-50 w-full bg-white border-b dark:bg-gray-800">
                <div className="px-3 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <a href={this.props.link} className="text-xl font-semibold dark:text-white">
                                {this.props.title}
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
