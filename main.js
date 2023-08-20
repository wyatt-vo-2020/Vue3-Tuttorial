const app = Vue.createApp({
    template:`<h1>Xin chao {{teamName}} and {{firstName}} {{lastName}}</h1>
    <button v-on:click="onChangeName">Change Name 1</button>
    <button @click="onChangeName">Change Name 2</button>
    <div class="modal" v-if="isShowModel">
        <h1>Modal content</h1>
    </div>`,
    data() {
        return {
            teamName: "ABC",
            firstName: "Vo",
            lastName: "Quy",
            isHello: false,
            isShowModel: false
        };
    },
    methods: {
        onChangeName(){
            this.firstName = "Merlin",
            this.lastName = "Wyatt",
            this.isShowModel = !this.isShowModel
        },

    }
});
app.mount("#contact");