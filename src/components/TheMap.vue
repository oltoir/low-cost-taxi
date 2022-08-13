<template>
  <div>
    <h3>Ваши координаты: {{ coordinates.lat }} {{ coordinates.lng }}</h3>
    <q-btn color="primary">Hello</q-btn>
  </div>
</template>

<script>
export default {
  data() {
    return { coordinates: { lat: 0, lng: 0 } };
  },
  created() {
    this.$getLocation().then((coordinates) => {
      this.coordinates = coordinates;
    });
  },
};
</script>
