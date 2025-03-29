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

export default function synthSectionOscillator() {
  return /*html*/ `
<!--------------------------------------------------------------------->
<!-- Oscillator Type -->
<!--------------------------------------------------------------------->
<div id="type-selection" class="component">
    <p class="label">Type</p>
    <div id="oscillator-type"></div>
    <br />
    <div class="selection">
    <div>sine</div>
    <div>square</div>
    <div>sawtooth</div>
    <div>triangle</div>
    <div>pulse</div>
    </div>
</div>
<!--------------------------------------------------------------------->
<!-- Oscillator Partial Count -->
<!--------------------------------------------------------------------->
<div id="partial-count-section" class="component">
    <p class="label">Partial Count</p>
    <div id="partial-count"></div>
</div>
<!--------------------------------------------------------------------->
<!-- Oscillator Partials -->
<!--------------------------------------------------------------------->
<div id="partials-section" class="component">
    <p class="label">Partials</p>
    <div id="partials-selector"></div>
</div>
`;
}
