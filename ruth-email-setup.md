# Setting up ruth@hampshireheadspace.co.uk

A step-by-step guide for Ruth to create her own professional email address from the Hampshire Headspace domain, using Google Workspace.

**Time needed:** about 30–45 minutes total. About half of that is just waiting for Google to verify the domain.

**Cost:** around £6 per user per month (Google Workspace "Business Starter" plan, UK pricing). Confirm the current price on Google's site before paying.

---

## What you'll end up with

A Gmail-style inbox you log into at **mail.google.com**, but the address is **ruth@hampshireheadspace.co.uk** instead of `…@gmail.com`. People reply to it, you reply back, all from the same inbox. It looks and works exactly like Gmail.

You can also create extras like **hello@hampshireheadspace.co.uk** under the same paid account (this costs another £6/month per extra mailbox, OR you can route hello@ as a free "alias" that lands in the same inbox — see Step 7).

---

## Before you start, have these ready

1. The domain **hampshireheadspace.co.uk** is already registered with **Fasthosts** (your registrar).
2. Your **Fasthosts login** (username + password). You'll need this in Step 4.
3. A **payment card** for Google Workspace.
4. About 30–45 minutes of uninterrupted time.

---

## Step 1 — Sign up for Google Workspace

1. Open a browser and go to **https://workspace.google.com**.
2. Click **"Get started"** (top right).
3. It will ask:
   - **Business name:** type `Hampshire Headspace`
   - **Number of employees:** choose `Just you`
   - **Region:** `United Kingdom`
4. Click **Next**.

## Step 2 — Tell Google your contact info

1. **Your name:** Ruth + your surname.
2. **Current email address:** the personal email you use right now (Gmail, Yahoo, anything). Google will send confirmations here while you set things up.
3. Click **Next**.

## Step 3 — Tell Google your domain

1. Google will ask: *"Does your business have a domain?"* → click **Yes, I have one I can use**.
2. Type `hampshireheadspace.co.uk` and click **Next**.
3. Google will confirm the domain and ask you to create your business email address.

## Step 4 — Create your email username and password

1. **Username:** type `ruth` (so the full address becomes `ruth@hampshireheadspace.co.uk`).
2. **Password:** make a strong one and write it down somewhere safe.
3. Tick the boxes, click **Agree and continue**.
4. Choose the **Business Starter** plan (the cheapest).
5. Enter payment card details. Google offers a 14-day free trial — you won't be charged until after that.

## Step 5 — Prove you own the domain (Fasthosts)

This is the part that confuses most people. Stay calm — it's just copying and pasting one line.

1. Google will show you a page that says: *"Verify your domain"* and gives you a long string starting with `google-site-verification=...`. **Keep this tab open.**
2. **Open a new browser tab** and log in to **Fasthosts** at **https://control.fasthosts.co.uk**.
3. Once logged in, find **hampshireheadspace.co.uk** in your domain list and click into it.
4. Look for a section called **DNS** or **Advanced DNS** or **DNS settings**.
5. Add a new record:
   - **Type:** `TXT`
   - **Hostname / Name:** leave blank, or type `@` if Fasthosts requires it
   - **Value / Content:** paste the long `google-site-verification=...` string from Google
   - **TTL:** leave at default
6. Save the record.
7. Go back to the Google tab and click **Verify my domain**.
8. Wait. It can take anywhere from 30 seconds to 30 minutes for Google to see the record. If it fails the first time, wait 10 minutes and try again.

## Step 6 — Make email actually flow (MX records)

You're still in Fasthosts DNS settings. Now you need to add five more records that tell the world: *"send email for hampshireheadspace.co.uk to Google."*

Add these **MX records** in Fasthosts:

| Type | Hostname | Priority | Value |
|---|---|---|---|
| MX | @ (or blank) | 1 | smtp.google.com |

That's it — Google now uses just one MX record for new accounts. (If Google gives you different MX values during the wizard, use the ones Google shows you, not the ones above.)

1. Save the MX record(s) in Fasthosts.
2. Go back to Google and click **Activate Gmail** (or **I added the MX records**).
3. Wait. This part can take longer — sometimes a few hours, occasionally up to 24 hours. You'll get an email from Google when it's live.

## Step 7 — Optional: set up hello@hampshireheadspace.co.uk as a free alias

You probably want **hello@hampshireheadspace.co.uk** to work too (it's the address on your website). You don't need to pay £6/month again — you can make `hello@` an alias that lands in the same `ruth@` inbox, for free.

1. In Google Workspace Admin (admin.google.com), log in with `ruth@hampshireheadspace.co.uk`.
2. Go to **Directory** → **Users** → click on your name (Ruth).
3. Click **Add alternate emails** (sometimes called "alias").
4. Type `hello` and pick `@hampshireheadspace.co.uk` from the dropdown.
5. Save.

Now anything sent to `hello@…` arrives in your `ruth@…` inbox automatically. It's free.

## Step 8 — Log in and use it

1. Go to **https://mail.google.com**.
2. Sign in with `ruth@hampshireheadspace.co.uk` and the password you set in Step 4.
3. That's it. It works exactly like Gmail. Send yourself a test email from your old address to make sure it arrives.

## Step 9 — On your phone

Open the Gmail app on your phone, tap your profile picture (top right), tap **Add another account** → **Google**, and sign in with `ruth@hampshireheadspace.co.uk`. The same inbox appears.

---

## If something breaks

- **"Domain verification failed"** in Google → wait 30 minutes and try again. DNS changes are slow.
- **No emails arriving** → double-check the MX record in Fasthosts is exactly `smtp.google.com` and priority `1`. Wait up to 24 hours.
- **Anything else** → Google Workspace has a 24/7 support chat for paying customers (you are one). Click the **?** in the top right of admin.google.com.

---

## What this whole thing is, in plain English

- **Domain (hampshireheadspace.co.uk)** is the address — like your house address.
- **Fasthosts** is who you bought the address from. Only they can change what the address points to.
- **Google Workspace** is the email service — like the postal service that delivers letters to and from your house.
- **DNS records (TXT, MX)** are the instructions that tell the world's postal service which postal service is delivering your mail. You add these in Fasthosts, because Fasthosts owns the address book.

Once it's all set up, you never touch Fasthosts again. You just open Gmail.
