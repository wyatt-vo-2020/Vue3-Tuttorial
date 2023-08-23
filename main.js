const app = Vue.createApp({
    //=========Test change name
    // template:`<h1>Xin chao {{teamName}} and {{firstName}} {{lastName}}</h1>
    // <button v-on:click="onChangeName">Change Name 1</button>
    // <button @click="onChangeName">Change Name 2</button>
    // <div class="modal" v-if="isShowModel">
    //     <h1>Modal content</h1>
    // </div>`,
    data() {
        return {
    //=========Test change name
        //     teamName: "ABC",
        //    firstName: "Vo",
        //     lastName: "Quy",
        //     isHello: false,
        //     isShowModel: false 
    //========= Test with Mouse Event
        // x: 0,
        // y: 0,
    //========= Test with v-for
            urlTesting:"gg.com",
            products: [
                {
                    name: "A",
                    price: 120.1,
                    thumb: './assets/1.png',
                    isCart: true
                },
                {
                    name: "B",
                    price: 150.1,
                    thumb: './assets/2.png',
                    isCart: true
                },
                {
                    name: "C",
                    price: 160.1,
                    thumb: './assets/3.png',
                    isCart: false
                },
                {
                    name: "D",
                    price: 175.1,
                    thumb: './assets/4.png',
                    isCart: false
                },
                {
                    name: "E",
                    price: 190.1,
                    thumb: './assets/5.png',
                    isCart: false
                },
                {
                    name: "F",
                    price: 200.1,
                    thumb: './assets/6.png',
                    isCart: false
                },
            ]
        };
    },
    methods: {
    //=========Test change name
        onChangeName(){
            this.firstName = "Merlin",
            this.lastName = "Wyatt",
            this.isShowModel = !this.isShowModel
        },
    //========= Test with Mouse Event        
        onLogEvent(){
            console.log("Running Event");
        },
        onMouseMoveEvent(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
    //========= Test with Mouse Event
        onToggleCart(event, product){
            product.isCart = !product.isCart;
        }

    },
    computed: {
        productsComputed(){
            return this.products.filter((product)=> product.price > 160)
        }
    },
});
app.mount("#contact");