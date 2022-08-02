<template>
    <div class="container-fluid">
        <div>
            <div class="block-inline">
                <nuxt-link exact no-prefetch active-class="active" class="nav-link" to="/">
                Все
                </nuxt-link>
            </div>
            <div class="block-inline">
                <nuxt-link exact no-prefetch active-class="active" class="nav-link" to="/">
                Lenta.ru
                </nuxt-link>
            </div>
            <div class="block-inline">
                <nuxt-link exact no-prefetch active-class="active" class="nav-link" to="/">
                Mos.ru
                </nuxt-link>
            </div>
            <div class="block-inline right-table">
                <button class="button-table" type="submit"></button>
                <button class="button-li" type="submit"></button>
            </div>            
        </div>
    </div>
</template>
<style scoped>
.container-fluid {
    padding-left: 15%;
    padding-right: 15%;
    color: #0000ff;
    word-spacing: 1rem;
}
.right-table {
    position:absolute;
    right: 20%;
}
.block-inline{
    display:inline-block;
    vertical-align: middle;
}
</style>