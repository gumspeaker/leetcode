from functools import reduce
from typing import List


class Solution:
    def minElement(self, nums: List[int]) -> int:
        return min([reduce(lambda sum, current: sum+int(current), str(n), 0) for n in nums])
