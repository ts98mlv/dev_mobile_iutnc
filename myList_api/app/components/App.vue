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
  import GroceryItem from "./GroceryItem";
  import GroceryData from "../grocery-data.json"
  import GroceryList from "./GroceryList";
  import AddItem from "./AddItem";

  export default {
    components: {GroceryList},
    data() {
      return {
          items: GroceryData.groceryItems,
      }
    },
    computed :
        {
            getItems: function () {
                return this.items.filter((item) => {
                    if(! item.deleted){
                        return item;
                    }
                })
            }
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
