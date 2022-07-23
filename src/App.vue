<script setup>
import SendEmailCreate from './components/SendEmailCreate.vue';
import SendEmailRead from './components/SendEmailRead.vue';
import SendEmailDelete from './components/SendEmailDelete.vue';
import SendEmailUpdate from './components/SendEmailUpdate.vue';

</script>

<template>
    <div class="d-flex justify-content-around align-items-center ">
        <SendEmailCreate @criar-email="CreateEmail" v-model="create" :resposta="answerCreate" />
        <SendEmailRead :emails="answerRead" @read-email="ReadEmail" />
        <SendEmailDelete @deletar-email="DeleteEmail" v-model="deleta" :resposta="answerDelete" />
        <SendEmailUpdate @model-value-atual="changeAtualEmail" :resposta="answerUpdate"
            @model-value-new="changeNewEmail"
            @update-email="UpdateEmail" />
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { Store } from './store/index';


export default {
    data(){
        return {
            create:'',
            deleta: ''
        }
    },
    computed: {
        ...mapState({
            answerCreate: state => state.answerCreate,
            answerRead: state => state.answerRead,
            answerUpdate: state => state.answerUpdate,
            answerDelete: state => state.answerDelete
        })
    },
    methods:
    {
        ...mapActions(['CreateEmail', 'ReadEmail', 'UpdateEmail', 'DeleteEmail']),
        changeNewEmail(val){
            Store.state.newEmail = val
        },
        changeAtualEmail(val){
            Store.state.email = val
        } 
    },
    watch:{
        create(val){
            Store.state.email = val
        },
        deleta(val){
            Store.state.email = val
        }
    }
}

</script>



<style >
button {
    border: 2px solid #24b4fb;
    background-color: #24b4fb;

    border-radius: 0.9em;
    padding: 0.8em 1.2em 0.8em 1em;
    transition: all ease-in-out 0.2s;
    font-size: 16px;
}

button span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 600;
}

button:hover {
    background-color: #0071e2;
    color: aliceblue;
}
</style>
