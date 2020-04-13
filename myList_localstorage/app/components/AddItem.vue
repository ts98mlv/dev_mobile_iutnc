<template>
    <Page>
        <StackLayout>
            <Label id="label" @tap="onBackTap">Add new item</Label>
            <TextField id="textfield" v-model="name" hint="Enter a name"></TextField>
            <Button @tap="onSaveTap">Save</Button>
        </StackLayout>
    </Page>
</template>

<script>
    export default {
        props: ['id'],
        data: function () {
            return{
                name: ""
            }
        },
        methods: {
            onSaveTap(){
                if(this.name != ""){
                    const newItem = {
                        id: this.id,
                        name: this.name,
                        done: false,
                        deleted: false
                    };
                    this.$modal.close(newItem);
                }

            }
        }
    }
</script>

<style lang="scss" scoped>
    #label, #textfield{
        margin: 1%;
    }
</style>