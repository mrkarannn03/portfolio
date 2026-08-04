import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "karansingh.builds@gmail.com", 
      replyTo: body.email,
      subject: `🚀 ${body.enquiry || "New Enquiry"} | ${body.name}`,
      html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<style>

body{
    margin:0;
    padding:40px;
    background:#f4f4f4;
    font-family:Arial,Helvetica,sans-serif;
    color:#111;
}

.wrapper{
    max-width:680px;
    margin:auto;
}

.card{
    background:white;
    border-radius:18px;
    overflow:hidden;
    border:1px solid #ececec;
}

.header{
    background:#111111;
    color:white;
    padding:36px;
}

.header h1{
    margin:0;
    font-size:30px;
    font-weight:700;
}

.header p{
    margin-top:10px;
    color:#c7c7c7;
    font-size:14px;
}

.content{
    padding:36px;
}

.avatar{
    width:70px;
    height:70px;
    border-radius:50%;
    background:#111;
    color:white;
    text-align:center;
    line-height:70px;
    font-size:30px;
    font-weight:700;
    margin-bottom:28px;
}

.row{
    display:flex;
    margin-bottom:18px;
}

.label{
    width:140px;
    color:#777;
    font-size:13px;
    font-weight:bold;
    text-transform:uppercase;
    letter-spacing:.08em;
}

.value{
    flex:1;
    color:#111;
    font-size:15px;
    line-height:1.7;
}

.badge{
    display:inline-block;
    padding:7px 14px;
    background:#111;
    color:white;
    border-radius:999px;
    font-size:12px;
    font-weight:bold;
}

.message{
    margin-top:35px;
    background:#fafafa;
    border-left:4px solid #111;
    border-radius:12px;
    padding:22px;
    white-space:pre-wrap;
    line-height:1.8;
}

.footer{
    background:#fafafa;
    padding:26px 36px;
    border-top:1px solid #ececec;
    color:#777;
    font-size:13px;
}

a{
    color:#111;
    text-decoration:none;
}

</style>
</head>

<body>

<div class="wrapper">

<div class="card">

<div class="header">
<p>Your portfolio received a new message.</p>
</div>

<div class="content">


<div class="row">
<div class="label">Name</div>
<div class="value">
${body.name}
</div>
</div>

<div class="row">
<div class="label">Email</div>
<div class="value">
<a href="mailto:${body.email}">
${body.email}
</a>
</div>
</div>

<div class="row">
<div class="label">Phone</div>
<div class="value">
${
  body.phone
    ? `<a href="tel:${body.phone}">${body.phone}</a>`
    : "Not Provided"
}
</div>
</div>

<div class="row">
<div class="label">Enquiry</div>
<div class="value">
<span class="badge">
${body.enquiry || "General"}
</span>
</div>
</div>

<div class="row">
<div class="label">Received</div>
<div class="value">
${new Date().toLocaleString("en-IN", {
  dateStyle: "full",
  timeStyle: "short",
  timeZone: "Asia/Kolkata",
})}
</div>
</div>

<div class="message">
${body.message}
</div>

</div>

<div class="footer">

<b>Portfolio Contact Form</b>

<br><br>

Someone submitted your portfolio contact form.

Reply directly to this email address:

<b>${body.email}</b>

</div>

</div>

</div>

</body>
</html>
`,
    });

    if (error) {
      console.error("[Resend API Error]:", error);

      return Response.json(
        {
          success: false,
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }

    return Response.json({
      success: true,
      data,
    });
  } catch (err) {
    console.error("[Server Error]:", err);

    return Response.json(
      {
        success: false,
        error: err instanceof Error ? err.message : "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}