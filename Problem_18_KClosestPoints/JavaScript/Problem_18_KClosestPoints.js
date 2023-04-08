// Solution to Formation's Day 18 problem/challenge - KClosestPoints
// Prompt: Given an array of points (x, y) in a two-dimensional space find the k closest points to the origin (0, 0).

const kClosestPoints = (points, k) => {
  
    let closestPoints = [];

    const getPointsDistance = ([x1, y1], [x2, y2]) => {
        return Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2));
    };

    for(const [x1, y1] of points) {
        closestPoints.push(
            [getPointsDistance([x1, y1], [0, 0]), [x1, y1]]
        );
    }

    return closestPoints.sort((a, b) => a[0] - b[0]).slice(0, k).map((p) => p[1]);

}




// some test cases
console.log(kClosestPoints([[4,2],[5,1],[4,4],[3,2],[5,3],[3,0],[4,1],[2,2]], 2)); // [ [ 2, 2 ], [ 3, 0 ] ]

