# 系统架构图

```mermaid
flowchart TB
    subgraph 用户层
        U[学生用户]
        U2[卖家/买家]
    end

    subgraph 前端[前端 - Vue 3]
        P1[首页/列表页]
        P2[物品详情页]
        P3[发布页]
        P4[个人中心]
        P5[登录/注册]
    end

    subgraph 后端[后端 - Node.js + Express]
        API[RESTful API]
        AUTH[认证中间件]
        VAL[数据验证]
    end

    subgraph 数据层[数据库 - SQLite]
        T1[(用户表)]
        T2[(物品表)]
        T3[(收藏表)]
    end

    U --> P1
    U2 --> P3
    
    P1 --> API
    P2 --> API
    P3 --> API
    P4 --> API
    P5 --> API

    API --> AUTH
    AUTH --> VAL
    VAL --> T1
    VAL --> T2
    VAL --> T3
```

## 技术说明

| 层级 | 技术选型 | 职责 |
|------|----------|------|
| 前端 | Vue 3 + Vite | 页面渲染、用户交互 |
| 后端 | Node.js + Express | 业务逻辑、数据处理 |
| 数据库 | SQLite / MySQL | 数据持久化存储 |

## 数据流向

```
用户操作 → 前端组件 → API请求 → 后端处理 → 数据库存取 → 返回响应 → 前端渲染
```
