class Solution {
  isAnagram(s, t) {
    if (s.length !== t.length) return false;

    let sumS = 0, sumT = 0;
    let sumSqS = 0, sumSqT = 0;

    for (let i = 0; i < s.length; i++) {
      const cs = s.charCodeAt(i);
      const ct = t.charCodeAt(i);

      sumS += cs;
      sumT += ct;

      sumSqS += cs * cs;
      sumSqT += ct * ct;
    }

    return sumS === sumT && sumSqS === sumSqT;
  }
}