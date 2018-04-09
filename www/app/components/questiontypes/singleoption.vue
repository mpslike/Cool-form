<template>
    <div>
        <Row>
            <Col>
                <span class="xing"  v-if="item.required">*</span>
                <h4>{{item.title}}</h4>
                <RadioGroup>
                    <Radio v-for="_item in item.options" :label="_item" :key="_item"></Radio>
                </RadioGroup>
            </Col>
        </Row>
    </div>
</template>


<script>
    export default {
        "props" : ["item"]
    }
</script>