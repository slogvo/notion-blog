<script setup lang="ts">
import {
  RiSunFill,
  RiMoonClearFill,
  RiGithubFill,
  RiEarthFill,
} from "vue-remix-icons";

const colorMode = useColorMode();
const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};

const currentLanguage = ref("VI");

const toggleLanguage = () => {
  currentLanguage.value = currentLanguage.value === "VI" ? "EN" : "VI";
};

const searchTerm = ref("");
const handleSearch = (value: string) => {
  console.log("Searching for:", value);
};
</script>

<template>
  <div class="flex gap-4">
    <!-- Search -->
    <div class="hidden md:block max-w-sm">
      <Input
        v-model="searchTerm"
        type="search"
        class="w-[250px] ring-zinc-400 dark:ring-zinc-900"
        placeholder="Search..."
        @update:modelValue="handleSearch"
      />
    </div>

    <!-- Right side actions -->
    <div class="flex items-center text-zinc-700 dark:text-zinc-300">
      <!-- Dark mode toggle -->
      <ClientOnly>
        <Button @click="toggleTheme" variant="ghost" size="icon">
          <RiSunFill
            v-if="colorMode.preference === 'dark'"
            size="20px"
            height="20px"
          />
          <RiMoonClearFill v-else size="20px" height="20px" />
        </Button>
      </ClientOnly>
      <Separator orientation="vertical" class="h-5" />
      <!-- Language toggle -->
      <DropdownMenu>
        <DropdownMenuTrigger as="div">
          <Button variant="ghost">
            <RiEarthFill height="20px" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem @click="toggleLanguage">
            {{ currentLanguage === "VI" ? "English" : "Tiếng Việt" }}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Separator orientation="vertical" class="h-5" />
      <!-- GitHub button -->
      <Button
        as="a"
        href="https://github.com/slogvo"
        target="_blank"
        variant="ghost"
      >
        <RiGithubFill height="20px" />
      </Button>
    </div>
  </div>
</template>
