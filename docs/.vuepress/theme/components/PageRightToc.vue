<script>
export default {
  name: 'PageRightToc',
}
</script>

<template>
  <div class='page-right-toc'>
    <ul class="right-toc-list">
        <li v-for="item in $page.headers" :key="item.slug">
            <a :href="`#${item.slug}`">{{ item.title }}</a>
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
}
ul.right-toc-list li a {
    color: #282828;
    font-size: 12px;
}
</style>