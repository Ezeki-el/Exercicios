<template>
<div id="app">
<h1>Calculadora Aritmética</h1>
<input type="number" v-model="num1" @input="calculate">
<select v-model="operator" @change="calculate">
<option value="+">+</option>
<option value="-">-</option>
<option value="*">*</option>
<option value="/">/</option>
</select>
<input type="number" v-model="num2" @input="calculate">
<p>Resultado: {{ result }}</p>
</div>
</template>

<script>
    export default {
    name: 'App',
    data() {
    return {
    num1: 0,
    num2: 0,
    operator: '+',
    result: 0
};
},
methods: {
    calculate() {
    switch (this.operator) {
            case '+':
            this.result = parseFloat(this.num1) + parseFloat(this.num2);
            break;
            case '-':
            this.result = parseFloat(this.num1) - parseFloat(this.num2);
            break;
            case '*':
            this.result = parseFloat(this.num1) * parseFloat(this.num2);
            break;
            case '/':
            this.result = parseFloat(this.num1) / parseFloat(this.num2);
            break;
            default:
            this.result = 0;
    }
    }
    }
    };
</script>

<style>
    #app {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        margin-top: 50px;
    }

    input {
        margin: 10px;
        padding: 5px;
    }

    select {
        margin: 10px;
        padding: 5px;
    }

    p {
        font-weight: bold;
    }
</style>
