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

export default function sequencerSection() {
  return /*html*/ `
<input id="seq-rate" placeholder="Rate" value="1" />
<input id="note-value" placeholder="Value" value="16n" />
<input type="text" id="seq-input" placeholder="Enter sequence" />
<button type="button" id="seq-set">
    <img src="./assets/icons/add.svg" alt="" />
</button>
<button type="button" id="seq-play">
    <img src="./assets/icons/play.svg" alt=""">
</button>
<button type="button" id="seq-stop">
    <img src="./assets/icons/stop.svg" alt="" />
</button>
`;
}
