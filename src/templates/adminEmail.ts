import type { ContactFormData } from "@/types/contact";
import {
  formatSubmissionDate,
  safeValue,
  escapeHtml,
} from "@/lib/utils";

export function adminEmailTemplate(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<title>New Contact Form Submission</title>
</head>

<body style="margin:0;padding:0;background:#f5f7fb;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;background:#f5f7fb;">
<tr>
<td align="center">

<table width="650" cellpadding="0" cellspacing="0"
style="background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,.08);">

<tr>
<td
style="background:#202730;padding:35px;text-align:center;color:#ffffff;">

<h1 style="margin:0;font-size:30px;">
Tygon Solutions
</h1>

<p style="margin-top:10px;color:#d0d7e2;">
New Website Enquiry
</p>

</td>
</tr>

<tr>

<td style="padding:35px;">

<h2 style="color:#1056e9;margin-top:0;">
🚀 New Lead Received
</h2>

<p>
Someone has submitted a new enquiry through your website.
</p>

<hr style="border:none;border-top:1px solid #eee;margin:30px 0;">

<table width="100%" cellpadding="12">

<tr>
<td width="180"><strong>Name</strong></td>
<td>${escapeHtml(data.name)}</td>
</tr>

<tr>
<td><strong>Company</strong></td>
<td>${safeValue(data.company)}</td>
</tr>

<tr>
<td><strong>Email</strong></td>
<td>${escapeHtml(data.email)}</td>
</tr>

<tr>
<td><strong>Phone</strong></td>
<td>${safeValue(data.phone)}</td>
</tr>

<tr>
<td><strong>Service</strong></td>
<td>${escapeHtml(data.service)}</td>
</tr>

<tr>
<td><strong>Budget</strong></td>
<td>${safeValue(data.budget)}</td>
</tr>

</table>

<h3
style="margin-top:35px;color:#1056e9;">
Project Description
</h3>

<div
style="
background:#f7f9fc;
padding:20px;
border-left:5px solid #1056e9;
line-height:1.7;
border-radius:8px;
">

${escapeHtml(data.description).replace(/\n/g, "<br>")}

</div>

<p style="margin-top:35px;color:#666;font-size:14px;">
Submitted on
<strong>${formatSubmissionDate()}</strong>
</p>

</td>

</tr>

<tr>

<td
style="
background:#202730;
padding:22px;
text-align:center;
color:#ffffff;
font-size:14px;
">

Tygon Solutions © ${new Date().getFullYear()}<br>

Building Intelligent Digital Solutions

</td>

</tr>

</table>

</td>
</tr>
</table>

</body>

</html>
`;
}