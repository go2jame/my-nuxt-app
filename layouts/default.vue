<template>
    <div>
        <p>Some default layout content shared across all pages</p>
        <div class="header">
            <ul>
                <li>
                    <NuxtLink to="/">INDEX</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="products">PRODUCT</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="profile">PROFILE</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="about">ABOUT</NuxtLink>
                </li>
            </ul>
        </div>

        <slot />
    </div>
</template>
<script setup>
// definePageMeta({
//   pageTransition: {
//     name: 'rotate'
//   }
// })
</script>
<style lang="css" scoped>
div.header {
    color: green;
    background: #ccc
}

ul li {
    list-style-type: none;
    display: inline-block;
    padding: 10px;
    color: white;
}

</style>