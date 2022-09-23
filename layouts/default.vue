<template>
    <div>
        <el-container class="my-layout">
            <!-- title -->
            <el-header class="my-layout-header">
                <CommonHeader />
            </el-header>

            <!-- page content -->
            <el-main class="my-layout-main">
                <slot />
            </el-main>

            <!-- footer -->
            <el-footer class="my-layout-footer">
                <CommonFooter />
            </el-footer>
        </el-container>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="sass" scoped>

</style>