/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        bind_navigation();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

var bind_navigation = function(){
    var navbar = $('.nav-bar');
    navbar.append('<button type="button" class="btn btn-default home_link">Home</button>');
    navbar.append('<button type="button" class="btn btn-default map_link">Map</button>');
    var exhibits = '<div class="btn-group" role="group">'+
        '  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">'+
        'Exhibits'+
        '    <span class="caret"></span>'+
        '  </button>'+
        '  <ul class="dropdown-menu" role="menu" style="width: 200px;">'+
        '    <li><span class="overview_link">Overview</span></li>'+
        '    <li><span class="savanna_link">African Savanna</span></li>'+
        '    <li><span class="aquarium_link">African Aquarium</span></li>'+
        '    <li><span class="namerica_link">North America</span></li>'+
        '    <li><span class="herpetarium_link">North American Herpetarium</span></li>'+
        '    <li><span class="samerica_link">South America</span></li>'+
        '    <li><span class="wildbird_link">Wild Bird Walkabout</span></li>'+
        '  </ul>'+
        '</div>';
    navbar.append(exhibits);
    navbar.append('<button type="button" class="btn btn-default membership_link">Membership</button>');
    navbar.append('<button type="button" class="btn btn-default about_link">About</button>');

    $('.map_link').click(function(){
        window.location = 'map.html';
    });
    $('.home_link').click(function(){
        window.location = 'index.html';
    });
    $('.membership_link').click(function(){
        window.location = 'membership.html';
    });
    $('.about_link').click(function(){
        window.location = 'about.html';
    });
    $('.overview_link').click(function(){
        window.location = 'exhibit_overview.html';
    });
    $('.savanna_link').click(function(){
        window.location = 'exhibit_savanna.html';
    });
    $('.aquarium_link').click(function(){
        window.location = 'exhibit_aquarium.html';
    });
    $('.namerica_link').click(function(){
        window.location = 'exhibit_namerica.html';
    });
    $('.herpetarium_link').click(function(){
        window.location = 'exhibit_herpetarium.html';
    });
    $('.samerica_link').click(function(){
        window.location = 'exhibit_samerica.html';
    });
    $('.wildbird_link').click(function(){
        window.location = 'exhibit_wildbird.html';
    });
};

var local_news = {"events":[
    {"title":"Penguin Feeding",
        "dates":"Every day at 2:00 p.m.",
        "description":"Come see our penguins being fed."},
    {"title":"Snow Foolin'",
        "dates":"January 31, 1:30-3:30 p.m.",
        "description":"Brrrr...Stop by the African Huts for some really cool wintery crafts."},
    {"title":"My Heart Belongs To The Zoo",
        "dates":"February 14, 1:30-3:30 p.m.",
        "description":"Come on over to the African Huts and we'll help you create some special critter Valentines to give or keep."},
    {"title":"Poison Jungle Safari",
        "dates":"March 21, Noon-4:00 p.m.",
        "description":"It's time for our ninth annual poison safari. This event is held in cooperation with the North Texas Poison Control Center of Dallas. Booths throughout the zoo will alert adults and children to possible poison dangers in the home."},
    {"title":"Earth Day",
        "dates":"April 18, 1:00-4:00 p.m.",
        "description":"Join us as we &quot;party for the planet.&quot; The zoo joins local organizations to help all of us learn how we can make every day Earth Day."},
]};

var get_news = function () {
    $('.news-list').html('Loading...');
    // do ajax to retrieve
    $('.news-list').empty();
    $.each(local_news.events, function(idx, item){
        var itemtext = '<div class="news-title">'+item.title+'</div>';
        itemtext += '<div class="news-dates">'+item.dates+'</div>';
        itemtext += '<div class="news-description">'+item.description+'</div>';
        $('.news-list').append('<li class="list-group-item">'+itemtext+'</li>');
    });
};
