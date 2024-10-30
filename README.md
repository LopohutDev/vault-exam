# Referral Builder Application

This project is a **Referral Builder Application** built with [Next.js](https://nextjs.org). It allows users to add, edit, delete, and view referrals with detailed information, including personal details and addresses. The application is responsive, with an accordion-style table to display referral information, and includes animated UI interactions for a smooth user experience.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

This installs all packages specified in `package.json`, including core dependencies like `react`, `react-dom`, `next`, and additional libraries like `react-hook-form` and `zod`.

## Running the Application

To start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Project Overview

The **Referral Builder Application** allows users to manage referral data, providing features to add, edit, delete, and view referrals with detailed information. Below is an overview of its main features and components:

### 1. Referral Management

   - **Adding Referrals**: Users can add a new referral by filling out a form with fields for given name, surname, email, phone number, address, and optional notes.
   - **Editing Referrals**: Existing referrals can be edited by clicking the edit button, which populates the form with current referral details.
   - **Deleting Referrals**: Users can delete a referral using the delete button in the referral list.

### 2. Accordion-Style Referral List

   - The application displays referrals in a responsive table format. Each row can expand to show detailed information, such as the address and notes.
   - The table rows are collapsible with smooth animations using CSS transitions, providing an intuitive and interactive experience.

### 3. Form Handling and Validation

   - **React Hook Form**: Manages form state and handles input changes.
   - **Zod for Validation**: Uses `zod` schemas to validate input data, ensuring fields like phone numbers, emails, and addresses meet the required format.

### 4. Persistent Data with JSON

   - Referral data is read from and written to a JSON file (`referrals.json`) in the `app` directory, simulating a lightweight data store and ensuring persistence across server restarts.
   - **Helper functions** manage CRUD operations (Create, Read, Update, Delete) within the JSON file.

### 5. Dynamic and Animated UI

   - The UI features an accordion-style table where each row can expand or collapse, revealing or hiding additional details.
   - CSS transitions animate the expanding and collapsing effects, enhancing the user experience without requiring additional libraries.

## Project Structure

Here’s a breakdown of the key directories and files:

- **`app/`**: Contains the main Next.js application files, including pages and API routes.
  - **`page.tsx`**: The main page where the Referral Builder form and referral list are rendered.
  - **`api/referrals`**: API routes to handle referral data, including `GET`, `POST`, `PUT`, and `DELETE` requests.
- **`components/`**: Reusable UI components.
  - **`PersonalDetailsFields.tsx`** and **`AddressFields.tsx`**: Manage form fields for personal details and addresses.
  - **`ReferralItem.tsx`**: Each referral row in the table with expand/collapse functionality.
- **`lib/`**:
  - **`referralSchema.ts`**: Defines the `zod` schema for validating form inputs.
  - **`dataStore.ts`**: Contains functions to interact with `referrals.json` for data persistence.

## How It Works

1. **Adding a Referral**:
   - Users fill in the referral form, which validates inputs with `zod` schemas.
   - A `POST` request saves the referral to `referrals.json`, and the list updates to display the new referral.

2. **Editing a Referral**:
   - The form is populated with selected referral data, and users can make edits.
   - Upon submission, a `PUT` request updates the referral in `referrals.json`, and the UI reflects these changes.

3. **Deleting a Referral**:
   - The delete button triggers a `DELETE` request, removing the referral from `referrals.json`.
   - The UI removes the referral from the list, providing immediate feedback.

4. **Accordion-Style Table Display**:
   - The table displays referrals in a collapsible format, and clicking a row reveals more details.
   - CSS transitions on height and opacity provide a smooth accordion effect without needing additional libraries.

## Learn More

To further explore Next.js, refer to these resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - Interactive tutorial for beginners.

Visit the [Next.js GitHub repository](https://github.com/vercel/next.js) for additional insights, contributions, and issue tracking.
