/*
 * Invert Colors
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
 * The Invert Colors functions inverts the colors
 * of the whole application, mimicking dark mode
 * toggle functionality.
 */

export default function invertColors() {
  const darkButton = document.getElementById('dark-button');
  const overlay = document.getElementById('overlay');
  let inverted = false;

  darkButton!.addEventListener('click', () => {
    inverted
      ? (overlay!.style.display = 'none')
      : (overlay!.style.display = 'block');
    inverted = !inverted;
  });
}
