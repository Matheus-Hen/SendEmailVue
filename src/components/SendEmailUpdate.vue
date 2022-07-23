<script setup>
defineProps({
    ["modelValueAtual"]: String,
    ["resposta"]: String,
    ["modelValueNew"]: String
})
defineEmits(['modelValueAtual', 'UpdateEmail', 'modelValueNew'])
</script>

<template>
    <div class="d-flex flex-column">
        <h2 class="text-center">Resposta da Api</h2>
        <p class="text-center">{{ resposta }}</p>
        <div class="d-flex flex-column">
            <div class="d-flex flex-row">
                <input :value="modelValueAtual" @input="$emit('modelValueAtual', $event.target.value)" type="text"
                    class="form-control" placeholder="Update email do usuario" aria-label="Email do usuario"
                    aria-describedby="basic-addon2"> <span class="input-group-text" id="basic-addon2">@gmail.com</span>
            </div>
            <div class="d-flex flex-row">
                <input type="text" class="form-control" :value="modelValueNew" @input="$emit('modelValueNew', $event.target.value)" placeholder="Email novo do usuario"
                    aria-label="Email do usuario" aria-describedby="basic-addon2"> <span class="input-group-text"
                    id="basic-addon2">@gmail.com</span>
            </div>
        </div>
        <button class="mx-auto mt-2" @click="$emit('UpdateEmail')">Update Email</button>
    </div>
</template>



