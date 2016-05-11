var schedule = require('node-schedule');
var shoes = require('../model/shoes.js');
var http = require('http');

var rule = new schedule.RecurrenceRule();
rule.hour = 0;

function scheduler(){
    
 

    this.getShoes = function (){

        var counter = 0;
        
        var options = {
            host: 'www.store.nike.com',
            path: '/html-services/gridwallData?country=US&lang_locale=en_US&gridwallPath=mens-clearance-shoes/47Z7puZoi3&sortOrder=publishdate|desc'
        };
        
        var callback = function (data) {
            console.log(data);
        }

        http.request(options, callback).end();
    }

    this.startSchedule = function () { 
      
        schedule.scheduleJob(rule, function () {
            
            console.log(this);
    
        });
    }; 
}                                                                                    

module.exports = new scheduler();
