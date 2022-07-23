<script setup>
defineProps({
  ["modelValue"]: String,
  ["resposta"]: String,
})
defineEmits(['update:modelValue', 'DeletarEmail'])


</script>

<template>
    <div class="d-flex flex-column">
        <h2 class="text-center">Resposta da Api</h2>
        <p class="text-center">{{ resposta }}</p>
        <div class="d-flex">
            <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" type="text"
                class="form-control" placeholder="Deletar email do usuario" aria-label="Email do usuario"
                aria-describedby="basic-addon2">

            <span class="input-group-text" id="basic-addon2">@gmail.com</span>
        </div>
        <button class="mx-auto mt-2" @click="$emit('DeletarEmail')">Delete Email</button>
    </div>
</template>

