/**
 * @description       :
 * @author            : pooran@genix.SFDoc
 * @group             :
 * @last modified on  : 07-29-2023
 * @last modified by  : pooran@genix.SFDoc
 **/
import { LightningElement } from "lwc";

export default class SalesForcast extends LightningElement {
  //Data
  summaryYears = {
    status: "success",
    responseData: {
      yearsData: [
        {
          year: "2019",
          summaryAmount: "$2,190.80",
          lineData: [
            {
              recordId: "a2m2G000000AJKQQA4",
              amount: "$1,045.00"
            },
            {
              recordId: "a2m2G000009H0fIQAS",
              amount: "$1,100.00"
            },
            {
              recordId: "a2m2G000009H0fHQAS",
              amount: "$45.80"
            }
          ]
        },
        {
          year: "2020",
          summaryAmount: "$1,874.20",
          lineData: [
            {
              recordId: "a2m2G000000AJKQQA4",
              amount: "$665.00"
            },
            {
              recordId: "a2m2G000009H0fIQAS",
              amount: "$1,200.00"
            },
            {
              recordId: "a2m2G000009H0fHQAS",
              amount: "$9.20"
            }
          ]
        },
        {
          year: "2021",
          summaryAmount: "$100.00",
          lineData: [
            {
              recordId: "a2m2G000009H0fIQAS",
              amount: "$100.00"
            }
          ]
        }
      ]
    },
    message: null
  };
  //Summery Months
  summaryMonths = {
    status: "success",
    responseData: {
      summaryAmount: [
        "$195.00",
        "$199.58",
        "$199.58",
        "$199.58",
        "$199.58",
        "$199.58",
        "$199.58",
        "$199.58",
        "$199.58",
        "$199.58",
        "$199.58",
        "$199.58",
        "$199.62",
        "$195.00",
        "$195.00",
        "$195.00",
        "$195.00",
        "$195.00",
        "$100.00",
        "$100.00",
        "$100.00",
        "$100.00",
        "$100.00",
        "$100.00"
      ],
      startYear: 2019,
      startMonth: 2,
      linesData: [
        {
          startYear: 2019,
          startMonth: 2,
          recordId: "a2m2G000000AJKQQA4",
          data: [
            "$95.00",
            "$95.00",
            "$95.00",
            "$95.00",
            "$95.00",
            "$95.00",
            "$95.00",
            "$95.00",
            "$95.00",
            "$95.00",
            "$95.00",
            "$95.00",
            "$95.00",
            "$95.00",
            "$95.00",
            "$95.00",
            "$95.00",
            "$95.00"
          ]
        },
        {
          startYear: 2019,
          startMonth: 2,
          recordId: "a2m2G000009H0fIQAS",
          data: [
            "$100.00",
            "$100.00",
            "$100.00",
            "$100.00",
            "$100.00",
            "$100.00",
            "$100.00",
            "$100.00",
            "$100.00",
            "$100.00",
            "$100.00",
            "$100.00",
            "$100.00",
            "$100.00",
            "$100.00",
            "$100.00",
            "$100.00",
            "$100.00",
            "$100.00",
            "$100.00",
            "$100.00",
            "$100.00",
            "$100.00",
            "$100.00"
          ]
        },
        {
          startYear: 2019,
          startMonth: 3,
          recordId: "a2m2G000009H0fHQAS",
          data: [
            "$4.58",
            "$4.58",
            "$4.58",
            "$4.58",
            "$4.58",
            "$4.58",
            "$4.58",
            "$4.58",
            "$4.58",
            "$4.58",
            "$4.58",
            "$4.62"
          ]
        }
      ]
    },
    message: null
  };

  //Line item Data
  lineItemData = [
    {
      unitPrice: 95,
      startMonth: "2/1/2019",
      revenueType: "MRC",
      revenueRecognitionName: null,
      revenueRecognitionId: null,
      qty: 1,
      productItemName: "Captio User Delegation",
      productItemId: "a01A000001gmFXZIA2",
      productFLIId: "a2m2G000000AJKQQA4",
      priorMRR: null,
      optionItemName: null,
      optionItemId: null,
      optionFLIId: null,
      monthsVR: null,
      monthsNRC: null,
      monthsMRC: null,
      months: 18,
      displayUnitPrice: "$95.00",
      displayQty: "1",
      displayPriorMRR: null,
      committed: "No",
      attributesWithValues: null,
      attributes: null
    },
    {
      unitPrice: 55,
      startMonth: "3/1/2019",
      revenueType: "NRC",
      revenueRecognitionName: null,
      revenueRecognitionId: null,
      qty: 1,
      productItemName: "TNS Link",
      productItemId: "a01A000001utm3RIAQ",
      productFLIId: "a2m2G000009H0fHQAS",
      priorMRR: null,
      optionItemName: null,
      optionItemId: null,
      optionFLIId: null,
      monthsVR: null,
      monthsNRC: null,
      monthsMRC: null,
      months: 12,
      displayUnitPrice: "$55.00",
      displayQty: "1",
      displayPriorMRR: null,
      committed: "No",
      attributesWithValues: null,
      attributes: null
    },
    {
      unitPrice: 100,
      startMonth: "2/1/2019",
      revenueType: "MRC",
      revenueRecognitionName: null,
      revenueRecognitionId: null,
      qty: 1,
      productItemName: "TNS Link",
      productItemId: "a01A000001utm3RIAQ",
      productFLIId: "a2m2G000009H0fIQAS",
      priorMRR: null,
      optionItemName: null,
      optionItemId: null,
      optionFLIId: null,
      monthsVR: null,
      monthsNRC: null,
      monthsMRC: null,
      months: 24,
      displayUnitPrice: "$100.00",
      displayQty: "1",
      displayPriorMRR: null,
      committed: "No",
      attributesWithValues: null,
      attributes: null
    }
  ];

