// 6.1 (pg. 122) - The Heavy Pill
// YOu have 20 bottles of pills. 19 bottles have 1.0 gram pills, but one has pills of weight 1.1 grams. 
// Given a scale that provides an exact measurement, how would you find the heavy bottle?
// You can only use the scale once.

/* 
Strategy: put different amounts of pills from each bottle on the scale.

For example, if you had only three bottles, you could do something like this:
Bottle 1: 1 pill
Bottle 2: 2 pills
Bottle 3: 3 pills

The total weight of the pills will have this formula, where x, y, and z are the weight of each pill:
totalWeight = 1x + 2y + 3z

The total weight will vary based on what pill is the heavier pill.

If Bottle 1 has heavier pills, the total weight would be:
1(1.1) + 2(1) + 3(1) = 6.1 grams

If Bottle 2 has heavier pills, the total weight would be:
1(1) + 2(1.1) + 3(1) = 6.2 grams

If Bottle 3 has heavier pills, the total weight would be:
1(1) + 2(1) + 3(1.1) = 6.3 grams

The extra weight will determine which set of pills is heavier.

This strategy works for the same way for twenty bottles of pills:
totalWeight = 1a + 2b + 3c + ... + 20x

The final formula:
bottleNumber = (weight - 210 grams)/(0.1 grams)

*/