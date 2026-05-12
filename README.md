# 📚 BookScroll

> TikTok-style book reading app with Deep Read Mode + personal reflection notes

---

## ✅ What you need (all free)

- [ ] [Node.js](https://nodejs.org) — download and install
- [ ] [Git](https://git-scm.com) — download and install
- [ ] [GitHub account](https://github.com) — sign up free
- [ ] [Android Studio](https://developer.android.com/studio) — only needed for APK

---

## 🚀 Step 1 — Run on your computer

```bash
# 1. Install packages
npm install

# 2. Run the app
npm run dev

# 3. Open http://localhost:5173 in your browser
```

---

## 📱 Step 2 — See it on your phone right now (easiest)

1. Run `npm run dev` on your computer
2. Your terminal shows something like `http://192.168.x.x:5173`
3. Make sure your phone is on the same WiFi
4. Open that address on your phone browser ✅

---

## 🏠 Step 3 — Install on phone like a real app

1. Run `npm run build` — this creates a `dist` folder
2. Go to vercel.com → sign up free → drag the `dist` folder
3. You get a URL like `bookscroll.vercel.app`
4. Open it on your phone
5. iPhone: Safari → Share button → Add to Home Screen
6. Android: Chrome → 3 dots menu → Add to Home Screen

---

## 🤖 Step 4 — Get an APK (real Android app)

### First time — put code on GitHub:
```bash
git init
git add .
git commit -m "BookScroll v1"

# Create repo on github.com first, then:
git remote add origin https://github.com/YOURNAME/bookscroll.git
git push -u origin main
```

### GitHub automatically builds your APK:
1. Go to your GitHub repo
2. Click the Actions tab
3. Click the latest build
4. Scroll down to Artifacts
5. Download BookScroll-APK
6. Send the .apk file to your phone
7. Open it on Android to install ✅

---

## 🔄 Every future update

```bash
# Edit your code, then:
git add .
git commit -m "describe what you changed"
git push
# GitHub builds a fresh APK automatically
```

---

## 📁 Project structure

```
bookscroll/
├── src/
│   ├── main.jsx        ← App entry point (don't touch)
│   └── App.jsx         ← All BookScroll code (edit this)
├── public/             ← Put your icons/images here
├── .github/
│   └── workflows/
│       └── build-apk.yml  ← Auto APK builder
├── capacitor.config.json  ← Android app settings
├── index.html
├── package.json
└── vite.config.js
```

---

## 🆘 Stuck?

- App not loading → make sure you ran `npm install` first
- APK not installing on phone → Android Settings → Security → Allow unknown sources
- Want to add more books → open `src/App.jsx` and find the `books` array at the top

---

Built with React + Vite + Capacitor
