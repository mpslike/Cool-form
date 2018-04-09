<template>
    <div>
        <Row>
            <Col>
                <h1>休闲娱乐小调查</h1>
                <script id="editor" type="text/plain" style="width:500px;height:100px;"></script>

            </Col>
        </Row>
        <hr>
        
        <draggable v-model="questions" @change="changehandler" :options="options">
            <div v-for="(item , index) in questions" :key="index"  :class='{"qbox" : true , "editing" : $store.state.nowEditing == index}' >
                <div  class="editbtn" @click="changeedit(index)">
                    <Icon type="edit"></Icon>
                </div>
                <div  class="closebtn" @click="removequestion(index)">
                    <Icon type="close"></Icon>
                </div>
                <div :is="'my-' + item.type" :item="item"></div>
            </div>
        </draggable>
    </div>
</template>

<script>
    import multipleoption from "../questiontypes/multipleoption.vue";
    import singleoption from "../questiontypes/singleoption.vue";
    import selectoption from "../questiontypes/selectoption.vue";
    import datepick from "../questiontypes/datepick.vue";
    
    export default {
        created(){
            // var ue = UE.getEditor('editor');
        },
        data(){
            return {
                q1 : "" ,
                q2 : [] ,
                options : {
                    group : {
                        name : "centerpanel" ,
                        put : "leftpanel"   //能够允许谁的拽入
                    }
                }
            }
        },
        methods : {
            changeedit(nowEditing){
                this.$store.commit("changenowEditing" , {nowEditing})
            },
            changehandler({moved : {newIndex , oldIndex}}){
                console.log(newIndex , oldIndex)
                this.$store.dispatch("changequestion_dragstop" , {newIndex , oldIndex});
            },
            removequestion(index){
                this.$store.commit("removequestion" , {index})
            }
        },
        components : {
            "my-multipleoption" : multipleoption,
            "my-selectoption" : selectoption,
            "my-singleoption" : singleoption,
            "my-datepick" : datepick
        },
        computed : {
            questions : {
                get(){
                    return this.$store.state.questions;
                },
                set(v){
                    this.$store.commit("changequestions" , {v})
                }
            }
        }
    }
</script>

<style>
    .qbox{
        position:relative;
        padding:6px;
    }
    .editbtn{
        position:absolute;
        width:22px;
        height:22px;
        right:10px;
        top:10px;
        font-size:16px;
        border:1px solid #2f2f2f;
        border-radius:4px;
        z-index:999999;
        text-align:center;
        cursor:pointer;
    }
    .closebtn{
        position:absolute;
        width:22px;
        height:22px;
        right:40px;
        top:10px;
        font-size:16px;
        border:1px solid #2f2f2f;
        border-radius:4px;
        z-index:999999;
        text-align:center;
        cursor:pointer;
    }
    .ivu-radio-wrapper , .ivu-checkbox-wrapper{
        font-size:14px;
    }
    .ivu-row{
        padding:10px 0;
        position:relative;
    }
    .xing{
        position: absolute;
        left: -4px;
        top: 0px;
        color: red;
        font-size: 18px;
    }
    .editing{
        border-radius:4px;
        animation:blingborder 0.4s linear 0s infinite alternate;
    }
    @-webkit-keyframes blingborder{
        from{
            box-shadow:0px 0px 10px 1px red;
        }
        to{
            box-shadow:0px 0px 20px 1px blue;
        }
    }
</style>
