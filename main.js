const app = Vue.createApp({
    data(){
        return{
            cart: 0
        }
    },
    methods :{
        orderToCart(){
            this.cart +=1
        },

        unorderToCart(){
            if(this.cart >=1){
                this.cart -=1
            }
        }
    }

})