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
        x: 0,
        y: 0,
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
        }
    }
});
app.mount("#contact");