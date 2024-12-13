#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;
class Solution
{
public:
  vector<int> getFinalState(vector<int> nums, int k, int multiplier)
  {
    // 循环k次
    for (int i = 0; i < k; ++i)
    {
      // 找到nums中的最小值，并将其赋值给m
      auto m = *min_element(nums.begin(), nums.end());
      // 在nums中找到最小值的位置，并将迭代器it指向该位置
      auto it = find(nums.begin(), nums.end(), m);
      // 计算最小值在nums中的索引，并将其赋值给idx
      int idx = distance(nums.begin(), it);
      // 将nums中索引为idx的元素乘以multiplier
      nums[idx] *= multiplier;
    }
    // 返回处理后的nums向量
    return nums;
  }
};
