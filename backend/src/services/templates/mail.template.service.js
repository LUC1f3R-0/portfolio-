const sayHi = () => {
  return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Code Card</title>
    <style>
        a {
            font-weight: bolder;
            text-decoration: none;
            color: #19cfcc;
            cursor: url(myBall.cur), auto;
        }
    </style>
</head>

<body style="margin:0; padding:0; background-color:#cbd5e1;">

    <table align="center" cellpadding="0" cellspacing="0" border="0" width="100%" style="padding:20px;">
        <tr>
            <td align="center">

                <table cellpadding="0" cellspacing="0" border="1" width="100%"
                    style="max-width:600px; background-color:#1e1e1e; border-radius:10px; overflow:hidden; color:#ffffff;">
                    <tr>
                        <td style="padding:10px 15px; background-color:#1e1e1e;">

                            <span
                                style="display:inline-block; width:12px; height:12px; background-color:#ff5f56; border-radius:50%; margin-right:6px;"></span>
                            <span
                                style="display:inline-block; width:12px; height:12px; background-color:#ffbd2e; border-radius:50%; margin-right:6px;"></span>
                            <span
                                style="display:inline-block; width:12px; height:12px; background-color:#27c93f; border-radius:50%;"></span>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding:20px; font-size:14px; line-height:1.6; word-break:break-word;">
                            <h1 style="text-align: center; color:#666666;">//</span>YOUR MESSAGE RECEIVED</h1>
                            <pre style="margin:0; white-space:pre; overflow-x:auto; color:#ffffff;">
<span style="color:#7aa2f8;">const</span> myDetails = (<span style="color:#bbb7b7;">{ name, email, gitHub, linkedin, portfolio, website }</span>) =&gt; {
  <span style="color:#7aa2f8;">return</span> {
    name:<span ><a href="">'Thushara Thilan Weerakoon'</span></a>,
    email:<span><a href="mailto:thusharathilan123@gmail.com">'thusharathilan123@gmail.com'</span></a>,
    phoneNum:<span style="color:#19cfcc; font-weight: bolder;"><a href="https://wa.me/94717109098?text=Hey%20Thushara%20or%20can%20I%20say%20Nikesh%3F%0AContact%20me" target="_blank">'+94-71-7109-098'</span></a>,
    gitHub:<span><a href="https://github.com/LUC1f3R-0">'https://github.com/thushara'</span></a>,
    linkedin:<span><a href="https://www.linkedin.com/in/thushara-thilan-b16784191/">'https://www.linkedin.com/thushara'</span></a>,
    portfolio:<span><a href="">'https://janedoeportfolio.com/thushara'</span></a>,
    website:<span><a href="">''| <span style="color:#7c818a;">none </span></span></a>,
  }
};

<span style="color:#7aa2f8;">export default</span> myDetails;
                            </pre>
                        </td>
                    </tr>
                </table>

            </td>
        </tr>
    </table>

</body>

</html>
    `;
};

export default sayHi;
