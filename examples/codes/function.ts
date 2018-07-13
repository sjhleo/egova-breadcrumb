const method = `
<template>
    <plate v-on:change="changePlate" ref="plate"></plate>
    父组件中获取选择的车牌号：<i-input v-model="plateNo"></i-input>
    父组件中获取选择的车牌类型：<i-input v-model="plateType"></i-input>
    <i-button type="primary" v-on:click="setData">父组件设置车牌组件的值</i-button>
    <i-button type="ghost" v-on:click="reset">重置</i-button>
</template>
<script lang="ts">
import { component, View } from "flagwind-web";
import { PlatePicker } from "src/index";
import * as codes from "examples/codes";
@component
({
    components:
    {
        "plate": PlatePicker
    }
})
export default class Plate extends View{
    protected codes: any = codes;
    protected plateNo: string = "";
    protected plateType: string = "";
    protected changePlate(arr: Array<string>) {
        this.plateNo = arr[0];
        this.plateType = arr[1];
    }
    protected setData() {
        (<PlatePicker>this.$refs["plate"]).setPlateData("鄂A123", "LargeCar");
    }
    protected reset() {
        (<PlatePicker>this.$refs["plate"]).reset();
    }
}
</script>`;
export default method;
