import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Heatmap from './plots/Heatmap'

function JsonParse() {

        const [cdmData, setCdmData] = useState([])

        useEffect(() => {
            axios
                .get(`http://127.0.0.1:5000/api_cdm/available_data_test`)
                //.get(`http://127.0.0.1:5000/api_cdm/available_data`)
                .then(res => {
                    // console.log(res)
                    setCdmData(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }, [])
        console.log(cdmData)

        function buildTimeLine(minimumMonthYear,maximumMonthYear) {
            var dictOfTimeLines = {}
            var timeLineArray = []
            var timeLineOfZeros = []
            for (let year = minimumMonthYear["year"]; year <= maximumMonthYear["year"]; year++) {
                for (let month = 1; month < 13; month++) {
                    timeLineOfZeros.push(0)
                    if (month < 10) {
                        var topush = "0"+month.toString()  + "-" + year.toString()
                    }else{
                        var topush = month.toString()  + "-" + year.toString()
                    }
                    timeLineArray.push(topush)
                }
            }
            dictOfTimeLines["timeLine"] = timeLineArray
            dictOfTimeLines["timeLineZeros"] = timeLineOfZeros

            return dictOfTimeLines;
        }

        var minMonthYear = {"year":3000,"month":12}
        var maxMonthYear = {"year":0,"month":0}

        function arrayConvert(json){
            // read the whole json once to find the whole timeline, it's ugly but should work
            for(var city_key in json){
                for(var datasource_key in allDataOfCity){
                    for (var year_key in dataOfOneSource) {
                    for (var month_key in oneYearData) {
                            var numberMonth = parseInt(month_key)
                            // check min and max values of the dates
                            if (   numberYear < minMonthYear["year"]  ) {
                                minMonthYear["year"] = numberYear
                                minMonthYear["month"] = numberMonth
                            } else if (  numberYear > maxMonthYear["year"] ) {
                                // new maximum
                                maxMonthYear["year"] = numberYear
                                maxMonthYear["month"] = numberMonth
                            } else if(numberYear === maxMonthYear["year"] || numberYear === minMonthYear["year"] ) {
                                if (numberMonth < minMonthYear["month"]) {
                                    // this is the new minimum
                                    minMonthYear["month"] = numberMonth
                                }
                                if (numberMonth > maxMonthYear["month"]) {
                                    maxMonthYear["month"] = numberMonth
                                }
                            }
                        }
                    }
                }
            // build whole timelines
            var timeLinesDict = buildTimeLine(minMonthYear,maxMonthYear)
            timeLine = timeLinesDict["timeLine"]
            timeLineOfZeros = timeLinesDict["timeLineZeros"]
            var dictOfCitiesTimeLineValues = {}
            var cities_arr = [];
            var valuesArrOfArr = [];
            // cycle all the cities
            for(var city_key in json){
                var allDataOfCity = json[city_key]; // get the data for one city
                var sourcesForCity = []; // this will contain the different source names for a city
                // cycle all the sources
                for(var datasource_key in allDataOfCity){
                    var dataOfOneSource = []
                    sourcesForCity.push(datasource_key) // push the name of the source to the list 
                    dataOfOneSource = allDataOfCity[datasource_key] // this is the data from one source 
                    var totalDataForOneSouce = []
                    // cycle the data from one source 
                    for (var year_key in dataOfOneSource) {
                        var numberYear = parseInt(year_key)

                        var oneYearData = dataOfOneSource[year_key]
                        var yearlyDataValues = [0,0,0,0,0,0,0,0,0,0,0,0]

                        for (var month_key in oneYearData) {
                            var numberMonth = parseInt(month_key)
                            yearlyDataValues[numberMonth] = oneYearData[month_key]
                        }
                        // this is not correct, years are not continuous
                        totalDataForOneSouce = totalDataForOneSouce.concat(yearlyDataValues)
    
                    }// end for on years

                    valuesArrOfArr.push(totalDataForOneSouce)
                }// end for one source
                //console.log(totalDataForOneSouce)
                var timeLine = buildTimeLine(minMonthYear,maxMonthYear)

                // cycle through all the sources found and create the names for each aggregate
                for(var i in sourcesForCity){
                    cities_arr.push(city_key + " " + sourcesForCity[i]);
                    //console.log(sourcesForCity[i])
                }
                
            }// end for on cities
            dictOfCitiesTimeLineValues["cities"] = cities_arr;
            dictOfCitiesTimeLineValues["timeLine"] = timeLine;
            dictOfCitiesTimeLineValues["values"] = valuesArrOfArr;
            return dictOfCitiesTimeLineValues;
        }
        const dictfromjson = arrayConvert(cdmData)
        
        console.log(dictfromjson["cities"])
        console.log(dictfromjson["timeLine"])
        console.log(dictfromjson["values"])
        return (
            <div>
            <Heatmap values = {dictfromjson["values"]} cities = {dictfromjson["cities"]} timeLine = {dictfromjson["timeLine"]}  ></Heatmap>
            </div>
        )
    }
}

export default JsonParse