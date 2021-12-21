const express = require("express");
const path = require("path");
const got = require("got");
const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  (async () => {
    try {
      function roundToTwo(num) {
        return +(Math.round(num + "e+3") + "e-3");
      }
      let address = req.query.address;
      let info = [];
      let worth = 0;
      let json = [];
      const response = await got(
        `https://api.opensea.io/api/v1/collections?asset_owner=${address}&format=json&limit=300&offset=0`,
        {
          responseType: "json",
        }
      );
      const response2 = await got(
        `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=KNA6CID7QDSXWZGTMS2W7H6QX6WNG4CB5Y`,
        {
          responseType: "json",
        }
      );
      let ethWorthRaw = response2.body.result;
      let ethWorth = ethWorthRaw * Math.pow(10, -18);
      let resp = await got(
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?slug=ethereum",
        {
          headers: {
            "X-CMC_PRO_API_KEY": "9e28a102-3210-418c-a644-4399638e3787",
          },
          responseType: "json",
        }
      );

      let ethPrice = resp["body"]["data"]["1027"]["quote"]["USD"]["price"];

      for (let i in response.body) {
        json.push({
          name: response.body[i].name,
          amount: response.body[i].owned_asset_count,
          slug: response.body[i].slug,
          image: response.body[i].image_url,
        });
      }
      info.inventory = json;

      for (let i in info.inventory) {
        const response = await got(
          `https://api.opensea.io/api/v1/collection/${info.inventory[i].slug}/stats`,
          {
            responseType: "json",
          }
        );
        worth =
          worth + response.body.stats.floor_price * info.inventory[i].amount;

        info.inventory[i].floor = response.body.stats.floor_price;
      }

      let totalNet = worth + ethWorth;
      let returnResponse = {
        inventoryList: json,
        nftWorth: roundToTwo(worth),
        ethWorth: roundToTwo(ethWorth),
        ethPrice: roundToTwo(ethPrice),
        totalNet: roundToTwo(totalNet),
        usdNet: roundToTwo(totalNet * ethPrice),
      };
      await res.json(returnResponse);
    } catch (error) {
      res.json({ message: "Something went wrong" });
    }
  })();
});

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
