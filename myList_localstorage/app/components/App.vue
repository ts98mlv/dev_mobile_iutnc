<template>
    <Page>
        <ActionBar title="ToDoList">
            <ActionItem @tap="onAddTap">Ajouter</ActionItem>
            <ActionItem>Ajouter photo</ActionItem>
        </ActionBar>

        <StackLayout>
            <GroceryList :items="getItems"></GroceryList>
        </StackLayout>
    </Page>
</template>

<script >
    import groceryData from "../grocery-data.json";
    import GroceryList from "./GroceryList";
    import AddItem from "./AddItem";
    import * as localstorage from "nativescript-localstorage";


    export default {
    components: {GroceryList},
    data() {
      return {
          items: [],
      }
    },
    computed :
        {
            getItems: function () {
                // localStorage.setItem("itemsMyList", JSON.stringify(this.items));
                // return this.items.filter((item) => {
                //     if(! item.deleted){
                //         return item;
                //     }
                // })
                let itemsNotDeleted = [];
                this.items.forEach(function (item) {
                    if (item.deleted === false) {
                        itemsNotDeleted.push(item);
                    }
                });
                localStorage.setItem("itemsMyList", JSON.stringify(this.items));
                return itemsNotDeleted;
            },
            itemsNotDeleted() {
                let itemsNotDeleted = [];
                this.items.forEach(function (item) {
                    if (item.deleted === false) {
                        itemsNotDeleted.push(item);
                    }
                });
                localStorage.setItem("data", JSON.stringify(this.items));
                return itemsNotDeleted;
            },
        }
    ,
      methods: {
        onAddTap(){
            const newId = new Date().getTime();
          this.$showModal(AddItem, {
              props: {
                  id: newId
              }
          }).then(newItem => {
              if(newItem){
                  this.items.push(newItem);
              }
          })
        }
      },
      created: function () {
          if (localStorage.getItem("data") !== null) {
              this.items = JSON.parse(localStorage.getItem("data"));
          } else {
              this.items = groceryData.groceryItems;
          }
      }
  }
</script>

<style scoped>
    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20px;
        color: #333333;
        min-width: 20vw;
        min-height: 20vh;
    }
</style>
