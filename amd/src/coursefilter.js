// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Javascript for the course filter
 *
 * This file implements 1 functionality:
 * - Checks the checkboxes of the course filter and hides content from courses if the checkbox is not checked.
 *
 * @module     block_townsquare/coursefilter
 * @copyright  2024 Tamaro Walter
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

// Get the relevant checkboxes.
const checkboxes = document.querySelectorAll('.ts_course_checkbox');

/**
 * Init function
 */
export function init() {
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            // Get the courseid associated with the checkbox
            const courseid = checkbox.id;

            // Get all letters that are "activated".
            // Activated means that all filters accept the letter and want to show it.
            const letters = document.querySelectorAll('.townsquare_letter.ts_timefilter_active.ts_letterfilter_active');

            // Loop through each letter mark it as "active" or not based on checkbox state and the letter id.
            letters.forEach(function(letter) {
                let letterCourseId = letter.querySelector('.townsquareletter_course').id;

                if (courseid === letterCourseId) {
                    if (checkbox.checked) {
                        //window.alert('activated');
                        letter.classList.add('ts_coursefilter_active'); // Mark the letter as "active".
                        //letter.style.display = 'block'; // Show the letter
                    } else {
                        //window.alert('not activated');
                        letter.classList.remove('ts_coursefilter_active'); // Mark the letter as "not active".
                        //letter.style.display = 'none'; // Hide the letter.
                    }
                }
            });
        });
    });
}
