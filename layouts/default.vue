<template>
    <div>
        <!-- <p>Some default layout content shared across all pages</p> -->
         <div>
            <p>Total items in cart: {{ cartCount }}</p>
         </div>
        <div class="header">
            <ul>
                <li>
                    <NuxtLink to="/">INDEX</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products">PRODUCT</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/profile">PROFILE</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">ABOUT</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/admin">ADMIN</NuxtLink>
                </li>
            </ul>
        </div>
        <div class="main">
            <slot />

        </div>
        <div class="footer">
            This is footer.
        </div>
    </div>
</template>
<script setup>
// definePageMeta({
//   pageTransition: {
//     name: 'rotate'
//   }
// })

const url = useRequestURL()
const cartStore = useCartStore()
const cartCount = computed(() => cartStore.cartCount)

</script>
<style lang="css" scoped>
body {
    margin: 0;
    position: relative;
}

div.header,
div.footer {
    background: #e8e9e8;
    padding: 15px;
    margin: 20px auto;
    border-radius: 15px;
}

div.main {
    min-height: 400px;
}

.router-link-active{
    background: rgb(85, 0, 255);
    border-radius: 6px;
}

ul {
    margin: 0;
    padding: 0;
}

ul li {
    list-style-type: none;
    display: inline-block;
    border: 1px solid white;
    margin: auto 5px;
    border-radius: 6px;
    background-color: rgb(7, 73, 25);
}

ul li:hover {
    background-color: rgb(85, 15, 15);
    transition-duration: 1000ms;
    border-style: dashed;
    /* transition-timing-function:ease-in; */
}

ul li>a {
    text-decoration: none;
    color: white;
    padding: 5px 15px;
    display: block;
}


</style>