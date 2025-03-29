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

export default function synthSectionMain() {
  return /*html*/ `
<div class="title" id="synth-title"><p>Synth</p></div>
<div id="synth-section-content">
    <!--------------------------------------------------------------------->
    <!-- Main -->
    <!--------------------------------------------------------------------->
    <div id="synth-section-main"></div>
    <!--------------------------------------------------------------------->
    <!-- Amplitude Envelope -->
    <!--------------------------------------------------------------------->
    <p id="adsr-envelope-title" class="subtitle">
    Amplitude Envelope
    </p>
    <div id="adsr-envelope"></div>
    <!--------------------------------------------------------------------->
    <!-- Oscillator -->
    <!--------------------------------------------------------------------->
    <p id="oscillator-title" class="subtitle">Oscillator</p>
    <div id="oscillator"></div>
</div>
`;
}
