import React, { Component } from 'react';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleSidebar = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div className="relative">
        {/* Toggle Button with margin top to prevent overlap with navbar */}
        <button
          onClick={this.toggleSidebar}
          className="m-4 p-2 bg-white-600 text-white rounded mt-20" // Adjusted margin-top to mt-20
        >
         <img src='./menu.svg' className='w-6 h-6'></img> 
        </button>

        {/* Sidebar */}
        {this.state.isOpen && (
          <aside
            className="w-64 h-screen bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 transition-transform"
            aria-label="Sidebar"
          >
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
              <ul>
                <li>
                  <a
                    href="./user-dashboard.php"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                      />
                    </svg>
                    <span className="ml-3">Back To Dashboard</span>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        )}
      </div>
    );
  }
}

export default Sidebar;
