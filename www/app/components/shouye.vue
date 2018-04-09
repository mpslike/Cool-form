<template>
    <div>
        <Row :gutter="20">
            <Col span="6"><my-leftpanel></my-leftpanel></Col>
            <Col span="12"><my-centerpanel></my-centerpanel></Col>
            <Col span="6"><my-rightpanel></my-rightpanel></Col>
        </Row>
    </div>
</template>

<script>
    import draggable from 'vuedraggable';
    import centerpanel from "./panels/centerpanel.vue";
    import rightpanel from "./panels/rightpanel.vue";
    import leftpanel from "./panels/leftpanel.vue";
    export default {
        data(){
            return {

            }
        },
        components : {
            "my-centerpanel" : centerpanel,
            "my-rightpanel" : rightpanel,
            "my-leftpanel" : leftpanel
        }
    }
</script>

<style>
    
</style>
