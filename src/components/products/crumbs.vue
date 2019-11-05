<template>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="el">
        <el-breadcrumb-item>{{ $store.state.position }}美团</el-breadcrumb-item>
        <el-breadcrumb-item>{{ $store.state.position }}{{ $route.params.name }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
    
}
</script>

 