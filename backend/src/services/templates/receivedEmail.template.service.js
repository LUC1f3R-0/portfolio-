const receivedEmail = (name, message,subject, email) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f7f7f7;
          padding: 20px;
        }
        .email-container {
          background-color: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          max-width: 600px;
          margin: auto;
        }
        h2 {
          color: #333333;
        }
        p {
          color: #555555;
          line-height: 1.6;
        }
        .footer {
          font-size: 12px;
          color: #999999;
          text-align: center;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <h2>You've received a new message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
      <div class="footer">
        This is an automated message. Please do not reply directly.
      </div>
    </body>
    </html>
    `;
  };
  
  export default receivedEmail;
  