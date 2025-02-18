<script setup>
const { data, error } = await useFetch("/api/page-content");
// const { data: blog } = await useAsyncData("blog", () =>
//   queryContent("/blog").find()
// );
</script>
<template>
  <div class="container">
    <div v-for="(item, index) in data">
      <PageArticleNotion :key="index" :notion-block="item" />
      <!-- {{ item }} -->
    </div>
    <div class="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
      <div class="grid gap-10 md:grid-cols-2 lg:gap-10">
        <div class="group cursor-pointer">
          <div
            class="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800"
          >
            <a
              class="relative block aspect-video"
              href="/post/architectural-engineering-wonders-of-the-modern-era-for-your-inspiration"
              ><img
                alt="Thumbnail"
                fetchpriority="high"
                class="object-cover transition-all"
                sizes="(max-width: 768px) 30vw, 33vw"
                src="https://feed.muzli.cloud/muzli_feed/wp-content/uploads/2024/08/07093759/studiosentempo-1.jpg"
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  inset: 0px;
                  color: transparent;
                "
            /></a>
          </div>
          <div class="">
            <div>
              <div class="flex gap-3">
                <a href="/category/technology"
                  ><span
                    class="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-blue-600"
                    >Technology</span
                  ></a
                >
              </div>
              <h2
                class="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white"
              >
                <a
                  href="/post/architectural-engineering-wonders-of-the-modern-era-for-your-inspiration"
                  ><span
                    class="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900"
                    >Architectural Engineering Wonders of the modern era for
                    your Inspiration</span
                  ></a
                >
              </h2>
              <div class="hidden">
                <p
                  class="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400"
                >
                  <a
                    href="/post/architectural-engineering-wonders-of-the-modern-era-for-your-inspiration"
                    >Reinvention often comes in spurts, after a long period of
                    silence. Just as modern architecture recently enjoyed a
                    comeback, brand architecture, a field with well-established
                    principles for decades</a
                  >
                </p>
              </div>
              <div
                class="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400"
              >
                <a href="/author/mario-sanchez"
                  ><div class="flex items-center gap-3">
                    <div class="relative h-5 w-5 flex-shrink-0">
                      <img
                        alt="Mario Sanchez"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        class="rounded-full object-cover"
                        sizes="20px"
                        src="https://bobo.muzli.cloud/1722778983526-sticky-site-hero.png?format=600:450"
                        style="
                          position: absolute;
                          height: 100%;
                          width: 100%;
                          inset: 0px;
                          color: transparent;
                        "
                      />
                    </div>
                    <span class="truncate text-sm">Mario Sanchez</span>
                  </div></a
                ><span class="text-xs text-gray-300 dark:text-gray-600">•</span
                ><time
                  class="truncate text-sm"
                  datetime="2022-10-21T15:48:00.000Z"
                  >October 21, 2022</time
                >
              </div>
            </div>
          </div>
        </div>
        <div class="group cursor-pointer">
          <div
            class="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800"
          >
            <a
              class="relative block aspect-video"
              href="/post/5-effective-brain-recharging-activities-no-one-is-talking-about"
              ><img
                alt="Graphics"
                fetchpriority="high"
                decoding="async"
                data-nimg="fill"
                class="object-cover transition-all"
                sizes="(max-width: 768px) 30vw, 33vw"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/c3fb52205063519.66b41946c7e07.png"
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  inset: 0px;
                  color: transparent;
                "
            /></a>
          </div>
          <div class="">
            <div>
              <div class="flex gap-3">
                <a href="/category/lifestyle"
                  ><span
                    class="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-purple-600"
                    >Lifestyle</span
                  ></a
                >
              </div>
              <h2
                class="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white"
              >
                <a
                  href="/post/5-effective-brain-recharging-activities-no-one-is-talking-about"
                  ><span
                    class="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900"
                    >5 Effective Brain Recharging Activities No One is Talking
                    About</span
                  ></a
                >
              </h2>
              <div class="hidden">
                <p
                  class="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400"
                >
                  <a
                    href="/post/5-effective-brain-recharging-activities-no-one-is-talking-about"
                    >No wonder mental health issues are at an all-time high. As
                    my friend John called it, we’re already in the third world
                    war — and the battlegrounds are our heads.</a
                  >
                </p>
              </div>
              <div
                class="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400"
              >
                <a href="/author/joshua-wood"
                  ><div class="flex items-center gap-3">
                    <div class="relative h-5 w-5 flex-shrink-0">
                      <img
                        alt="Joshua Wood"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        class="rounded-full object-cover"
                        sizes="20px"
                        src="https://files.muzli.cloud/6be92b32cfdd769d6e8b56645b5d33ce.jpeg"
                        style="
                          position: absolute;
                          height: 100%;
                          width: 100%;
                          inset: 0px;
                          color: transparent;
                        "
                      />
                    </div>
                    <span class="truncate text-sm">Joshua Wood</span>
                  </div></a
                ><span class="text-xs text-gray-300 dark:text-gray-600">•</span
                ><time
                  class="truncate text-sm"
                  datetime="2022-10-21T10:50:00.000Z"
                  >October 21, 2022</time
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        <div class="group cursor-pointer">
          <div
            class="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800"
          >
            <a
              class="relative block aspect-square"
              href="/post/14-architectural-design-ideas-for-spacious-interior"
              ><img
                alt="Thumbnail"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                class="object-cover transition-all"
                sizes="(max-width: 768px) 30vw, 33vw"
                src="https://files.muzli.cloud/6be92b32cfdd769d6e8b56645b5d33ce.jpeg"
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  inset: 0px;
                  color: transparent;
                "
            /></a>
          </div>
          <div class="">
            <div>
              <div class="flex gap-3">
                <a href="/category/design"
                  ><span
                    class="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-blue-600"
                    >Design</span
                  ></a
                ><a href="/category/lifestyle"
                  ><span
                    class="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-purple-600"
                    >Lifestyle</span
                  ></a
                >
              </div>
              <h2
                class="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white"
              >
                <a
                  href="/post/14-architectural-design-ideas-for-spacious-interior"
                  ><span
                    class="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900"
                    >14 Architectural Design Ideas for a Spacious Interior</span
                  ></a
                >
              </h2>
              <div class="hidden">
                <p
                  class="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400"
                >
                  <a
                    href="/post/14-architectural-design-ideas-for-spacious-interior"
                    >It is a cliche philosophical question, but it touches on
                    something fundamental about how humans relate to the world
                    around them.
                  </a>
                </p>
              </div>
              <div
                class="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400"
              >
                <a href="/author/mario-sanchez"
                  ><div class="flex items-center gap-3">
                    <div class="relative h-5 w-5 flex-shrink-0">
                      <img
                        alt="Mario Sanchez"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        class="rounded-full object-cover"
                        sizes="20px"
                        src="https://files.muzli.cloud/6be92b32cfdd769d6e8b56645b5d33ce.jpeg"
                        style="
                          position: absolute;
                          height: 100%;
                          width: 100%;
                          inset: 0px;
                          color: transparent;
                        "
                      />
                    </div>
                    <span class="truncate text-sm">Mario Sanchez</span>
                  </div></a
                ><span class="text-xs text-gray-300 dark:text-gray-600">•</span
                ><time
                  class="truncate text-sm"
                  datetime="2022-10-21T06:05:00.000Z"
                  >October 21, 2022</time
                >
              </div>
            </div>
          </div>
        </div>
        <div class="group cursor-pointer">
          <div
            class="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800"
          >
            <a
              class="relative block aspect-square"
              href="/post/every-next-level-of-your-life-will-demand-a-different-you"
              ><img
                alt="Thumbnail"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                class="object-cover transition-all"
                sizes="(max-width: 768px) 30vw, 33vw"
                src="https://files.muzli.cloud/6be92b32cfdd769d6e8b56645b5d33ce.jpeg"
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  inset: 0px;
                  color: transparent;
                "
            /></a>
          </div>
          <div class="">
            <div>
              <div class="flex gap-3">
                <a href="/category/lifestyle"
                  ><span
                    class="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-purple-600"
                    >Lifestyle</span
                  ></a
                ><a href="/category/personal-growth"
                  ><span
                    class="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-emerald-700"
                    >Personal Growth</span
                  ></a
                >
              </div>
              <h2
                class="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white"
              >
                <a
                  href="/post/every-next-level-of-your-life-will-demand-a-different-you"
                  ><span
                    class="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900"
                    >Every Next Level of Your Life Will Demand a Different
                    You</span
                  ></a
                >
              </h2>
              <div class="hidden">
                <p
                  class="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400"
                >
                  <a
                    href="/post/every-next-level-of-your-life-will-demand-a-different-you"
                    >That was so fun! I’ve got a new addiction! my athlete
                    friend exclaimed, tired but happy in the car on the way
                    home. “Let’s do it again tomorrow.”</a
                  >
                </p>
              </div>
              <div
                class="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400"
              >
                <a href="/author/mario-sanchez"
                  ><div class="flex items-center gap-3">
                    <div class="relative h-5 w-5 flex-shrink-0">
                      <img
                        alt="Mario Sanchez"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        class="rounded-full object-cover"
                        sizes="20px"
                        src="https://files.muzli.cloud/6be92b32cfdd769d6e8b56645b5d33ce.jpeg"
                        style="
                          position: absolute;
                          height: 100%;
                          width: 100%;
                          inset: 0px;
                          color: transparent;
                        "
                      />
                    </div>
                    <span class="truncate text-sm">Mario Sanchez</span>
                  </div></a
                ><span class="text-xs text-gray-300 dark:text-gray-600">•</span
                ><time
                  class="truncate text-sm"
                  datetime="2022-10-20T12:28:00.000Z"
                  >October 20, 2022</time
                >
              </div>
            </div>
          </div>
        </div>
        <div class="group cursor-pointer">
          <div
            class="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800"
          >
            <a
              class="relative block aspect-square"
              href="/post/this-bread-pudding-will-give-you-all-the-fall-feels"
              ><img
                alt="Thumbnail"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                class="object-cover transition-all"
                sizes="(max-width: 768px) 30vw, 33vw"
                src="https://files.muzli.cloud/6be92b32cfdd769d6e8b56645b5d33ce.jpeg"
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  inset: 0px;
                  color: transparent;
                "
            /></a>
          </div>
          <div class="">
            <div>
              <div class="flex gap-3">
                <a href="/category/travel"
                  ><span
                    class="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-orange-700"
                    >Travel</span
                  ></a
                >
              </div>
              <h2
                class="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white"
              >
                <a
                  href="/post/this-bread-pudding-will-give-you-all-the-fall-feels"
                  ><span
                    class="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900"
                    >This Bread Pudding Will Give You All the Fall Feels</span
                  ></a
                >
              </h2>
              <div class="hidden">
                <p
                  class="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400"
                >
                  <a
                    href="/post/this-bread-pudding-will-give-you-all-the-fall-feels"
                    >I learned this when I traveled to a remote resort to
                    deliver what was supposed to be a talk for a group of tech
                    investors. It turned out to be something of a “consult” to
                    five ultra-wealthy men.</a
                  >
                </p>
              </div>
              <div
                class="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400"
              >
                <a href="/author/erika-oliver"
                  ><div class="flex items-center gap-3">
                    <div class="relative h-5 w-5 flex-shrink-0">
                      <img
                        alt="Erika Oliver"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        class="rounded-full object-cover"
                        sizes="20px"
                        src="https://files.muzli.cloud/6be92b32cfdd769d6e8b56645b5d33ce.jpeg"
                        style="
                          position: absolute;
                          height: 100%;
                          width: 100%;
                          inset: 0px;
                          color: transparent;
                        "
                      />
                    </div>
                    <span class="truncate text-sm">Erika Oliver</span>
                  </div></a
                ><span class="text-xs text-gray-300 dark:text-gray-600">•</span
                ><time
                  class="truncate text-sm"
                  datetime="2022-10-19T13:34:00.000Z"
                  >October 19, 2022</time
                >
              </div>
            </div>
          </div>
        </div>
        <div class="group cursor-pointer">
          <div
            class="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800"
          >
            <a
              class="relative block aspect-square"
              href="/post/i-moved-across-the-country-and-never-looked-back"
              ><img
                alt="Thumbnail"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                class="object-cover transition-all"
                sizes="(max-width: 768px) 30vw, 33vw"
                src="https://files.muzli.cloud/6be92b32cfdd769d6e8b56645b5d33ce.jpeg"
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  inset: 0px;
                  color: transparent;
                "
            /></a>
          </div>
          <div class="">
            <div>
              <div class="flex gap-3">
                <a href="/category/travel"
                  ><span
                    class="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-orange-700"
                    >Travel</span
                  ></a
                >
              </div>
              <h2
                class="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white"
              >
                <a href="/post/i-moved-across-the-country-and-never-looked-back"
                  ><span
                    class="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900"
                    >I Moved Across the Country and Never Looked Back</span
                  ></a
                >
              </h2>
              <div class="hidden">
                <p
                  class="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400"
                >
                  <a
                    href="/post/i-moved-across-the-country-and-never-looked-back"
                    >I recently went to the mountains with my friends. We were
                    celebrating 50 years of friendship. It was very special. Six
                    of us were to be together spending time in the mountains.</a
                  >
                </p>
              </div>
              <div
                class="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400"
              >
                <a href="/author/joshua-wood"
                  ><div class="flex items-center gap-3">
                    <div class="relative h-5 w-5 flex-shrink-0">
                      <img
                        alt="Joshua Wood"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        class="rounded-full object-cover"
                        sizes="20px"
                        src="https://files.muzli.cloud/6be92b32cfdd769d6e8b56645b5d33ce.jpeg"
                        style="
                          position: absolute;
                          height: 100%;
                          width: 100%;
                          inset: 0px;
                          color: transparent;
                        "
                      />
                    </div>
                    <span class="truncate text-sm">Joshua Wood</span>
                  </div></a
                ><span class="text-xs text-gray-300 dark:text-gray-600">•</span
                ><time
                  class="truncate text-sm"
                  datetime="2022-10-19T12:34:00.000Z"
                  >October 19, 2022</time
                >
              </div>
            </div>
          </div>
        </div>
        <div class="group cursor-pointer">
          <div
            class="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800"
          >
            <a
              class="relative block aspect-square"
              href="/post/3-meaningful-ways-to-practice-self-care-as-an-introvert"
              ><img
                alt="Thumbnail"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                class="object-cover transition-all"
                sizes="(max-width: 768px) 30vw, 33vw"
                src="https://files.muzli.cloud/6be92b32cfdd769d6e8b56645b5d33ce.jpeg"
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  inset: 0px;
                  color: transparent;
                "
            /></a>
          </div>
          <div class="">
            <div>
              <div class="flex gap-3">
                <a href="/category/personal-growth"
                  ><span
                    class="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-emerald-700"
                    >Personal Growth</span
                  ></a
                >
              </div>
              <h2
                class="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white"
              >
                <a
                  href="/post/3-meaningful-ways-to-practice-self-care-as-an-introvert"
                  ><span
                    class="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900"
                    >3 Meaningful Ways to Practice Self-Care as an
                    Introvert</span
                  ></a
                >
              </h2>
              <div class="hidden">
                <p
                  class="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400"
                >
                  <a
                    href="/post/3-meaningful-ways-to-practice-self-care-as-an-introvert"
                    >While AI has proved superior at complex calculations &amp;
                    predictions, creativity seemed to be the domain that
                    machines can’t take over.</a
                  >
                </p>
              </div>
              <div
                class="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400"
              >
                <a href="/author/mario-sanchez"
                  ><div class="flex items-center gap-3">
                    <div class="relative h-5 w-5 flex-shrink-0">
                      <img
                        alt="Mario Sanchez"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        class="rounded-full object-cover"
                        sizes="20px"
                        src="https://files.muzli.cloud/6be92b32cfdd769d6e8b56645b5d33ce.jpeg"
                        style="
                          position: absolute;
                          height: 100%;
                          width: 100%;
                          inset: 0px;
                          color: transparent;
                        "
                      />
                    </div>
                    <span class="truncate text-sm">Mario Sanchez</span>
                  </div></a
                ><span class="text-xs text-gray-300 dark:text-gray-600">•</span
                ><time
                  class="truncate text-sm"
                  datetime="2022-10-18T14:49:00.000Z"
                  >October 18, 2022</time
                >
              </div>
            </div>
          </div>
        </div>
        <div class="group cursor-pointer">
          <div
            class="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800"
          >
            <a
              class="relative block aspect-square"
              href="/post/the-rise-of-artificial-intelligence-and-the-future-of-humans"
              ><img
                alt="Thumbnail"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                class="object-cover transition-all"
                sizes="(max-width: 768px) 30vw, 33vw"
                src="https://files.muzli.cloud/6be92b32cfdd769d6e8b56645b5d33ce.jpeg"
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  inset: 0px;
                  color: transparent;
                "
            /></a>
          </div>
          <div class="">
            <div>
              <div class="flex gap-3">
                <a href="/category/personal-growth"
                  ><span
                    class="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-emerald-700"
                    >Personal Growth</span
                  ></a
                >
              </div>
              <h2
                class="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white"
              >
                <a
                  href="/post/the-rise-of-artificial-intelligence-and-the-future-of-humans"
                  ><span
                    class="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900"
                    >The Rise of Artificial Intelligence and the Future of
                    Humans</span
                  ></a
                >
              </h2>
              <div class="hidden">
                <p
                  class="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400"
                >
                  <a
                    href="/post/the-rise-of-artificial-intelligence-and-the-future-of-humans"
                    >While AI has proved superior at complex calculations &amp;
                    predictions, creativity seemed to be the domain that
                    machines can’t take over.</a
                  >
                </p>
              </div>
              <div
                class="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400"
              >
                <a href="/author/joshua-wood"
                  ><div class="flex items-center gap-3">
                    <div class="relative h-5 w-5 flex-shrink-0">
                      <img
                        alt="Joshua Wood"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        class="rounded-full object-cover"
                        sizes="20px"
                        src="https://files.muzli.cloud/6be92b32cfdd769d6e8b56645b5d33ce.jpeg"
                        style="
                          position: absolute;
                          height: 100%;
                          width: 100%;
                          inset: 0px;
                          color: transparent;
                        "
                      />
                    </div>
                    <span class="truncate text-sm">Joshua Wood</span>
                  </div></a
                ><span class="text-xs text-gray-300 dark:text-gray-600">•</span
                ><time
                  class="truncate text-sm"
                  datetime="2022-10-18T13:47:00.000Z"
                  >October 18, 2022</time
                >
              </div>
            </div>
          </div>
        </div>
        <div class="group cursor-pointer">
          <div
            class="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800"
          >
            <a
              class="relative block aspect-square"
              href="/post/10-simple-practices-that-will-help-you-get-1-better-every-day"
            >
              <img
                alt="Thumbnail"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                class="object-cover transition-all"
                sizes="(max-width: 768px) 30vw, 33vw"
                src="https://files.muzli.cloud/6be92b32cfdd769d6e8b56645b5d33ce.jpeg"
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  inset: 0px;
                  color: transparent;
                "
            /></a>
          </div>
          <div class="">
            <div>
              <div class="flex gap-3">
                <a href="/category/personal-growth"
                  ><span
                    class="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-emerald-700"
                    >Personal Growth</span
                  ></a
                >
              </div>
              <h2
                class="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white"
              >
                <a
                  href="/post/10-simple-practices-that-will-help-you-get-1-better-every-day"
                  ><span
                    class="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900"
                    >10 Simple Practices That Will Help You Get 1% Better Every
                    Day</span
                  ></a
                >
              </h2>
              <div class="hidden">
                <p
                  class="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400"
                >
                  <a
                    href="/post/10-simple-practices-that-will-help-you-get-1-better-every-day"
                    >How do we become better every single day? We develop
                    practices that will help move us incrementally forward.
                    Small steps, taken consistently. This is the path to a good
                    life.</a
                  >
                </p>
              </div>
              <div
                class="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400"
              >
                <a href="/author/erika-oliver"
                  ><div class="flex items-center gap-3">
                    <div class="relative h-5 w-5 flex-shrink-0">
                      <img
                        alt="Erika Oliver"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        class="rounded-full object-cover"
                        sizes="20px"
                        src="https://files.muzli.cloud/6be92b32cfdd769d6e8b56645b5d33ce.jpeg"
                        style="
                          position: absolute;
                          height: 100%;
                          width: 100%;
                          inset: 0px;
                          color: transparent;
                        "
                      />
                    </div>
                    <span class="truncate text-sm">Erika Oliver</span>
                  </div></a
                ><span class="text-xs text-gray-300 dark:text-gray-600">•</span
                ><time
                  class="truncate text-sm"
                  datetime="2022-10-04T15:16:00.000Z"
                  >October 04, 2022</time
                >
              </div>
            </div>
          </div>
        </div>
        <div class="group cursor-pointer">
          <div
            class="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800"
          >
            <a
              class="relative block aspect-square"
              href="/post/every-artist-has-to-see-the-amazing-pictures-on-the-internet"
              ><img
                alt="Thumbnail"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                class="object-cover transition-all"
                sizes="(max-width: 768px) 30vw, 33vw"
                src="https://files.muzli.cloud/6be92b32cfdd769d6e8b56645b5d33ce.jpeg"
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  inset: 0px;
                  color: transparent;
                "
            /></a>
          </div>
          <div class="">
            <div>
              <div class="flex gap-3">
                <a href="/category/design"
                  ><span
                    class="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-blue-600"
                    >Design</span
                  ></a
                >
              </div>
              <h2
                class="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white"
              >
                <a
                  href="/post/every-artist-has-to-see-the-amazing-pictures-on-the-internet"
                  ><span
                    class="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900"
                    >Every Artist has to see the Amazing Pictures on the
                    Internet</span
                  ></a
                >
              </h2>
              <div class="hidden">
                <p
                  class="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400"
                >
                  <a
                    href="/post/every-artist-has-to-see-the-amazing-pictures-on-the-internet"
                    >While AI has proved superior at complex calculations &amp;
                    predictions, creativity seemed to be the domain that
                    machines can’t take over.</a
                  >
                </p>
              </div>
              <div
                class="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400"
              >
                <a href="/author/mario-sanchez"
                  ><div class="flex items-center gap-3">
                    <div class="relative h-5 w-5 flex-shrink-0">
                      <img
                        alt="Mario Sanchez"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        class="rounded-full object-cover"
                        sizes="20px"
                        src="https://files.muzli.cloud/6be92b32cfdd769d6e8b56645b5d33ce.jpeg"
                        style="
                          position: absolute;
                          height: 100%;
                          width: 100%;
                          inset: 0px;
                          color: transparent;
                        "
                      />
                    </div>
                    <span class="truncate text-sm">Mario Sanchez</span>
                  </div></a
                ><span class="text-xs text-gray-300 dark:text-gray-600">•</span
                ><time
                  class="truncate text-sm"
                  datetime="2022-10-02T15:15:00.000Z"
                  >October 02, 2022</time
                >
              </div>
            </div>
          </div>
        </div>
        <div class="group cursor-pointer">
          <div
            class="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800"
          >
            <a
              class="relative block aspect-square"
              href="/post/how-technology-evolved-under-the-bright-sun-of-universe"
              ><img
                alt="Thumbnail"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                class="object-cover transition-all"
                sizes="(max-width: 768px) 30vw, 33vw"
                src="https://files.muzli.cloud/6be92b32cfdd769d6e8b56645b5d33ce.jpeg"
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  inset: 0px;
                  color: transparent;
                "
            /></a>
          </div>
          <div class="">
            <div>
              <div class="flex gap-3">
                <a href="/category/technology"
                  ><span
                    class="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-blue-600"
                    >Technology</span
                  ></a
                >
              </div>
              <h2
                class="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white"
              >
                <a
                  href="/post/how-technology-evolved-under-the-bright-sun-of-universe"
                  ><span
                    class="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900"
                    >How Technology Evolved Under the Bright Sun of
                    Universe</span
                  ></a
                >
              </h2>
              <div class="hidden">
                <p
                  class="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400"
                >
                  <a
                    href="/post/how-technology-evolved-under-the-bright-sun-of-universe"
                    >The evolution of technology in astronomy and how it has
                    impacted our understanding of the universe. It also gives a
                    brief history of the major figures that the science through
                    their innovations
                  </a>
                </p>
              </div>
              <div
                class="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400"
              >
                <a href="/author/erika-oliver"
                  ><div class="flex items-center gap-3">
                    <div class="relative h-5 w-5 flex-shrink-0">
                      <img
                        alt="Erika Oliver"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        class="rounded-full object-cover"
                        sizes="20px"
                        src="https://files.muzli.cloud/6be92b32cfdd769d6e8b56645b5d33ce.jpeg"
                        style="
                          position: absolute;
                          height: 100%;
                          width: 100%;
                          inset: 0px;
                          color: transparent;
                        "
                      />
                    </div>
                    <span class="truncate text-sm">Erika Oliver</span>
                  </div></a
                ><span class="text-xs text-gray-300 dark:text-gray-600">•</span
                ><time
                  class="truncate text-sm"
                  datetime="2022-09-30T15:15:00.000Z"
                  >September 30, 2022</time
                >
              </div>
            </div>
          </div>
        </div>
        <div class="group cursor-pointer">
          <div
            class="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800"
          >
            <a
              class="relative block aspect-square"
              href="/post/lessons-of-happiness-i-learned-from-a-mountain-village"
              ><img
                alt="Thumbnail"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                class="object-cover transition-all"
                sizes="(max-width: 768px) 30vw, 33vw"
                src="https://files.muzli.cloud/6be92b32cfdd769d6e8b56645b5d33ce.jpeg"
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  inset: 0px;
                  color: transparent;
                  background-size: cover;
                  background-position: 50% 50%;
                  background-repeat: no-repeat;
                  background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cfilter id=\'b\' color-interpolation-filters=\'sRGB\'%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3CfeColorMatrix values=\'1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1\' result=\'s\'/%3E%3CfeFlood x=\'0\' y=\'0\' width=\'100%25\' height=\'100%25\'/%3E%3CfeComposite operator=\'out\' in=\'s\'/%3E%3CfeComposite in2=\'SourceGraphic\'/%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3C/filter%3E%3Cimage width=\'100%25\' height=\'100%25\' x=\'0\' y=\'0\' preserveAspectRatio=\'none\' style=\'filter: url(%23b);\' href=\'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAUHBv/EACMQAAEDAwQCAwAAAAAAAAAAAAECAwQABRESEyFBB1EGMVL/xAAWAQEBAQAAAAAAAAAAAAAAAAAFAwT/xAAbEQACAwADAAAAAAAAAAAAAAABAgADEQRBUf/aAAwDAQACEQMRAD8AiHjqO7J+U29LLRdU2vc049VYpd6echTMA7r6ykn8gdCp14zuMWyR5slwKMp0bTWkcgd89U6vV3VbLUlthILzpJyrnFWqRjeG8m9bFr4xHZmPvKlG4OFRwfVFLpE5515S3Ep1H7opFrNOwsAT/9k=\'/%3E%3C/svg%3E');
                "
            /></a>
          </div>
          <div class="">
            <div>
              <div class="flex gap-3">
                <a href="/category/travel"
                  ><span
                    class="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-orange-700"
                    >Travel</span
                  ></a
                >
              </div>
              <h2
                class="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white"
              >
                <a
                  href="/post/lessons-of-happiness-i-learned-from-a-mountain-village"
                  ><span
                    class="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900"
                    >Lessons Of Happiness I learned from a Mountain
                    Village</span
                  ></a
                >
              </h2>
              <div class="hidden">
                <p
                  class="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400"
                >
                  <a
                    href="/post/lessons-of-happiness-i-learned-from-a-mountain-village"
                    >I recently went to the mountains with my friends. We were
                    celebrating 50 years of friendship. It was very special. Six
                    of us were to be together spending time in the mountains.</a
                  >
                </p>
              </div>
              <div
                class="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400"
              >
                <a href="/author/joshua-wood"
                  ><div class="flex items-center gap-3">
                    <div class="relative h-5 w-5 flex-shrink-0">
                      <img
                        alt="Joshua Wood"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        class="rounded-full object-cover"
                        sizes="20px"
                        src="https://files.muzli.cloud/6be92b32cfdd769d6e8b56645b5d33ce.jpeg"
                        style="
                          position: absolute;
                          height: 100%;
                          width: 100%;
                          inset: 0px;
                          color: transparent;
                        "
                      />
                    </div>
                    <span class="truncate text-sm">Joshua Wood</span>
                  </div></a
                ><span class="text-xs text-gray-300 dark:text-gray-600">•</span
                ><time
                  class="truncate text-sm"
                  datetime="2022-09-25T15:15:00.000Z"
                  >September 25, 2022</time
                >
              </div>
            </div>
          </div>
        </div>
        <div class="group cursor-pointer">
          <div
            class="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800"
          >
            <a
              class="relative block aspect-square"
              href="/post/there-s-nothing-new-about-undermining-women-s-autonomy"
              ><img
                alt="Thumbnail"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                class="object-cover transition-all"
                sizes="(max-width: 768px) 30vw, 33vw"
                src="https://files.muzli.cloud/6be92b32cfdd769d6e8b56645b5d33ce.jpeg"
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  inset: 0px;
                  color: transparent;
                  background-size: cover;
                  background-position: 50% 50%;
                  background-repeat: no-repeat;
                  background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cfilter id=\'b\' color-interpolation-filters=\'sRGB\'%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3CfeColorMatrix values=\'1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1\' result=\'s\'/%3E%3CfeFlood x=\'0\' y=\'0\' width=\'100%25\' height=\'100%25\'/%3E%3CfeComposite operator=\'out\' in=\'s\'/%3E%3CfeComposite in2=\'SourceGraphic\'/%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3C/filter%3E%3Cimage width=\'100%25\' height=\'100%25\' x=\'0\' y=\'0\' preserveAspectRatio=\'none\' style=\'filter: url(%23b);\' href=\'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAUHAwb/xAAgEAACAQMEAwAAAAAAAAAAAAABAgADBBEFEiExBlFh/8QAFQEBAQAAAAAAAAAAAAAAAAAABAP/xAAaEQACAwEBAAAAAAAAAAAAAAAAEQECAxJB/9oADAMBAAIRAxEAPwDqatTYOcARBc6iqa0tMXaqgALIRxg/fc1url2QDrMnVe4rHyh13kqagQg85Ebak2SAZaxVuPCrsFJyIRSbh1AGehiEog/Z/9k=\'/%3E%3C/svg%3E');
                "
            /></a>
          </div>
          <div class="">
            <div>
              <div class="flex gap-3">
                <a href="/category/lifestyle"
                  ><span
                    class="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-purple-600"
                    >Lifestyle</span
                  ></a
                >
              </div>
              <h2
                class="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white"
              >
                <a
                  href="/post/there-s-nothing-new-about-undermining-women-s-autonomy"
                  ><span
                    class="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900"
                    >There’s Nothing New About Undermining Women’s
                    Autonomy</span
                  ></a
                >
              </h2>
              <div class="hidden">
                <p
                  class="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400"
                >
                  <a
                    href="/post/there-s-nothing-new-about-undermining-women-s-autonomy"
                    >In2007, the now-defunct San Antonio Independent Christian
                    Film Festival awarded Best of Festival to a documentary
                    called The Monstrous Regiment of Women a film that
                    simultaneously.</a
                  >
                </p>
              </div>
              <div
                class="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400"
              >
                <a href="/author/erika-oliver"
                  ><div class="flex items-center gap-3">
                    <div class="relative h-5 w-5 flex-shrink-0">
                      <img
                        alt="Erika Oliver"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        class="rounded-full object-cover"
                        sizes="20px"
                        src="https://files.muzli.cloud/6be92b32cfdd769d6e8b56645b5d33ce.jpeg"
                        style="
                          position: absolute;
                          height: 100%;
                          width: 100%;
                          inset: 0px;
                          color: transparent;
                        "
                      />
                    </div>
                    <span class="truncate text-sm">Erika Oliver</span>
                  </div></a
                ><span class="text-xs text-gray-300 dark:text-gray-600">•</span
                ><time
                  class="truncate text-sm"
                  datetime="2022-09-23T15:15:00.000Z"
                  >September 23, 2022</time
                >
              </div>
            </div>
          </div>
        </div>
        <div class="group cursor-pointer">
          <div
            class="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800"
          >
            <a
              class="relative block aspect-square"
              href="/post/escape-fantasies-of-the-tech-billionaires"
            >
              <img
                alt="Thumbnail"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                class="object-cover transition-all"
                sizes="(max-width: 768px) 30vw, 33vw"
                src="https://files.muzli.cloud/6be92b32cfdd769d6e8b56645b5d33ce.jpeg"
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  inset: 0px;
                  color: transparent;
                  background-size: cover;
                  background-position: 50% 50%;
                  background-repeat: no-repeat;
                "
              />
            </a>
          </div>
          <div class="">
            <div>
              <div class="flex gap-3">
                <a href="/category/technology"
                  ><span
                    class="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-blue-600"
                    >Technology</span
                  ></a
                >
              </div>
              <h2
                class="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white"
              >
                <a href="/post/escape-fantasies-of-the-tech-billionaires"
                  ><span
                    class="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900"
                    >Escape Fantasies of the Tech Billionaires</span
                  ></a
                >
              </h2>
              <div class="hidden">
                <p
                  class="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400"
                >
                  <a href="/post/escape-fantasies-of-the-tech-billionaires">
                    I learned this when I traveled to a remote resort to deliver
                    what was supposed to be a talk for a group of tech
                    investors. It turned out to be something of a “consult” to
                    five ultra-wealthy men.</a
                  >
                </p>
              </div>
              <div
                class="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400"
              >
                <a href="/author/erika-oliver"
                  ><div class="flex items-center gap-3">
                    <div class="relative h-5 w-5 flex-shrink-0">
                      <img
                        alt="Erika Oliver"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        class="rounded-full object-cover"
                        sizes="20px"
                        src="https://files.muzli.cloud/6be92b32cfdd769d6e8b56645b5d33ce.jpeg"
                        style="
                          position: absolute;
                          height: 100%;
                          width: 100%;
                          inset: 0px;
                          color: transparent;
                        "
                      />
                    </div>
                    <span class="truncate text-sm">Erika Oliver</span>
                  </div></a
                ><span class="text-xs text-gray-300 dark:text-gray-600">•</span
                ><time
                  class="truncate text-sm"
                  datetime="2022-09-21T15:14:00.000Z"
                  >September 21, 2022</time
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 flex justify-center">
        <a
          class="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
          href="/archive"
          ><span>View all Posts</span></a
        >
      </div>
    </div>
  </div>
</template>
