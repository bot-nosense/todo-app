<!-- <template>
    <div class="input-group">
        <input type="text" class="form-control" placeholder="Searching ..." :value="searchValue"
            @input="updateSearchValue">
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    value: string
    onUpdateSearchValue: Function
}>()

const searchValue = ref(props.value)

const updateSearchValue = (event: Event) => {
    searchValue.value = (event.target as HTMLInputElement).value
    props.onUpdateSearchValue(searchValue.value)
}
</script> -->
