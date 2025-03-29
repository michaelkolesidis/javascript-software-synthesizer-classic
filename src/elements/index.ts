/*
 *  JSS-01C |JavaScript Software Synthesizer Classic
 *  Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 *  ATTENTION! FREE SOFTWARE
 *  This website is free software (free as in freedom).
 *  If you use any part of this code, you must make your entire project's source code
 *  publicly available under the same license. This applies whether you modify the code
 *  or use it as it is in your own project. This ensures that all modifications and
 *  derivative works remain free software, so that everyone can benefit.
 *  If you are not willing to comply with these terms, you must refrain from using any part of this code.
 *
 *  For full license terms and conditions, you can read the AGPL-3.0 here:
 *  https://www.gnu.org/licenses/agpl-3.0.html
 */

export default function index() {
  return /*html*/ `
<div id="splash-screen">
    <img src="./assets/logo/logo_192.png" alt="" />
</div>
<div id="page-container">
    <div id="content-wrap">
    <!----------------------------------------------------------->
    <!-- Header -->
    <!----------------------------------------------------------->
    <div id="header" tabindex="0"></div>
    <!----------------------------------------------------------->
    <!-- Synthesizer Panel -->
    <!----------------------------------------------------------->
    <div id="synthesizer">
        <!----------------------------------------------------------->
        <!-- Displays -->
        <!----------------------------------------------------------->
        <div id="displays"></div>
        <!----------------------------------------------------------->
        <!-- Synth Section -->
        <!----------------------------------------------------------->
        <div id="synth-section"></div>
        <!----------------------------------------------------------->
        <!-- Modulation  Section -->
        <!----------------------------------------------------------->
        <div id="modulation-section"></div>
        <!----------------------------------------------------------->
        <!-- Effects  Section -->
        <!----------------------------------------------------------->
        <div id="effects"></div>
    </div>
    <!----------------------------------------------------------->
    <!-- Extra Controls (Presets, Sequencer etc.) -->
    <!----------------------------------------------------------->
    <div id="extras">
        <div id="sequencer"></div>
        <!-- <div id="recorder">
        <button type="button" id="rec">●</button>
        <button type="button" id="rec-stop">■</button>
        </div> -->
    </div>
    <!----------------------------------------------------------->
    <!-- Keyboard -->
    <!----------------------------------------------------------->
    <div id="keyboard"></div>
    </div>
    <!----------------------------------------------------------->
    <!-- Footer -->
    <!----------------------------------------------------------->
    <div id="footer"></div>
    <!----------------------------------------------------------->
    <!-- Inverted Colors -->
    <!----------------------------------------------------------->
    <div id="overlay"></div>
</div>
`;
}
