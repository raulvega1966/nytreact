// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Geocoder API
//var geocodeAPI = "35e5548c618555b1a43eb4759d26b260";
//changed to NYT API
var nytAPI = "097be422255e45a18b6864a8176f4a6c";


// Helper functions for making API Calls
var helper = {

        // This function serves our purpose of running the query to geolocate.
        runQuery: function(topic, startYear, endYear) {

            //console.log(location);

            // Figure out the geolocation
            //var queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + location + "&pretty=1&key=" + geocodeAPI;
            var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytAPI + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101"
            return axios.get(queryURL).then(function(response) {
                        // If get get a result, return that result's formatted address property
                        //if (response.data.results[0]) {
                        //    return response.data.results[0].formatted;
                        // }

                        //Put reponses from the query above in an array
                        var queryResults = [];

                        //var for results that have title, date and link (tdl)
                        var resultstdl = response.data.response.docs;

                        //this variable is for a counter since I want to limit responses to 3
                        var counter = 0;

                        for (var i = 0; i < resultstdl.length; i++) {
                            if (counter > 4) {
                                return queryResults;
                            }

                            if (resultstdl[counter].headline.main && resultstdl[counter].pub_date && resultstdl[counter].web_url) {
                                queryResults.push(resultstdl[counter]);
                                counter++;
                            }
                        }
                        return queryResults;


                            // If we don't get any results, return an empty string
                            //return "";
                        })
                },

                // This function hits our own server to retrieve the record of query results
                //getHistory: function() {
                //  return axios.get("/api");
                //},

                // This function posts new searches to our database.
                postHistory: function(title, date, link) {

                    axios.post("/api/saved", { title: title, date: date, link: link }).then(function(results) {
                        console.log("Info is in database MongoDB");
                        return (results);

                    })
                }
        };

        // We export the API helper
        module.exports = helper;
