# All Organized Sales Quizzes

Four bilingual (English and Spanish) sales training quizzes based on Alex Hormozi's "The Ultimate Sales Training for 2026 [Full Course]," adapted for All Organized roll-out shelves.

There are two pages:

| Page | Who uses it | What they see |
|---|---|---|
| `index.html` (the main link) | Sales reps | The 4 quizzes, instant feedback, their own score, and "Copy my results." Each finished quiz is sent to the Google Sheet with the rep's name and email. |
| `manager.html` | Managers only | A passcode screen, then the team dashboard, every result, the most-missed questions, and the answer key. |

GitHub Pages hosts the pages. A Google Sheet stores the results, and a small Google Apps Script connects them. It's all free.

Setup takes about 30 minutes. Do Part 1 first, because Part 2 needs a link that Part 1 gives you.

---

## Part 1: Set up the Google Sheet that stores results

Tip: Do this while signed in to the Google account for **info@allorganized.com**, so the business owns the results. If you use your own Google account, share the Sheet with info@allorganized.com in Step 8.

1. Go to **sheets.google.com** and create a blank spreadsheet. Name it **Sales Quiz Results**.
2. In the Sheet's menu, click **Extensions > Apps Script**. A code editor opens in a new tab.
3. Delete everything in the editor. Open the file `apps-script/Code.gs` from this folder, copy all of it, and paste it into the editor.
4. Near the top, find this line:
   ```
   const MANAGER_PASSCODE = "ros09021988";
   ```
   Replace the text between the quotes with a passcode only managers will know. Make it long, like `Shelves-Since-1975-Pantry!`. Click the **Save** icon (the floppy disk).
5. At the top of the editor, make sure the function dropdown says **setup**, then click **Run**.
   - Google will ask for permission. Click **Review permissions**, pick your account, then click **Advanced > Go to (your project name) (unsafe)**, then **Allow**. This warning appears because it's your own script, not one from the Google store. It only gets access to this one spreadsheet.
   - When it finishes, go back to the Sheet. You'll see a new tab called **Results** with column headers.
6. In the Apps Script editor, click **Deploy > New deployment**.
   - Click the gear icon next to "Select type" and choose **Web app**.
   - Description: `Quiz results`
   - Execute as: **Me**
   - Who has access: **Anyone**. This lets reps without Google accounts send in their scores. The script only lets them add a row. They can't read anything.
   - Click **Deploy**, then copy the **Web app URL**. It ends in `/exec`. You'll need it in Part 2.
7. Optional check: paste that URL into a browser. It should say "All Organized quiz backend is running."
8. Share the Sheet: click **Share** in the top right of the Sheet and add **info@allorganized.com** (and any other managers) as **Editor**. Never share the Sheet with reps.

**Changing the passcode later:** edit the `MANAGER_PASSCODE` line, click Save, and run **setup** again. You don't need to redeploy.

**Changing the script later:** after editing and saving, go to **Deploy > Manage deployments**, click the pencil icon, set Version to **New version**, and click **Deploy**. The URL stays the same.

---

## Part 2: Put the quiz on GitHub and make it live

1. **Create a GitHub account** at **github.com** (free). Pick a username you're happy to see in the link, like `allorganized`. The quiz link will be `https://USERNAME.github.io/REPO-NAME/`.
2. **Create a repository.** Click the **+** in the top right, then **New repository**.
   - Repository name: `sales-quiz` (or anything you like)
   - Choose **Public**. Free GitHub accounts only publish public repositories. Your results stay private in the Google Sheet either way.
   - Click **Create repository**.
3. **Upload the files.** On the new repository page, click **uploading an existing file**. Drag in these files from this folder:
   - `index.html`, `manager.html`, `app.js`, `quizzes.js`, `config.js`, `style.css`, `.nojekyll`, `README.md`

   Leave out the `apps-script` folder. It's already in Google, and it holds your passcode line.

   Then click **Commit changes**.
   - If your computer hides `.nojekyll` (files starting with a dot are hidden), skip it. The site works without it.
4. **Connect the Sheet.** In the repository, click **config.js**, then the **pencil icon** to edit. Replace `PASTE_YOUR_WEB_APP_URL_HERE` with the Web app URL from Part 1, Step 6. Keep the quotes. Optionally, paste your Google Sheet's link into `sheetUrl` to get an "Open Google Sheet" button on the manager page. Click **Commit changes**.
5. **Turn on GitHub Pages.** Go to **Settings** (top of the repository) > **Pages** (left side).
   - Under "Build and deployment," set Source to **Deploy from a branch**.
   - Branch: **main**, folder **/ (root)**, then click **Save**.
6. Wait 1 to 3 minutes and refresh the Pages settings screen. It shows **"Your site is live at..."** with your link.
   - Rep link: `https://USERNAME.github.io/sales-quiz/`
   - Manager link: `https://USERNAME.github.io/sales-quiz/manager.html`

**Updating quiz content later:** edit `quizzes.js` on GitHub (pencil icon) and commit. The site updates in a minute or two. To change answer explanations, keep the same structure and quotes.

---

## Part 3: Test it before you send it

1. Open the **rep link** on your phone. Enter your name and email, then take Quiz 1. You should see "Your results were sent to your manager."
2. Open the Google Sheet. There should be a new row in **Results**.
3. Open the **manager link**, enter your passcode, and check that you show up on the dashboard. Look at the **Answer key** tab.

If results don't arrive, double-check that `config.js` has the full URL ending in `/exec`, and that the deployment's "Who has access" is **Anyone**.

---

## Part 4: Send it to the team

- **Reps:** text or email them only the main link (`https://USERNAME.github.io/sales-quiz/`). They don't need a Claude, GitHub, or Google account. They just type their name and email before starting.
- **Managers:** send them the manager link and the passcode separately, for example the link by email and the passcode by text.
- **Results:** managers can use the manager page, or open the Google Sheet directly to sort, filter or make charts.

---

## Good to know

- **The manager page is protected by your passcode,** which is checked by Google, not stored on GitHub. Reps who find the manager link still can't see results without it.
- **About the answer key:** the rep page needs the answers to give instant feedback after each question. So someone who knows how to read a website's code could dig the answers out of `quizzes.js`. The answer key tab and everyone's results stay behind the passcode. If this ever becomes a problem, the grading can be moved into the Google script so answers never reach the rep's browser. Quizzes would then pause about a second after each answer.
- **Emails aren't verified.** Reps type their own email. Anyone with the rep link could submit a score, so only share it with your team.
- **The pages ask search engines not to list them** (`noindex`), but anyone with the link can open the quiz.
- **Your own web address (optional):** to use something like `quiz.allorganized.com`, go to **Settings > Pages > Custom domain** and follow GitHub's steps. You'll add one DNS record with whoever hosts allorganized.com.
