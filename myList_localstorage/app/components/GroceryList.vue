<template>
    <ListView for="item in items" @itemTap="onItemTap">
        <v-template>
            <GroceryItem :groceryItem="item" @toggleDone="onToggleDone" @onTapSup="supItem" ></GroceryItem>
        </v-template>
    </ListView>
</template>

<script >
    import GroceryItem from "./GroceryItem";
    import Detail from "./Detail";

    export default {
        components: {GroceryItem, Detail},
        props: ['items'],
        methods: {
            onItemTap(args){
              this.$navigateTo(Detail, {
                  animated: true,
                  transitionAndroid: {
                      name: "fade",
                      duration: 1000,
                      curve: "easeOut"
                  },
                  props:{
                      groceryItem: args.item
                  }
              });
            },
            onToggleDone: function (groceryItem) {
                // groceryItem.done = ! groceryItem.done;
                const newItem = Object.assign(groceryItem, {done: !groceryItem.done});

                const idx = this.items.findIndex(i => i.id === groceryItem.id);

                this.items = Object.assign([], this.items, {idx: newItem})
            },
            supItem: function (groceryItem) {
                const newItem = Object.assign(groceryItem, {deleted: !groceryItem.deleted});

                const idx = this.items.findIndex(i => i.id === groceryItem.id);

                this.items = Object.assign([], this.items, {idx: newItem});

                console.log(this.items);
            }
        }
    }
</script>

