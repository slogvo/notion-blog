import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/interfaces/RouterOptions.html#scrollBehavior
export default <RouterConfig>{
  scrollBehavior: (to, from, savedPosition) => {
    // Handle scrolling to an element by hash with smooth behavior
    if (to.hash) {
      return {
        el: to.hash,
        top: 100, // Adjust scroll position to 100px from the top
        behavior: 'smooth', // Smooth scrolling
      }
    }
    // Handle case where navigating to the same route (usually for anchor links)
    if (to.fullPath === from.fullPath) {
      return {
        left: 0,
        top: 0,
        behavior: 'smooth', // Smooth scrolling to the top-left of the page
      }
    }
    // Scroll to the saved position if it exists
    if (savedPosition) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            left: savedPosition.left,
            top: savedPosition.top,
            behavior: 'smooth',
          })
        }, 500) // 500ms delay to allow for page transitions or content loading
      })
    }
    return {
      left: 0,
      top: 0,
    }
  },
}
