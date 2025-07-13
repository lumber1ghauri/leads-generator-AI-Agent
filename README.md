# 🚀 AI Lead Generator — Find Leads in Seconds

Say goodbye to wasting hours searching for potential clients or companies online.  
This tool uses automation + AI + scraping to instantly fetch leads based on your search query and saves them in a Google Sheet for you.

🔗 **Live App**: [leads-generetor-ai.vercel.app](https://leads.siriussolutions.xyz)

---

## ⚡ What It Does

You enter a search query like:

- `ecommerce brands in USA`
- `startups in Dubai`
- `top software houses in Pakistan`

The tool:

1. Takes your query and sends it to a smart search agent.
2. Scrapes top results using SERP and web automation.
3. Extracts useful company-level data like:
   - Name
   - Website
   - Description
   - Source
4. Creates a new Google Sheet for you.
5. Automatically appends the data there.
6. Gives you a public link to view the leads.

No signup. No extensions. No scraping headaches.  
Just search → get leads → download or use.

---

## 🧠 Tech Stack

- **Frontend**: Vercel-hosted React SPA
- **Backend**: Self-hosted n8n workflow running on personal laptop
- **Automation**: SERP scraping, Google Sheets API
- **Infrastructure**: Docker + ngrok for tunneling backend to web

---

## 💡 Use Cases

- Freelancers building lead lists
- Marketing agencies doing outreach
- Startups validating ideas
- Sales teams doing prospecting

---

## 🔐 Note About Hosting

> ⚠️ This project’s backend is **hosted on my personal laptop**, tunneled via `ngrok`.

That means:
- You can **use the live version at** [leads-generetor-ai.vercel.app](https://leads-generetor-ai.vercel.app)
- But you **can’t clone or run the backend** unless you build your own using the n8n workflow and APIs

If you're interested in the backend automation part, feel free to reach out!

---

## 🛠️ Coming Soon

- Export as `.xlsx`
- Email finder integration
- User authentication
- Query history dashboard
- SaaS version with billing

---

## 🤝 Contribute / Feedback

Have ideas or want to build your own? Open an issue or connect with me on [LinkedIn](https://www.linkedin.com/in/ukasha-zahid-46b397222/) — I’d love to chat!

---

## 📜 License

MIT — feel free to fork and adapt the frontend for your own use.
