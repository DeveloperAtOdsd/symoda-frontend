import { ConfidentialClientApplication } from '@azure/msal-node'

const msalConfig = {
  auth: {
    clientId: process.env.AZURE_CLIENT_ID,
    clientSecret: process.env.AZURE_CLIENT_SECRET,
    authority: `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}`,
  },
}

const SENDER_EMAIL = process.env.SENDER_EMAIL
const RECIPIENT_EMAILS = process.env.RECIPIENT_EMAIL.split(',').map((e) => e.trim())

async function getAccessToken() {
  const cca = new ConfidentialClientApplication(msalConfig)
  const result = await cca.acquireTokenByClientCredential({
    scopes: ['https://graph.microsoft.com/.default'],
  })
  return result.accessToken
}

function buildEmailHtml(data) {
  const fields = [
    ['Organisation', data.organisation],
    ['Name & Title', data.name],
    ['Email', data.email],
    ['Phone', data.phone],
    ['Primary Challenge', data.challenge],
    ['Tried Automation Before?', data.triedAutomation],
    ['Service Interest', data.serviceInterest],
    ['Session Type', data.sessionType],
    ['Timeframe', data.timeframe],
    ['Other Context', data.otherContext],
  ]

  const rows = fields
    .filter(([, val]) => val)
    .map(
      ([label, val]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;vertical-align:top;border-bottom:1px solid #eee;color:#333">${label}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#555">${val}</td></tr>`
    )
    .join('')

  return `
    <div style="font-family:'Work Sans',Arial,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#2132ed;padding:24px 32px;border-radius:8px 8px 0 0">
        <h2 style="color:white;margin:0;font-size:20px">New Contact Form Submission</h2>
      </div>
      <div style="background:#f9f9fb;padding:24px 32px;border-radius:0 0 8px 8px">
        <table style="width:100%;border-collapse:collapse">${rows}</table>
        <p style="margin-top:24px;font-size:13px;color:#888">Sent from symoda.com contact form</p>
      </div>
    </div>
  `
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const data = req.body

    if (!data.organisation || !data.name || !data.email || !data.phone) {
      return res.status(400).json({ error: 'Required fields missing' })
    }

    const accessToken = await getAccessToken()

    const emailPayload = {
      message: {
        subject: `New Enquiry from ${data.organisation} — ${data.name}`,
        body: {
          contentType: 'HTML',
          content: buildEmailHtml(data),
        },
        toRecipients: RECIPIENT_EMAILS.map((addr) => ({ emailAddress: { address: addr } })),
        replyTo: [{ emailAddress: { address: data.email } }],
      },
      saveToSentItems: true,
    }

    const graphRes = await fetch(
      `https://graph.microsoft.com/v1.0/users/${SENDER_EMAIL}/sendMail`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailPayload),
      }
    )

    if (!graphRes.ok) {
      const errText = await graphRes.text()
      console.error('Graph API error:', errText)
      return res.status(500).json({ error: 'Failed to send email' })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
