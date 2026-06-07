class Solution:
    def totalWaviness(self, num1: int, num2: int) -> int:
        res = 0
        for i in range(num1,num2+1):
          res  =  res + self.single(i)      
        return res
    def single(self, num:int) -> int:
      s = str(num)
      l =len(s)
      res = 0
      for index in range(1,len(str(num))):
        if(index==0 or index== l-1):
          continue
        if(s[index]>s[index-1] and s[index]>s[index+1]):
          res = res+1 
        if(s[index]<s[index-1] and s[index]<s[index+1]):
          res = res+1 
      return res
    