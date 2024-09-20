<script setup>
import { inject } from 'vue';

const msg = inject('msg', 'Pas de provide')
</script>

<template>
  <VCard>
    <VCardItem title="Popular Instructors">
      Temps et date
    </VCardItem>
    <VDivider />
    
    <VCardText>
      Contenu 
    </VCardText>
    <VDivider />
    <VCardItem>
      Marqueur
    </VCardItem>
    
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 16px;
}
</style>
