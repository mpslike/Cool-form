<template>
    <div>
        <Row>
            <Col>
                <span class="xing"  v-if="item.required">*</span>
                <h4>{{item.title}}</h4>
                <DatePicker :options="item.dateoptions"></DatePicker >
            </Col>
        </Row>
    </div>
</template>


<script>
    export default {
        "props" : ["item"]
    }
</script>