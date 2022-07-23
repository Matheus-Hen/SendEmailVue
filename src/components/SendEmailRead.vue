<script setup>
defineProps({
    "emails": Array
})
defineEmits(['ReadEmail'])
</script>

<template>
    <div class="d-flex flex-column position-static read">
        <button class="mx-auto mb-2" @click="$emit('ReadEmail')">Read Email's</button>
        <h2>Resposta da API</h2>
        <ul>
        <li v-for="mail in emails">{{ mail.EmailMarktUser }}</li>
        </ul>
    </div>
</template>

<script>
import { api } from '../service/api.js'
export default {
    data() {
        return {
            emails: []
        }
    },
    methods: {
        EventSend() {
            if (this.emails.length == 0) {
                api.get('read').then((res) => {
                    this.emails = res.data
                })
            } else {
                this.emails.length = 0;
            }
        }
    },
    computed: {
    }
}


</script>


<style>
.read{
    height: 0;
}
</style>
