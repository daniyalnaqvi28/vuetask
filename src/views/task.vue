<template>
    <div>   
        <h1>Sorting</h1>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                tempArray:[10,5,3,7,9,1],
                firstLarget: null,
                secomdLargest: null,
                firstSmallest: null,
                secondSmallest:null,
            }
        },
        mounted(){
            let arrayLength=this.tempArray.length;
            for(let i=0;i<arrayLength;i++){
                for(let j=0;j<arrayLength;j++){
                if(this.tempArray[j]>this.tempArray[j+1]){
                    let temp=this.tempArray[j];
                    this.tempArray[j]=this.tempArray[j+1];
                    this.tempArray[j+1]=temp;
                 }
                }
            }
            this.firstLarget=this.tempArray[arrayLength-1];
            this.secomdLargest=this.tempArray[arrayLength-2];
            this.firstSmallest=this.tempArray[0];
            this.secondSmallest=this.tempArray[0+1];
            console.log(this.firstLarget,'first largest');
            console.log(this.secomdLargest,'second largest');
            console.log(this.firstSmallest,'first smallest');
            console.log(this.secondSmallest,'second smallest');
          
         }
        
    }
</script>

<style lang="scss" scoped>

</style>