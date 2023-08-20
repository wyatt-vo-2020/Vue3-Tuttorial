const app = Vue.createApp({
    data() {
        return {
            teamName: "ABC",
            firstName: "Vo",
            lastName: "Quy",
            isHello: false
        };
    },
    methods: {
        onChangeName(){
            console.log(this);
            this.firstName = "Merlin",
            this.lastName = "Wyatt"
        },

    }
});
app.mount("#contact");