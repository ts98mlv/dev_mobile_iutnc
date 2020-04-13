<template>
    <GridLayout columns="100, 200, *">
        <label col="0" class="status" :class="{'status-done' : groceryItem.done}" >{{statusText}}</label>
        <Label col="1"  :class="{'line-through' : groceryItem.done}">{{groceryItem.name}}</Label>
        <button @tap="onTapSup" col="2">Delete</button>
    </GridLayout>
</template>

<script>
    export default {
        props: ['groceryItem'],
        data: function () {
            return{
                status: false
            }
        },
        computed: {
            statusText: function(){
                return this.groceryItem.done ? "Fait" : "A faire";
            }
        },
        methods: {
            toggle: function () {
                // this.groceryItem.done = !this.groceryItem.done;
                this.$emit('toggleDone', this.groceryItem);
            },
            onTapSup: function () {
                this.$emit("onTapSup", this.groceryItem);
            }
        }
    }
</script>

<style lang="scss" scoped>
    page{

        .line-through{
            text-decoration: line-through;
        }
    }

    .status{
        background: #ffaf82;
        margin-left: 10px;
    }

    .status-done{
        @extend .status;
        background: lightgreen;
    }

</style>
