// for the fact generator
var factList = [
  '<br>STEM fields are often viewed as masculine, and teachers and parents often underestimate girls’ math abilities as early as preschool.<br>(<a href = "https://www.aauw.org/resources/research/the-stem-gap/">"The STEM Gap: Women in Science, Technology, Engineering, and Math"</a>)',

  '<br>Since the December 2016 departure of Ursula Burns as CEO of Xerox Corp., there have been no black women heading Fortune 500 companies.<br>(<a href = "https://www.americanprogress.org/issues/women/reports/2018/11/20/461273/womens-leadership-gap-2/">"The Womens Leadership Gap"</a>)',

  '<br>38% of women who major in computers work in computer fields, and only 24% of those who majored in engineering work in the engineering field.<br>(<a href = "href = "https://www.aauw.org/resources/research/the-stem-gap/">"The STEM Gap: Women in Science, Technology, Engineering, and Math"</a>)',

  '<br>Women are only 6 percent of all venture capital board representatives and lead only 9 percent of venture capital deals.<br>(<a href = "https://www.americanprogress.org/issues/women/reports/2018/11/20/461273/womens-leadership-gap-2/">"The Womens Leadership Gap"</a>)',

  '<br>Many girls lose confidence in math by third grade. Boys, on the other hand, are more likely to say they are strong in math by 2nd grade, before any performance differences are evident.<br>(<a href = "https://www.aauw.org/resources/research/the-stem-gap/">"The STEM Gap: Women in Science, Technology, Engineering, and Math"</a>)',];

var fact = document.getElementById("fact");
var factButton = document.getElementById("factButton");
var factNumber = 0;

factButton.addEventListener('click', getFact);

function getFact() {
  fact.innerHTML = factList[factNumber];
  factNumber++;
  if (factNumber == factList.length) {
    factNumber = 0;
  }
}
