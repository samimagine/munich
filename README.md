# 🚀 Funded - MultiStep Form

This is a **multi-step funding form** built with **React, Zustand, and Vite**. It allows users to enter business details and find non-dilutive funding options.

---

## 🚀 Features

- **Multi-Step Form**: Users can input their business details step by step.
- **Navigation Usability**: Users can go **back and forth** while inserting information, improving usability.
- **Styled Buttons**: Differentiated from inputs for clearer interaction.
- **Data Persistence**: Stores user email in `localStorage` to avoid redundant email input.
- **Results Panel**: Displays funding options after submission.
- **No Results**: A message is displayed when no results were found and invites the user to try again.
- **API Integration**: Fetches best funding matches from the backend.
- **Loading Screen**: Displays a temporary **"Making the Magic"** screen before results.
- **Modular & Scalable**: The **panel** is structured for potential future extensions.

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Zustand (state management), React Router
- **Styling:** Styled Components
- **Testing:** Vitest (setup pending)
- **Backend:** FastAPI (for funding data matching)

---

## 🛠️ Installation & Setup

```sh
# Clone the repository
git clone https://github.com/samimagine/munich.git
cd munich

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 📂 Project Structure

```
📦 munich
├── 📂 src
│   ├── 📂 components
│   ├── 📂 store
│   ├── 📂 pages
│   ├── 📂 assets
│   ├── main.tsx
│   ├── App.tsx
├── 📄 vite.config.ts
├── 📄 package.json
├── 📄 README.md
└── 📄 tsconfig.json
```

---

## 🔧 Technologies Used

- **React** - Component-based UI
- **Vite** - Fast build tool
- **Zustand** - State management
- **TypeScript** - Static typing
- **Styled Components** - Styling
- **React Router** - Navigation

---

## 🧪 Example Test Data

Use the following data for testing:

- **🏛 State:** Bayern
- **🏢 Company Size:** Kleinstunternehmen
- **📌 Areas:** Forschung & Innovation
- **💰 Grant:** 10,000 €
- **📈 Revenue:** 1,000 €

This dataset helps validate the funding match algorithm and UI behavior. ✅

---

## 🚀 Future Improvements

- **Write unit tests** using Vitest to improve code reliability.
- **Unify styling** for better consistency across the application.
- **Multi-option support in AutoComplete**: The structure is there, but it's not yet implemented.
- **Enhance mobile responsiveness**: Further refinements to layout adjustments.
- **Improve accessibility**: Ensure WCAG compliance for keyboard and screen reader users.
- **Expand the results panel** with sorting/filtering for better usability.
- **Enhance API error handling**: Avoid console errors when no results are found.

---

## 📄 License

This project is licensed under the MIT License.

---
