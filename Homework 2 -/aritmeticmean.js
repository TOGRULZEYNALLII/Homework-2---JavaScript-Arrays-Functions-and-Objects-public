function arithmeticMean(nums=[]){
        sum=0;
        for(let i of nums){
            sum+=i/nums.length;
        }
        return sum;
}