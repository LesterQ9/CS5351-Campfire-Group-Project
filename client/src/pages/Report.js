import React from 'react';
import '../style/report.css'

const Report = ({ testResults }) => {
    // eslint-disable-next-line no-unused-vars 
    const testNames = testResults.map((test) => test.fullName);
    // eslint-disable-next-line no-unused-vars 
    const testStatus = testResults.map((test) => test.status);

    return (
        <></>
        // <>
        //     <div class="loader"></div>
        //     <div class="sidenav">
        //         <a onclick="openPage('dashboard', this, '', '', '')" href="#dashboard">
        //             <img id="wrimagecard" class="wrimagecard" src="https://i.imgur.com/LRSRHJO.png" style="max-width:98%;" />
        //         </a>
        //         <a class="tablink" href="#dashboard" id="defaultOpen" onclick="openPage('dashboard', this, 'white', '#565656', 'groove')">
        //             <i class="fa fa-home" id="tablinkicon" style="color:currentcolor; margin:5% 5% 5% 10%"></i> Dashboard
        //         </a>
        //         <a class="tablink" href="#suites" onclick="openPage('suiteMetrics', this, 'white', '#565656', 'groove'); executeDataTable('#sm',2)">
        //             <i class="fa fa-briefcase" id="tablinkicon" style="color:currentcolor; margin:5% 5% 5% 10%"></i> Suites
        //         </a>
        //         <a class="tablink" href="#test-metrics" onclick="openPage('testMetrics', this, 'white', '#565656', 'groove'); executeDataTable('#tm',3)">
        //             <i class="fa fa-server" id="tablinkicon" style="color:currentcolor; margin:5% 5% 5% 10%"></i> Test Metrics
        //         </a>
        //         <a class="tablink" href="#archives" onclick="openPage('archives', this, 'white', '#565656', 'groove');">
        //             <i class="fa fa-history" id="tablinkicon" style="color:currentcolor; margin:5% 5% 5% 10%"></i> Archives
        //         </a>
        //         {/* <a class="tablink" href="#screenshots" onclick="openPage('screenshots', this, 'white', '#565656', 'groove');">
        //             <i class="fa fa-camera" id="tablinkicon" style="color:currentcolor; margin:5% 5% 5% 10%"></i> Screenshots
        //         </a> */}
        //     </div>
        //     <div class="main col-md-9 ml-sm-auto col-lg-10 px-4" style="height: 100%;">
        //         <div class="tabcontent" id="dashboard">

        //             <div class="row rowcard">
        //                 <div class="col-md-6 card" style="max-width: 49%;">
        //                     <div style="width:100%;height:500px;text-align: center;">
        //                         <div class="card__content">
        //                             <div style="margin-bottom: -4%; margin-left: 30%;">
        //                                 <span class="time__taken">
        //                                     <svg width="22px" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
        //                                         focusable="false"
        //                                         style="margin: -1% 2% 0% 29%; -ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
        //                                         preserveAspectRatio="xMidYMid meet" viewBox="0 0 1536 1536">
        //                                         <path
        //                                             d="M896 416v448q0 14-9 23t-23 9H544q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h224V416q0-14 9-23t23-9h64q14 0 23 9t9 23zm416 352q0-148-73-273t-198-198t-273-73t-273 73t-198 198t-73 273t73 273t198 198t273 73t273-73t198-198t73-273zm224 0q0 209-103 385.5T1153.5 1433T768 1536t-385.5-103T103 1153.5T0 768t103-385.5T382.5 103T768 0t385.5 103T1433 382.5T1536 768z"
        //                                             fill="#a9a9a9" />
        //                                     </svg>
        //                                     Time taken 00:01:19 Hrs
        //                                 </span>
        //                             </div>
        //                             <div>
        //                                 <div class="card__header">
        //                                     <div class="header__title">
        //                                         PYTEST REPORT
        //                                     </div>
        //                                 </div>
        //                                 <div class="card__header">
        //                                     <span class="header__date">December 04, 2023</span>
        //                                 </div>
        //                                 <div style="display: flex;">
        //                                     <span class="total__count">88</span>
        //                                 </div>
        //                                 <div style="display: flex;">
        //                                     <span class="total_count__label">TEST CASES</span>
        //                                 </div>
        //                             </div>
        //                             <div>
        //                                 <div class="outer_my_chart">
        //                                     <canvas id="myChart" class="inner_my_chart" style="height: 38%;"></canvas>
        //                                 </div>
        //                             </div>
        //                             <div style="margin-top: 23%;position: static;">
        //                                 <div class="suite_count_section">
        //                                     <div class="card__footer">
        //                                         <div class="card__footer-section">
        //                                             <div class="footer-section__data" style="color:#98cc64">88</div>
        //                                             <div class="footer-section__label">passed</div>
        //                                         </div>
        //                                         <div class="card__footer-section">
        //                                             <div class="footer-section__data" style="color:#fc6766">0</div>
        //                                             <div class="footer-section__label">failed</div>
        //                                         </div>
        //                                         <div class="card__footer-section">
        //                                             <div class="footer-section__data" style="color:#ffd050">0</div>
        //                                             <div class="footer-section__label">skipped</div>
        //                                         </div>
        //                                         <div class="card__footer-section">
        //                                             <div class="footer-section__data" style="color:#aaaaaa">0</div>
        //                                             <div class="footer-section__label">xpassed</div>
        //                                         </div>
        //                                         <div class="card__footer-section">
        //                                             <div class="footer-section__data" style="color:#d35fbf">0</div>
        //                                             <div class="footer-section__label">xfailed</div>
        //                                         </div>
        //                                         <div class="card__footer-section">
        //                                             <div class="footer-section__data" style="color:#b13635">0</div>
        //                                             <div class="footer-section__label">error</div>
        //                                         </div>
        //                                         <div class="card__footer-section">
        //                                             <div class="footer-section__data" style="color:#e6a800">0</div>
        //                                             <div class="footer-section__label">rerun</div>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>

        //                 <div class="col-md-6 card" style="margin-left: 0.75%;">
        //                     <a href="#" id="download" download="pytest-html-reporter.pdf" target="_self">
        //                         <i class="fa fa-download"
        //                             style="color:dimgrey; font-size: 1.75rem; padding-top: 2%; float: right; position: fixed; right: 50px;"></i>
        //                     </a>
        //                     <div style="text-align: center;">
        //                         <div>
        //                             <div class="dashboard__headers">
        //                                 <div style="font-weight: 550;font-family: sans-serif;padding-top: 5%;padding-left: 2%;">
        //                                     <svg height="32pt" viewBox="0 0 512 512.00007" width="25pt"
        //                                         xmlns="http://www.w3.org/2000/svg">
        //                                         <path style="fill: currentColor;"
        //                                             d="m509.785156 15.433594c-.773437-6.972656-6.277344-12.480469-13.253906-13.253906-118.703125-13.183594-219.890625 34.300781-302.429688 119.265624-23.621093 24.316407-44.109374 50.054688-61.597656 74.894532-29.597656-1.203125-62.414062 12.1875-85.679687 35.453125l-42.429688 42.429687c-4.800781 4.800782-5.777343 12.230469-2.382812 18.109375 3.394531 5.878907 10.3125 8.742188 16.875 6.988281 9.84375-2.644531 25.839843-5.71875 41.207031-6.433593 5.617188-.261719 10.285156-.179688 14.164062.117187-9.363281 18.007813-16.539062 33.09375-18.917968 36.871094-3.726563 5.929688-2.863282 13.644531 2.089844 18.597656l24.550781 24.550782c-35.730469 48.730468-36.320313 73.6875-36.195313 77.222656.261719 7.488281 6.101563 14.503906 15.773438 14.503906 8.375 0 32.394531-3.554688 76.121094-36.027344l25.824218 25.824219c4.988282 4.988281 12.78125 5.824219 18.71875 2.011719 4.039063-2.597656 18.238282-9.472656 35.265625-18.371094.28125 12.691406-1.441406 31.328125-5.179687 56.589844-2.125 14.328125 15.292968 22.953125 25.445312 12.804687l42.429688-42.429687c21.878906-21.878906 34.566406-54.375 33.628906-84.859375 26.167969-18.285157 53.390625-39.855469 78.808594-64.78125 84.15625-82.527344 130.179687-182.949219 117.164062-300.078125zm-28.695312 15.4375c2.394531 32.34375-.160156 63.695312-7.601563 94.035156-18.480469-5.820312-36.546875-17.253906-52.863281-33.566406-16.375-16.378906-27.832031-34.519532-33.628906-53.066406 30.328125-7.332032 61.699218-9.816407 94.09375-7.402344zm-422.953125 232.039062 9.898437-9.902344c11.972656-11.96875 27.542969-20.589843 43.027344-24.464843-8.089844 12.839843-15.300781 25.101562-21.660156 36.417969-9.824219-2.167969-20.746094-2.570313-31.265625-2.050782zm28.386719 72.230469c3.246093-6.40625 7.171874-14.4375 14.378906-28.054687l19.746094 19.75c-7.347657 7.882812-13.980469 15.371093-19.957032 22.46875zm73.355468-5.738281c10.929688-10.925782 21.410156-12.921875 34.429688-13.203125-.285156 12.6875-2.320313 23.523437-13.214844 34.417969-46.570312 46.570312-78.492188 67.367187-97.582031 76.648437 9.417969-19.457031 30.269531-51.765625 76.367187-97.863281zm16.871094 95.964844-15.46875-15.472657c7.0625-6 14.527344-12.652343 22.402344-20.027343l21.019531 21.019531c-13.820313 7.378906-19.585937 10.15625-27.953125 14.480469zm82.214844 18.570312-12.007813 12.011719c.972657-14.550781.636719-25.152344-.738281-33.332031 11.03125-6.210938 23.011719-13.253907 35.566406-21.132813-3.578125 15.859375-11.621094 31.257813-22.820312 42.453125zm-26.953125-48.167969-26.894531-26.898437c19.902343-21.898438 19.160156-43 19.160156-67.652344 0-8.285156-6.714844-15-15-15-23.03125 0-45.195313-1.234375-67.652344 19.164062l-25.683594-25.683593c70.132813-122.980469 151.199219-200.839844 242.28125-232.902344 7.210938 23.332031 21.246094 45.8125 41.191406 65.757813 19.851563 19.855468 42.226563 33.855468 65.457032 41.09375-32.25 90.582031-110.089844 171.597656-232.859375 242.121093zm0 0" />
        //                                         <path style="fill: currentColor;"
        //                                             d="m378.199219 133.765625c-29.246094-29.242187-76.832031-29.242187-106.074219 0-29.242188 29.246094-29.242188 76.832031 0 106.074219 29.242188 29.242187 76.828125 29.246094 106.074219 0 29.242187-29.242188 29.242187-76.828125 0-106.074219zm-21.214844 84.859375c-17.546875 17.546875-46.101563 17.546875-63.644531 0-17.546875-17.546875-17.546875-46.097656 0-63.644531 17.542968-17.542969 46.09375-17.546875 63.644531 0 17.546875 17.546875 17.546875 46.097656 0 63.644531zm0 0" />
        //                                     </svg>&nbsp;&nbsp;Trends
        //                                 </div>
        //                             </div>
        //                             <canvas id="trends" width="100%" height="360px"
        //                                 style="margin-top: 10%; max-height: 375px; padding-bottom: 4%;"></canvas>
        //                         </div>
        //                     </div>
        //                 </div>

        //             </div>

        //             <div class="row rowcard" style="padding-top: 0.8%;">
        //                 <div class="col-md-8 card border-right">
        //                     <div class="dashboard__headers">
        //                         <div style="font-weight: 550;font-family: sans-serif;padding-top: 5%;padding-left: 5%;">
        //                             <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" width="1.34em"
        //                                 height="1em"
        //                                 style="margin-top: -1%; margin-right: 2%; padding-left: 0.9%; -ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
        //                                 preserveAspectRatio="xMidYMid meet" viewBox="0 0 2048 1536">
        //                                 <path d="M2048 1408v128H0V0h128v1408h1920zM1664 384l256 896H256V704l448-576l576 576z"
        //                                     fill="#a9a9a9" />
        //                             </svg>Test Suite
        //                             10
        //                         </div>
        //                     </div>
        //                     <canvas class="chart" id="groupBarChart"
        //                         style="margin-top: 6%; height: 451px; width: 903px;"></canvas>
        //                 </div>
        //                 <div class="col-md-4 card border-left"
        //                     style="max-width: 32.4%; padding-left: 3%; padding-top: 2%; margin-left: 0.75%;">
        //                     <div class="dashboard__headers">
        //                         <div style="font-weight: 550;font-family: sans-serif;padding-top: 5%;padding-left: 2%;">
        //                             <i class="fa fa-bolt" style="color:currentcolor; margin-right: 2%; padding-left: 3%;"></i>
        //                             Suite Highlights
        //                         </div>
        //                         <div>
        //                             <div class="loading">
        //                                 <div style="display: flow-root;">
        //                                     <div class="tooltip bs-tooltip-top tooltip-dark" role="tooltip">
        //                                         <div class="arrow" style="left: 50%"></div>
        //                                         <div class="tooltip-inner">No failures in History</div>
        //                                     </div>
        //                                     <p class="percentage">0<sup> /0</sup> Times</p>
        //                                 </div>
        //                                 <div class="progress-bar downloading"></div>
        //                                 <span class="suite-highlights-header">MOST FAILED SUITE</span>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <hr />

        //             <div class="row">
        //                 <div class="col-md-12" style="width:auto;">
        //                     <p class="text-muted" style="text-align:center;font-size:9px"> <a
        //                         href="https://github.com/prashanth-sams/pytest-html-reporter"
        //                         target="_blank">pytest-html-reporter</a>
        //                     </p>
        //                 </div>
        //             </div>
        //             {/* <script>
        //                 window.onload = function () {
        //                     alignTotalCount();
        //                 failureScreenshots();
        //                 executeDataTable('#sm', 2);
        //                 executeDataTable('#tm', 3);
        //         };
        //             </script> */}
        //         </div>
        //         <div class="tabcontent" id="suiteMetrics">
        //             <table class="table row-border tablecard" id="sm">
        //                 <thead>
        //                     <tr>
        //                         <th>Suite</th>
        //                         <th>Pass</th>
        //                         <th>Fail</th>
        //                         <th>Skip</th>
        //                         <th>xPass</th>
        //                         <th>xFail</th>
        //                         <th>Error</th>
        //                         <th>Rerun</th>
        //                     </tr>
        //                 </thead>
        //                 <tbody>

        //                     <tr>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/a.py</td>
        //                         <td>9</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                     </tr>

        //                     <tr>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/b.py</td>
        //                         <td>9</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                     </tr>

        //                     <tr>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/c.py</td>
        //                         <td>7</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                     </tr>

        //                     <tr>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/d.py</td>
        //                         <td>9</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                     </tr>

        //                     <tr>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/e.py</td>
        //                         <td>9</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                     </tr>

        //                     <tr>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/f.py</td>
        //                         <td>9</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                     </tr>

        //                     <tr>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/g.py</td>
        //                         <td>9</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                     </tr>

        //                     <tr>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/h.py</td>
        //                         <td>9</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                     </tr>

        //                     <tr>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/i.py</td>
        //                         <td>9</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                     </tr>

        //                     <tr>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/j.py</td>
        //                         <td>9</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                         <td>0</td>
        //                     </tr>

        //                 </tbody>
        //             </table>
        //             <div class="row">
        //                 <div class="col-md-12" style="height:25px;width:auto;"></div>
        //             </div>
        //         </div>
        //         <div class="tabcontent" id="testMetrics">
        //             <table class="table row-border tablecard" id="tm">
        //                 <thead>
        //                     <tr>
        //                         <th>Suite</th>
        //                         <th>Test Case</th>
        //                         <th>Status</th>
        //                         <th>Time (s)</th>
        //                         <th>Error Message</th>
        //                     </tr>
        //                 </thead>
        //                 <tbody>

        //                     <tr>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/a.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">1</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr>

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/a.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">1</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr>

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/a.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">1</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr>

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/a.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">2</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr>

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/a.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">2</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/a.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">2</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/a.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">3</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/a.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">3</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/a.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">3</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/b.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">1</td>
        //                         <td>PASS</td>
        //                         <td>1.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/b.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">1</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/b.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">1</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/b.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">2</td>
        //                         <td>PASS</td>
        //                         <td>1.01</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/b.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">2</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/b.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">2</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/b.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">3</td>
        //                         <td>PASS</td>
        //                         <td>1.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/b.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">3</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/b.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">3</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/c.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">1</td>
        //                         <td>PASS</td>
        //                         <td>2.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/c.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">1</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/c.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">1</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/c.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">2</td>
        //                         <td>PASS</td>
        //                         <td>2.01</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/c.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">2</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/c.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">2</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/c.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">3</td>
        //                         <td>PASS</td>
        //                         <td>2.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/d.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">1</td>
        //                         <td>PASS</td>
        //                         <td>1.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/d.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">1</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/d.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">1</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/d.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">2</td>
        //                         <td>PASS</td>
        //                         <td>1.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/d.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">2</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/d.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">2</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/d.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">3</td>
        //                         <td>PASS</td>
        //                         <td>1.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/d.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">3</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/d.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">3</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/e.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">1</td>
        //                         <td>PASS</td>
        //                         <td>2.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/e.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">1</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/e.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">1</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/e.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">2</td>
        //                         <td>PASS</td>
        //                         <td>2.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/e.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">2</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/e.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">2</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/e.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">3</td>
        //                         <td>PASS</td>
        //                         <td>2.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/e.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">3</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/e.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">3</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/f.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">1</td>
        //                         <td>PASS</td>
        //                         <td>1.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/f.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">1</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/f.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">1</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/f.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">2</td>
        //                         <td>PASS</td>
        //                         <td>1.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/f.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">2</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/f.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">2</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/f.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">3</td>
        //                         <td>PASS</td>
        //                         <td>1.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/f.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">3</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/f.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">3</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/g.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">1</td>
        //                         <td>PASS</td>
        //                         <td>2.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/g.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">1</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/g.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">1</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/g.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">2</td>
        //                         <td>PASS</td>
        //                         <td>2.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/g.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">2</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/g.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">2</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/g.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">3</td>
        //                         <td>PASS</td>
        //                         <td>2.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/g.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">3</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/g.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">3</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/h.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">1</td>
        //                         <td>PASS</td>
        //                         <td>1.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/h.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">1</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/h.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">1</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/h.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">2</td>
        //                         <td>PASS</td>
        //                         <td>1.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/h.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">2</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/h.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">2</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/h.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">3</td>
        //                         <td>PASS</td>
        //                         <td>1.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/h.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">3</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/h.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">3</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/i.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">1</td>
        //                         <td>PASS</td>
        //                         <td>2.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/i.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">1</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/i.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">1</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/i.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">2</td>
        //                         <td>PASS</td>
        //                         <td>2.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/i.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">2</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/i.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">2</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/i.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">3</td>
        //                         <td>PASS</td>
        //                         <td>2.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/i.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">3</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/i.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">3</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/j.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">1</td>
        //                         <td>PASS</td>
        //                         <td>1.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/j.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">1</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/j.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">1</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/j.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">2</td>
        //                         <td>PASS</td>
        //                         <td>1.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/j.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">2</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/j.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">2</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/j.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">3</td>
        //                         <td>PASS</td>
        //                         <td>1.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/j.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">3</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                     <tr>
        //                         <td style=" word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">
        //                             flask_server/assets/test_files/j.py</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">3</td>
        //                         <td>PASS</td>
        //                         <td>0.0</td>
        //                         <td style="word-wrap: break-word;max-width: 200px; white-space: normal; text-align:left">


        //                         </td>
        //                     </tr >

        //                 </tbody >
        //             </table >
        //             <div class=" row">
        //                 <div class="col-md-12" style="height:25px;width:auto;"></div>
        //             </div>
        //         </div >
        //         <div class="tabcontent" id="archives">
        //             <div id="list-example" class="list-group archive-build-row">

        //                 <a class="list-group-item list-group-item-action" href="#list-item-1"
        //                     style="font-size: 1.1rem; color: dimgray; margin-bottom: -7%;">
        //                     <i class="fa fa-check" aria-hidden="true" style="color: #98cc64"></i>
        //                     <span>build #1</span>
        //                     <span style="font-size: 0.81rem; color: gray; padding-left: 12%;">2023-12-04 | 2:56 pm</span>
        //                 </a>

        //             </div>

        //             <div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example">

        //                 <div id="list-item-1" class="archive-body">
        //                     <div>
        //                         <h4 class="archive-header">
        //                             Build #1
        //                         </h4>
        //                         <div class="archive-date">
        //                             <i class="fa fa-calendar-check-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;
        //                             DECEMBER 04, 2023
        //                         </div>
        //                     </div>
        //                     <div style="margin-top: -5%;">
        //                         <div id="archive-container-0" style="padding-top: 5%; position: absolute;">
        //                             <div style="">
        //                                 <span class="total__tests">88</span>
        //                             </div>
        //                             <div id="archive-label-0">
        //                                 <span class="archive__label">TEST CASES</span>
        //                             </div>
        //                         </div>
        //                         <div class="archive-chart-container">
        //                             <canvas id="archive-chart-0"
        //                                 style="margin-top: 10%; padding-left: 25%; margin-right: -16%; float: right;"></canvas>
        //                         </div>
        //                     </div>
        //                     <div class="archive__bar">
        //                         <section id="statistic" class="statistic-section-pass one-page-section">
        //                             <div class="container" style="margin-top: -2%;">
        //                                 <div class="row text-center">
        //                                     <div class="col-xs-12 col-md-3" style="max-width: 14.2%;">
        //                                         <div class="counter">
        //                                             <h2 class="timer count-title count-number">88</h2>
        //                                             <p class="stats-text">PASSED</p>
        //                                         </div>
        //                                     </div>
        //                                     <div class="col-xs-12 col-md-3" style="max-width: 14.2%;">
        //                                         <div class="counter">
        //                                             <h2 class="timer count-title count-number">0
        //                                             </h2>
        //                                             <p class="stats-text">FAILED</p>
        //                                         </div>
        //                                     </div>
        //                                     <div class="col-xs-12 col-md-3" style="max-width: 14.2%;" v>
        //                                         <div class="counter">
        //                                             <h2 class="timer count-title count-number">0</h2>
        //                                             <p class="stats-text">SKIPPED</p>
        //                                         </div>
        //                                     </div>
        //                                     <div class="col-xs-12 col-md-3" style="max-width: 14.2%;">
        //                                         <div class="counter">
        //                                             <h2 class="timer count-title count-number">0</h2>
        //                                             <p class="stats-text">XPASSED</p>
        //                                         </div>
        //                                     </div>
        //                                     <div class="col-xs-12 col-md-3" style="max-width: 14.2%;">
        //                                         <div class="counter">
        //                                             <h2 class="timer count-title count-number">0</h2>
        //                                             <p class="stats-text">XFAILED</p>
        //                                         </div>
        //                                     </div>
        //                                     <div class="col-xs-12 col-md-3" style="max-width: 14.2%;">
        //                                         <div class="counter">
        //                                             <h2 class="timer count-title count-number">0</h2>
        //                                             <p class="stats-text">ERROR</p>
        //                                         </div>
        //                                     </div>
        //                                     <div class="col-xs-12 col-md-3" style="max-width: 14.2%;">
        //                                         <div class="counter">
        //                                             <h2 class="timer count-title count-number">0</h2>
        //                                             <p class="stats-text">RERUN</p>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </section>
        //                     </div>
        //                 </div>

        //             </div>
        //         </div>
        //     </div >
        // </>
    );
};

export default Report;
