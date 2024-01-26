import React from 'react';
import './../vendors/typicons.font/font/typicons.css';
import './../css/vertical-layout-light/style.css'
import { Link } from 'react-router-dom';

function ListAnnonce() {
  return (
    <>    
    <div className="container-scroller">
      <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <a className="navbar-brand brand-logo-mini" href="index.html"><img src="images/logo-mini.svg" alt="logo"/></a>
          <button className="navbar-toggler navbar-toggler align-self-center d-none d-lg-flex" type="button" data-toggle="minimize">
            <span className="typcn typcn-th-menu"></span>
          </button>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
          <ul className="navbar-nav mr-lg-2">
            <li className="nav-item  d-none d-lg-flex">
              <a className="nav-link" href="listAnnonce">
                Annonce
              </a>
            </li>
            <li className="nav-item  d-none d-lg-flex">
              <a className="nav-link active" href="#">
                Statistic
              </a>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item d-none d-lg-flex  mr-2">
              <a className="nav-link" href="#">
                Help
              </a>
            </li>
            <li className="nav-item dropdown d-flex">
              <a className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown" href="#" data-toggle="dropdown">
                <i className="typcn typcn-message-typing"></i>
                <span className="count bg-success">2</span>
              </a>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                <p className="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img src="images/faces/face4.jpg" alt="image" className="profile-pic" />
                  </div>
                  <div className="preview-item-content flex-grow">
                    <h6 className="preview-subject ellipsis font-weight-normal">David Grey
                    </h6>
                    <p className="font-weight-light small-text mb-0">
                      The meeting is cancelled
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img src="images/faces/face2.jpg" alt="image" className="profile-pic" />
                  </div>
                  <div className="preview-item-content flex-grow">
                    <h6 className="preview-subject ellipsis font-weight-normal">Tim Cook
                    </h6>
                    <p className="font-weight-light small-text mb-0">
                      New product launch
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img src="images/faces/face3.jpg" alt="image" className="profile-pic" />
                  </div>
                  <div className="preview-item-content flex-grow">
                    <h6 className="preview-subject ellipsis font-weight-normal"> Johnson
                    </h6>
                    <p className="font-weight-light small-text mb-0">
                      Upcoming board meeting
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown  d-flex">
              <a className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center" id="notificationDropdown" href="#" data-toggle="dropdown">
                <i className="typcn typcn-bell mr-0"></i>
                <span className="count bg-danger">2</span>
              </a>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-success">
                      <i className="typcn typcn-info-large mx-0"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject font-weight-normal">Application Error</h6>
                    <p className="font-weight-light small-text mb-0">
                      Just now
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-warning">
                      <i className="typcn typcn-cog mx-0"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject font-weight-normal">Settings</h6>
                    <p className="font-weight-light small-text mb-0">
                      Private message
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-info">
                      <i className="typcn typcn-user-outline mx-0"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject font-weight-normal">New user registration</h6>
                    <p className="font-weight-light small-text mb-0">
                      2 days ago
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item nav-profile dropdown">
              <a className="nav-link dropdown-toggle  pl-0 pr-0" href="#" data-toggle="dropdown" id="profileDropdown">
                <i className="typcn typcn-user-outline mr-0"></i>
                <span className="nav-profile-name">Evan Morales</span>
              </a>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                <a className="dropdown-item">
                <i className="typcn typcn-cog text-primary"></i>
                Settings
                </a>
                <a className="dropdown-item">
                <i className="typcn typcn-power text-primary"></i>
                Logout
                </a>
              </div>
            </li>
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
            <span className="typcn typcn-th-menu"></span>
          </button>
        </div>
      </nav>
      <div className="container-fluid page-body-wrapper">
        <div className="theme-setting-wrapper">
          <div id="settings-trigger"><i className="typcn typcn-cog-outline"></i></div>
          <div id="theme-settings" className="settings-panel">
            <i className="settings-close typcn typcn-delete-outline"></i>
            <p className="settings-heading">SIDEBAR SKINS</p>
            <div className="sidebar-bg-options" id="sidebar-light-theme">
              <div className="img-ss rounded-circle bg-light border mr-3"></div>
              Light
            </div>
            <div className="sidebar-bg-options selected" id="sidebar-dark-theme">
              <div className="img-ss rounded-circle bg-dark border mr-3"></div>
              Dark
            </div>
            <p className="settings-heading mt-2">HEADER SKINS</p>
            <div className="color-tiles mx-0 px-4">
              <div className="tiles success"></div>
              <div className="tiles warning"></div>
              <div className="tiles danger"></div>
              <div className="tiles primary"></div>
              <div className="tiles info"></div>
              <div className="tiles dark"></div>
              <div className="tiles default border"></div>
            </div>
          </div>
        </div>
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item">
            <div className="d-flex sidebar-profile">
              <div className="sidebar-profile-image">
                <img src="images/faces/face29.png" alt="image" />
                <span className="sidebar-status-indicator"></span>
              </div>
              <div className="sidebar-profile-name">
                <p className="sidebar-name">
                  Kenneth Osborne
                </p>
                <p className="sidebar-designation">
                  Welcome
                </p>
              </div>
            </div>
            <div className="nav-search">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Type to search..." aria-label="search" aria-describedby="search" />
                <div className="input-group-append">
                  <span className="input-group-text" id="search">
                    <i className="typcn typcn-zoom"></i>
                  </span>
                </div>
              </div>
            </div>
            <p className="sidebar-menu-title">Dash for</p>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="backhome">
              <i className="typcn typcn-device-desktop menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="formMarque">
              <i className="typcn typcn-film menu-icon"></i>
              <span className="menu-title">Formulaire marque</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="formModele">
              <i className="typcn typcn-film menu-icon"></i>
              <span className="menu-title">Formulaire modele</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="formCarburant">
              <i className="typcn typcn-film menu-icon"></i>
              <span className="menu-title">Formulaire type de carburant</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="formCaracteristique">
              <i className="typcn typcn-film menu-icon"></i>
              <span className="menu-title">Formulaire caracteristique</span>
            </a>
          </li>
        </ul>
        <ul className="sidebar-legend">
          <li>
            <p className="sidebar-menu-title">Category</p>
          </li>
          <li className="nav-item"><a href="#" className="nav-link">#Sales</a></li>
          <li className="nav-item"><a href="#" className="nav-link">#Marketing</a></li>
          <li className="nav-item"><a href="#" className="nav-link">#Growth</a></li>
        </ul>
      </nav>
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                    <h4 className="card-title">Liste des annonces en attente</h4>
                    <div className="table-responsive">
                        <table className="table table-striped">
                        <thead>
                            <tr>
                            <th>
                                User
                            </th>
                            <th>
                                Date
                            </th>
                            <th>
                                Annonce
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Herman Beck</td>
                            <td>July 1, 2015</td>
                            <td>Voiture</td>
                            <td><label className="badge badge-info">Detail</label></td>
                            <td><label class="badge badge-success">Validez</label></td>
                            </tr>
                            <tr>
                            <td>Messsy Adam</td>
                            <td>July 1, 2015</td>
                            <td>Voiture</td>
                            <td><label className="badge badge-info">Detail</label></td>
                            <td><label class="badge badge-success">Validez</label></td>
                            </tr>
                            <tr>
                            <td>John Richards</td>
                            <td>July 1, 2015</td>
                            <td>Voiture</td>
                            <td><label className="badge badge-info">Detail</label></td>
                            <td><label class="badge badge-success">Validez</label></td>
                            </tr>
                            <tr>
                            <td>Peter Meggik</td>
                            <td>July 1, 2015</td>
                            <td>Voiture</td>
                            <td><label className="badge badge-info">Detail</label></td>
                            <td><label class="badge badge-success">Validez</label></td>
                            </tr>
                            <tr>
                            <td>Edward</td>
                            <td>July 1, 2015</td>
                            <td>Voiture</td>
                            <td><label className="badge badge-info">Detail</label></td>
                            <td><label class="badge badge-success">Validez</label></td>
                            </tr>
                            <tr>
                            <td>John Doe</td>
                            <td>July 1, 2015</td>
                            <td>Voiture</td>
                            <td><label className="badge badge-info">Detail</label></td>
                            <td><label class="badge badge-success">Validez</label></td>
                            </tr>
                            <tr>
                            <td>Henry Tom</td>
                            <td>July 1, 2015</td>
                            <td>Voiture</td>
                            <td><label className="badge badge-info">Detail</label></td>
                            <td><label class="badge badge-success">Validez</label></td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>
            </div>
          </div>
          <footer className="footer">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
              <span className="text-center text-sm-left d-block d-sm-inline-block">Copyright © <a href="https://www.bootstrapdash.com/" target="_blank">bootstrapdash.com</a> 2020</span>
              <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Free <a href="https://www.bootstrapdash.com/" target="_blank">Bootstrap dashboard </a>templates from Bootstrapdash.com</span>
            </div>
          </footer>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default ListAnnonce;