  //Create table header
  get tableHeader() {
    //name and label
    let header = [
      { key: "productItemName", label: "Product" },
      { key: "optionItemName", label: "Option" },
      { key: "attributes", label: "Attribute" },
      { key: "revenueType", label: "Revenue Type" },
      { key: "qty", label: "QTY" },
      { key: "unitPrice", label: "Unit Price" },
      { key: "startMonth", label: "Start Month" },
      { key: "months", label: "Months" },
      { key: "revenueRecognitionName", label: "Revenu Recognition" },
      { key: "committed", label: "Committed" }
    ];
    //Summery years as column
    this.summaryYears.responseData.yearsData.forEach((yearItem, index) => {
      header.push({ key: [yearItem.year], label: "FY" + yearItem.year });
    });

    //Add month header
    this.summaryMonths.responseData.summaryAmount.forEach((amount, index) => {
      let key = this.getMonthName(
        index + this.summaryMonths.responseData.startMonth,
        this.summaryMonths.responseData.startYear
      );
      header.push({ key: key, label: key });
    });
    return header;
  }

  //Get table data
  //Serial is important in array
  get tableData() {
    let data = [];
    this.lineItemData.forEach((lineitem, index) => {
      var li = { ...lineitem };
      //Add year and product wise summery data
      this.summaryYears.responseData.yearsData.forEach((item_i, index_i) => {
        item_i.lineData.forEach((item_j, index_j) => {
          //Add only for current line item
          if (lineitem.productFLIId == item_j.recordId) {
            //Add ampount -if data is avaiable for mulitple times for same  lineitem-For now assuming one
            li[item_i.year] = item_j.amount;
          }
        });
      });

      //Add month and product wise data
      this.summaryMonths.responseData.linesData.forEach((item_i, index_i) => {
        item_i.data.forEach((item_j, index_j) => {
          //Add only for current line item
          if (lineitem.productFLIId == item_i.recordId) {
            let key = this.getMonthName(
              index_j + item_i.startMonth,
              item_i.startYear
            );
            console.log(key);
            //Add ampount -if data is avaiable for mulitple times for same  lineitem-For now assuming one
            li[key] = item_j;
          }
        });
      });
      data.push(li);
    });

    let summeryData = {};
    //Add year wise summery data
    this.summaryYears.responseData.yearsData.forEach((yearData, index) => {
      //Add ampount -if data is avaiable for mulitple times for same  lineitem-For now assuming one
      summeryData[yearData.year] = yearData.summaryAmount;
    });

    //Add summery data month wise
    this.summaryMonths.responseData.summaryAmount.forEach((amount, index) => {
      let key = this.getMonthName(
        index + this.summaryMonths.responseData.startMonth,
        this.summaryMonths.responseData.startYear
      );
      summeryData[key] = amount;
    });

    data.push(summeryData);
    console.log(JSON.stringify(data));
    //Serilaize based on table header
    let tabledata = [];
    data.forEach((d, index) => {
      let rowItem = {
        index: d.recordId,
        data: []
      };
      this.tableHeader.forEach((item) => {
        rowItem.data.push({ index: item.key, value: d[item.key] || "" });
      });
      tabledata.push(rowItem);
    });
    console.log(JSON.stringify(tabledata));
    return tabledata;
  }

  //Get month name
  getMonthName(monthNumber, year) {
    //If year changed
    if (monthNumber % 12 > 0) {
      year = year + parseInt(monthNumber / 12);
      monthNumber = monthNumber % 12;
    }
    if (monthNumber % 12 == 0 && parseInt(monthNumber / 12) > 1) {
      year = year + parseInt(monthNumber / 12) - 1;
      monthNumber = 12;
    }
    // const date = new Date();
    // date.setYear(year);
    // date.setMonth(monthNumber - 1);
    // return date.toLocaleString("en-US", { month: "long", year: "numeric" });
    var ms = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec"
    ];
    return ms[monthNumber - 1] + " " + year;
  }
}
