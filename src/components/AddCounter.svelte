<script lang="ts">
import { createEventDispatcher } from 'svelte'

const dispatch = createEventDispatcher();
export let id:number;

let counter ={
    name:`new `,
    value:0,
    id:id
};

function addNewCounter(e:any){
    e.preventDefault();
    dispatch("addcounter",counter);//Burda yukardaki leti kullaniyorum bu fonksiyonun icinde counteri degistiriyorum
    counter = {
        name:`new `,
        value:0,
        id:id+1
    };
}
	
</script>

<main>
<button class="add" on:click={addNewCounter}>new counter</button>	
</main>

<style>
	.add{
        background-color: #68d391;
        width: 200px;
    }
</style>