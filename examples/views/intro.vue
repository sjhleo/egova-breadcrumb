<template>
    <l-generic>
        <div class="v-plate">
            <h1>当前菜单路径组件</h1>
            <p>属性配置</p>
            <u-example title="设置当前菜单路径">
                <template slot="case">
                    <bread :currentPath="currentPath"></bread>
                </template>
                <template slot="desc">
                    <p>通过绑定<code>currentPath</code>属性绑定当前菜单路径</p>
                </template>
                <u-code slot="code" lang="html">{{codes.props}}</u-code>
            </u-example>
        </div> 
    </l-generic>
</template>
<style lang="less" scoped>
.v-plate
{
    padding: 20px 25px;
}
</style>
<script lang="ts">
import { component, View } from "flagwind-web";
import BreadcrumbNav from "src/index";
import * as codes from "examples/codes";
@component
({
    components:
    {
        "bread": BreadcrumbNav
    }
})
export default class Plate extends View{
    private currentPath: Array<any> = [
        {name: "test1",path: "/",title: "一级"},
        {name: "test2",path: "/intro",title: "二级"}
    ];
    protected codes: any = codes;
}
</script>
