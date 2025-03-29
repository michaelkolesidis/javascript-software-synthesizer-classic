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

export default function displays() {
  return /*html*/ `
<div>
  <p class="label">MIDI</p>
  <div id="midi-display"></div>
</div>
<div >
  <p class="label">Oscilloscope</p>
  <div id="oscilloscope"></div>
</div>
<div >
  <p class="label">Spectrogram</p>
  <div id="spectrogram"></div>
</div>
<div >
  <p class="label">Meter</p>
  <div id="meter"></div>
</div>
`;
}
