const props = `
<template>
    <bread :currentPath="currentPath"></bread>
</template>
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
</script>`;
export default props;
