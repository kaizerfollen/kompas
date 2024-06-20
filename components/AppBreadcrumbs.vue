<script setup>
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const router = useRouter();

const breadcrumbs = computed(() => {
  const pathArray = route.path.split('/').filter(Boolean);
  const breadcrumbs = pathArray.map((path, index) => {
    const to = '/' + pathArray.slice(0, index + 1).join('/');
    const matchedRoute = router.getRoutes().find(r => r.path === to);
    const name = matchedRoute && matchedRoute.meta && matchedRoute.meta.breadcrumb ? matchedRoute.meta.breadcrumb : path;
    return { name, to };
  });

  // Adding a special case for "Главная" (Home)
  return [{ name: 'Главная', to: '/' }, ...breadcrumbs];
});
</script>

<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li v-for="(breadcrumb, index) in breadcrumbs" :key="index" class="breadcrumb-item">
        <NuxtLink v-if="index < breadcrumbs.length - 1" class="breadcrumb-link" :to="breadcrumb.to">
          {{ breadcrumb.name }}
        </NuxtLink>
        <span v-else class="breadcrumb-current-link">{{ breadcrumb.name }}</span>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.breadcrumb {
  display: flex;
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: ' • ';
  padding: 0 0.5em;
}

.breadcrumb-item {
  display: flex;
  align-items: flex-start;
  font-size: 1em;
}

.breadcrumb-link, .breadcrumb-current-link {
  font-family: "PT Sans";
  font-size: 13px;
  font-weight: 400;
  color: #000;
}
.breadcrumb-current-link {
  color: #8F8F8F;
}
</style>
