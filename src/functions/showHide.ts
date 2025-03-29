/*
 * Show/Hide
 * Part of the JSS-01C | JavaScript Software Synthesizer Classic project
 * Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 * GNU Affero General Public License v3.0
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
 *
 * The Show/Hide function allows the user to hide and show a
 * section by clicking on its title. The two arguments displayInput
 *  and displayOutput are the display property we are targeting and
 * the one we are switching to, respectively. On most occasions, displayInput
 * will be set to the display property of the section we want to hide
 * (ex. flex, grid, block) and displayOutput will be set to "none".
 * If a section  is hidden initially, we set displayInput to "none"
 * and diplay output the desired display property we want to set.
 *
 */

export default function showHide(
  title: HTMLElement,
  section: HTMLElement,
  displayInput: string,
  displayOutput: string
) {
  // (title, section)
  title.addEventListener('click', function () {
    if (section.style.display === displayInput || !section.style.display) {
      section.style.display = displayOutput;
    } else {
      section.style.display = displayInput;
    }
  });
}
