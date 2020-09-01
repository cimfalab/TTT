    <template>
      <div>
        <div v-for="i in items">
          {{ items[i] /* VUE_MISUSED_V_FOR_VAR alarm */ }}
        </div>
      </div>
    </template>
