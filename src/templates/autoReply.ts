import type { ContactFormData } from "@/types/contact";
import { escapeHtml } from "@/lib/utils";

export function autoReplyTemplate(data: ContactFormData): string {
  return `
<!DOCTYPE html>

<html>

<head>
<meta charset="UTF-8">
<title>Thank you</title>
</head>

<body
style="
margin:0;
padding:0;
background:#f5f7fb;
font-family:Arial,Helvetica,sans-serif;
">

<table
width="100%"
cellpadding="0"
cellspacing="0"
style="padding:40px 0;">

<tr>

<td align="center">

<table
width="650"
cellpadding="0"
cellspacing="0"
style="
background:#ffffff;
border-radius:14px;
overflow:hidden;
box-shadow:0 8px 30px rgba(0,0,0,.08);
">

<tr>

<td
style="
background:#1056e9;
padding:40px;
text-align:center;
color:white;
">

<h1
style="
margin:0;
font-size:30px;
">

Thank You!

</h1>

<p
style="
margin-top:12px;
font-size:17px;
color:#dfe9ff;
">

We've received your enquiry.

</p>

</td>

</tr>

<tr>

<td style="padding:40px;">

<p>

Hello
<strong>${escapeHtml(data.name)}</strong>,

</p>

<p>

Thank you for contacting
<strong>Tygon Solutions.</strong>

</p>

<p>

We've successfully received your enquiry regarding

<strong>${escapeHtml(data.service)}</strong>.

</p>

<p>

Our team is reviewing your requirements.

You can expect a reply within

<strong>24 business hours.</strong>

</p>

<div
style="
margin:35px 0;
padding:25px;
background:#f7f9fc;
border-left:5px solid #1056e9;
border-radius:8px;
">

<strong>Your Project Description</strong>

<p style="margin-top:15px;line-height:1.8;">

${escapeHtml(data.description).replace(/\n/g, "<br>")}

</p>

</div>

<p>

If your enquiry is urgent,

simply reply to this email and our team will prioritize it.

</p>

<p>

We appreciate the opportunity to work with you.

</p>

<p
style="
margin-top:35px;
">

Regards,

<br><br>

<strong>Tygon Solutions Team</strong>

<br>

Building Intelligent Digital Solutions

</p>

</td>

</tr>

<tr>

<td
style="
background:#202730;
color:white;
text-align:center;
padding:22px;
font-size:14px;
">

© ${new Date().getFullYear()} Tygon Solutions

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