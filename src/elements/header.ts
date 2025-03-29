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

export default function header(darkMode: boolean) {
  if (darkMode) {
    return /*html*/ `    
<div id="logo-name">
  <img src="./assets/logo/logo_192_dark.png"/>
  <div>JSS-01C — JavaScript Software Synthesizer Classic</div>
</div>

<div id="buttons">
  <button type="button" id="dark">
    <img src="./assets/icons/contrast.svg">
  </button>
  <button id="button-placeholder"></button>

  <div id="nav-container">
    <div class="bg"></div>
    <div class="button" tabindex="0">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </div>
</div>   
`;
  }
  return /*html*/ `
  
<div id="logo-name">
  <img src="./assets/logo/logo_192.png"/>
  <div>JSS-01C — JavaScript Software Synthesizer Classic</div>
</div>

<div id="buttons">

  <button type="button" id="dark-button">
    <img src="./assets/icons/contrast.svg">
  </button>
  <button id="button-placeholder"></button>

  <div id="nav-container">
    <div class="bg"></div>
    <div class="button" tabindex="0">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </div>
  <div id="nav-content" tabindex="0"></div>
</div>
`;
}
