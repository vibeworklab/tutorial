---
layout: home
title: VibeWork Lab - 用 AI 赋能创造力
titleTemplate: 实战课程 · 从零到一 · 快速上手

hero:
  name: VibeWork Lab
  text: 用 AI 赋能创造力
  tagline: 实战课程，从零到一，快速上手
  image:
    src: /banner.svg
    alt: VibeWork Lab
  actions:
    - theme: brand
      text: 开始学习
      link: /coding/zero-to-one/
    - theme: alt
      text: 浏览课程
      link: /coding/

features:
  - icon: 💻
    title: Coding
    details: AI 协作编程，从想法到上线，实战项目驱动
    link: /coding/
  - icon: 🎨
    title: Design
    details: AI 辅助设计，释放创意潜能（即将推出）
    link: /design/
  - icon: 🤖
    title: AI
    details: AI 工具与方法，提升工作效率（即将推出）
    link: /ai/
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(135deg, #42b983 0%, #35495e 100%);
  --vp-home-hero-image-background-image: linear-gradient(135deg, #42b983 50%, #35495e 50%);
  --vp-home-hero-image-filter: blur(44px);
}

.VPHero .image-bg {
  transition: transform 3s ease;
}

.VPHero:hover .image-bg {
  transform: scale(1.1);
}

.VPHero .image-container {
  max-width: 600px !important;
}

.VPHero .image-container img {
  width: 100%;
  max-width: 600px;
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
  .VPHero .image-container {
    max-width: 700px !important;
  }
  .VPHero .image-container img {
    max-width: 700px;
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
  .VPHero .image-container {
    max-width: 800px !important;
  }
  .VPHero .image-container img {
    max-width: 800px;
  }
}
</style>
