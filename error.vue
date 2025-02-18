<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect: "/dashboard",
  });
};
</script>

<template>
  <div
    class="w-screen mx-auto h-screen flex items-center justify-center bg-white dark:bg-slate-950"
  >
    <SCard class="p-10 w-full max-w-4xl mx-auto">
      <h1>{{ error.statusCode }}</h1>
      <h2>{{ error.message }}</h2>
      <p>Xin lỗi, đã có lỗi xảy ra.</p>
      <NuxtLink to="/">
        <Button
          class="rounded-full mt-4 bg-black dark:bg-white text-white dark:text-black"
          >Quay về trang chủ</Button
        >
      </NuxtLink>
    </SCard>
  </div>
</template>
