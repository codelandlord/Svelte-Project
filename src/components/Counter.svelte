<script lang="ts">
	import { createEventDispatcher } from "svelte/internal";

 export let name:string;
export let value:number;
export let id:number ;

const dispatch = createEventDispatcher();


const addPoint = () => { if (value < 100) { value+=1;}}
const removePoint = () => { if (value > 0) { value-=1;}}
const resetPoint = () => (value = 0);
const deleteCounter = () => {
   dispatch("removecounter",id);
};
</script>

<main>
	<div class="card">
        <input type="text" style ="background-color: white;border-radius: 5px;"placeholder="new" bind:value={name}/>
        <h2>{value}</h2>
        <button  style ="border-radius: 3px;background-color: #f56565;;border-radius: 5px;"class="button" on:click={addPoint}>+</button>
        <button style="background-color: #4299e1 ;border-radius: 5px;"class="button" on:click={removePoint}>-</button>
        <button style="background-color: #ecc94b; ;border-radius: 5px;" class="button" on:click={resetPoint}>0</button>
        <button class="button ;border-radius: 5px;" on:click={deleteCounter}>X</button>
    </div>
</main>

<style>
	
.card h2{
    margin-right: 35px;
    margin-left: 35px;
}
.card button{
    color:#333;
    padding:8px;
    border-radius: 5x;
    width:50px;
    display:flex;
    font-size:20px;
    align-items: center;
    justify-content: center;
}
main{
    text-align: center;
    padding:5px;
    max-width: 250px;
    margin:0 auto;
}
.card {
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
    background-color:skyblue;
    margin-left: 500px;
    width: 600px;
    border-radius: 10px;
}
@media(min-width:640px){
    main{
        max-width:none ;
    }
}
</style>