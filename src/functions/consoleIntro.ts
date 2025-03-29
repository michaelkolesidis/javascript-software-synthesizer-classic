/*
 * Console Intro
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
 * The Console Intro function provides the welcome message printed
 * in the console upon the start of the app.
 */

const styles = [
  'background: rgb(1, 0, 76)',
  'color: rgb(230, 230, 230)',
  'font-weight: 600; font-size: 13px',
].join(';');

export default function consoleIntro() {
  console.log(
    '%c * JSS-01C | JavaScript Software Synthesizer Classic *',
    styles
  );
  console.log(
    'Since you are here you might want to check our project at GitHub, have a look at the source code, find bugs, submit issues, create pull requests and become part of our community!\nhttps://github.com/michaelkolesidis/javascript-software-synthesizer-classic'
  );
}
