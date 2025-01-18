///////////////// A Needle in the Haystack ///////////////////////
function findNeedle(haystack) {
    const array = haystack.indexOf("needle");
    return `found the needle at position ${array}`;
}
  console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randoJunk"])); // ➞ "found the needle at position 5"
  console.log(findNeedle(["hay", "junk", "needle", "hay"])); // ➞ "found the needle at position 2"
