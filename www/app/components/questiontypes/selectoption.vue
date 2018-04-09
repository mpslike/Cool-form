<template>
    <div>
        <Row>
            <Col>
                <span class="xing" v-if="item.required">*</span>
                <h4>{{item.title}}</h4>
                <Select style="width:200px">
                    <Option v-for="_item in item.options" :label="_item" :value="_item" :key="_item">{{ _item }}</Option>
                </Select>
            </Col>
        </Row>
    </div>
</template>


<script>
    export default {
        "props" : ["item"]
    }
</script>