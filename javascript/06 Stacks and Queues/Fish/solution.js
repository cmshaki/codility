function solution(A, B) {
  const downstreamFish = [];
  let survivingFishCount = 0;

  for (let i = 0; i < A.length; i++) {
    const size = A[i];

    if (B[i] === 0) {
      // Upstream fish
      while (downstreamFish.length > 0) {
        const downstreamSize = downstreamFish.pop();
        if (downstreamSize > size) {
          // Current upstream fish is eaten
          downstreamFish.push(downstreamSize);
          break;
        }
      }

      if (downstreamFish.length === 0) {
        // The current upstream fish survives
        survivingFishCount++;
      }
    } else {
      // Downstream fish
      downstreamFish.push(size);
    }
  }

  survivingFishCount += downstreamFish.length;

  return survivingFishCount;
}

// Example usage:
const A = [4, 3, 2, 1, 5];
const B = [0, 1, 0, 0, 0];
console.log(solution(A, B)); // Output: 2
