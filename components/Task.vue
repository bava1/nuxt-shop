<template>
    <div class="task">
        <div class="task-title">Task {{ props.title }}</div>
        <div class="task-icons">
            <Icon class="task-icons_edit" name="mdi:pencil" />
            <Icon class="task-icons_delete" name="mdi:delete-outline" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String
})
</script>

<style scoped lang="scss">

.task {
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px;
    margin-top: 10px;
    border-radius: 6px;
    border: 1px solid  #198754;

    &-icons {
        width: 10%;
        display: flex;
        justify-content: end;
        align-items: center;

        &_edit {
            padding: 2px 4px;
            font-size: 1.7rem;
            color: rgb(18, 154, 97);
            cursor: pointer;
        }

        &_edit:hover {
            transform: scale(1.3);
        }

        &_delete {
            padding: 2px 4px;
            font-size: 1.7rem;
            color: rgb(179, 106, 106);
            cursor: pointer;
        }

        &_delete:hover {
            transform: scale(1.3);
        }
    }
}

</style>