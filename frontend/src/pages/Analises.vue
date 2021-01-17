<template>
  <q-page class="flex flex-center">
    <div v-for="estudante in estudantes" :key="estudante._id">
      <!-- <div>{{ estudante._id }}</div> -->
      <!-- <div>Estágio da conversa: {{ estudante.stage }}</div> -->
      <div>Nome: {{ estudante.name }}</div>
      <div>Telefone: {{ estudante.number }}</div>
      <chart-mood :depoimentos="estudante.depoimentos" />
    </div>
  </q-page>
</template>

<script>
import ChartMood from 'components/ChartMood.vue'
export default {
  name: 'PageAnalises',
  components: {
    ChartMood
  },
  mounted () {
    this.loadData()
  },
  data () {
    return {
      estudantes: []
    }
  },
  methods: {
    loadData () {
      this.$axios.get('http://localhost:3000/estudantes')
        .then((response) => {
          this.estudantes = response.data.estudantes.map((estudante, index) => ({
            ...estudante,
            key: index,
            depoimentos: (estudante.depoimentos || []).map(depoimento => ({
              ...depoimento,
              datetime: new Date(depoimento.datetime).getTime(),
            }))
          }))
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Loading failed',
            icon: 'report_problem'
          })
        })
    }
  }
}
</script>
