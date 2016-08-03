# GreenCityzen push data service

## <span style="color: green"> Overview: </span>

In order to manage and treat efficiently the data sent by your HummBox device, this recipe offers you a way to get your data instantly in your own server.<br/>
Audience: GreenCityZen’s customers.<br/>
In fact, the existing way of getting your HummBox data is via our Rest api service via this link http://humm-api-explorer.eu-gb.mybluemix.net/ , you can use the HTTP Get request to have the needed information or via our web application http://humm-application.eu-gb.mybluemix.net/. 
But, in order to make it easier for our customers, we decided to propose a new service ensuring a POST HTTP request. Thus, for customers who want that data will be directly pushed into theirs own servers, they can opt for this functionality.<br/>
Why should I try this new service? <br/>
This new service will directly communicate with your server, so you no more have to do a get request to see your HummBox values. 


## <span style="color: green"> How can I use this functionality? </span>

To benefit from this service, you should have your own service,
In this repository we propose you a node js code for creating a server, you have just to change the host address, and then send to GCZ administers the full URL of your server.
Adding to this, you should select which devices you want to have theirs data in your server by putting the field push_api in your web application to ON.
