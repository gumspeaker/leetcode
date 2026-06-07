from typing import List


class Solution:
    def leftRightDifference(self, nums: List[int]) -> List[int]:
        length = len(nums)
        left = [0] * length
        right =[0] * length
        right[length-1] = 0
        for i,n in enumerate(nums):
            if i== length -1:
                break
            left[i+1] = left[i]+n
            right[length - i -2] = right[length-i-1] + nums[length-1-i]
        return [abs(l-r) for l,r in zip(left,right)]
            
