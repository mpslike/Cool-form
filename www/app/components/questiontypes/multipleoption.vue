<template>
    <div>
        <Row>
            <Col>
                <span class="xing"  v-if="item.required">*</span>
                <h4>{{item.title}}</h4>
                <CheckboxGroup>
                    <Checkbox  v-for="_item in item.options" :label="_item" :key="_item"></Checkbox>
                </CheckboxGroup>
                
            </Col>
        </Row>
    </div>
</template>


<script>
    export default {
        "props" : ["item"]
    }
</script>