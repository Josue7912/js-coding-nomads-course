Things are now getting interesting! This is a supplementary lesson to get you geared up for the labs to come. This is a walk through of a very common programming task that you will be doing many times and practicing in many forms!

Say you have this temperature data in Fahrenheit:

```
123
32
42
94
34
0
-10
30
63
84
56
94
87
43
26
75
90
-43
-23
153
41
74
54
24
85
80
56
35
23
45
87
-90
87
56
23
56
71
37
56
34
```

Its a long list. Would you assign each item to a variable?

```javascript
let temp1 = 123;
let temp2 = 32;
let temp3 = 42;
let temp4 = 94;
```

That would take a lot of repetitive typing, definitely something that you should _always_ avoid as a programmer.

Better to put it into an array! If you are reading this then it should be from Visual Studio Code. Create a new `.js` file in this folder with the same name as this file except with the JavaScript extension - `00-intro.js`. Go to [this website](https://convert.town/column-to-comma-separated-list), and use it to convert the data above into a comma separated list. Then add the necessary syntax to make this into an array in your new file:

```javascript
let listOfTempsInF = [
  /*PASTE YOUR COMMA SEPARATED LIST HERE*/
];
```

Now build a for loop that at each iteration, references and logs the new temperature:

```javascript
for (let i = 0; i < listOfTempsInF.length; i++) {
  let element = listOfTempsInF[i];
  element = fToC(element)
  console.log(element + "C")
}
```

In this script, copy in the function fToC that you have defined previously. Once you have it, open the test.html file, it should automatically be outputting the logs for your new script. If it is not, check that the file name is correct.

### Getting stuck

If you get stuck, here or in subsequent labs, first try and identify exactly where you are getting stuck. Remember <a href="https://en.wikipedia.org/wiki/Rubber_duck_debugging" target="_blank">the rubber duck</a>. This state of stuck-ness is something you will become intimately familiar with throughout your career. Veteran programmers get stuck too, what makes them good is their ability to become unstuck, and rubber ducking is a great way to do that. Reading documentation is also a sure fire way to understand the problem.

Here are a few common reasons for the state of stuck-ness:

- Tiredness. Yes, sometimes your brain just can't access any more energy and the best thing to do to get unstuck is to take a short break. Look out a window try to empty you mind for a few minutes. Take a 5-15 minute power nap. Take a walk around the block. Do some push ups.
- Complexity. Sometimes things are just complex and it takes a while to wrap your head around all the moving parts. The mind unconsciously works on issues you are facing in the background, sometimes you _need_ this unconscious processing to work, and taking a break even though you are _not_ tired, is sometimes the best way to let things sink in. Other ways of dealing with complexity is to physically sketch out the components. Rubber ducking and writing are also great ways to externalize concepts and thus makes them more manageable.
- Misunderstanding of the fundamentals. Sometimes it pays to go back over the material you have already covered to check your understanding. Is there something that doesn't make sense to you? If so, do some research and see if you can find an answer to whatever might be blocking you.

If you get irrevocably stuck and are starting to feel frustration kick in, reach out! Especially if you feel like you are going down rabbit holes that are both uninteresting and probably in the wrong direction, post in the forums or reach out to your tutor or another student! Also, don't feel as though you have to wait until you get frustrated, if you fancy giving the forum an update on your progress that is most welcome! Just beware of asking for answers without any effort on your part!
