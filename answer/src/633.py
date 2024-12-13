from math import isqrt
class Solution:
    def judgeSquareSum(self, c: int) -> bool:
        a = 0
        while a * a * 2 <=c:
            b = isqrt(c - a * a)
            if(a*a +b*b == c):
                return True
            a = a + 1
        return False

if __name__ == '__main__':
    solution = Solution()
    print(solution.judgeSquareSum(5))
