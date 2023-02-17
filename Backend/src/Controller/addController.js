const express = require("express");
const addModel = require("../Model/addModel");
const addRouter = express.Router();

addRouter.get("", async (req, res) => {
  try {
    const data = await addModel.find().lean().exec();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send({ message: "errr appera" });
  }
});

addRouter.post("", async (req, res) => {
  try {
    // here first converting req.body of a and b
    var a = req.body.a;
    var b = req.body.b;

    var carryArray = [];
    var addArray = [];
    //   finding the smallest string so that we can padd "0" before that.
    var diff = Math.abs(a.length - b.length);
    if (a.length > b.length) {
      b = addZero(b, diff);
      finalData(a, b);
    } else if (b.length > a.length) {
      a = addZero(a, diff);
      finalData(a, b);
    } else if (a.length === b.length) {
      finalData(a, b);
    }
    function addZero(val, diff) {
      var paddingString = "";
      for (var i = 0; i < diff; i++) {
        paddingString = paddingString + 0;
      }
      return paddingString + val;
    }
    //   this function will do actual transformation
    function finalData(a, b) {
      // In starting we are treating carry 0 as no carry
      var carry = 0;
      var result = "";
      var carryResult = "_";
      var extra = "";
      for (var i = a.length - 1; i >= 0; i--) {
        var sum = 0;
        sum = carry + Number(a[i]) + Number(b[i]);
        // here if after adding two digit we find 10 or greater means we can make or get carry from it.
        if (sum > 9) {
          // first we are getting carry from it
          var carry = Math.floor(sum / 10);
          //    this if condition in case
          // eg:
          //   9  4 0 5 3 8
          //   9  7 5 6 3 4
          //    ----------------------
          // 1step=1
          // 2nd=01
          // 3rd step=101
          // 4th step=0101
          // last step=110101--->here length after adding carry or this carry string length became
          //   7 length but last carry should include in ans should not include in carry string so if
          // the exceed length of the given strings so that carry should store in extra and should be add at the addArray's last
          // elements front so store carry inside extra and
          // strings it should not add the

          if (carryResult.length < a.length) {
            carryResult = String(carry) + carryResult;
          } else {
            extra = carry;
          }
          carryArray.push(carryResult);
        } else if (sum <= 9) {
          carry = 0;
          if (carryResult.length < a.length) {
            // here using string converting carry into string as it is number
            carryResult = String(carry) + carryResult;
          } else {
            extra = carry;
          }
          carryArray.push(carryResult);
        }

        var trans = String(sum);
        // eg 12 after sum we need 2 and 1 will be carry and later adding that 2 into result string.
        result = trans[trans.length - 1] + result;
        addArray.push(result);
      }
    
      if (extra) {
        let x = addArray[addArray.length - 1];
        extra = String(extra);
        xy = extra + x;
        // first poping the last number from array
        addArray.pop();
        // then adding the final number after adding extra and pusing it into addArray.
        addArray.push(xy);
      }
    }

    res
      .status(201)
      .send({ carryArray: carryArray, addArray: addArray  });
  } catch (err) {
    res.status(500).send({ message: "error there" });
  }
});

module.exports = addRouter;
