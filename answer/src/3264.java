import java.util.PriorityQueue;
import java.util.stream.IntStream;

class Solution {
    public int[] getFinalState(int[] nums, int k, int multiplier) {
        PriorityQueue<Integer> queue = new PriorityQueue<>((a, b) -> nums[a] != nums[b] ? nums[a] - nums[b] : a - b);
        IntStream.range(0, nums.length).forEach(queue::offer);

        for (int i = 0; i < k; i++) {
            int idx = queue.poll();
            nums[idx] *= multiplier;
            queue.offer(idx);
        }
        return nums;
    }
}
