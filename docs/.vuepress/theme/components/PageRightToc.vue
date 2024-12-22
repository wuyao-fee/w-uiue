<script>
export default {
  name: 'PageRightToc',
  data() {
    return {
      activeSlug: ''
    };
  },
  computed: {
      headers() {
        return this.$page.headers || [];
      }
  },
  mounted() {
    this.throttleHandleScroll = this.throttle(this.handleScroll, 150);
    window.addEventListener('scroll', this.throttleHandleScroll);
    this.$nextTick(() => {
      this.updateActiveSlug();
    });
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.throttleHandleScroll);
  },
  methods: {
    isActive(header) {
      return header.slug === this.activeSlug;
    },
    scrollToHeader(header) {
      const target = document.querySelector(`#${header.slug}`);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        this.activeSlug = header.slug;
      }
    },
    handleScroll() {
      this.updateActiveSlug();
    },
    updateActiveSlug() {
      let closestHeader = null;
      let smallestDistance = Infinity;

      this.headers.forEach(header => {
        const el = document.querySelector(`#${header.slug}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < smallestDistance) {
            smallestDistance = rect.top;
            closestHeader = header;
          }
        }
      });

      if (closestHeader) {
        this.activeSlug = closestHeader.slug;
      }
    },
    throttle(fn, wait) {
        let lastCall = 0;
        return function(...args) {
            const now = new Date().getTime();
            if (now - lastCall >= wait) {
                lastCall = now;
                fn.apply(this, args);
            }
        }
    },    
  }
}
</script>

<template>
  <div class='page-right-toc' ref="rightToc">
    <ul class="right-toc-list">
        <li v-for="item in $page.headers" :key="item.slug" :class="{ active: isActive(item) }">
            <a :href="`#${item.slug}`" @click.prevent="scrollToHeader(item)">{{ item.title }}</a>
        </li>
    </ul>
  </div>
</template>

<style>
html,
body {
    scroll-behavior: smooth;
}
.page-right-toc {
  position: fixed;
  right: 0;
  top: 90px;
  max-width: 240px;
  max-height: 490px;
  background: #fff;
  border-left: 1px solid #cecece;
  box-sizing: border-box;
}
ul.right-toc-list {
    margin: 5px auto;
    padding-right: 25px;
    list-style: none;
}
ul.right-toc-list li a {
    color: #282828;
    font-size: 12px;
    display: block;
    max-width: 200px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
}
ul.right-toc-list li.active a {
    color: #3eaf7c;
}
</style>