<template>
    <div>about 首页 ホーム
        <el-row class="mb-4">
            <el-button>Default</el-button>
            <el-button type="primary">Primary</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">错误</el-button>
        </el-row>
        <h1>Color mode: {{ $colorMode.value }}</h1>
        <select v-model="$colorMode.preference">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="sepia">Sepia</option>
        </select>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

</style>