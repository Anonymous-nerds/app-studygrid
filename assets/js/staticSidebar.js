const renderSidebarDiv = document.querySelector(".renderSidebarDiv");

const renderSidebar = `<div>
          <div
            class="brand-logo d-flex align-items-center justify-content-between"
          >
            <a href="./index.html" class="text-nowrap logo-img">
              <img
                src="assets/images/logos/study-grid-logo.png"
                width="180"
                alt=""
              />
            </a>
            <div
              class="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
              id="sidebarCollapse"
            >
              <i class="ti ti-x fs-8"></i>
            </div>
          </div>
          <!-- Sidebar navigation-->
          <nav class="sidebar-nav scroll-sidebar" data-simplebar="">
            <ul id="sidebarnav" class="">
              <li class="nav-small-cap">
                <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span class="hide-menu">Home</span>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link"
                  href="./index.html"
                  aria-expanded="false"
                >
                  <span>
                    <i class="ti ti-layout-dashboard"></i>
                  </span>
                  <span class="hide-menu">Dashboard</span>
                </a>
              </li>
              <li class="nav-small-cap">
                <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span class="hide-menu">Academic Utilities</span>
              </li>

              <li class="nav-small-cap">
                <i class="nav-small-cap-icon fs-5"></i>
                <span class="hide-menu">Resources:</span>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link"
                  href="./books.html"
                  aria-expanded="false"
                >
                  <span>
                    <i class="ti ti-files"></i>
                  </span>
                  <span class="hide-menu">Document</span>
                </a>
                <!-- <a class="sidebar-link dropdown-menu</a>" href="./library-books.html">Books</a>
            <a class="sidebar-link " href="./library-journals.html">Journals</a>
            <a class="sidebar-link " href="./library-media.html">Media</a> -->
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link"
                  href="./ui-alerts.html"
                  aria-expanded="false"
                >
                  <span>
                    <i class="ti ti-link"></i>
                  </span>
                  <span class="hide-menu">Media</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link"
                  href="./ui-card.html"
                  aria-expanded="false"
                >
                  <span>
                    <i class="ti ti-cards"></i>
                  </span>
                  <span class="hide-menu">Open library</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link"
                  href="./ui-forms.html"
                  aria-expanded="false"
                >
                  <span>
                    <i class="ti ti-file-description"></i>
                  </span>
                  <span class="hide-menu">Forms</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link"
                  href="./profile.html"
                  aria-expanded="false"
                >
                  <span>
                    <i class="ti ti-user"></i>
                  </span>
                  <span class="hide-menu">Profile</span>
                </a>
              </li>
              <li class="nav-small-cap">
                <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span class="hide-menu">AUTH</span>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link"
                  href="./authentication-login.html"
                  aria-expanded="false"
                >
                  <span>
                    <i class="ti ti-login"></i>
                  </span>
                  <span class="hide-menu">Login</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link"
                  href="./authentication-register.html"
                  aria-expanded="false"
                >
                  <span>
                    <i class="ti ti-user-plus"></i>
                  </span>
                  <span class="hide-menu">Register</span>
                </a>
              </li>
              <li class="nav-small-cap">
                <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span class="hide-menu">EXTRA</span>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link"
                  href="./icon-tabler.html"
                  aria-expanded="false"
                >
                  <span>
                    <i class="ti ti-mood-happy"></i>
                  </span>
                  <span class="hide-menu">Icons</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link"
                  href="./sample-page.html"
                  aria-expanded="false"
                >
                  <span>
                    <i class="ti ti-aperture"></i>
                  </span>
                  <span class="hide-menu">Sample Page</span>
                </a>
              </li>
            </ul>
            <div
              class="unlimited-access hide-menu bg-light-primary position-relative mb-7 mt-5 rounded"
            >
              <div class="d-flex">
                <div class="unlimited-access-title me-3">
                  <h6 class="fw-semibold fs-4 mb-6 text-dark w-85">
                    Upgrade to pro
                  </h6>
                  <a
                    href="https://adminmart.com/product/modernize-bootstrap-5-admin-template/"
                    target="_blank"
                    class="btn btn-primary fs-2 fw-semibold lh-sm"
                    >Buy Pro</a
                  >
                </div>
                <div class="unlimited-access-img">
                  <img
                    src="assets/images/backgrounds/rocket.png"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </nav>
          <!-- End Sidebar navigation -->
        </div>
        <!-- End Sidebar scroll-->
`;

// Inject the sidebar HTML content into the aside element
renderSidebarDiv.innerHTML = renderSidebar;
