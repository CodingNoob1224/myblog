---
title: "用 Hugo 架設個人部落格的完整流程"
date: 2025-06-17T00:00:00+08:00
categories: ["技術筆記"]
tags: ["Hugo", "靜態網站", "部落格"]
draft: false
---

這篇文章紀錄我如何使用 Hugo 架設一個屬於自己的技術部落格，用來記錄 side projects、實習筆記與學習心得。

---

## 🧰 使用工具

- **Hugo**：靜態部落格產生器  
- **Stack 主題**：[https://github.com/CaiJimmy/hugo-theme-stack](https://github.com/CaiJimmy/hugo-theme-stack)  
- **GitHub Pages**：未來部署用  
- **VS Code**：寫文章用

---

## ⚙️ 建置步驟

### 1️⃣ 安裝 Hugo Extended

1. 到 Hugo 官方 GitHub 頁面下載 Extended 版本：  
   https://github.com/gohugoio/hugo/releases

2. 解壓縮，把 `hugo.exe` 放進環境變數路徑（例如 `C:\Windows`）

3. 開啟終端機輸入：

   ```bash
   hugo version
   ```

   有出現 `/extended` 表示成功。

---

### 2️⃣ 建立新 Hugo 專案

```bash
hugo new site myblog
cd myblog
```

---

### 3️⃣ 安裝 Stack 主題

```bash
git init
git submodule add https://github.com/CaiJimmy/hugo-theme-stack themes/hugo-theme-stack
```

---

### 4️⃣ 設定 config.toml

將根目錄的 `config.toml` 修改如下：

```toml
baseURL = 'https://CodingNoob1224.github.io/'
languageCode = 'zh-tw'
title = 'CodingNoob 的部落格'
theme = 'hugo-theme-stack'

[pagination]
  pagerSize = 5

defaultContentLanguage = 'zh-tw'
hasCJKLanguage = true

[permalinks]
  side-projects = '/side-projects/:slug/'
  intern-notes = '/intern-notes/:slug/'
  tech-notes = '/tech-notes/:slug/'

[params]
  mainSections = ['side-projects', 'intern-notes', 'tech-notes']

  [params.footer]
    since = 2025
    customText = '由 CodingNoob 製作'

  [params.sidebar]
    subtitle = 'Side Projects · 實習紀錄 · 技術筆記'

  [params.article]
    showToc = true
    tocPosition = 'right'
    showReadingTime = true
    showWordCount = true

[menu]

  [[menu.main]]
    identifier = 'sideprojects'
    name = '專案紀錄'
    url = '/side-projects/'

  [[menu.main]]
    identifier = 'intern'
    name = '實習筆記'
    url = '/intern-notes/'

  [[menu.main]]
    identifier = 'tech'
    name = '技術筆記'
    url = '/tech-notes/'
```

---

### 5️⃣ 建立第一篇文章

```bash
hugo new tech-notes/hugo-setup-guide.md
```

並確認該檔案開頭的 `draft: false`，才會在網頁中顯示。

---

### 6️⃣ 啟動本地伺服器

```bash
hugo server -D
```

然後瀏覽器開啟：

```
http://localhost:1313/
```

---

## 🖋️ 使用心得

我覺得 Hugo 的架設流程比想像中簡單，Extended 版支援 SCSS，搭配 Stack 主題整體畫面現代又清爽。  
未來我會進一步整合 GitHub Pages 自動部署，持續更新 Side Projects 與實習紀錄。

---

📌 最後，只要執行以下指令就能預覽整站內容：

```bash
hugo server -D
```
