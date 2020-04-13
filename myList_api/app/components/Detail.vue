<template>
    <Page>
        <ActionBar title="details">
        </ActionBar>
        <StackLayout>
            <Label>{{groceryItem.name}} - deleted ? {{groceryItem.deleted}}</Label>
            <stackLayout orientation="horizontal">
                <Button @tap="toggle()">{{statusText}}</Button>
                <Button @tap="onBackTap">RETOUR</Button>
            </stackLayout>

        </StackLayout>
    </Page>
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
                this.groceryItem.done = !this.groceryItem.done;
                // this.$emit('toggleDone', this.groceryItem)
            },
            onBackTap(){
                this.$navigateBack();
            }
        }
    }
</script>

<style lang="scss" scoped>
    label{
        margin-top: 100px;
        margin-bottom: 100px;
    }

    button{
        width: 49%;
        border-radius: 5px;
        margin-left : 1%;
    }
</style>

<style>

</style>