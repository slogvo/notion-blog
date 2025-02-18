<script setup></script>

<template>
  <div class="container">
    <section
      class="py-10 lg:py-20 text-left px-6 lg:text-center max-w-5xl mx-auto"
    >
      <div class="flex flex-col gap-10 w-full">
        <div class="space-y-4 flex flex-col lg:items-center flex-1">
          <a href="#">
            <div
              class="flex items-center gap-2 py-1 px-3 w-fit rounded-full border border-border dark:border-none bg-secondary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-sparkles"
              >
                <path
                  d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
                ></path>
                <path d="M5 3v4"></path>
                <path d="M19 17v4"></path>
                <path d="M3 5h4"></path>
                <path d="M17 19h4"></path>
              </svg>
              <span class="text-md font-medium lg:text-base">Introducing</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </a>
          <h1 class="font-semibold text-3xl lg:text-5xl">
            Nextbase Pro Landing Page
          </h1>
          <p
            class="text-slate-500 dark:text-slate-400 leading-loose lg:text-lg lg:leading-relaxed max-w-4xl"
          >
            Welcome to Nextbase Pro Landing Page: Your Gateway to Innovation.
            Discover the Future of Excellence and Elevate Your Experience.
          </p>
          <div
            class="flex flex-col md:flex-row items-center max-w-md w-full gap-3 pt-2"
          >
            <button
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
            >
              Log In
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right ml-2"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
            <button
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 w-full"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chevron-right ml-2"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          class="rounded-md border-2 flex-1 overflow-hidden border-border shadow-sm"
        >
          <img
            alt="Hero Image"
            loading="lazy"
            width="2208"
            height="1469"
            decoding="async"
            class="h-[500px] object-cover"
            style="color: transparent"
            src="https://plus.unsplash.com/premium_photo-1723200799223-0095f042decb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </section>

    <div class="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
      <div
        class="flex-row-reverse items-center justify-between space-y-12 text-gray-600 md:flex md:gap-6 lg:gap-12 lg:space-y-0"
      >
        <div class="relative ml-auto h-full md:w-1/2">
          <img
            class="dark:hidden"
            src="https://plus.unsplash.com/premium_photo-1722769612836-76c134c1dd21?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="app milestone"
            width="1174"
            height="1134"
          />
          <img
            class="hidden dark:block"
            src="https://plus.unsplash.com/premium_photo-1722769612836-76c134c1dd21?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="app milestone"
            width="1174"
            height="1134"
          />
        </div>

        <div class="md:w-1/2 lg:w-[47%]">
          <h2
            class="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"
          >
            Just focus on your business startegy
          </h2>
          <p class="my-12 text-gray-600 dark:text-gray-300">
            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
            expedita at? Asperiores nemo possimus nesciunt dicta veniam
            aspernatur quam mollitia. <br />
            <br />
            Vitae error, quaerat officia delectus voluptatibus explicabo quo
            pariatur impedit, at reprehenderit aliquam a ipsum quas voluptatem.
            Quo pariatur asperiores eum amet.
          </p>
          <div class="space-y-4 divide-y divide-gray-100 dark:divide-gray-800">
            <div class="mt-8 flex gap-4 md:items-center">
              <div
                class="flex h-12 w-12 gap-4 rounded border border-gray-200 dark:border-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="m-auto h-6 w-6 text-gray-700 dark:text-gray-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  ></path>
                </svg>
              </div>
              <div class="w-5/6">
                <h3 class="text-lg font-semibold text-gray-700 dark:text-white">
                  Chat Anytime
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Asperiores nemo possimus nesciunt quam mollitia.
                </p>
              </div>
            </div>
            <div class="flex gap-4 pt-4 md:items-center">
              <div
                class="flex h-12 w-12 gap-4 rounded border border-gray-200 dark:border-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="m-auto h-6 w-6 text-gray-700 dark:text-gray-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  ></path>
                </svg>
              </div>
              <div class="w-5/6">
                <h3 class="text-lg font-semibold text-gray-700 dark:text-white">
                  Real Time Location
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Asperiores nemo possimus nesciunt quam mollitia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="my-20 md:my-32">
        <h3
          class="text-2xl font-bold text-gray-900 dark:text-white md:w-2/3 md:text-3xl lg:text-4xl"
        >
          Customize your customer experience, Go beyond with our top products
        </h3>
        <div class="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            class="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker"
          >
            <div
              class="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900"
            >
              <img
                class="w-10"
                src="https://plus.unsplash.com/premium_photo-1722769612836-76c134c1dd21?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="safety icon illustration"
                height="512"
                width="512"
              />
              <div>
                <h4 class="text-xl font-semibold text-gray-900 dark:text-white">
                  Safelus
                </h4>
                <p class="mt-3 text-gray-600 dark:text-gray-400">
                  Dolorem aliquid officiis quae ipsum nobis libero alias Iure
                  nobis dicta.
                </p>
              </div>
            </div>
          </div>
          <div
            class="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker"
          >
            <div
              class="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900"
            >
              <img
                class="w-10"
                src="https://images.unsplash.com/photo-1722954532851-87028101199c?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="payment card icon illustration"
                height="512"
                width="512"
              />
              <div>
                <h4 class="text-xl font-semibold text-gray-900 dark:text-white">
                  Paylus
                </h4>
                <p class="mt-3 text-gray-600 dark:text-gray-400">
                  Dolorem aliquid officiis quae ipsum nobis libero alias Iure
                  nobis dicta.
                </p>
              </div>
            </div>
          </div>
          <div
            class="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker"
          >
            <div
              class="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900"
            >
              <img
                class="w-10"
                src="https://plus.unsplash.com/premium_photo-1722769612836-76c134c1dd21?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="xp icon illustration"
                height="512"
                width="512"
              />
              <div>
                <h4 class="text-xl font-semibold text-gray-900 dark:text-white">
                  TL Certification
                </h4>
                <p class="mt-3 text-gray-600 dark:text-gray-400">
                  Dolorem aliquid officiis quae ipsum nobis libero alias Iure
                  nobis dicta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mx-auto flex flex-col items-center gap-6 sm:w-4/5 md:w-full md:flex-row lg:gap-12"
      >
        <div class="relative md:w-1/2">
          <div
            aria-hidden="true"
            class="absolute inset-0 m-auto grid h-3/5 w-3/5 grid-cols-2 -space-x-52 opacity-40 dark:opacity-60"
          >
            <div
              class="h-full rounded-full bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"
            ></div>
            <div
              class="h-full bg-gradient-to-r from-cyan-400 to-primary blur-[106px] dark:to-indigo-600"
            ></div>
          </div>
          <img
            class="relative dark:hidden"
            src="https://plus.unsplash.com/premium_photo-1722769612836-76c134c1dd21?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="stats illustration"
            width="1746"
            height="1746"
          />
          <img
            class="relative hidden dark:block"
            src="https://astrolus-premium.netlify.app/images/illus-dark.webp"
            alt="stats illustration"
          />
        </div>
        <div class="ml-auto h-full md:w-1/2">
          <h3
            class="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl lg:text-4xl"
          >
            Go beyond with our top products
          </h3>
          <p class="my-12 text-gray-600 dark:text-gray-300">
            Nobis minus voluptatibus pariatur dignissimos libero quaerat ?
            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam
            mollitia. <br />
            <br />
            Vitae error, quaerat officia delectus voluptatibus explicabo quo
            pariatur impedit, at reprehenderit aliquam a ipsum quas voluptatem.
            Quo pariatur asperiores eum amet.
          </p>
          <a href="/register" class="before:bg-primary astro-Z4ZYBUMP"
            ><span class="text-white astro-Z4ZYBUMP"> Get started </span></a
          >
        </div>
      </div>
    </div>

    <div class="mx-auto mt-20 max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
      <div class="m-auto text-center lg:w-8/12 xl:w-7/12">
        <h2
          class="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"
        >
          Start managing your company smarter today
        </h2>
      </div>
      <div class="mt-12 md:mt-20">
        <div
          class="relative rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/20 transition duration-500 dark:border-white/10 dark:bg-gray-900 dark:shadow-none"
        >
          <div
            class="flex flex-col gap-12 divide-y p-12 dark:divide-gray-800 md:flex-row md:divide-y-0 md:divide-x"
          >
            <div class="text-center md:w-5/12">
              <h3 class="text-3xl font-bold text-gray-900 dark:text-white">
                Suite Enterprise
              </h3>
              <p class="text-lg text-gray-600 dark:text-gray-300">
                For your company of any size
              </p>
              <span
                class="mb-6 mt-12 inline-block text-6xl font-bold text-gray-900 dark:text-white"
                ><span class="text-4xl text-primary dark:text-gray-200">$</span
                >234</span
              >

              <div class="flex justify-center">
                <a
                  href="/register"
                  class="before:bg-primary astro-Z4ZYBUMP"
                  type="button"
                  ><span class="text-white astro-Z4ZYBUMP">
                    Get started
                  </span></a
                >
              </div>

              <p class="mt-12 text-sm text-gray-500 dark:text-gray-400">
                Includes : Security, Unlimited Storage, Payment, Search engine,
                and all features
              </p>
            </div>
            <div class="relative md:w-7/12 md:pl-12">
              <ul
                role="list"
                class="space-y-4 py-6 text-gray-600 dark:text-gray-300"
              >
                <li class="space-x-2">
                  <span class="font-semibold text-primary dark:text-gray-300"
                    >✓</span
                  >
                  <span>First premium advantage</span>
                </li>
                <li class="space-x-2">
                  <span class="font-semibold text-primary dark:text-gray-300"
                    >✓</span
                  >
                  <span>Second advantage weekly</span>
                </li>
                <li class="space-x-2">
                  <span class="font-semibold text-primary dark:text-gray-300"
                    >✓</span
                  >
                  <span>Third advantage donate to project</span>
                </li>
                <li class="space-x-2">
                  <span class="font-semibold text-primary dark:text-gray-300"
                    >✓</span
                  >
                  <span>Fourth, access to all components weekly</span>
                </li>
              </ul>
              <p class="text-gray-700 dark:text-white">
                Team can be any size, and you can add or switch members as
                needed. Companies using our platform include:
              </p>
              <div
                class="mt-12 flex flex-wrap items-center justify-between gap-6 grayscale"
              >
                <img
                  class="h-8 w-auto lg:h-12"
                  src="https://images.unsplash.com/photo-1722954532851-87028101199c?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width="100"
                  alt="airbnb"
                />
                <img
                  class="h-6 w-auto lg:h-8"
                  src="https://images.unsplash.com/photo-1722954532851-87028101199c?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width="100"
                  alt="bissell"
                />
                <img
                  class="h-8 w-auto lg:h-10"
                  src="https://images.unsplash.com/photo-1722954532851-87028101199c?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width="100"
                  height="100"
                  alt="ge"
                />
                <img
                  class="ww-auto h-8 lg:h-12"
                  src="https://images.unsplash.com/photo-1722954532851-87028101199c?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width="100"
                  alt="microsoft"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-20 flex flex-col gap-12 md:mt-32 lg:flex-row">
        <div class="text-center lg:w-5/12 lg:pl-12 lg:text-left">
          <h2
            class="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl lg:text-4xl"
          >
            Frequently Asqued Questions
          </h2>
          <p class="mt-4 text-gray-600 dark:text-gray-300">
            piente optio repellendus atque illum odio! Fugiat at expedita
            deserunt dolorum molestias.
          </p>
        </div>
        <div
          class="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800 lg:w-7/12"
        >
          <div>
            <dl class="faq mx-auto max-w-2xl">
              <dt class="text-lg">
                <button
                  type="button"
                  class="flex w-full items-start justify-between py-6 text-left text-gray-400"
                  aria-controls="faq-1"
                  data-active="false"
                >
                  <span class="font-medium text-gray-900 dark:text-white">
                    How to customize the template ?
                  </span>
                  <span class="ml-6 flex h-7 items-center">
                    <svg
                      class="arrow-down h-6 w-6 rotate-0 transform duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      ></path>
                    </svg>
                  </span>
                </button>
              </dt>
              <dd
                class="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out"
                id="faq-1"
                style="max-height: 0px"
              >
                <p class="pb-6 text-base text-gray-600 dark:text-gray-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum quod pariatur possimus at fugit natus aspernatur
                  molestiae. Velit, odio modi provident necessitatibus molestias
                  qui voluptatibus similique magnam a nam rem!
                </p>
              </dd>
            </dl>
          </div>
          <div>
            <dl class="faq mx-auto max-w-2xl">
              <dt class="text-lg">
                <button
                  type="button"
                  class="flex w-full items-start justify-between py-6 text-left text-gray-400"
                  aria-controls="faq-2"
                  data-active="false"
                >
                  <span class="font-medium text-gray-900 dark:text-white">
                    How many times can I use the template ?
                  </span>
                  <span class="ml-6 flex h-7 items-center">
                    <svg
                      class="arrow-down h-6 w-6 rotate-0 transform duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      ></path>
                    </svg>
                  </span>
                </button>
              </dt>
              <dd
                class="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out"
                id="faq-2"
                style="max-height: 0px"
              >
                <div class="pb-6 text-base text-gray-600 dark:text-gray-400">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laborum quod pariatur possimus at fugit natus aspernatur
                    molestiae. Velit, odio modi provident necessitatibus
                    molestias qui voluptatibus similique magnam a nam rem!
                  </p>
                  <ul class="mt-4 list-outside list-disc pl-4">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                  </ul>
                </div>
              </dd>
            </dl>
          </div>
          <div>
            <dl class="faq mx-auto max-w-2xl">
              <dt class="text-lg">
                <button
                  type="button"
                  class="flex w-full items-start justify-between py-6 text-left text-gray-400"
                  aria-controls="faq-3"
                  data-active="false"
                >
                  <span class="font-medium text-gray-900 dark:text-white">
                    How to customize the template ?
                  </span>
                  <span class="ml-6 flex h-7 items-center">
                    <svg
                      class="arrow-down h-6 w-6 rotate-0 transform duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      ></path>
                    </svg>
                  </span>
                </button>
              </dt>
              <dd
                class="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out"
                id="faq-3"
                style="max-height: 0px"
              >
                <p class="pb-6 text-base text-gray-600 dark:text-gray-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum quod pariatur possimus at fugit natus aspernatur
                  molestiae. Velit, odio modi provident necessitatibus molestias
                  qui voluptatibus similique magnam a nam rem!
                </p>
              </dd>
            </dl>
          </div>
          <div>
            <dl class="faq mx-auto max-w-2xl">
              <dt class="text-lg">
                <button
                  type="button"
                  class="flex w-full items-start justify-between py-6 text-left text-gray-400"
                  aria-controls="faq-4"
                  data-active="false"
                >
                  <span class="font-medium text-gray-900 dark:text-white">
                    How to customize the template ?
                  </span>
                  <span class="ml-6 flex h-7 items-center">
                    <svg
                      class="arrow-down h-6 w-6 rotate-0 transform duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      ></path>
                    </svg>
                  </span>
                </button>
              </dt>
              <dd
                class="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out"
                id="faq-4"
                style="max-height: 0px"
              >
                <p class="pb-6 text-base text-gray-600 dark:text-gray-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum quod pariatur possimus at fugit natus aspernatur
                  molestiae. Velit, odio modi provident necessitatibus molestias
                  qui voluptatibus similique magnam a nam rem!
                </p>
              </dd>
            </dl>
          </div>
          <div>
            <dl class="faq mx-auto max-w-2xl">
              <dt class="text-lg">
                <button
                  type="button"
                  class="flex w-full items-start justify-between py-6 text-left text-gray-400"
                  aria-controls="faq-5"
                  data-active="false"
                >
                  <span class="font-medium text-gray-900 dark:text-white">
                    How to customize the template ?
                  </span>
                  <span class="ml-6 flex h-7 items-center">
                    <svg
                      class="arrow-down h-6 w-6 rotate-0 transform duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      ></path>
                    </svg>
                  </span>
                </button>
              </dt>
              <dd
                class="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out"
                id="faq-5"
                style="max-height: 0px"
              >
                <p class="pb-6 text-base text-gray-600 dark:text-gray-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum quod pariatur possimus at fugit natus aspernatur
                  molestiae. Velit, odio modi provident necessitatibus molestias
                  qui voluptatibus similique magnam a nam rem!
                </p>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
