<template>
    <div>
        <h1>product1</h1>
        <button @click="adToCart">add to cart</button>
    </div>
    
</template>

<script setup>
function adToCart(){
    alert('this product add successfully')
}
</script>

<style lang="scss" scoped>

</style>