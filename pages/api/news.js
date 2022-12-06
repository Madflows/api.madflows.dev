import { error } from "console";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const puppeteer = require("puppeteer");
const {executablePath} = require("puppeteer");
const chrome = require("chrome-aws-lambda");
var locateChrome = require("locate-chrome");

export default async function handler(req, res) {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    ignoreHTTPSErrors: true,
  });

  const page = await browser.newPage();

  await page.goto("https://guardian.ng/");


  const titles = await page.evaluate(
    () =>{
      return Array.from(document.querySelectorAll("a"), (element) => ({
        title: element.textContent,
        link: element.href
      }));
    }).catch((error) => {
      console.log("Internal server error")
    });

  console.log(titles)
  await browser.close()

  res.status(200).json({ name: "John Doe" });
  res.status(500).json({
    message: "Internal server error"
  })
}
